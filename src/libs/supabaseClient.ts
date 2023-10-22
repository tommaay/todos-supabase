import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "types/db";

export const supabaseClient = createClientComponentClient<Database>();
