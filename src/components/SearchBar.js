import React, { useState } from 'react';

// class SearchBar extends React.Component {
//   state = {
//     term: ''
//   };

//   onInputChange = (event) => {
//     // console.log("onInputChange")
//     this.setState({ term: event.target.value});
//     // console.log(this.state.term)
//   }

//   onFormSubmit = event => {
//     event.preventDefault();

//     // TODO: Make sure we call
//     // callback from parent component
//     this.props.onFormSubmit(this.state.term);
//   }

//   render() {
//     return (
//     <div className="search-bar ui segment">
//       <form onSubmit={this.onFormSubmit} className="ui form">
//         <div className="field">
//           <label>Video Search</label>
//           <input
//             type="text"
//             value={this.state.term}
//             onChange={this.onInputChange}
//           />
//         </div>
//       </form>
//     </div>
//     );
//   }
// }

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('meditation');

  const onSubmit = event => {
    event.preventDefault();

    // TODO: Make sure we call
    // callback from parent component
    onFormSubmit(term);
  }
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Videoo Search</label>
          <input
            type="text"
            value={term}
            onChange={(event)=>setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};


export default SearchBar;
