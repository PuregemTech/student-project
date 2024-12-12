import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
//import LandingPage from './assets/LandingPage.png';
//import LandingPageHeader from './components/landingPageHeader';
import Login from './components/login';
import LandingPage from './components/landingPage';
import Register from './components/register';
import Home from './components/home';
import Tests from './components/tests';
import Instruction from './components/instruction';
import Question from './components/question';
import Score from './components/score';

function App () {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/student-project" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/question" element={<Question />} />
        <Route path="/score" element={<Score />} />

      </Routes>
      {/* <LandingPage /> */}
    </React.Fragment>
  );
}

export default App;
