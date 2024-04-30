import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import AllTouristSpot from './components/AllTouristSpot/AllTouristSpot.jsx';
import MyList from './components/MyList/MyList.jsx';
import About from './components/About/About.jsx';
import ContactUs from './components/Contact/Contact.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import MyAccount from './components/MyAccount/MyAccount.jsx';
import AddTouristSpot from './components/AddTouristSpot/AddTouristSpot.jsx';
import UpdateTouristSpot from './components/UpdateTouristSpot/UpdateTouristSpot.jsx';
import TouristSpot from './components/TouristSpot/TouristSpot.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import TouristSpotWithSameCountry from './components/CountryCard/TouristSpotWithSameCountry.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/touristSpot')
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('http://localhost:5000/touristSpot')
      },
      {
        path: "/TouristSpot/:id",
        element: <PrivateRoute><TouristSpot></TouristSpot></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/touristSpot/${params.id}`)
      },
      {
        path: "/myList",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/touristSpot')
      },
      {
        path: "/aboutUs",
        element: <About></About>
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/myAccount",
        element: <PrivateRoute><MyAccount></MyAccount></PrivateRoute>
      },
      {
        path: "/addTouristSpot",
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
      },
      {
        path: "/updateTouristSpot/:id",
        element: <PrivateRoute><UpdateTouristSpot></UpdateTouristSpot></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/touristSpot/${params.id}`)
      },
      // {
      //   path: "/touristSpotWithSameCountry/:id",
      //   element: <PrivateRoute><TouristSpotWithSameCountry></TouristSpotWithSameCountry></PrivateRoute>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/country/${params.id}`)
      // },
      {
        path: "/touristSpotWithSameCountry/:id",
        element: <PrivateRoute><TouristSpotWithSameCountry></TouristSpotWithSameCountry></PrivateRoute>,
        // loader: ({ params }) => fetch(`http://localhost:5000/country/${params.id}`)
        loader: async ({ params }) => {
          const countryId = params.id;
          const countryResponse = await fetch(`http://localhost:5000/country/${countryId}`);
          const countryData = await countryResponse.json();

          const allCountryResponse = await fetch("http://localhost:5000/country");
          const allCountryNameData = await allCountryResponse.json();

          const allTouristSpotResponse = await fetch('http://localhost:5000/touristSpot');
          const allTouristSpotData = await allTouristSpotResponse.json();

          // Combine and return the fetched data
          return { countryData, allTouristSpotData, allCountryNameData };
        }
      },

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
