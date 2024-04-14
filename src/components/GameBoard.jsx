import { data } from "../utils";
import useShuffle from "../hooks/useShuffle";
import { useRef, useState } from "react";
import GameOver from "./GameOver";
import GameWin from "./GameWin";
function GameBoard({ level, handleLevel }) {
  const { shuffleCards, shuffle } = useShuffle(data.slice(0, level * 4));
  const clickedCard = useRef([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);

  const handleShuffle = (id) => {
    shuffle();
    if (clickedCard.current.includes(id)) {
      setGameOver(true);
      return;
    }
    clickedCard.current = [...clickedCard.current, id];

    if (clickedCard.current.length === shuffleCards.length) {
      setGameWin(true);
      // return;
    }
  };

  const handleReplay = () => {
    setGameOver(false);
    setGameWin(false);
    clickedCard.current = [];
    shuffle();
  };

  // TODO : Complete the next game functionality
  const handleNexGame = () => {
    // setGameWin(false);
    // handleLevel(level + 1);
    // clickedCard.current = [];
    // shuffle();
  };

  return (
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
    </div>
  );
}

export default GameBoard;
