import Article from "@app/_components/article/Article";

const getData = async (category: number) => {
  const response = await fetch(`http://localhost:3000/api/article/list?category=${category}`);
  if (!response.ok) throw Error("Failed to fetch data");
  return response.json();
};

const ArticleList = async ({category}: {category: number}) => {
  const data = await getData(category);

  return (
    <>
      {data.map((article: {article_id: number, category: number, title: string, image_url: string, origin_created_at: string}) => {
        return (
          <Article
            key={article.article_id}
            id={article.article_id}
            category={article.category}
            title={article.title}
            image_url={article.image_url}
            date={article.origin_created_at}
          />
        )
      })}
    </>
  );
};

export default ArticleList;