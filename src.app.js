
import React from 'react';
import './App.css';

const App = () => {
  const trips = [
    {
      title: 'Victoria Falls',
      location: 'Zimbabwe',
      date: 'June 2025',
      description: 'Experience the majestic waterfalls.',
      image: 'https://picsum.photos/id/1018/300/200',
      mapLink: 'https://maps.google.com/?q=Victoria+Falls'
    }
  ];

  return (
    <div className="app">
      <h1>🌍 My Travel Journey</h1>
      {trips.map((trip, index) => (
        <div className="card" key={index}>
          <img src={trip.image} alt={trip.title} className="card-image" />
          <div className="card-content">
            <h2>{trip.title}</h2>
            <p><strong>Location:</strong> {trip.location}</p>
            <p><strong>Date:</strong> {trip.date}</p>
            <p>{trip.description}</p>
            <a href={trip.mapLink} target="_blank" rel="noreferrer">View on Google Maps</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
