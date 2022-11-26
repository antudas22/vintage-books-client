import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, 
    formState: { errors }, } = useForm();

  const handleLogin = data => {
    console.log(data);
  }

  return (
    <div className="h-[800px] flex justify-center items-start mt-10">
      <div className="w-96 bg-orange-50 p-8 shadow-xl rounded-3xl">
        <h2 className="text-3xl text-center font-semibold">Sign In</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
          <input type="email" {...register("email", {required: "Email address is required!"})} className="input input-bordered w-full max-w-xs"/>
          </div>
          {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
          <input type="password" {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or long!",
                },
              })} className="input input-bordered w-full max-w-xs"/>
          </div>
          {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
          <label className="label">
              <span className="label-text">Forget Password?</span>
          </label>

          <select {...register("role", { required: true })} className="select select-bordered w-full max-w-xs">
            <option value="user">Create account as a User</option>
            <option value="seller">Create account as a Seller</option>
          </select>
          <input className="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0 w-full mt-4 mb-4" type="submit" value="login" />
        </form>
        <small>
          <p className="text-center">
            New to Doctors Portal?{" "}
            <Link className="text-blue-500" to="/signup">
              Create New Account
            </Link>
          </p>
        </small>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full uppercase">
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Login;
