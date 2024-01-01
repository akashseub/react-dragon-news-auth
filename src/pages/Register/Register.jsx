import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.target);

        const name = form.get('name');
        const address = form.get('address');
        const email = form.get('email');
        const password = form.get('password');

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .cath(error => {
                console.error(error);
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name="address" placeholder="Your Address" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Please enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <button><Link to={'/Login'}><p href="#" className="label-text-alt link link-hover">Have account? Login</p></Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;