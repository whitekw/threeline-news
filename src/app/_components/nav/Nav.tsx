import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  const categories = [
    {name: "전체", href: "/"},
    {name: "정치", href: "/100"},
    {name: "경제", href: "/200"},
    {name: "사회", href: "/300"},
    {name: "생활/문화", href: "/400"},
    {name: "IT/과학", href: "/500"},
    {name: "세계", href: "/600"}
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