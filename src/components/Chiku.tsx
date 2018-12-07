import React, { useState } from 'react';


// interface ChikuProps { name: string };
// const [count, setCount] = useState(0);

export function Chiku(props: any) {
    console.log('chiku renders');
    return (
        <div>
            <div>Hey I'm {props.name} !</div>
            {/* <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button> */}
        </div>
    );
}