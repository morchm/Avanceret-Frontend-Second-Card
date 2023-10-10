import Link from "next/link";
import stylenav from "./mynav.module.scss";
import { useEffect } from "react";

const MyNav = () => {
  
  // async function enemiesArray(){
  //   const res = await fetch('json/enemies.json');
  //   const data = await res.json();
  //   return data.results
  // }

  
  const enemiesArray: string[] = ["Alien Scum", "Death Smokie", "Ping Pang"];

  
  return (
    <>
      <nav id={stylenav.menuContainer}>
        <ul>
          {enemiesArray.map((item, index) => (
            <li key={index}>
              <Link
                href={{ pathname: "/enemies", query: { id: index } }}
                >
                {item}

              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );

          

};

export default MyNav;
