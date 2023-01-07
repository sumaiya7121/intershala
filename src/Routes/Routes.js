import { createBrowserRouter } from "react-router-dom";
import EmployerHome from "../Components/EmployerRegistration/EmployerHome";
import Main from "../Layout/Main";
import RegistrationLayout from "../Layout/RegistrationLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import RegistrationEmployee from "../Pages/Login/RegistrationEmployee";
import SignUp from "../Pages/Login/SignUp";
import Chat from "../Pages/StudentDashboard/Chat";
import InternshipDetails from "../Pages/StudentDashboard/InternshipDetails";
import Internships from "../Pages/StudentDashboard/Internships";
import Jobs from "../Pages/StudentDashboard/Jobs/Jobs";
import Details from "../Pages/StudentDashboard/Profile Section/Details";
import MyApplication from "../Pages/StudentDashboard/Profile Section/MyApplication";
import PersonalDetails from "../Pages/StudentDashboard/Profile Section/PersonalDetails";
import Preference from "../Pages/StudentDashboard/Profile Section/Preference";
import Profile from "../Pages/StudentDashboard/Profile Section/Profile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/studentdashboard",
        element: (
         
            <Internships></Internships>
          
        ),
      },
      {
        path: "/jobs",
        element: (
          <PrivateRoute>
            <Jobs></Jobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/chat",
        element: (
          <PrivateRoute>
            <Chat></Chat>
          </PrivateRoute>
        ),
      },
      {
        path: "/application",
        element: <MyApplication></MyApplication>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/internship/:id",
        element: <InternshipDetails></InternshipDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/internship/${params.id}`),
      },
      {
        path:'/personaldetails',
        element:<PersonalDetails></PersonalDetails>
      },
      {
        path:'/preference',
        element:<Preference></Preference>

      },{
        path:'/details',
        element:<Details></Details>
      }
    ],
  },

  {
    path:'/registerlayout',
    element:<RegistrationLayout></RegistrationLayout>,
    children:[
      {
        path:'/registerlayout',
        element:<EmployerHome></EmployerHome>
      }
    ]
  }
]);
export default router;
