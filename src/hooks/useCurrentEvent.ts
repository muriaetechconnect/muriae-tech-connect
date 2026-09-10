import { useEffect, useMemo, useState } from 'react';
import type { TechEvent } from '../types/event';
import { resolveCurrentEvent } from '../lib/resolveCurrentEvent';

const REFRESH_INTERVAL_MS = 60_000;

export function useCurrentEvent(events: TechEvent[]) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return useMemo(() => resolveCurrentEvent(events, now), [events, now]);
}
