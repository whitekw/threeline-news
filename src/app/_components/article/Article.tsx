import Link from "next/link";
import styles from "./Article.module.css";
import Image from "next/image";

const NewsItem = (
  {id, category, title, image_url, date}:
  {id: number, category: number, title: string, image_url: string, date: string}) => {
  return (
    <article className={styles.newsItem}>
      <Link href={`/article/${id}`}>
        <img className={styles.thumbnail} src={image_url}></img>
      </Link>
      <div className={styles.info}>
        <Link href={`/article/${id}`} className={styles.title}>{title}</Link>
        <div className={styles.bottom}>
          <div className={styles.comment}>
            <div className={styles.icon}/>
            <span>9</span>
          </div>

          <span className={styles.date}>{date}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsItem;