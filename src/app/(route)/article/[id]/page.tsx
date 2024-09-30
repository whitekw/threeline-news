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
      <h1 className={styles.title}>{data.title}</h1>
      <img className={styles.image} src={data.image_url}/>
    </MainContent>
  );
};

export default ArticlePage;