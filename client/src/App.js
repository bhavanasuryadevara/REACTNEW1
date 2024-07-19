import React from 'react';
import Main from './Components/Main';
import Login from './Components/login';
import Signup from './Components/signup.jsx'; // Make sure to import Signup correctly

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VerifyEmail from './Components/Verifyemail.jsx';
import PhoneNumberForm from './Components/PhoneNumberForm.jsx';
import OtpForm from './Components/Otpverification.jsx';

import DesignCards1 from './Components/Card3.jsx';
//import LoginPage from './Components/Loginemail.jsx';
import Emailverification from './Components/Emailverification.jsx';
import KitchenDesigns from './Components/Mod.jsx';
import BannerComponent from './Components/Storelocater.jsx';
import Modularjourney from './Components/Modularjourney.jsx';
import ForgetPassword from './Components/Forgetpassword.jsx';
import ResetPassword from './Components/Resetpassw.jsx';
import Tables from './Components/Table.jsx';
import FileUploader from './Components/FileUploader.jsx';
import TradeTable from './Components/TradeTable.jsx';
import TradeTable2 from './Components/TradeTable2.jsx';

import Bardata from './Components/Chart.jsx';
import PieChart from './Components/Piechart.jsx';
import Demodata from './Components/BarChartComponent';
import PieChartComponent from './Components/BarChartComponent';
import Demodataapi from './Components/Api1.jsx';

import LiveCandlestickChart from './Components/Api2.jsx';

import CarouselPrice from './Components/Price.jsx';
import Referafrend from './Components/Referafrend.jsx';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/DesignCards' element={<DesignCards1/>}/>
        <Route path='/KitchenDesigns' element={<KitchenDesigns/>}/>
        <Route path='/Store' element={<BannerComponent/>}/>
        <Route path='/Signup' element={<Signup/>}/> {/* Use Signup component here */}
        <Route path='/Mod' element={<Modularjourney/>}/>
        <Route path='/verifyEmail' element={<VerifyEmail/>}/> 
        <Route path='/PhoneNumberForm' element={<PhoneNumberForm/>}/>
        <Route path='/otpVerification' element={<OtpForm/>}/> 
        <Route path='/Emailverification' element={<Emailverification/>}/> 
        <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
        <Route path='/ResetPassword'element={<ResetPassword/>}/>
    
        <Route path='/Table' element={<Tables/>}/>
        <Route path='/FileUploader' element={<FileUploader/>}/>
        <Route path='/TradeTable'element={<TradeTable/>}/>
        <Route path='/security/:id/:name_slug' element={<TradeTable2/>}/>
        <Route path='/Bardata' element={<Bardata/>}/>
        <Route path='/PieChart' element={<PieChart/>}/>
        <Route path='/Demodata'element={<Demodata/>}/> 
        <Route path='/PieChartComponent' element={<PieChartComponent/>}/> 
        <Route path='/Demodataapi'element={<Demodataapi/>}/>
        <Route path='/LiveCandlestickChart'element={<LiveCandlestickChart/>}/>
        <Route path='/CarouselPrice' element={<CarouselPrice/>}/> 
        <Route path='/Referafrend' element={<Referafrend/>}/>      

        </Routes>
    </Router>
  
  );

}

export default App;

















































//api routing
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/hello_world')  // Ensure the correct URL for your Flask backend
//       .then(response => response.json())
//       .then(data => setMessage(data.message))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       {message && <h1>{message}</h1>}
//     </div>
//   );
// }

// export default App;





























// not working 
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('/hello_world')
//       .then(response => response.json())
//       .then(data => setMessage(data.message))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       {message && <h1>{message}</h1>}
//     </div>
//   );
// }

// export default App;
