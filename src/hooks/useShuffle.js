import { useState } from "react";

const useShuffle = (arr) => {
  const [shuffleCards, setShuffleCards] = useState(arr);

  const shuffle = () => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArr[j], newArr[i]] = [newArr[i], newArr[j]];
    }

    setShuffleCards(newArr);
  };

  return { shuffleCards, shuffle };
};

export default useShuffle;
