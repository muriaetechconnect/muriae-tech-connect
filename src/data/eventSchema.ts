import { z } from 'zod';

const isoDateTime = z.string().datetime({ offset: true });
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use kebab-case (ex.: meu-evento-2026).');

export const eventSchema = z.object({
  id: z.string().min(1),
  slug,
  name: z.string().min(1),
  subtitle: z.string().optional(),
  niche: z.enum(['lab', 'educacao', 'para-elas', 'saude', 'start']),
  dateStart: isoDateTime,
  dateEnd: isoDateTime,
  location: z.object({
    name: z.string().min(1),
    address: z.string().min(1),
    geo: z.object({ lat: z.number(), lng: z.number() }),
    photoUrl: z.string(),
  }),
  schedule: z.array(z.object({
    id: z.string().min(1),
    stage: z.enum(['credenciamento', 'abertura', 'palestra', 'painel', 'case', 'coffee-break', 'encerramento']),
    title: z.string().min(1),
    timeStart: isoDateTime,
    timeEnd: isoDateTime,
    highlights: z.array(z.string()).optional(),
    speakerIds: z.array(z.string()).optional(),
  })),
  speakers: z.array(z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    role: z.string(),
    org: z.string(),
    orgUrl: z.string().optional(),
    photoUrl: z.string().optional(),
  })),
  status: z.enum(['draft', 'published']),
}).refine((event) => new Date(event.dateEnd).getTime() > new Date(event.dateStart).getTime(), {
  message: 'dateEnd deve ser posterior a dateStart.',
  path: ['dateEnd'],
});

export const eventsSchema = z.array(eventSchema);
export type EventFormData = z.infer<typeof eventSchema>;
