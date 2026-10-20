import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
  schema: z.object({
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    example: z.boolean().default(false),
    name: z.string().min(1),
    brand: z.string().min(1),
    partNumbers: z.array(z.string().min(1)).min(1),
    productType: z.string().min(1),
    description: z.string().min(1),
    applications: z.array(z.string().min(1)).min(1),
    condition: z.enum(['nuevo', 'reconstruido', 'remanufacturado', 'usado']),
    availability: z.string().min(1),
    quoteInstructions: z.string().min(1),
    published: z.boolean().default(false),
    image: z.string().optional(),
  }).superRefine((product, context) => {
    if (product.published && product.example) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['published'],
        message: 'Un producto de ejemplo no puede publicarse.',
      });
    }

    if (product.published && product.applications.some((application) => /no confirmad/i.test(application))) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['applications'],
        message: 'Las aplicaciones publicadas deben estar confirmadas.',
      });
    }
  }),
});

export const collections = { productos };
