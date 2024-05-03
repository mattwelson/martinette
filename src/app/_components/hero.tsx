import Image from "next/image";

import martz from "./martz.jpg";

export function Hero() {
  return (
    <div className="flex justify-center items-center my-8 flex-col md:flex-row gap-12">
      <Image
        src={martz}
        alt="Picture of Martinette"
        sizes="24rem"
        className="w-96 md:w-1/2"
      />
      <div>
        <h2 className="font-serif text-4xl font-bold my-4">Martinette</h2>
        <p className="max-w-lg text-xl">
          Martinette is a graduate from the University of Otago and has spent
          the last six years raising her two children alongside her husband in
          Dunedin, New Zealand. She is currently working on her debut novel{" "}
          <span className="font-bold">&apos;Everything She Wanted&apos;,</span>{" "}
          a coming-of-age story set in Dunedin in the year 2012/2013 and based
          on her own experiences. Also an avid songwriter, her novel includes
          original music which you can stream online.
        </p>
      </div>
    </div>
  );
}
