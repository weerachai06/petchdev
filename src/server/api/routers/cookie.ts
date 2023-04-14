import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const cookieRouter = createTRPCRouter({
  setCookie: publicProcedure
    .input(z.object({ mode: z.enum(['dark', 'light']) }))
    .mutation(({ input, ctx}) => {
      if(!input.mode){
        ctx.res.status(400)
      }
      ctx.res.setHeader('Set-Cookie', `theme=${input.mode}`)
      return {
        theme: input.mode,
      };
    }),
  getCookie: publicProcedure
    .query(({ ctx }) => {
      if(!('theme' in ctx.req.cookies)) {
        ctx.res.status(404)
      }
      return {
        theme: ctx.req?.cookies['theme'] ?? 'light'
      }
    })
});
