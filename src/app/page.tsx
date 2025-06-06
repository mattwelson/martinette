import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { SignupForm } from "./_components/singup-form";
import { Toaster } from "@/components/ui/sonner";
import { EverythingSheWanted } from "./_components/everything-she-wanted";
import { Stockists } from "./_components/stockists";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="grid grid-cols-layout [&>*]:col-start-2 gap-4 max-w-full">
        <Hero />
      </div>

      <div className="grid grid-cols-layout [&>*]:col-start-2 gap-4 max-w-full">
        <EverythingSheWanted />
      </div>

      <div className="grid grid-cols-layout [&>*]:col-start-2 gap-4 max-w-full py-16">
        <Stockists />
      </div>

      <div className="grid grid-cols-layout [&>*]:col-start-2 gap-4 max-w-full py-16 mb-32">
        <SignupForm />
      </div>

      <Toaster />
    </main>
  );
}
