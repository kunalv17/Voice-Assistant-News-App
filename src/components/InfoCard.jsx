import React from "react";

const InfoCard = ({ infoCard, i }) => {
  return (
    <div className='items-center justify-center rounded-xl p-4 flex flex-col w-[280px] h-[300px] gap-8 bg-[#3e3f4b] text-white'>
      <h2 className="self-center text-2xl ">{infoCard?.title}</h2>
      {infoCard?.info && (<div className="text-center text-sm"><strong>{infoCard?.title?.split(' ')[2]} : <br/></strong>{infoCard?.info}</div>)}
      <div className="text-sm text-center"><strong>Try saying : <br/> </strong>  {infoCard?.text}</div>
    </div>
  );
};

export default InfoCard;
