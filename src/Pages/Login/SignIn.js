import React, { useContext } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import gooogle from "../../assets/google.png";

const SignIn = () => {
  const { signin, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signin(email, password)
      .then((result) => {
        toast.success("Login Success!");
        navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => toast.error("Something Went wrong!"));
  };

  // Google Signin
  const handleGoogleSignin = () => {
    signInWithGoogle().then((result) => {
      const user = result.user;
      console.log(user);

      navigate("/");
    });
  };
  return (
    <div>
      <input type="checkbox" id="signin-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="signin-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <Tabs>
            <TabList className="flex justify-between">
              <Tab className="font-semibold text-sky-500 text-xl ml-24 hover:border-b-2 hover:border-sky-500 ">
                Student
              </Tab>
              <Tab className="font-semibold text-sky-500 text-xl mr-24 hover:border-b-2 hover:border-sky-500">
                Employer / T&P
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className="flex justify-center items-center pt-8">
                  <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-900">
                    <div className="mb-8 text-center">
                      <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                      <p className="text-sm text-gray-400">
                        Sign in to access your account
                      </p>
                    </div>
                    <form
                      onSubmit={handleLogin}
                      noValidate=""
                      action=""
                      className="space-y-6 ng-untouched ng-pristine ng-valid"
                    >
                      <button
                        onClick={handleGoogleSignin}
                        aria-label="Login with Google"
                        type="button"
                        className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1"
                      >
                        <img className="w-6" src={gooogle} alt="" />
                        <p>Login with Google</p>
                      </button>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block mb-2 text-sm">
                            Email address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="john@gmail.com"
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-400text-gray-900"
                            data-temp-mail-org="0"
                          />
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm mb-2">
                              Password
                            </label>
                          </div>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            placeholder="Must be at least 6 characters"
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-400 text-gray-900"
                          />
                        </div>
                      </div>
                      <div className="space-y-1 text-right">
                        <button className="hover:underline text-sky-600 text-lg font-semibold ">
                          Forgot password?
                        </button>
                      </div>
                      <div>
                        <button className="w-full">
                          <label
                            htmlFor="signin-modal"
                            className="w-full px-8 py-3 font-semibold rounded-md bg-info hover:bg-sky-600 text-center  hover:text-white text-gray-100"
                            type="submit"
                          >
                            Login
                          </label>
                        </button>
                      </div>
                    </form>

                    <p className="px-6 text-sky-500 text-md mt-6">
                      New to Internshala?Register ({" "}
                      <Link
                        to="/signup"
                        className="hover:underline text-sky-500"
                      >
                        Student
                      </Link>{" "}
                      <span>/</span>
                      <Link
                        to="/signup"
                        className="hover:underline text-sky-500"
                      >
                        Company
                      </Link>
                      )
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="flex justify-center items-center pt-8">
                  <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-900">
                    <div className="mb-8 text-center">
                      <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                      <p className="text-sm text-gray-400">
                        Sign in to access your account
                      </p>
                    </div>
                    <form
                      onSubmit={handleLogin}
                      noValidate=""
                      action=""
                      className="space-y-6 ng-untouched ng-pristine ng-valid"
                    >
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block mb-2 text-sm">
                            Email address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="john@gmail.com"
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-400text-gray-900"
                            data-temp-mail-org="0"
                          />
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm mb-2">
                              Password
                            </label>
                          </div>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            placeholder="Must be at least 6 characters"
                            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-400 text-gray-900"
                          />
                        </div>
                      </div>
                      <div className="space-y-1 text-right">
                        <button className="hover:underline text-sky-600 text-lg font-semibold ">
                          Forgot password?
                        </button>
                      </div>
                      <div>
                        <button className="w-full">
                          <label
                            htmlFor="signin-modal"
                            className="w-full px-8 py-3 font-semibold rounded-md bg-info hover:bg-sky-600 text-center  hover:text-white text-gray-100"
                            type="submit"
                          >
                            Login
                          </label>
                        </button>
                      </div>
                    </form>

                    <p className="px-6 text-sky-500 text-md mt-6">
                      New to Internshala?Register ({" "}
                      <Link
                        to="/signup"
                        className="hover:underline text-sky-500"
                      >
                        Student
                      </Link>{" "}
                      <span>/</span>
                      <Link
                        to="/signup"
                        className="hover:underline text-sky-500"
                      >
                        Company
                      </Link>
                      )
                    </p>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
