import { supabaseServer } from "libs/supabaseServer";
import Todo from "components/Todo";
import NewTodo from "components/NewTodo";

export default async function Todos() {
  const { data: todos } = await supabaseServer.from("todos").select();

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-12">
      <h1 className="text-3xl my-10">Todos</h1>

      <div className="max-w-[600px] w-full">
        <div className="mb-10">
          <NewTodo />
        </div>

        {todos?.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </main>
  );
}
