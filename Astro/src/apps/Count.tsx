import { useState } from "react";


export default function Count(props: any) {

    const [count, setCount] = useState(0);

    return (
        <span className="btn btn-secondary br-6 d-flex f-center" onClick={() => setCount(count + 1)} style={{width: "120px"}}>
            {props?.text} {count}
        </span>    
    )
}
