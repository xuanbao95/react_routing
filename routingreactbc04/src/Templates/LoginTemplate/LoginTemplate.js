import { Route } from 'react-router-dom'
import React, { Fragment } from 'react'
import Header from '../../Component/Header/Header';

export default function LoginTemplate(props) {// có thể nhận object array string number function và cả component
    //chèn Hook HOC higher order component
    // const { component, path, } = props;

    return (
        <Fragment>
            {/* <Header />
            <Route path={path} exact component={component} /> */}
            <Route path={props.path} exact render={(propsRoute) => {
                return <Fragment>
                    <div className="row container mt-5 ml-5">
                        <div className="col-md-6">
                            <img src="http://picsum.photos/1000/1000" alt="123" style={{ width: "100%" }} />
                        </div>
                        <div className="col-md-6 d-flex flex-column align-item-center justify-content-center">
                            <props.component />
                        </div>
                    </div>

                </Fragment>
            }} />
        </Fragment>
    )
}