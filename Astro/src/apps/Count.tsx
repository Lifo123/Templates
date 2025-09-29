import { useState } from "react";


export default function Count(props: any) {

    const [count, setCount] = useState(0);

    return (
        <button className="btn btn-third rounded-md d-flex f-center" onClick={() => setCount(count + 1)} style={{ width: "120px" }}>
            {props?.text} {count}
        </button>
    )
}
