import { supabaseServer } from "libs/supabaseServer";
import { revalidatePath } from "next/cache";

export default async function NewTodo() {
  const { data: userData } = await supabaseServer.auth.getUser();
  const { user } = userData;

  const addTodo = async (formData: FormData) => {
    "use server";

    const task = formData.get("task") as string;

    await supabaseServer.from("todos").insert({ task, user_id: user!.id });
    revalidatePath("/todos");
  };

  return (
    <form action={addTodo} className="flex gap-2">
      <input
        type="text"
        id="task"
        name="task"
        placeholder="Add todo"
        className="p-2 border rounded flex-1 text-black"
      />
      <button type="submit" className="px-6 text-black rounded bg-green-400">
        Submit
      </button>
    </form>
  );
}
