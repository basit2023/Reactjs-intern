import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import UserProfile from './components/UserProfile';
// import Header from './components/Header';
import UseEff from './components/UseEff';
import UseMem from './components/UseMem';
import Usecallback from './components/Usecallback';
import Useref from './components/Useref';
import LoginForm from './components/LoginButton';
function App() {

  const email=""
  const number="030399999999999999999999"
  const [count, setCount] = useState(0)

  function increment() {
     setCount(count + 1);
  }
  return (
	// <Header/>
    <Router>
    
     
      <Routes>
        <Route path="/" element={<LoginForm />} />
         
        <Route path="/" element={<Home />} />
        {/* <Route path="/About" element={<AboutUs number={number}/>} /> */}

        <Route path="/About" element={<AboutUs number={number} count={count} pressme={increment}/>} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/data" element={<UseEff />} />
        <Route path="/usememo" element={<UseMem />} />
        <Route path="/callback" element={<Usecallback />} />
        <Route path="/useref" element={<Useref />} />
      </Routes>
    </Router>










  );
}

export default App;