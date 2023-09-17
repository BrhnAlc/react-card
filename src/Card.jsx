import { useState } from "react"



const Card = (props) => {
    const [yazar, setYazar] = useState(false);
    const handleClick=()=>{
        setYazar( !yazar);
    }
  return (
    <div className="card">
        <div className="cardBody">
        <img src={props.img} alt=""/>
        <div className="about">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        <button onClick={handleClick}>Ayrıntıları Gör</button>
        </div>
         </div>
  )
}

export default Card