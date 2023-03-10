import React from "react";
import NewsCard from "./NewsCard";
import InfoCard from "./InfoCard";

const infoCards = [
  {
    title: "Latest News",
    text: "Give me the latest news"
  },
  {
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
  {
    title: "Opening the Article ",
    info: "Specific articles can be opened to further reading ",
    text: "'Open article number' followed by article number.",
  },
  {
    title: "Back to Home",
    info: "Home page can be accessed using command for help",
    text: "home or back or help",
  },
];

const NewsCards = ({ articles, activeArticle, aboutSection }) => {
  
  if (!articles?.length) {
    return (
      <div className="p-8 bg-[#343541] justify-center flex min-h-[calc(100vh-80px)]">
        <div className="justify-evenly items-center flex flex-row flex-wrap gap-8">
          {infoCards?.map((infoCard, i) => (
            <div key={i} className="">
              <InfoCard infoCard={infoCard} i={i} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-[#3435417c] min-h-[calc(100vh-80px)]">
      <div className="justify-evenly flex flex-wrap gap-8">
        {articles?.map((article, i) => (
          <div key={i} className="">
            <NewsCard article={article} i={i} activeArticle={activeArticle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCards;

