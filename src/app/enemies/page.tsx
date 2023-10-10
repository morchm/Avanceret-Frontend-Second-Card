"use client";
import { useEffect, useRef } from "react";
import cardstyle from "../page.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { useSearchParams } from "next/navigation";
import UseFetch from "@/hooks/UseFetch";

const page = () => {
  const [data] = UseFetch("https://enemy.pages.dev/assets/data.json");

  const refObj = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams(); //Laves til en numerisk værdi
  const id = Number(searchParams.get("id"));

  // const data = [
  //   {
  //     name: "Alien Scum",
  //     img: "/assets/black-alien-scum.png",
  //     text: "Ninja Killer dont touch him",
  //   },
  //   {
  //     name: "Death Smokie",
  //     img: "/assets/death-smokie.png",
  //     text: "Ninja Killer dont touch him",
  //   },
  //   {
  //     name: "Ping Pang",
  //     img: "/assets/angry-ping.png",
  //     text: "Just som penguin Shit",
  //   },
  // ];

  useEffect(() => {
    gsap.to(refObj.current, {
      duration: 0.05,
      scaleX: -1,
      alpha: 0,
      repeat: 3,
      yoyo: true,
      onComplete: () => {
        gsap.to(refObj.current, {
          duration: 0.05,
          alpha: 1,
          scaleX: 1,
        });
      },
    });
  }, [id]);

  return (
    <>
      { data &&
        <section ref={refObj} id={cardstyle.cardContainer}>
          <div id={cardstyle.card}>
            <div id={cardstyle.headline}>{data.content[id].name}</div>
            <div id={cardstyle.imagecon}>
              <Image
                src={"/assets/" + data.content[id].img}
                alt="picture"
                width={250}
                height={250}
              />
            </div>
            <div id={cardstyle.content}>{data.content[id].text}</div>
          </div>
        </section>
      }
    </>
  );
};

export default page;
