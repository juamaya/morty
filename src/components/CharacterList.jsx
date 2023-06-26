import { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./NavPage";

function Footer() {
  return <div className="text-center text-dark">AMAYA_2022</div>;
}

function CharacterList() {
  const [characters, setcCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      console.log(data.results);
      setcCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container  ">
      <NavPage page={page} setPage={setPage} />
      <div className="row">
        {characters.map((character) => {
          return (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          );
        })}

        <div className="mb-5">
          <NavPage page={page} setPage={setPage} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default CharacterList;
