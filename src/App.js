import "./App.css";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import ReactAudioPlayer from "react-audio-player";
import React, { useEffect } from "react";

// const pokemon = require(tuyosound);

function App() {
  const Playit = () => {
    const audio = new Audio("tuyo.mp3");
    audio.play();
  };

  return (
    <div 
    onClick={Playit} 
    onPageShow={Playit}
    >
      <nav className="flex items-center justify-between flex-wrap bg-[#7b13d1] px-12 py-8 ">
        <div className="flex items-center flex-shrink-0 text-white mr-6 mb-5">
          <img
            className="fill-current h-8 w-8 mr-2 border border-red-500 rounded-full"
            width="54"
            height="54"
            src="/ninjaiconnn.png"
          ></img>
          <span className="font-semibold text-2xl tracking-tight text-yellow-300 underline underline-offset-1">
            Mujahid Faqih 15
          </span>
        </div>
        <div className="w-full h-screen block flex-grow">
          <div className="text-md">
            <a
              href="https://www.instagram.com/faqihmujahid32015"
              className="flex items-center block mt-4 mr-4 pl-5 text-white font-semibold hover:text-white border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-blue-600 via-purple-500 via-pink-500 to-orange-500"
              onClick={Playit}
            >
              <AiOutlineInstagram size={25} className="mr-1" />
              My Instagram
            </a>
            <a
              href="https://twitter.com/agusghost15?t=iLJIv-GdDJ-cSaEksXf4Pg&s=08"
              className="flex items-center block mt-4 mr-4 pl-5 text-white font-semibold hover:text-white mr-4 border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-blue-600 via-purple-500 via-pink-500 to-orange-500"
            >
              <AiOutlineTwitter size={25} className="mr-1" />
              My Twitter
            </a>
            <a
              href="https://t.me/6285894311115"
              className="flex items-center block mt-4 mr-4 pl-5 text-white font-semibold hover:text-white mr-4 border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-blue-600 via-purple-500 via-pink-500 to-orange-500"
            >
              <RiTelegramLine size={25} className="mr-1" />
              My Telegram
            </a>
            <a
              href="http://wa.me/6285894311115"
              className="flex items-center block mt-4 mr-4 pl-5 text-white font-semibold hover:text-white mr-4 border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-blue-600 via-purple-500 via-pink-500 to-orange-500"
            >
              <AiOutlineWhatsApp size={25} className="mr-1" />
              My Whatsapp
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100087479342235"
              className="flex items-center block mt-4 mr-4 pl-5 text-white font-semibold hover:text-white mr-4 border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-blue-600 via-purple-500 via-pink-500 to-orange-500"
            >
              <AiFillFacebook size={25} className="mr-1" />
              My Facebook
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
