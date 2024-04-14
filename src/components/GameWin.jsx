function GameWin({ replayGame, nextGame, difficultyLevel }) {
  return (
    <div className="absolute inset-0 m-auto flex items-center justify-center z-50 bg-popUpBackground">
      <div className="p-4 bg-white flex justify-center items-center rounded-md flex-col">
        <h2 className="text-2xl font-semibold my-4 text-center">
          You've won the game
        </h2>
        <div className="flex justify-center items-center">
          {difficultyLevel < 3 && (
            <button
              onClick={replayGame}
              className="text-xl font-semibold px-4 py-2 cursor-pointer border rounded bg-orange-600 hover:bg-orange-400"
            >
              Replay
            </button>
          )}

          <button
            onClick={nextGame}
            className="text-xl font-semibold px-4 py-2 cursor-pointer border rounded bg-orange-600 hover:bg-yellow-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameWin;
