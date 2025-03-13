import Image from "next/image";

import martz from "./martz.jpg";
import { NzsaLogo } from "./nzsa-logo";

export function Hero() {
  return (
    <div className="!col-start-1 col-span-3 max-w-3xl mx-auto grid justify-center items-center my-8 md:my-16 md:grid-cols-2 gap-12">
      <div className="flex justify-center md:flex-1">
        <Image
          src={martz}
          alt="Picture of Martinette"
          sizes="24rem"
          className="w-96"
        />
      </div>
      <NzsaLogo />
      <div className="flex-1">
        <h2 className="font-script text-4xl lg:text-6xl font-medium my-4 md:indent-6">
          Meet Martinette
        </h2>
        <p className="max-w-lg text-xl">
          Martinette is a graduate from the University of Otago and has spent
          the last six years raising her two children alongside her husband in
          Dunedin, New Zealand. She began working on her debut novel{" "}
          <span className="font-bold">&apos;Everything She Wanted&apos;,</span>{" "}
          in September 2022 and it&apos;s due for release in March 2025. Also an
          avid songwriter, her novel includes original music which you can
          stream online.
        </p>
      </div>
    </div>
  );
}
