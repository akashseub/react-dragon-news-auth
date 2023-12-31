import { Link, NavLink } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <NavLink><button className="btn btn-primary">Login</button></NavLink>
                            </div>
                        </form>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            <Link to={'/register'}><p href="#" className="label-text-alt link link-hover">Register</p></Link>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;