// import React, { useRef, useState } from 'react'

// export default function UseRef(props) {
//     let inputUser = useRef(null);
//     let inputPass = UseRef(null);
//     const handle = () => {
//         //.current luon đi theo useref
//         console.log(inputUser.current);
//         console.log(inputPass.current);
//     }
//     return (
//         <div>
//             <div className="form-group">
//                 <h3>User</h3>
//                 <input ref={inputUser} name="user" className="form-control" />
//             </div>
//             <div className="form-group">
//                 <h3>Password</h3>
//                 <input ref={inputPass} name="password" className="form-control" />
//             </div>
//             <div className="form-group">
//                 <button className="btn btn-success" onClick={() => { handle() }}>gửi</button>
//             </div>
//         </div>
//     )
// }
