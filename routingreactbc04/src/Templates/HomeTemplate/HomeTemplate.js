import { Route } from 'react-router-dom'
import React, { Fragment, useEffect } from 'react'
import Header from '../../Component/Header/Header';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeTemplate(props) {// có thể nhận object array string number function và cả component
    //chèn Hook HOC higher order component
    // const { component, path, } = props;
    //lấy loading tuwd reducer về
    const { isLoading } = useSelector(state => state.LoadingReducer)
    const dispatch = useDispatch()
    // useEffect(() => {

    //     setTimeout(() => {
    //         dispatch({ type: "HIDE_LOADING" })
    //     }, 0);
    //     return () => {
    //         //trang hiện tại mở loading
    //         dispatch({ type: "DISPLAY_LOADING" })
    //     }
    // })
    // const renderLoding = () => {
    //     if (isLoading) {
    //         return <div style={{ position: 'fixed', zIndex: 10, width: '100%', height: '100', top: '0', left: '0', backgroundColor: 'rgba(0,0,0,.5)' }}>
    //             <div className="d-flex flex-column align-item-center justify-content-center display-4 text-center">
    //                 Loading...
    //             </div>
    //         </div>
    //     }
    // }
    return (
        <Fragment>
            {/* <Header />
            <Route path={path} exact component={component} /> */}
            <Route path={props.path} exact render={(propsRoute) => {
                return <Fragment>
                    {/* {renderLoding()} */}
                    <Header {...propsRoute} />
                    <props.component  {...propsRoute} />
                </Fragment>
            }} />
        </Fragment>
    )
}
