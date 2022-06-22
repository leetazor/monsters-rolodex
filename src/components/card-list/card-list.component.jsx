//import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';


const CardList = ({monsters}) => (
    <div className="card-list">
        { monsters.map((monster) => {
            return <Card key={monster.id} monster={monster} />;                        
            })
        }    
    </div>       
);


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

export default CardList;