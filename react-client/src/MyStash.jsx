import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MyStashItem from './MyStashItem.jsx'
import Tag from './Tag.jsx'
import './myStash.css'

class MyStash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             filter: []
         }
    }


    render () {
        let gifs = this.props.myStash.map(function(gif, i){
            return gif.tag 
           })
               console.log(gifs)
               
               let result = gifs.sort().reduce((init, current) => {
           if (init.length === 0 || init[init.length - 1] !== current) {
               init.push(current);
           }
           return init;
       }, []);
       
       console.log(result)
    

          return (
              
            <div className="stash">
    
            <h2>Stash</h2>
            <h3>Search the stash by tag</h3>
            <input  className="myStashSearch" onChange={this.props.filter}></input>
            <div className="outTag">
                <div className="tagContainer">
                {result.map((gif, i) => (
                <Tag className="mod" key={i} gif={gif}/>))}
                </div>
            </div>
            
            <div className="outer1">
                 <div className="gif-container1">
                    {/* {console.log('-----PROPS IN MYSTASH', this.props)} */}
                    {this.props.myStash.map((item, i) => (
                     <MyStashItem className="module1" update={this.props.updateStash}  key={i} item={item}/>))}
                </div>
            </div>
        </div>
          )
    }
}

export default MyStash;
