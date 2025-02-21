import Image from "next/image";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { SignupForm } from "./_components/singup-form";
import { Toaster } from "@/components/ui/sonner";
import { Event } from "./_components/event";
import { EverythingSheWanted } from "./_components/everything-she-wanted";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="grid grid-cols-layout [&>*]:col-start-2 gap-4 max-w-full">
        <Hero />
      </div>

      <div className="grid grid-cols-layout [&>*]:col-start-2 gap-4 max-w-full">
        <Event />
      </div>

      <div className="grid grid-cols-layout [&>*]:col-start-2 gap-4 max-w-full">
        <EverythingSheWanted />
      </div>

      <div className="grid grid-cols-layout [&>*]:col-start-2 gap-4 max-w-full py-16">
        <SignupForm />
      </div>

      <Toaster />
    </main>
  );
}
