import Image from "next/image";
import nzsaLogo from "./nzsa-logo.png";

export function NzsaLogo() {
  return (
    <div className="flex justify-center md:order-1 md:col-span-2">
      <a href="https://authors.org.nz/author/martinette/">
        <Image
          src={nzsaLogo}
          alt="New Zealand Society of Authors Logo"
          className="cursor-pointer"
          width={200}
          height={200}
        />
      </a>
    </div>
  );
}
