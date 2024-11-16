import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const {createNewUser,setUser,updateUserProfile}=useContext(AuthContext);
  const [error,setError] = useState({})
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    if(name.length<5){
      setError({...error,name:"Name must be 5 character long"})
      return;
    }
    const email = form.get('email');
    const photoUrl = form.get('photoUrl');
    const password = form.get('password');
    // console.log(name,photoUrl,email,password)
    createNewUser(email,password)
    .then(result=>{
      const user = result.user;
      setUser(user)
      updateUserProfile({displayName:name,photoURL:photoUrl})
      .then(()=>{
        navigate('/');
      })
      .catch(err=>{
        console.log(err.message)
      })
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    })
  }
    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
            <h2 className="text-center font-semibold text-2xl">Register Your Account</h2>
  <form onSubmit={handleSubmit} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input name="name" type="text" placeholder="name" className="input input-bordered" required />
    </div>
    {
      error.name && (<label className="label text-xs text-red-500">
        {error.name}
      </label>)
    }
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input name="photoUrl" type="text" placeholder="your photo url" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input name="email" type="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input name="password" type="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-neutral">Register</button>
    </div>
  </form>
  <p className="text-center">Already Have an Account? <Link className="text-red-500" to={'/auth/login'}>Login</Link></p>
</div>
    </div>
    );
};

export default Register;