import {useState, useEffect} from 'react';
import '../Styles/App/App.css';
import Loader from '../Components/Loader';
import Map from '../Components/Map';
import Header from '../Components/Header';
import ButtonControl from '../Components/ButtonControl';
import Footer from '../Components/Footer';


function App() {
  const [currentYear, setCurrentYear] = useState<number>(0);
  const [eventData, setEventData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  const [showFires, setShowFires] = useState<boolean>(false);
  const [showVolcanos, setShowVolcanos] = useState<boolean>(false);
  const [showStorms, setShowStorms] = useState<boolean>(false);

  useEffect(() => {
    const currentYear = ()=>{
      const curDate = new Date();
      setCurrentYear(curDate.getFullYear());
    }
    const fetchEvents = async ()=>{
      
      const nasaApiUrlV3:string = process.env.REACT_APP_NASA_EVENT_API_V3!;
      try {
        setLoading(true);
        const res = await fetch(nasaApiUrlV3);
        const { events } = await res.json();

        setEventData(events);
        setLoading(false);
      } catch (error) {
        console.error("Could not access NASA API")
      }
    }

    fetchEvents();
    currentYear();
  },[]);

  return (
    <div className="App">
      <Header/>
      <div className="weather-app-visual">
        { !loading ? <Map eventData = {eventData} showFires={showFires} showVolcanos={showVolcanos} showStorms={showStorms}/> : <Loader /> }
        
        <ButtonControl 
          onClickFireEvents={(e) =>{
            e.preventDefault();
            setShowFires(!showFires)}
          } 
          onClickVolcanosEvents={(e)=>{
            e.preventDefault();
            setShowVolcanos(!showVolcanos)
          }
          } 
          onClickStormsEvents={(e)=>{
            e.preventDefault();
            setShowStorms(!showStorms)}
          } 
        />
      </div>
      <Footer currentYear={currentYear}/>
    </div>
  );
}

export default App;
