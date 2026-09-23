import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    year: z.coerce.number(),
    cover: z.string(),
    featured: z.boolean().default(false),
    role: z.string().optional(),
    tools: z.string().optional()
  })
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    category: z.string().default('Journal')
  })
});

export const collections = { works, posts };
