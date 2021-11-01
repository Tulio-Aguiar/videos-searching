import React from 'react';


class SearchBar extends React.Component {
    state = {term:'' };
    // pelo amor de Deus, sem chaves aqui!

    onInputChange = (Event) => {
        this.setState({term:Event.target.value});
    };

    onFormSubmit = (Event) => {
        Event.preventDefault();

        this.props.onFormSubmit(this.state.term);

        // TODO: Certifique-se de fazer a chamada
        // Chame o componente filho

    };

    render() { 
        return ( 
            
            <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label>Video Search</label>
                <input 
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
              </div>
            </form>
          </div> 
          
        );
    }
}
 
export default SearchBar;