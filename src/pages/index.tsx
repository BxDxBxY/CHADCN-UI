import { useEffect, useState } from "react";
import Image from "next/image";
import Card from "@/Components/_Card";
import TestPopover from "@/Components/_TestPopover";

type Game = {
  id: number;
  background_image: string;
  rating: number;
  name: string;
};

const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchGames = async () => {
      try {
        const key = process.env.RAWG || "518aafd1816e4df5943c0ece75f9a79d";
        const res = await fetch(`https://api.rawg.io/api/games?key=${key}`);

        if (!res.ok) {
          throw new Error("Error fetching data");
        }

        const data = await res.json();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setGames(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGames();
  }, []); // Empty dependency array to run the effect once on component mount

  return (
    <>
      <div className="w-full h-full bg-white/90 overflow-hidden p-24">
        <div className="mb-24 text-black">
          <h1 className="text-4xl text-black mb-2 font-bold">CHADCN UI</h1>
          <p className="text-xl">
            Game API{" "}
            <a
              href="https://rawg.io"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-blue-400 text-violet-400"
            >
              --rawg.io--
            </a>
          </p>
          <TestPopover />
        </div>
        <div className="w-full grid grid-cols-4">
          {loading ? (
            <Card />
          ) : (
            games.map((game) => (
              <div
                className="mr-[10px] duration-200 transition-all bg-white text-black col-span-4  md:col-span-2 lg:col-span-1 p-[20px] aspect-video rounded-md mb-8"
                key={game.id}
              >
                <h1 className="text-2xl">{game.name}</h1>
                <p className="mb-4">Rating: {game.rating}</p>
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="object-cover rounded-md"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
