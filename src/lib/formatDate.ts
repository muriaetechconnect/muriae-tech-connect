const DATE_FORMATTER = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'America/Sao_Paulo',
});

const TIME_FORMATTER = new Intl.DateTimeFormat('pt-BR', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'America/Sao_Paulo',
});

const DAY_KEY_FORMATTER = new Intl.DateTimeFormat('en-CA', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'America/Sao_Paulo',
});

export function formatEventDate(dateStart: string, dateEnd: string): string {
  const start = new Date(dateStart);
  const end = new Date(dateEnd);
  return DAY_KEY_FORMATTER.format(start) === DAY_KEY_FORMATTER.format(end)
    ? DATE_FORMATTER.format(start)
    : `${DATE_FORMATTER.format(start)} a ${DATE_FORMATTER.format(end)}`;
}

export function formatEventTime(dateStart: string, dateEnd: string): string {
  return `${TIME_FORMATTER.format(new Date(dateStart))} às ${TIME_FORMATTER.format(new Date(dateEnd))}`;
}

export function formatScheduleItemTime(timeStart: string, timeEnd: string): string {
  return `${TIME_FORMATTER.format(new Date(timeStart))} - ${TIME_FORMATTER.format(new Date(timeEnd))}`;
}