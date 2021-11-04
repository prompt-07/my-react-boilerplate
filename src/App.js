import React,{ Suspense } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import Navbar from './AppComponents/Navbar/Navbar'
import Footer from './AppComponents/Footer/Footer'

const Home = React.lazy(() => import('./Pages/Home'))


function App() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
    <div className='App'>
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Product' element={<Home/>}/>
      </Routes>

      <Footer />
      
    </Router>
    </div>
    </Suspense>
  );
}

export default App;
