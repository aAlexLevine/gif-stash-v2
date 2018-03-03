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
            display: false
        }
        // console.log('props in mystash item', props)
        this.hover = this.hover.bind(this)
        this.out = this.out.bind(this)
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

    hover(e) {
        e.stopPropagation()
        this.setState({display : !this.state.display})
    }

    out(e) {
        e.stopPropagation()
        this.setState({display : !this.state.display})
    }
    
    render() {
        return (
            <div onMouseEnter={this.hover} onMouseLeave={this.out}> 
            
            <img src={this.props.item.name}/>
                
                {this.state.display ? 
                   <div> <span className="dot1" onClick={(e)=>{e.stopPropagation(); 
                                        this.removeFromStash(this.props.item.name),
                                        this.props.update(), 
                                        console.log('red dot clicked')}}>
                    </span><span className="tag" >tags</span> </div> : null}
                    <br/>
                    
                
            </div>
            )
        }
    }

    export default MyStashItem;