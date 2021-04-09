import React, { useEffect, useState } from 'react'

export default function ChildEffect() {

    let [number, setNumber] = useState(1);
    useEffect(() => {
        //viết cho didUpdate
        console.log("didUpdate");
        return () => {
            console.log("willUnMount");
        }
    }, [number])
    return (
        <div>
            <textarea></textarea>
            <button className="btn btn-primary">gửi</button>
        </div>
    )
}
