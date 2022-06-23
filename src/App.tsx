/* --------- IMPORTS ----------- */

// import {Component} from 'react';
import {useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';
import './App.css';

/* --------- TYPES ----------- */

// here we are setting up a generic that we are passing as a type to the data we're getting back from
// an async API call to get the users data
export type Monster = {
  id: string;
  name: string;
  email: string;
}

/* --------- COMPONENTS ----------- */

const App = () => {
  
  const [searchField, setSearchField] = useState(''); //array de-structuring [value, setValue]
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
      const fetchUsers = async () => {
        const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
        setMonsters(users);
      };
      fetchUsers();
    }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
      });  
      setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  // there are no explicit returns from this function, this means that the return type is 'void'
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldValue = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldValue);
        }

  return (
    <div className='App'>   
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className = "monsters-search-box"
      />        
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''  
//     };
//   }
  
//   //when the app first gets 'mounted' or initizlised, here we are pulling a list of users from an API
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(
//         () => {
//           return {monsters: users};
//         }
//       )
//     );   
//   }
  
//   // callback function to use on change in the search field
//   onSearchChange = (event) => {
//     const searchFieldValue = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchField: searchFieldValue};
//     });
//   }

//   render() {  
//     // object destructuring - removing the need to explisitly write 'this' in the code below.
//     const { monsters, searchField} = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className='App'>   
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className = "monsters-search-box"
//         />   
//         <CardList monsters={filteredMonsters} />   
//       </div>
//     );
//   } 
// }


