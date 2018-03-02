import React from 'react';
import './gif.css';
import axios from 'axios';

class Gif extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: []
        }
    this.addToStash = this.addToStash.bind(this)
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
        <div > 
            {/* {props.gif} */}
            {/* <span className="dot"></span> */}
            <img    className="circle"  
                    src={this.props.gif.media[0].tinygif.url} 
                    onClick={(e) => {e.stopPropagation(); 
                        this.addToStash(this.props.gif.media[0].tinygif.url),
                        this.props.updateStash()
                        }}/>
                    
        </div>
        )
    }
}

export default Gif;