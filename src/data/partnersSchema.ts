import { z } from 'zod';

export const partnerSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  tier: z.enum(['principal', 'secundario']),
  logo: z.string().min(1),
  shellClassName: z.string().optional(),
});

export const partnersSchema = z.array(partnerSchema);
export type PartnerFormData = z.infer<typeof partnerSchema>;
