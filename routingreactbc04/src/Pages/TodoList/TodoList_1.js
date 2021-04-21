import React, { Component } from 'react'
import axios from 'axios'
import TodoList from './TodoList.css'
export default class TodoList_1 extends Component {
    state = {
        listTask: [],
        value: {
            taskName: []
        },
        erro: {
            taskName: []
        },

    }
    getListTask = async () => {
        try {
            const result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
                method: 'GET'
            });
            this.setState({
                listTask: result.data
            })
        } catch (erros) {
            console.log(erros);
        }
    }
    renderToDo = () => {
        return this.state.listTask.filter(item => !item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="button">
                    <button className="remove">
                        <i class="fas fa-trash-alt    "></i>
                    </button>
                    <button className="complete">
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                    </button>
                </div>
            </li>
        })
    }
    renderDone = () => {
        return this.state.listTask.filter(item => item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="button">
                    <button className="remove">
                        <i class="fas fa-trash-alt    "></i>
                    </button>
                    <button className="complete">
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                    </button>
                </div>
            </li>
        })
    }
    handelChange = (e) => {
        let { name, value } = e.target;
        let newValue = { ...this.state.value };
        // let newErro = { ...this.state.erro };

        if (newValue[name] === "") {
            alert("ko bỏ trống")
        } else {
            newValue[name] = value
        }
        this.setState({
            value: newValue
        })

    }
    addTask = () => {
        let promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'POST',
            data: { taskName: this.state.value.taskName }
        })
        promise.then(result => {
            console.log(result.data);
            this.getListTask();
        });
        promise.catch(erro => {
            console.log(erro);
        })

    }
    render() {
        return (
            <div>
                {/* <button onClick={() => this.getListTask()}>get list task</button> */}
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
                                <input name="taskName" onChange={() => this.handelChange} id="newTask" type="text" placeholder="Enter an activity..." />
                                {/* <span>{this.state.erro.taskName}</span> */}
                                <button id="addItem" onClick={() => this.addTask()}>
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                            <div id="notiInput" className="alert-danger" style={{ display: 'none' }} />
                            <div className="card__todo">

                                <ul className="todo" id="todo" >
                                    {this.renderToDo()}
                                </ul>

                                <ul className="todo" id="completed" >
                                    {this.renderDone()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.getListTask()
    }
}

