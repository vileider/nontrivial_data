"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import LinePlot from "./components.js/LinePlot";

export default function Home() {
  const [oilArr, setOilArr] = useState([]);
  const [goldArr, setGoldArr] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/oil")
      .then((res) => res.json())
      .then((data) => setOilArr(JSON.parse(data)))
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/api/gold")
      .then((res) => res.json())
      .then((data) => setGoldArr(JSON.parse(data)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className={styles.main}>
      <LinePlot />
    </main>
  );
}
