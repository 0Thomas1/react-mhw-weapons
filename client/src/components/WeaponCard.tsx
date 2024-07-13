interface Weapon {
  name: string;
  type: string;
  image: string;
}
const WeaponCard = ({ name, type, image }: Weapon) => {
  return (
    <div className="my-2">
      <div className="card">
        <div className="card-body d-flex flex-column flex-md-row">
          <div className="flex-grow-1">
            <h5>{name}</h5>
            <p>{type}</p>
          </div>
          <img
            src={image}
            className="img-fluid justify-self-end"
            width="80"
            alt={name}
          />

          <button className="btn btn-primary my-3 addToList">
            Add to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeaponCard;
