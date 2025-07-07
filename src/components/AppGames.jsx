import playStore from "../assets/Images/6c20e9_f41d43c9288446d3929b580cf5787252~mv2.avif";
import apple from "../assets/Images/6c20e9_ad7d8d4637cc40009111cbaa7bc54be7~mv2.avif";
import amazon from "../assets/Images/Amazon_icon.avif";
import stream from "../assets/Images/6c20e9_9e42ba82ba15486ea825e16eb153c9b7~mv2.avif";
import Card from "./Card";
import { AppsGames } from "../constants/Apps&Games";

export default function AppGames() {
  return (
    <div id="apps&games" className=" w-[80%] mt-12 px-6 py-6 mx-auto scroll-mt-24">
      <h2 className="text-[50px] font-bold text-black mb-6 text-center">
        Apps & games we've developed
      </h2>

      <div className="flex gap-4  items-center justify-center mb-6">
        <img src={apple} alt="apple" className="h-10 w-10" />
        <img src={stream} alt="stream" className="h-10 w-10" />
        <img src={amazon} alt="amazon" className="h-10 w-10" />
        <img src={playStore} alt="playStore" className="h-10 w-10" />
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 place-items-center">
        {AppsGames.map((game) => (
          <Card
            key={game.id}
            title={game.title}
            description={game.description}
            logo={game.logo}
            image={game.image}
            gradient={game.gradient}
          />
        ))}
      </div>
    </div>
  );
}
