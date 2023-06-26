import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="bg-secondary text-white">
      <h1 className="text-center display-1 py-4 text-dark bg-primary">Rick and Morty</h1>

      <CharacterList />
    </div>
  );
}

export default App;
