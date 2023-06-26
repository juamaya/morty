function Character({ character }) {
  return (
    <div className="text-center p-5 text-dark" >
      <h2>{character.name}</h2> 
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} /> 
      
      <h4 className="text-dark"> Especie: {character.species}</h4>
      <h6 className="text-dark"> Origen: {character.origin.name}</h6>
    </div>
  );
}

export default Character;
