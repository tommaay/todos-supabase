import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "types/db";
import { cookies } from "next/headers";

export const supabaseServer = createServerComponentClient<Database>({ cookies });
