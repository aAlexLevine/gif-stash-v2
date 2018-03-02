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
    // console.log(this.state.gifs)
    this.addToStash = this.addToStash.bind(this)
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

    addToStash( url ) {
        axios.post('/myStash', {
            url: url
        }).then((response)=>{
            console.log('gif sent from client to stash', response.data)
        }).catch(function (error) {
            console.log(error);
          });
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
                     <Gif className="module" addToStash={this.addToStash.bind(this)} key={i} gif={gif}/>))}
                </div>
            </div>
        </div>
       
        )
    }
}

export default NewGifs;