/* --------- IMPORTS ----------- */

//import { Component } from 'react';

import { Monster } from '../../App';
import './card.styles.css';

/* --------- TYPES ----------- */

type CardProps = {
  monster: Monster;
}

/* --------- COMPONENTS ----------- */

const Card = ({monster}: CardProps) => {
    //de-structuring, so we could use just ('name', 'email' and id') instead of ('monster.name', 'monster.email', 'monster.id')
    const { name, email, id } = monster;
    return (
        <div className="card-container">
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
              <h2>{name}</h2>
              <p>{email}</p>    
        </div>       
    );
}

export default Card;

/* --------- CLASS VERSION OF THE COMPONENT ----------- */

// class Card extends Component {
//     render() {
//         //de-structuring, so we could use just ('name', 'email' and id') instead of ('monster.name', 'monster.email', 'monster.id')
//         const { name, email, id } = this.props.monster;
//         return (
//             <div key={id} className="card-container">
//             <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//             <h2>{name}</h2>
//             <p>{email}</p>
//         </div>
//         )
//     }
// }
