import React, { memo } from 'react'

function ChildUseCallack(props) {
    let title = "cybersoft";
    let objeck = { id: 1, name: "baobao" }

    return (
        <div>
            <small>{props.renderNotify()}</small>
            <textarea></textarea>
            <br />
            <button className="btn btn-success">gửi</button>
        </div>
    )
}

export default memo(ChildUseCallack);