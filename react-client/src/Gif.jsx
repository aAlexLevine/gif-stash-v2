import React from 'react';
import './gif.css'

const Gif = (props) => {
    return (
        <div > 
            {/* {props.gif} */}
            {/* <span className="dot"></span> */}
            <img    className="circle"  
                    src={props.gif.media[0].tinygif.url} 
                    onClick={(e) => {e.stopPropagation(); 
                    props.addToStash(props.gif.media[0].tinygif.url)}}/>
                    
        </div>
    )
}

export default Gif;