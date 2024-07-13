interface CarouselItemProps {
  img: string;
  name: string;
  type: string;
}
const CarouselItem = (item : CarouselItemProps) => {
  return (
    <div className="card">
       <img src={item.img} className="card-img-top img-fluid m-auto w-50"  alt={item.name}/>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.type}</p>
        </div>
    </div>
  )
}

export default CarouselItem