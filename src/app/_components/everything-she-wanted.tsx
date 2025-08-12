import Image from "next/image";

import MoodBoard from "./ESW Mood board_20241115_080943_0000.png";
import Cover from "./ESWCover.png";
import { Button } from "@/components/ui/button";
import { THE_NILE_URL } from "./stockists";

export function EverythingSheWanted() {
  return (
    <div className="flex flex-col gap-4 my-8">
      <h2 className="font-script text-4xl">Everything She Wanted</h2>
      <h3 className="uppercase font-serif text-3xl">March 21 2025</h3>
      <figure>
        <Image src={Cover} alt="Cover for Everything She Wanted" />
        <figcaption className="italic text-slate-500 text-center">
          ISBN 9780473731380
        </figcaption>
      </figure>

      <p>
        Madeline is on the lookout for love in her final year of university when
        she meets Daniel. Attractive, funny, charming, and a musician just like
        her. He seems to understand her in a way no one has before. Could he be
        everything she has ever wanted in a boyfriend?
      </p>
      <p>
        It doesn&apos;t take long before something forms between them — but what
        that is, Madeline isn&apos;t sure. As Madeline navigates the rhythms of
        her connection with Daniel, she also has life&apos;s ups and downs to
        face.
      </p>
      <p>
        Study stress, family dramas, loss, and friendships both new and old
        press in on Madeline. It&apos;s up to her to find who she wants to be —
        and who she wants to be with — before stepping into the big world
        beyond.
      </p>
      <p className="font-bold">
        Will Madeline be able to deal with the insecurities that have been
        brought to the surface? Is she destined to remain stuck in toxic
        relationships or will she find the strength within herself to change her
        situation?
      </p>
      <div className="flex justify-center">
        <Button asChild>
          <a href={THE_NILE_URL} target="_blank" rel="noopener noreferrer">
            Buy Online
          </a>
        </Button>
      </div>
      <Image src={MoodBoard} alt="Mood board for Everything She Wanted" />
    </div>
  );
}
