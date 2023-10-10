"use client";
import Image from "next/image";
import cardstyle from "./page.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("use effect");
  }, []);
  //Hvis man sætter 'count' ind i den tomme array, vil den console.log hver gang man trykker på knappen.

  return (
    <>
      <section id={cardstyle.cardContainer}>
        <div id={cardstyle.card}></div>
      </section>
    </>
  );
}
