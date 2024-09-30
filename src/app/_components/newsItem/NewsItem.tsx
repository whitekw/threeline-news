import Link from "next/link";
import styles from "./NewsItem.module.css";
import Image from "next/image";

const NewsItem = ({id, title}: {id: number, title: string}) => {
  return (
    <article className={styles.newsItem}>
      <Link href={`/article/${id}`}>
        <img className={styles.thumbnail} src="https://ssl.pstatic.net/static/newsstand/2024/0924/mbc/111233/009.jpg"></img>
      </Link>
      <div className={styles.info}>
        <Link href={`/article/${id}`} className={styles.title}>{title}</Link>
        <div>
          <div className={styles.icon}/>
          <span>9</span>
        </div>
      </div>
    </article>
  );
};

export default NewsItem;