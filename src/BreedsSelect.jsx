// @ts-check

export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed}) => {
  const handleBreedsChange = (event) => {
    setSelectedBreed(event.target.value);
  };
  return (
    <select value={selectedBreed} onChange={handleBreedsChange}>
      <option value="">Selected a breeds</option>
      {breeds.map((breed) => (
        <option value={breed} key={breed}>{breed}</option>
      ))}
    </select>
  );
}

export default BreedsSelect
