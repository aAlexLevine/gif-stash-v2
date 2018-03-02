import React from 'react';

const MyStashItem = (props) => {
    console.log('props in MyStashItem', props)
    return (
        <div > 
            {/* {props.item} */}
            <img src={props.item.name} />
        </div>
    )
}

export default MyStashItem;