import React, { useState, useEffect } from "react";

import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards";

import alanLogo from "./assets/alan-logo-full.png";

const alanKey =
  "65c02bca8c6f702faaced065c86c98b22e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const [aboutSection, setAboutSection] = useState(false);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
          console.log(articles);
        } else if (command === "highlight") {
          setActiveArticle((prev) => prev + 1);
        } else if (command === "open") {
          window.open(articles[number].url, "_blank");
          alanBtn.play("opening");
        }
      },
    });
  }, []);

  const handleHomeClick = () => {
    setNewsArticles([]);
    setAboutSection(false);
  };

  const handleAboutClick = () => {
    setAboutSection(true);
  }

  return (
    <div>
      <div className=" h-20 mx-16 flex items-center justify-between">
        <div className="w-48 cursor-pointer">
          <img className="" src={alanLogo} alt="logo" />
        </div>
        <div className="flex gap-8">
          <button onClick={handleHomeClick}>Home</button>
          <button onClick={handleAboutClick}>About</button>
        </div>
      </div>
      {aboutSection ? (
        <div className="p-12 items-center flex flex-col  h-[calc(100vh-80px)] bg-[#343541]">
          <h1 className="text-white font-bold text-3xl mb-10" >About</h1>
          <p className="text-white text-center">
            This news app is made by Kunal, Piyush, Vedant as a major project.
            This app is built using React for frontend and Alan AI for handling
            the commands. The goal of this app is to provide a user-friendly
            platform that keeps you updated with the latest news and events
            happening around the world.
          </p>
        </div>
      ) : (
        <NewsCards
          articles={newsArticles}
          activeArticle={activeArticle}
          aboutSection={aboutSection}
        />
      )}
    </div>
  );
};

export default App;
