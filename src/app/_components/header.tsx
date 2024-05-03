import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

export function Header() {
  return (
    <header className="grid grid-cols-layout [&>*]:col-start-2 gap-4  max-w-full">
      <div className="px-4 py-4 text-primary flex justify-between items-center">
        <h2 className="text-3xl font-serif font-extrabold">
          Martinette Williams
        </h2>
        <div className="flex gap-x-4 text-foreground">
          <a
            href="https://www.instagram.com/martinettewrites/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>
    </header>
  );
}
