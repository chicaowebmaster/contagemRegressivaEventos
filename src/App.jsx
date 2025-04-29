import NewYear from "./assets/newyear.jpg";
import { Outlet } from 'react-router-dom';

import { useContext } from "react";
import { CountdownContext } from "./context/CountdownContext";

import './App.css'

function App() {
    const { event } = useContext(CountdownContext);

    let eventImage = null;

    if(event) eventImage = event.image;

    return (
    <>
      <div className="app" 
      style={eventImage ? 
      { backgroundImage: `url(${eventImage})` } : 
      { backgroundColor: "#C6C6C6" } }>
         <div className="container">
           <Outlet />
         </div>
      </div>
    </>
  )
}

export default App
