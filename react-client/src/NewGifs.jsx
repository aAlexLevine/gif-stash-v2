import React from 'react';
import SearchNewGifs from './SearchNewGifs.jsx';
import Gif from './Gif.jsx'
import axios from 'axios';
import './newGifs.css'

class NewGifs extends React.Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
        }
    this.search = this.search.bind(this)
    this.spliceGif = this.spliceGif.bind(this)
    }

    search( term ) {
        console.log('term in client search',term) 
        axios.post('/gifs', {
            term: term
        })
        .then((response)=>{
            this.setState({
                gifs: response.data.results
            })
            console.log('results.data', response.data.results)
        }).catch(function (error) {
            console.log(error);
          });
    }

    spliceGif(index) {
        this.state.gifs.splice(index, 1)
    }

    render() {
    return (
        <div>
            <h1>NEW GIFS BOX</h1>
            <SearchNewGifs search={this.search}/>
            <div className="outer">
                 <div className="gif-container">
                    {/* {console.log('this state',this.state.gifs)} */}
                    {this.state.gifs.map((gif, i) => (
                     <Gif className="module" key={i} gif={gif} index={i} spliceGif={this.spliceGif} updateStash={this.props.updateStash}/>))}
                </div>
                {console.log('GIF ARRAY IN NEWGIFS------', this.state.gifs)}
            </div>
        </div>
       
        )
        
    }
}

export default NewGifs;