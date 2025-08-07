import { z } from 'zod';

export const CMSPCategorySchema = z.enum([
  'broker',
  'dealer',
  'advisor',
  'custodian',
]);

export const AddressSchema = z.object({
  street: z.string().optional(),
  building: z.string().optional(),
  floor: z.string().optional(),
  officeNumber: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});

export const CMSPSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.array(CMSPCategorySchema),
  licensedDate: z.string(),
  status: z.enum(['active', 'inactive', 'pending']),
  overview: z.string(),
  mission: z.string().optional(),
  intialCapital: z.string().optional(),
  employees: z.string().optional(),
  address: AddressSchema,
  branchCount: z.number().default(1),
  website: z.url().optional(),
  phone: z.array(z.string()).optional(),
  email: z.email().optional(),
  socialMediaLinks: z.array(z.url()).optional(),
  services: z.array(z.string()),
  regulatoryBody: z.string().default('Ethiopian Capital Markets Authority (ECMA)'),
  licenseNumber: z.string().optional(),
});

export type CMSP = z.infer<typeof CMSPSchema>;
export type CMSPCategory = z.infer<typeof CMSPCategorySchema>;

export const FilterSchema = z.object({
  category: CMSPCategorySchema.optional(),
  search: z.string().optional(),
  status: z.enum(['active', 'inactive', 'pending']).optional(),
});

export type Filter = z.infer<typeof FilterSchema>;