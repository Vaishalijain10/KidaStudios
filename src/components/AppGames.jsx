import playStore from "../assets/Images/6c20e9_f41d43c9288446d3929b580cf5787252~mv2.avif";
import apple from "../assets/Images/6c20e9_ad7d8d4637cc40009111cbaa7bc54be7~mv2.avif";
import amazon from "../assets/Images/Amazon_icon.avif";
import stream from "../assets/Images/6c20e9_9e42ba82ba15486ea825e16eb153c9b7~mv2.avif";
import Card from "./Card";
import { AppsGames } from "../constants/Apps&Games";
export default function AppGames() {
  return (
    <div id="apps&games" className="w-full px-4 sm:px-6 py-10 mt-12 mx-auto max-w-7xl scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 text-center">
        Apps & games we've developed
      </h2>

      <div className="flex flex-wrap gap-4 items-center justify-center mb-10">
        <img src={apple} alt="apple" className="h-8 sm:h-10 w-auto" />
        <img src={stream} alt="stream" className="h-8 sm:h-10 w-auto" />
        <img src={amazon} alt="amazon" className="h-8 sm:h-10 w-auto" />
        <img src={playStore} alt="playStore" className="h-8 sm:h-10 w-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
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
