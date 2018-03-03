import React from 'react';
import './SearchNewGifs.css'

class SearchNewGifs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        console.log('props in SearchComp', this.props)
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    }

    onChange(e) {
        this.setState({term: e.target.value})
        console.log(e.target.value)
    }

    search(e) {
        e.preventDefault();
        this.props.search(this.state.term)
        this.setState({term: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.search}>
                <input className="search"
                    onChange={this.onChange}
                    value={this.state.term}
                    placeholder="Search new gifs!" />
                    <br/>
                <button className="button">
                    GET GIFS
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchNewGifs;