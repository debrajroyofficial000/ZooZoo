function GameLevel({ handleLevel }) {
  return (
    <>
      <h2 className="text-center my-4 text-4xl font-extrabold">
        Select your Level
      </h2>
      <div className="flex justify-center items-center gap-4 ">
        <button
          className="px-4 py-2 font-semibold text-md bg-orange-400  hover:bg-orange-600"
          onClick={() => handleLevel(1)}
        >
          Easy
        </button>
        <button
          className="px-4 py-2 font-semibold text-md bg-orange-400  hover:bg-orange-600"
          onClick={() => handleLevel(2)}
        >
          Medium
        </button>
        <button
          className="px-4 py-2 font-semibold text-md bg-orange-400  hover:bg-orange-600"
          onClick={() => handleLevel(3)}
        >
          Hard
        </button>
      </div>
    </>
  );
}

export default GameLevel;
