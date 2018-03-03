import React from 'react';
import './gif.css';
import axios from 'axios';

class Gif extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: '',
            display: false
        }
        this.addToStash = this.addToStash.bind(this)
        this.hover = this.hover.bind(this)
        this.out = this.out.bind(this)
        this.onChange = this.onChange.bind(this);
    }
 
    addToStash( url, tag, e ) {
        
        axios.post('/myStash', {
            url: url,
            tag: tag 

        }).then((response)=>{
            console.log('gif sent from client to stash', response.data)
        }).catch(function (error) {
            console.log(error);
          });
          e.preventDefault();
    }
    
    hover(e) {
        e.stopPropagation()
        this.setState({display : !this.state.display})
    }

    out(e) {
        e.stopPropagation()
        this.setState({display : !this.state.display})
    }
    
    onChange(e) {
        this.setState({tag: e.target.value})
        console.log(e.target.value)
    }

render() {
    return (
        <div onMouseEnter={this.hover} onMouseLeave={this.out}>  
            
            <img src={this.props.gif.media[0].tinygif.url}/> 
                 
                {this.state.display ? 
                       <div>
                           <form onSubmit={(e) => {
                                    this.addToStash(this.props.gif.media[0].tinygif.url, this.state.tag, e),
                                    this.props.updateStash()
                                    this.setState({tag: ''})
                                    this.props.spliceGif(this.props.index)
                                    }}>
                               <input 
                                    onChange={this.onChange}
                                    value={this.state.tag}> 
                               </input>
                            </form>
                           <span className="dot"
                                onClick={(e) => {e.stopPropagation(); 
                                    this.addToStash(this.props.gif.media[0].tinygif.url, this.state.tag, e),
                                    this.props.updateStash()
                                    this.setState({tag: ''})
                                    this.props.spliceGif(this.props.index)
                                    }}> 
                            </span>
                       </div> : null}
        </div>
        )
    }
}

export default Gif;