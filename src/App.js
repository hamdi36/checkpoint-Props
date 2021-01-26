import './App.css';
import React from 'react';
import ProfileComponent from './Profile/ProfileComponent';
import img1 from './Profile/img1.png';

const App=()=> {
  function handleName(){
    return (alert("Hamdi ben jemaa"));
  }
  return (
    <div className="App">
      <ProfileComponent fullName='Hamdi ben jemaa' bio='student' profession='dealer' Name={handleName}>
        <div>
          <img src={img1} alt="profile"/>
        </div>
      </ProfileComponent>
    </div>
  );
}

export default App;
