// @/src/server/context.ts
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { db } from '@/server/db'

export async function createContext(opts?: trpcNext.CreateNextContextOptions) {

return { db };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
