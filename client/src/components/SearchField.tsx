import { weaponTypes } from "../constance";
interface Prop {
  setWeaponType: (type: string) => void;

}
const SearchField = ({setWeaponType}:Prop) => {
  const handleWeaponTypeChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setWeaponType(e.target.value);
  }
  return ( 
    <div className="text-center my-3">
      <h1 className="display-3 fw-bold">Search</h1>
      <input
        type="text"
        className="form-control w-50 mx-auto"
        placeholder="Search for weapons..."
      />
      <select className="form-select" aria-label="Default select example" onChange={handleWeaponTypeChange}>
        <option defaultValue={""}>Filter by weapon type</option>
        {weaponTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchField