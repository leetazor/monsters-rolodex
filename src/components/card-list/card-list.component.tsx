/* --------- IMPORTS ----------- */

//import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

import { Monster } from '../../App';

/* --------- TYPES ----------- */

type CardListProps = {
  monsters: Monster[];
}

/* --------- COMPONENTS ----------- */

const CardList = ({monsters}:CardListProps) => (
    <div className="card-list">
        { monsters.map((monster) => {
            return <Card key={monster.id} monster={monster} />;                        
            })
        }    
    </div>       
);

export default CardList;

/* --------- CLASS VERSION OF THE COMPONENT ----------- */

// class CardList extends Component {
//     render() {
//         //de-structuring, so we could use just 'monsters' instead of 'this.props.monsters'
//         const {monsters} = this.props;
//         return (
//             <div className="card-list">
//                 { monsters.map((monster) => {
//                     return <Card monster={monster} />;                        
//                     })
//                 }    
//             </div>       
//         );
//     }
// }
