import { data } from "../utils";
import useShuffle from "../hooks/useShuffle";
import { useEffect, useRef, useState } from "react";
import { GameOver, GameWin, GameMaster } from "./index";

function GameBoard({ level, handleLevel }) {
  const [isGameMaster, setIsGameMaster] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const { shuffleCards, shuffle } = useShuffle(data.slice(0, level * 4));
  const clickedCard = useRef([]);

  const handleShuffle = (id) => {
    if (clickedCard.current.includes(id)) {
      setGameOver(true);
      return;
    }
    clickedCard.current = [...clickedCard.current, id];
    if (clickedCard.current.length === shuffleCards.length) {
      setGameWin(true);
      return;
    }
    shuffle();
  };

  const handleReplay = () => {
    setGameOver(false);
    setGameWin(false);
    clickedCard.current = [];
    shuffle();
  };

  const handleNexGame = () => {
    handleLevel(level + 1);
    setGameWin(false);
    clickedCard.current = [];
  };

  useEffect(() => {
    if (level <= 3) {
      shuffle();
    } else {
      setIsGameMaster(true);
    }
  }, [level]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-wrap ">
        {shuffleCards.map((card) => (
          <div key={card.id} onClick={() => handleShuffle(card.id)}>
            <div className="max-w-[200px] overflow-hidden rounded ">
              <img
                src={card.url}
                alt={card.name}
                className="object-cover hover:scale-125  duration-300"
              />
            </div>
            <h3 className="text-2xl font-semibold text-center">
              {card.name.toUpperCase()}
            </h3>
          </div>
        ))}

        {gameOver && <GameOver replayGame={handleReplay} />}
        {gameWin && (
          <GameWin
            replayGame={handleReplay}
            nextGame={handleNexGame}
            difficultyLevel={level}
          />
        )}
        {isGameMaster && <GameMaster restartLevel={handleLevel} />}
      </div>
      <div className="my-4">
        <h3 className="text-xl font-semibold text-center">
          Score : {clickedCard.current.length} / {shuffleCards.length}
        </h3>
      </div>
    </>
  );
}

export default GameBoard;
