import Image from "next/image";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { SignupForm } from "./_components/singup-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="grid grid-cols-layout [&>*]:col-start-2 gap-4 max-w-full bg-hero bg-repeat text-white bg-slate-800">
        <Hero />
      </div>

      <div className="grid grid-cols-layout [&>*]:col-start-2 gap-4 max-w-full bg-background text-foreground">
        <SignupForm />
      </div>
    </main>
  );
}
