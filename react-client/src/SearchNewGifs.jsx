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

    search() {
        this.props.search(this.state.term)
    }

    render() {
        return (
            <div>
                <input className="search"
                    onChange={this.onChange}
                    value={this.state.term} />
                    <br/>
                <button className="button"
                    onClick={this.search}>
                    GET GIFS
                    </button>
            </div>
        )
    }
}

export default SearchNewGifs;