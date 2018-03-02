import React from 'react';

const Gif = (props) => {
    return (
        <div > 
            {/* {props.gif} */}
            <img src={props.gif.media[0].tinygif.url} />
        </div>
    )
}

export default Gif;