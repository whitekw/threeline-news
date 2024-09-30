import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  const categories = [
    {name: "전체", href: "/"},
    {name: "정치", href: "/"},
    {name: "경제", href: "/"},
    {name: "사회", href: "/"},
    {name: "생활/문화", href: "/"},
    {name: "IT/과학", href: "/"},
    {name: "세계", href: "/"}
  ];

  return (
    <nav className={styles.nav}>
      <ul>
        {categories.map((item, index) => {
          return (
            <li>
              <Link key={index} href={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;