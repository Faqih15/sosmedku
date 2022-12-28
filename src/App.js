import "./App.css";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";

function App() {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-[#7b13d1] px-12 py-8 ">
        <div class="flex items-center flex-shrink-0 text-white mr-6 mb-5">
          <img
            class="fill-current h-8 w-8 mr-2 border border-red-500 rounded-full"
            width="54"
            height="54"
            src="/ninjaiconnn.png"
          ></img>
          <span class="font-semibold text-2xl tracking-tight text-yellow-300 underline underline-offset-1">
            Mujahid Faqih 15
          </span>
        </div>
        <div class="w-full h-screen block flex-grow">
          <div class="text-md">
            <a
              href="https://instagram.com/w.madridiista15?igshid=YmMyMTA2M2Y="
              class="flex items-center block mt-4 mr-4 pl-5 text-white font-semibold hover:text-white border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-blue-600 via-purple-500 via-pink-500 to-orange-500"
            >
              <AiOutlineInstagram size={25} class="mr-1" />
              My Instagram
            </a>
            <a
              href="https://twitter.com/agusghost15?t=iLJIv-GdDJ-cSaEksXf4Pg&s=08"
              class="flex items-center block mt-4 mr-4 pl-5 text-white font-semibold hover:text-white mr-4 border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-blue-600 via-purple-500 via-pink-500 to-orange-500"
            >
              <AiOutlineTwitter size={25} class="mr-1" />
              My Twitter
            </a>
            <a
              href="https://t.me/6285894311115"
              class="flex items-center block mt-4 mr-4 pl-5 text-white font-semibold hover:text-white mr-4 border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-blue-600 via-purple-500 via-pink-500 to-orange-500"
            >
              <RiTelegramLine size={25} class="mr-1" />
              My Telegram
            </a>
            <a
              href="http://wa.me/6285894311115"
              class="flex items-center block mt-4 mr-4 pl-5 text-white font-semibold hover:text-white mr-4 border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-blue-600 via-purple-500 via-pink-500 to-orange-500"
            >
              <AiOutlineWhatsApp size={25} class="mr-1" />
              My Whatsapp
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100087479342235"
              class="flex items-center block mt-4 mr-4 pl-5 text-white font-semibold hover:text-white mr-4 border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-blue-600 via-purple-500 via-pink-500 to-orange-500"
            >
              <AiFillFacebook size={25} class="mr-1" />
              My Facebook
            </a>
          </div>
        </div>
        <div></div>
      </nav>
    </div>
  );
}

export default App;
