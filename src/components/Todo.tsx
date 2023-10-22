"use client";

import { supabaseClient } from "@/libs/supabaseClient";
import { useRouter } from "next/navigation";

type Todo = {
  id: number;
  inserted_at: string;
  is_complete: boolean | null;
  task: string | null;
  user_id: string;
};

export default function Todo({ todo }: { todo: Todo }) {
  const router = useRouter();

  const toggleTodo = async (todo: Todo) => {
    await supabaseClient
      .from("todos")
      .update({
        ...todo,
        is_complete: !todo.is_complete,
      })
      .eq("id", todo.id);

    router.refresh();
  };

  const deleteTodo = async (id: number) => {
    await supabaseClient.from("todos").delete().eq("id", id);
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <p
        key={todo.id}
        className={`text-xl text-white cursor-pointer ${todo.is_complete ? "line-through" : ""}`}
        onClick={() => toggleTodo(todo)}
      >
        {todo.task}
      </p>

      <p className="text-red-500 cursor-pointer" onClick={() => deleteTodo(todo.id)}>
        X
      </p>
    </div>
  );
}
