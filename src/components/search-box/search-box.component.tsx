/* --------- IMPORTS ------------- */

//import { Component } from 'react';
import './search-box.styles.css';

// ChangeEventHandler is a functional type definition that we receive from React
import { ChangeEventHandler } from 'react';

/* --------- TYPES ------------- */

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // for change event handlers, we need to import ChangeEventHandler from React
  // and pass it a parameter in <brackets>, like below:
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

/* --------- COMPONENT ------------- */

const SearchBox = (props: SearchBoxProps) => {
  const {className, placeholder, onChangeHandler} = props;
  return (
    <input
    className={`search-box  ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}               
    />    
  );    
}  

export default SearchBox;

/* --------- CLASS VERSION OF THE COMPONENT ----------- */

// class SearchBox extends Component {
//     render() {
//         return (
//             <input
//             className={`search-box  ${this.props.className}`}
//             type='search'
//             placeholder={this.props.placeholder}
//             onChange={this.props.onChangeHandler}               
//             /> 
//         )        
//     }
// }


/* --------- TYPE SCRIPTS TYPE EXAMPLES ----------- */

/*
// this example variable name is only allowed to hold a type 'string',
// 'string' is a promitive and needs to always be a lower-case
const name: string = '12345677';

// this is an exanmple of typing a function, assigning the types of parameter variables
// and a return variable. If we don't want to return anything, return type should be 'void'
const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) => { return true };

// example of typing an object with 'interface' (must always start with a capital 'I')
// 'extended' here means that whatever was inside 'IOnChangeHandlerProps' is being added to 'ISearchBoxProps'
// we can also write an interface with the same name, which will combine the values inside into 1 interface
// interfaces are better used with Object-oriented programming style
interface ISearchBoxProps extends IOnChangeHandlerProps {
  className: string;
  // placeholder is an optional property ('you can expect a string or null.  'string | null')
  placeholder?: string;  
}

interface IOnChangeHandlerProps {
  onChangeHandler: (a: string) => void;
}

// 'types' is another way of typing Objects
// 'types' cannot be combined ('overloaded') or extended
// 'types' are better used with Functional programming style
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (a: string) => void;
}

// types allow us to write a 'union'
// for example, we have 2 different types, both represent Address

type CanadianAddress = {
  street: string;
  province: string;  
}

type USAddress = {
  street: string;
  state: string;  
}

// union allows us to unite them both into 1 type, in that type we can use parameters from either of the above:
type NorthAmericanAddress = CanadianAddress | USAddress;

const Address: NorthAmericanAddress = {
  street: 'Example',
  state: 'value'
}
*/