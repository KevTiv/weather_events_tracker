import {useState, useEffect} from 'react';
import '../Styles/App/App.css';
import Loader from '../Components/Loader';
import Map from '../Components/Map';
import Header from '../Components/Header';
import ButtonControl from '../Components/ButtonControl';


function App() {
  const [eventData, setEventData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  const [showFires, setShowFires] = useState<boolean>(false);
  const [showVolcanos, setShowVolcanos] = useState<boolean>(false);
  const [showStorms, setShowStorms] = useState<boolean>(false);

  useEffect(() => {
    const fetchEvents = async ()=>{
      
      const nasaApiUrl:string = process.env.REACT_APP_NASA_EVENT_API!;
      try {
        setLoading(true);
        const res = await fetch(nasaApiUrl);
        const { events } = await res.json();

        setEventData(events);
        setLoading(false);
      } catch (error) {
        console.error("Could not access NASA API")
      }
    }
    fetchEvents();
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
    </div>
  );
}

export default App;
