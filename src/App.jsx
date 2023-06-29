import React, { useEffect, useState } from "react";

function App() {
  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=ar&apiKey=${NEWS_API_KEY}`
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
      <h1>News Feed</h1>
      {articles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <img src={article.urlToImage} alt="Article" />
        </div>
      ))}
    </div>
  );
}

export default App;
