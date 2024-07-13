import { useState } from "react";
import SearchField from "../components/SearchField";
import WeaponDisplay from "../components/WeaponDisplay";

const Weapons = () => {
  const [weaponType, setWeaponType] = useState("");
  return (
    <div>
      <SearchField setWeaponType={setWeaponType} />
      <WeaponDisplay weaponType={weaponType} />
    </div>
  );
};

export default Weapons;
