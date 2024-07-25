import ContactHeader from './components/UI/ContactHeader/ContactHeader';
import NavBar from './components/UI/NavBar/NavBar';
import Home from './components/mainPage/Home';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import EquipmentMain from './components/Equipments/EquipmentMain';
import MainPageFooter from './components/mainPage/MainPageFooter/MainPageFooter';
import Predictions from './components/ML/Predictions';
import AboutUs from './components/aboutUs/AboutUs';
import FertilizerForm from './components/ML/FertilizerForm';
import CropRecommendation from './components/ML/CropRecommendation';
import ProfilePage from './components/profile/ProfilePage';
import ImagePredictionMain from './components/ImagePrediction/ImagePredictionMain';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [username,setUsername] = useState("");
  const [loggedIn,setLoggin] = useState(false);
  const [mode,setMode]=useState(false);
    const getStartedHandler=()=>{
        if(mode===false)
        setMode(true);
        else 
        setMode(false);
    }
 
  return (
    <Router>
    <div className="App">
      <ContactHeader logValue={loggedIn} setLogged={setLoggin} setuser={setUsername}></ContactHeader>
      <NavBar mode={mode} getStartedHandler={getStartedHandler} setLoguser={setUsername} setlogged={setLoggin}></NavBar>
      <Routes>
      <Route exact path="/" element={<Home mode={mode} getStartedHandler={getStartedHandler}></Home>} />
      <Route path="/equipments" element={<EquipmentMain username={username} loggedIn={loggedIn}></EquipmentMain>} />
      <Route path="/ImagePrediction" element={<ImagePredictionMain></ImagePredictionMain>} />
      <Route path="/predictions" element={<Predictions></Predictions>}></Route>
      <Route path="/aboutUs" element = {<AboutUs></AboutUs>}></Route>
      <Route path="/fertilizer" element = {<FertilizerForm></FertilizerForm>}></Route>
      <Route path= "/crop_recommendation" element = {<CropRecommendation logValue={loggedIn} username={username}></CropRecommendation>}></Route>
      <Route path='/ProfilePage' element={<ProfilePage user={username} logValue={loggedIn}></ProfilePage>}></Route>
      </Routes>
      <MainPageFooter></MainPageFooter>
    </div>
    </Router>
  );
}

export default App;
