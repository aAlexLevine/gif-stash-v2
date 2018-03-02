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
        console.log('-----PROPS IN MYSTASH', props)
    }
    
    // componentWillMount() {
    //     axios.get('/myStash').then((response) => {
    //         this.setState({
    //             myStash: response.data
    //         })
    //     })
    // }

    render () {
          return (
            <div className="stash">
            <h1>My Stash</h1>
            
            <div className="outer1">
                 <div className="gif-container1">
                    {/* {console.log('this state',this.state.gifs)} */}
                    {this.props.myStash.map((item, i) => (
                     <MyStashItem className="module1" update={this.props.updateStash}  key={i} item={item}/>))}
                </div>
            </div>
        </div>
          )
    }
}

export default MyStash;
