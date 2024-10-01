import styles from "./ArticlePage.module.css";
import MainContent from "@app/_components/mainContent/MainContent";

const getData = async (id: number) => {
  const response = await fetch(`http://localhost:3000/api/article/detail?article_id=${id}`);
  if (!response.ok) throw Error("Failed to fetch data");
  return response.json();
}

const ArticlePage = async ({params}: {params: {id: number}}) => {
  const data = (await getData(params.id))[0];

  return (
    <MainContent>
      <div className={styles.header}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.date}>작성일 : 2024.09.30 15:30</div>
      </div>
      <img className={styles.image} src={data.image_url}/>

      <ol className={styles.newsContent}>
        <li>{data.content.split("\n")[0]}</li>
        <li>{data.content.split("\n")[1]}</li>
        <li>{data.content.split("\n")[2]}</li>
      </ol>

      <div className={styles.menu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </MainContent>
  );
};

export default ArticlePage;