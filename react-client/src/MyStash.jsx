import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MyStashItem from './MyStashItem.jsx'
import './myStash.css'

class MyStash extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     myStash: []
        // }
        // console.log('-----PROPS IN MYSTASH', this.props)
    }
    


    render () {
          return (
            <div className="stash">
            <h2>Stash</h2>
            <h3>Search the stash by tag</h3>
            <input  className="myStashSearch" onChange={this.props.filter}></input>
            <div className="outer1">
                 <div className="gif-container1">
                    {console.log('-----PROPS IN MYSTASH', this.props)}
                    {this.props.myStash.map((item, i) => (
                     <MyStashItem className="module1" update={this.props.updateStash}  key={i} item={item}/>))}
                </div>
            </div>
        </div>
          )
    }
}

export default MyStash;
