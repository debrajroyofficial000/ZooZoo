import { useState } from "react";
import { GameLevel, GameBoard } from "./components";

function App() {
  const [selectedLevel, setSelectedLevel] = useState(0);

  function handleSelectingLevel(level) {
    setSelectedLevel(level);
  }

  return (
    <section
      className={`min-h-screen bg-center bg-cover flex justify-center items-center relative`}
      style={{
        backgroundImage:
          "linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('./images/zoo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" p-4 bg-orange-200 rounded-md">
        <h1
          className="text-5xl font-extrabold text-center my-4"
          onClick={() => handleSelectingLevel(0)}
        >
          ZooZoo
        </h1>
        {selectedLevel > 0 ? (
          <GameBoard level={selectedLevel} handleLevel={handleSelectingLevel} />
        ) : (
          <GameLevel handleLevel={handleSelectingLevel} />
        )}
      </div>
    </section>
  );
}

export default App;
