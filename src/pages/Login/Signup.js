import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    
  };

  return (
    <div>
      <div className="h-[800px] flex justify-center items-start mt-10">
        <div className="w-96 bg-orange-50 p-7 shadow-xl rounded-3xl">
          <h2 className="text-xl text-center text-bold">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: true,
                })}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                })}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or long!",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    message: "Password must be strong",
                  },
                })}
                className="input input-bordered w-full max-w-xs mb-8"
              />
              {errors.password && (
                <p className="text-error -mt-8 mb-6">
                  {errors.password.message}
                </p>
              )}
            </div>
            <input
              className="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0 w-full mb-3"
              value="Sign Up"
              type="submit"
            />
          </form>
          <small>
            <p className="text-center">
              Already have an account?{" "}
              <Link className="text-blue-500" to="/login">
                Please Login
              </Link>
            </p>
          </small>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full uppercase">
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
