import React from 'react';
import './myStashItem.css';
import axios from 'axios'


//delete items from the stash 
//turn this into class
// on click set state itemClicked to hold the items url  
//call to server app.delete to remove item based on states url from database

class MyStashItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: []
        }
        console.log('props in mystash item', props)
    }

    removeFromStash( url ) {
        axios.post('/remove', {
            url: url
        }).then((response)=>{
            console.log('gif removal attempted from client')
        }).catch(function (error) {
            console.log(error);
          });
    }
    
render() {
    return (
        <div > 
        
            <img src={this.props.item.name} />
            <br/>
            <span className="dot" onClick={(e)=>{e.stopPropagation(); 
                                    this.removeFromStash(this.props.item.name),
                                    this.props.update(), 
                                    console.log('red dot clicked')}}></span>
            
            <span className="tag" >tags</span>
        </div>
        )
    }
}

export default MyStashItem;