function GameMaster({ restartLevel }) {
  return (
    <div className="absolute inset-0 m-auto flex items-center justify-center z-50 bg-popUpBackground">
      <div className="p-4 bg-white flex justify-center items-center rounded-md flex-col">
        <h2 className="text-2xl font-semibold my-4 text-center">
          You've won all the level ,<br />
          Now you are our game master
        </h2>
        <h3>You can continue our game from level 0 </h3>
        <button
          onClick={() => restartLevel(0)}
          className="text-xl font-semibold px-4 py-2 cursor-pointer border rounded bg-orange-600 hover:bg-yellow-400"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default GameMaster;
