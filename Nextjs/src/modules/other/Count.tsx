'use client'
import React from "react";

export default function Count(props: any) {
    const [count, setCount] = React.useState(0);

    return (
        <button
            className="btn btn-outline rounded-md min-w-24"
            onClick={() => {
                setCount(v => v + 1);
            }}
        >
            Count {count}
        </button>
    )
}