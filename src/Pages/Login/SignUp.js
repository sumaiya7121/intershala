import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import gooogle from '../../assets/google.png'

const SignUp = () => {
  const navigate = useNavigate();

  const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const role = event.target.role.value;

    // console.log(name,email, role);
    saveUserDb(name, email, role);

    //1. Create Account
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);

        //2. Update Name
        updateUser(name)
          .then(() => {
            toast.success("Account Created successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => console.log(error));
  };

  const saveUserDb = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saveUser", data);
        navigate("/");
      });
  };

  // Google Signin
  const handleGoogleSignin = () => {
    signInWithGoogle().then((result) => {
      const user = result.user;
      console.log(user);
      googleLoggedInUseInfo(user.displayName, user.email);
      navigate("/");
    });
  };
  // goole logged in user set on DB start
  const googleLoggedInUseInfo = (name, email) => {
    const info = { name, email, role: "Student" };
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          //  useToken(email);
          toast.success("User Logged In Successfully");
          console.log(data);
        }
      });
  };
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">
            Sign-up and apply for free
          </h1>
          <p className="text-sm text-gray-400">
            1,50,000+ companies hiring on Internshala
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid border max-w-md p-6 rounded-md sm:p-10 border-gray-200"
        >
          <button
            onClick={handleGoogleSignin}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
          >
<img className="w-6" src={gooogle} alt=''/>
            <p>Login with Google</p>
          </button>
            <div className="divider">OR</div>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info  text-gray-900"
                data-temp-mail-org="0"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info text-gray-900"
              />
            </div>
          </div>
          <div>
            <label className="text-sm">Who you are?</label>
            <select
              name="role"
              className="select border rounded-md border-gray-300 focus:outline-info text-gray-900' select-bordered w-full"
            >
              <option default>Student</option>
              <option>Employer</option>
            </select>
          </div>

          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-info hover:bg-gray-700 hover:text-white text-gray-100"
              >
                Sign up
              </button>
            </div>
          </div>
            <p className="px-6 text-sm text-center text-gray-400">
          Already have an account yet?{" "}
          <Link to="/login" className="hover:underline text-gray-600">
            Sign In
          </Link>
        
        </p>
        </form>
       
      
      </div>
    </div>
  );
};

export default SignUp;
