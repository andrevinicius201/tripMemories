import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
// import placesData from './assets/placesData';
import axios from 'axios';
import React from 'react';

function GetTripData(){
  const {useState, useEffect} = React
  const [trips, setTrips] = useState([])

  useEffect(() => {
    axios
      .get("https://8w954fz0dl.execute-api.us-east-1.amazonaws.com/getTripInformation")
      .then(res =>
        setTrips(res.data)
      )
  }, [])

  const data = trips
  return (
    data.map(trip => 
      <Card
        key={trip.id}
        {...trip}
      />
    )
  )
}

function App() {
  return (
    <div>
      <Navbar/>
      <GetTripData/>
    </div>
  );
}

export default App;
