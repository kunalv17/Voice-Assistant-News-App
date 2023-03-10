import { width } from "@mui/system";
import React, { useState, useEffect, createRef } from "react";
import Img from "./Img";

const NewsCard = ({ article, i, activeArticle }) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50)
  useEffect(() => {
    setElRefs((refs) => Array(20).fill().map((_,j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if (i=== activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle])
    }
  },[i, activeArticle, elRefs])


  return (
    <div ref={elRefs[i]} className="bg-white rounded-xl shadow-black/40 shadow-lg">
      {article && (
        <div className="relative flex flex-col w-[280px] h-[365px] overflow-hidden mt-5 rounded-xl">
          <div className="flex flex-col">
            <div className="w-full">
              <Img src={article?.urlToImage} />
            </div>
            <div className=" flex justify-between text-xs mb-2 px-4 w-[280px] top-36 text-gray-500">
              <span className="">
                {new Date(article?.publishedAt).toDateString()}
              </span>
              <span className="rounded-xl">{article?.source?.name}</span>
            </div>
            <div className="flex-col flex px-4">
              <h1 className="font-bold  text-lg line-clamp-3 leading-5 mb-2">
                {article?.title}
              </h1>
              <p className="text-xs overflow-hidden line-clamp-4 leading-4 text-gray-600">
                {article?.description}
              </p>
            </div>
          </div>
          <div className="flex justify-between w-[280px] px-4 bottom-4 absolute z-10">
            <button className="text-sm text-black font-medium">
              <a href={article?.url} target="_blank">Learn more</a>
            </button>
            <button className="text-black text-sm font-medium">{i + 1}</button>
          </div>
          <div
            className={`absolute z-10 w-[280px] bottom-0 h-[8px] bg-blue-900 ${
              i === activeArticle ? "block" : "hidden"
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default NewsCard;

//: { publishedAt, source, title, description, url, urlToImage },
