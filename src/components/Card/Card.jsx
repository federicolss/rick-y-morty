import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
  const {id,name,gender,species,image,status,origin,onClose} =  props
   return (
      <div className={style.container}>
         <div className={style.containerCard}>
            <div className={style.front}>
               <img
                 src={image}
                 alt = {name}
                 className={style.image}
               />
            </div>

            <div className={style.back}>
               <button 
                className={style.btn}
                onClick={()=>onClose(id)}
                > 
                X
               </button>
               <Link to ={`/Detail/${id}`}>
                 <h2>{name}</h2>
               </Link>
               
               <h2>{species}</h2>
               <h2>{gender}</h2>
               <h2>{status}</h2>
               <h2>{origin.name}</h2>


            </div>
         </div>
      </div>
      //    <div className="cart">
      //    <button onClick={onClose}>X</button>
          
      //    <h2>  {name}  </h2>
      //    <h2> {status} </h2>
      //    <h2> {species}</h2>
      //    <h2 > {gender}</h2> 
      //    <h2 > {origin.name}</h2>
      //     <img src={image} alt={name} />
      // </div>
   );
}
// **name**: nombre.
// -  **status**: status.
// -  **species**: especie.
// -  **gender**: género.
// -  **origin**: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada **`name`**).
// -  **image**: imagen.