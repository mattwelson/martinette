import Image from "next/image";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="grid grid-cols-layout [&>*]:col-start-2 gap-4 max-w-full">
        <Hero />
      </div>
    </main>
  );
}
