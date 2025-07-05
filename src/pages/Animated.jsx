import React from 'react';

const Card = () => {
  return (
    <div className="relative w-[300px] h-[250px] rounded-[10px] p-[1px] bg-[radial-gradient(circle_230px_at_0%_0%,#ffffff,#0c0d0d)]">
      <div className="absolute w-[10px] aspect-square bg-blue-400 rounded-full shadow-[0_0_10px_#ffffff] right-[10%] top-[10%] z-20 animate-moveDot" />

      <div className="relative w-full h-full rounded-[9px] border border-[#202222] bg-[radial-gradient(circle_280px_at_0%_0%,#444444,#0c0d0d)] flex flex-col justify-center items-center text-white z-10">

        <div className="absolute w-[220px] h-[45px] rounded-full bg-[#c7c7c7] opacity-40 shadow-[0_0_50px_#fff] blur-[10px] rotate-[40deg] origin-[10%] top-0 left-0" />

        <div className="font-bold text-2xl bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
          Add Post
        </div>

        <div className="absolute top-[10%] left-0 w-full h-px bg-gradient-to-r from-[#888888] via-[#888888] to-[#1d1f1f]" />
        <div className="absolute bottom-[10%] left-0 w-full h-px bg-[#2c2c2c]" />
        <div className="absolute top-0 left-[10%] h-full w-px bg-gradient-to-b from-[#747474] via-[#747474] to-[#222424]" />
        <div className="absolute top-0 right-[10%] h-full w-px bg-[#2c2c2c]" />

      </div>
    </div>
  );
};

export default Card;
