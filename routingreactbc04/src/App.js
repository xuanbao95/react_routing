import logo from './logo.svg';
import './App.css';
import UseState from './HookTuHoc/UseState';
import UseEffect from './HookTuHoc/UseEffect';
import UseCallBack from './HookTuHoc/UseCallBack';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Header from './Component/Header/Header';
import About from './Pages/About/About';
import Register from './Pages/Register/Register';
import UseStateDemo from './Pages/Hook/UseStateDemo/UseStateDemo';
import UseEffectDemo from './Pages/Hook/UseEffectDemo/UseEffectDemo';
import ChonXe from './BaiTap/ChonXe';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/login" exact render={(propsRoute) => {
            return (
              <div className="container">
                <h1>Login</h1>
                <Login {...propsRoute} />
              </div>
            )
          }} />
          <Route path="/about" exact component={About}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/demoUseState" exact component={UseStateDemo}></Route>
          <Route path="/demoUseEffect" exact component={UseEffectDemo} />
          <Route path="/chonXe" exact component={ChonXe} />
          <Route path="/" exact component={Home} />
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
