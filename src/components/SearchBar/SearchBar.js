import React from 'react';


class SearchBar extends React.Component{
    state={
        term:null
    }

    onFormSubmit = (event)=>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return(
            <div>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label >Search</label>
                    <input 
                        className="ui input" 
                        type="text" 
                        onChange={(e)=>{
                            this.setState({term:e.target.value})
                        }} 
                        ></input>
                    {/* <input className="ui button" type="submit"> submit</input> */}
                </form>
            </div>
        )
    }
}

export default SearchBar