import React, { useState, useEffect } from "react";
import TwitterTimeLine from './Twitter';

const Nav = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const xhr = new XMLHttpRequest();
      const url = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=YOUR_API_KEY";
      xhr.open("GET", url, true);

      xhr.onload = () => {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          setNews(data.articles.slice(0, 5));
        } else {
          console.log(xhr.statusText);
        }
      };

      xhr.onerror = () => {
        console.log(xhr.statusText);
      };

      xhr.send();
    };
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <div className="nav-left">
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="news">
          {news.map((article) => (
            <div key={article.title}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <span className="dot"></span> {article.title}
              </a>
            </div>
          ))}
        </div>
      </div>
      <TwitterTimeLine />
    </nav>
  );
};

export default Nav;
