import { useState } from "react";
import { useEffect } from "react";

interface Data {
  name: string;
  img: string;
  information: {
    strength: number;
    lives: number;
  };
  text: string;
}

interface DataList {
  content: Data[];
}

const UseFetch = (url: string) => {
  const [data, setData] = useState<DataList | undefined>(undefined);

  useEffect(() => {
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  });

  return [data];
};

export default UseFetch;
