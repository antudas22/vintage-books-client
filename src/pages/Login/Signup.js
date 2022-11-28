import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Signup = () => {
    const {providerLogin, createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
      navigate('/');
    }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.log(error))
  }

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError('');
    createUser(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Account Created')
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
        .then(() => {
          saveUser(data.name, data.email);
        })
        .catch(error => console.log(error));
    })
    .catch(error => {
      console.log(error)
      setSignUpError(error.message)
    });
  };

  const saveUser = (name, email) => {
    const user = {name, email};
    fetch('https://vintage-books-server.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      setCreatedUserEmail(email);
    })
  }

  const getUserToken = email => {
    
  }

  return (
    <div>
      <div className="h-[800px] flex justify-center items-start mt-10">
        <div className="w-96 bg-orange-50 p-7 shadow-xl rounded-3xl">
          <h2 className="text-3xl text-center font-semibold">Sign Up</h2>
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
              <select {...register("role", { required: true })} className="select select-bordered w-full max-w-xs">
            <option value="user">Create account as a User</option>
            <option value="seller">Create account as a Seller</option>
          </select>
            </div>
            <input
              className="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0 w-full mb-3 mt-6"
              value="Sign Up"
              type="submit"
            />
            {signUpError && <p className="text-error">{signUpError}</p>}
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
          <button onClick={handleGoogleSignIn} className="btn btn-outline w-full uppercase">
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
