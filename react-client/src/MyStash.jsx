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
             showTags: false
         }
    }

    // showTags() {
    //     this.setState({showTags: !this.state.showTags})
    // }

    render () {
        let gifs = this.props.myStash.map(function(gif, i){
            return gif.tag 
           })
               console.log('gifs',gifs)
               
               let result = gifs.sort().reduce((init, current) => {
           if (init.length === 0 || init[init.length - 1] !== current) {
               init.push(current);
           }
           return init;
       }, []).filter(Boolean)
    //    result = result.filter(Boolean);
       
       console.log('result',result)
    

          return (
              
            <div className="stash">
    
            <h1> Stash </h1>
            <h3>Search the stash by tag</h3>
            <input  className="myStashSearch" onChange={this.props.filter}></input>
            {this.state.showTags ? <button className="showTags" onClick={() =>this.setState({showTags:!this.state.showTags})}>-</button> :
        <button className="showTags" onClick={() =>this.setState({showTags:!this.state.showTags})}>+</button>}
            
            
            {this.state.showTags ?   <div className="outTag">
                <div className="tagContainer">
                {result.map((gif, i) => (
                <Tag className="mod" key={i} gif={gif}/>))}
                </div>
            </div>: null}
            
            {/* <div className="outTag">
                <div className="tagContainer">
                {result.map((gif, i) => (
                <Tag className="mod" key={i} gif={gif}/>))}
                </div>
            </div> */}
            
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
