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
            
            <div className="flexsearch">
            
            <div className="flexsearch--wrapper">
                <form className="flexsearch--form" action="#" method="post" onSubmit={this.search}>
                    <div className="flexsearch--input-wrapper">
                        <input className="flexsearch--input" type="search" placeholder="" onChange={this.onChange}
                        value={this.state.term}/>
                    </div>
                    <input className="flexsearch--submit" type="submit" value="&#10140;"/>
                </form>
            </div>
    </div>
        )
    }
}

export default SearchNewGifs;

{/* <button className="button">
GET GIFS
</button> */}