"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const scrollY = useRef<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  const onScroll = (e: Event) => {
    if (window.scrollY <= 0) {
      setScroll(false);
      return;
    } else {
      setScroll(true);
    }

    if (window.scrollY > scrollY.current) {
      setScroll(true);
    } else {
      setScroll(false);
    }

    scrollY.current = window.scrollY;
  };

  return (
    <>
      <header className={`${styles.header} ${scroll && styles.scroll}`}>
        <div>
          <Link href={"/"}>세줄뉴스</Link>
        </div>
      </header>
      <div className={styles.headerArea}/>
    </>
  );
}

export default Header;