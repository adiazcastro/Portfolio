import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['blog', 'project']).default('blog'),
    featured: z.boolean().default(false),
    tags: z.array(z.enum(['technology', 'design', 'consulting', 'AI', 'experience'])).default([]),
  }),
});

export const collections = { blog };