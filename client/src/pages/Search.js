import React from "react";
import SearchForm from "../components/SearchForm";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";

class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            bookInput: "",
            bookData: []
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleChange(ev) {
        ev.preventDefault();
        console.log(ev.target.value);
        this.setState(
        {
            bookInput: ev.target.value
        });
    }

    handleSearchClick(ev) {
        ev.preventDefault();
        console.log(this.state.bookInput);
        API.searchBooks(this.state.bookInput)
            .then(
                (response) => {
                    console.log("in click handler"+response);
                    this.setState({bookData: response.data});
                    this.setState({bookInput: ""});
                }
            )
            .catch(err => console.log(err));
    }
    render(){
        return (
            <div>
                <SearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {
                    (this.state.bookData.length > 0) ? 
                        <ResultsContainer bookData={this.state.bookData} path={this.props.match.path}/>  : null
                }
            </div>
        ) ;
    }
}
export default Search;