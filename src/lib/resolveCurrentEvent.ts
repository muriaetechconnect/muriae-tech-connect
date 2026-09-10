import type { ResolvedEvent, TechEvent } from '../types/event';

const DAY_IN_MS = 86_400_000;

export function resolveCurrentEvent(
  events: TechEvent[],
  now: Date = new Date(),
): ResolvedEvent {
  const publishedEvents = events.filter((event) => event.status === 'published');
  const liveEvent = publishedEvents.find((event) => {
    const start = new Date(event.dateStart).getTime();
    const end = new Date(event.dateEnd).getTime();
    const current = now.getTime();
    return start <= current && current <= end;
  });

  if (liveEvent) {
    return { event: liveEvent, status: 'live' };
  }

  const upcomingEvent = publishedEvents
    .filter((event) => new Date(event.dateStart).getTime() > now.getTime())
    .sort((first, second) => (
      new Date(first.dateStart).getTime() - new Date(second.dateStart).getTime()
    ))[0];

  if (upcomingEvent) {
    return { event: upcomingEvent, status: 'upcoming' };
  }

  const pastEvent = publishedEvents
    .filter((event) => new Date(event.dateEnd).getTime() < now.getTime())
    .sort((first, second) => (
      new Date(second.dateEnd).getTime() - new Date(first.dateEnd).getTime()
    ))[0];

  if (!pastEvent) {
    return { event: null, status: 'idle' };
  }

  const elapsedSinceEnd = now.getTime() - new Date(pastEvent.dateEnd).getTime();
  return elapsedSinceEnd <= DAY_IN_MS
    ? { event: pastEvent, status: 'past' }
    : { event: null, status: 'idle' };
}
