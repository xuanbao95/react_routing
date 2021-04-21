import logo from './logo.svg';
import './App.css';
import UseState from './HookTuHoc/UseState';
import UseEffect from './HookTuHoc/UseEffect';
import UseCallBack from './HookTuHoc/UseCallBack';
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Component/Header/Header';
import About from './Pages/About/About';
import Register from './Pages/Register/Register';
import UseStateDemo from './Pages/Hook/UseStateDemo/UseStateDemo';
import UseEffectDemo from './Pages/Hook/UseEffectDemo/UseEffectDemo';
import ChonXe from './BaiTap/ChonXe';
import UseMemo from './HookTuHoc/UseMemo';
import UseRef from './HookTuHoc/UseRef';
import UseReducer from './HookTuHoc/UseReducer';
import DemoApiClass from './Pages/DemoApi/DemoApiClass';
import DemoApiFunction from './Pages/DemoApi/DemoApiFunction';
import TodoList_1 from './Pages/TodoList/TodoList_1';
import TodoList_2 from './Pages/TodoList/TodoList_2';
import Detail from './Pages/Detail/Detail';
import DangKy from './Pages/Login/DangKy';
import ReactSpring from './HookTuHoc/ReactSpring';
import { Fragment } from 'react';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import LoginTemplate from './Templates/LoginTemplate/LoginTemplate';



//cấu hình chuyển hướng trang trên route
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory();// cho phép điều hướng trang
function App() {
  return (
    < Router history={history}>
      <div className="App">
        {/* <UseCallBack /> */}
        {/* <UseMemo /> */}
        {/* <UseRef /> */}
        {/* <UseReducer /> */}

        <switch>
          <HomeTemplate path='/home' component={Home} />
          <HomeTemplate path='/detail/:id' component={Detail} />
          <LoginTemplate path='/login' component={Login} />
          <LoginTemplate path="/register" exact component={Register}></LoginTemplate>
          <Route path="/dangky" exact component={DangKy}></Route>
          <HomeTemplate path="/about" exact component={About}></HomeTemplate>

          <Route path="/demoUseState" exact component={UseStateDemo}></Route>
          <Route path="/demoUseEffect" exact component={UseEffectDemo} />
          <Route path="/chonXe" exact component={ChonXe} />
          <Route path="/apiClass" exact component={DemoApiClass} />
          <Route path="/apiFunction" exact component={DemoApiFunction} />
          <Route path="/reactSpring" exact component={ReactSpring} />

          <Route path="/todoList_1" exact component={TodoList_1} />
          <Route path="/todoList_2" exact component={TodoList_2} />
          <Route path="/" exact component={Home} />
        </switch>

      </div>
    </Router>
  );
}

export default App;
