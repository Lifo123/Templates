import { useState } from "react";


export default function Count(props: any) {

    const [count, setCount] = useState(0);

    return (
        <button
            className="btn btn-outline rounded-md flex f-center min-w-[100px]"
            onClick={() => setCount(count + 1)}
        >
            {props?.text} {count}
        </button>
    )
}
