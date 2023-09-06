import { router } from "./trpc";
import { postRouter } from "./router/post";
import { authRouter } from "./router/auth";

export const appRouter = router({
  post: postRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
