import { useState } from "react";

function Counter() {
    let [count,setCount] = useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    return (
        <div>
            <h1>Counter App</h1>
            <h1>Count : {count}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Counter;
