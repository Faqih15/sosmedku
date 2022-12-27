import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div class="w-full block flex-grow pb-20">
          <div class="text-md">
            <a
              href="#responsive-header"
              class="block mt-4 text-white text-bold hover:text-white mr-4 border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-500 text-bold"
            >
              My Instagram
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 text-white text-bold hover:text-white mr-4 border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-500 text-bold"
            >
              My Twitter
            </a>
            <a
              href="http://t.me/6285894311115"
              class="block mt-4 text-white text-bold hover:text-white mr-4 border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-500 text-bold"
            >
              My Telegram
            </a>
            <a
              href="http://wa.me/6285894311115"
              class="block mt-4 text-white text-bold hover:text-white mr-4 border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-500 text-bold"
            >
              My Whatsapp
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100087479342235"
              class="block mt-4 text-white text-bold hover:text-white mr-4 border-2 border-slate-400 rounded-lg p-2 
              bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-orange-500 text-bold"
            >
              <FontAwesomeIcon icon="fa-brands fa-facebook" class="" />
              My Facebook
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
