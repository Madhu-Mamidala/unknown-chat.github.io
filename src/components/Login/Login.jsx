import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <>

            <div className="container mt-4">
                <div className="container d-flex align-items-center justify-content-center">
                    <div className="random ">
                        <span>Chat As a Random </span>
                        <Link to="/random"><button className="btn btn-success">Random</button></Link>
                    </div>
                </div>
                <hr />
                <div className="container h-100 w-100  text-white p-4 d-flex justify-content-center" >
                    <form>
                        <div className="mb-3">
                            <h4>Login</h4>
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary ">Submit</button>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}
