"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabaseClient } from "libs/supabaseClient";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-12">
      <h1 className="text-3xl mb-10">Login</h1>
      <div className="max-w-[300px] w-full">
        <Auth
          supabaseClient={supabaseClient}
          view="magic_link"
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          showLinks={false}
          providers={[]}
          redirectTo={`${location.origin}/api/auth`}
          magicLink={true}
          otpType="magiclink"
        />
      </div>
    </main>
  );
}
