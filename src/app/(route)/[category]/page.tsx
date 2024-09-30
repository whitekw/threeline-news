import MainContent from "@app/_components/mainContent/MainContent";
import ArticleList from "@app/_components/articleList/ArticleList";

const CategoryPage = async ({params}: { params: { category: number }}) => {
  return (
    <MainContent>
      <ArticleList category={params.category}/>
    </MainContent>
  );
}

export default CategoryPage;