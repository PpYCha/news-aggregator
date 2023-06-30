import React from "react";

const Nav = () => {
  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const navigationList = [
    {
      name: "US",
      url: `https://newsapi.org/v2/top-headlines?country=us&country=ph&apiKey=${NEWS_API_KEY}`,
    },
    {
      name: "Business",
      url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`,
    },
    {
      name: "Entertainment",
      url: `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${NEWS_API_KEY}`,
    },
    {
      name: "General",
      url: `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${NEWS_API_KEY}`,
    },
    {
      name: "Health",
      url: `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${NEWS_API_KEY}`,
    },
    {
      name: "Science",
      url: `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${NEWS_API_KEY}`,
    },
    {
      name: "Sports",
      url: `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${NEWS_API_KEY}`,
    },
    {
      name: "Technology",
      url: `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${NEWS_API_KEY}`,
    },
  ];

  return (
    <div>
      <nav className="flex sm:justify-center space-x-4 bg-slate-700 p-2">
        {navigationList.map((item) => (
          <a
            key={item.name}
            href={item.url}
            className="rounded-lg px-3 py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
