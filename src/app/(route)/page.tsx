import styles from "./page.module.css";
import MainContent from "@app/_components/mainContent/MainContent";
import NewsItem from "@app/_components/newsItem/NewsItem";

const App = async () => {
  const data = await (await fetch("http://localhost:3000/api/article/list")).json();

  return (
    <MainContent>
      {data.map((article: {article_id: number, title: string, origin_created_at: string}) => {
        return (
          <NewsItem
            key={article.article_id}
            id={article.article_id}
            title={article.title}
            date={article.origin_created_at}
          />
        )
      })}
    </MainContent>
  );
}

export default App;