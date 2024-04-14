function GameOver({ replayGame }) {
  return (
    <div className="absolute inset-0 m-auto flex items-center justify-center z-50 bg-popUpBackground">
      <div className="p-4 bg-white flex justify-center items-center rounded-md flex-col">
        <h2 className="text-2xl font-semibold my-4 text-center">
          You've lost this game! <br />
          please replay the game
        </h2>
        <button
          onClick={replayGame}
          className="text-xl font-semibold px-4 py-2 cursor-pointer border rounded bg-orange-600 hover:bg-orange-400"
        >
          Replay
        </button>
      </div>
    </div>
  );
}

export default GameOver;
