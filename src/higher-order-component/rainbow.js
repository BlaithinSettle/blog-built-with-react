import React from 'react';

const Rainbow=(WrappedComponent) =>{

    const colors=['red', 'blue', 'green', 'pink', 'violet', 'yellow']

    const randomColor= colors[Math.floor(Math.random()*5)];

    //concatinating random color with text 
    const className=randomColor + '-text';

    return (props) =>{
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow