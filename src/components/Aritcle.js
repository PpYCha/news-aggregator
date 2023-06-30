import React from "react";

const Aritcle = () => {
  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles);
        console.log(data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {articles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <img src={article.urlToImage} alt="Article" />
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Aritcle;
