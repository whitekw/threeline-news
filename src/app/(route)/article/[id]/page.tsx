import styles from "./ArticlePage.module.css";
import MainContent from "@app/_components/mainContent/MainContent";

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/article/detail");

  if (!response.ok) throw Error("Failed to fetch data");

  return response.json();
}

const ArticlePage = async () => {
  const data = await getData();

  return (
    <MainContent>
      <h1 className={styles.title}>{data.title}</h1>
      <img className={styles.image} src="https://ssl.pstatic.net/static/newsstand/2024/0924/mbc/111233/009.jpg"/>
    </MainContent>
  );
};

export default ArticlePage;