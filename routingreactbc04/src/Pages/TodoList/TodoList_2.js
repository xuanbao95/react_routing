import React from 'react'

export default function TodoList_2(props) {
    return (
        <div className="card">
            <div className="card__header">
                <img src="./img/X2oObC4.png" />
            </div>
            {/* <h2>hello!</h2> */}
            <div className="card__body">
                <div className="card__content">
                    <div className="card__title">
                        <h2>My Tasks</h2>
                        <p>September 9,2020</p>
                    </div>
                    <div className="card__add">
                        <input id="newTask" type="text" placeholder="Enter an activity..." />
                        <button id="addItem">
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                    <div id="notiInput" className="alert-danger" style={{ display: 'none' }} />
                    <div className="card__todo">
                        {/* Uncompleted tasks */}
                        <ul className="todo" id="todo" />
                        {/* Completed tasks */}
                        <ul className="todo" id="completed" />
                    </div>
                </div>
            </div>
        </div>

    )
}
