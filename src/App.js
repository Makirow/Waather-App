import './App.css';
import Login from './Login';
import Register from './Register';
import Container from './Pages/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
   
    <Container/>
      <BrowserRouter>
      
                 <Routes>
                         <Route element={<Register/>} path='/signup'>    </Route>
                         <Route element={<Login/>} path='/login'>    </Route>
                         <Route element={<Container/>} path='/homepage'>    </Route>
                 </Routes>
      
      </BrowserRouter>

       
        
                
 

    </>
    
  );
}

export default App;
