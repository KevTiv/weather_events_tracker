import {useState, useEffect} from 'react';
import '../Styles/App/App.css';
import Loader from '../Components/Loader';
import Map from '../Components/Map';


function App() {
  const [eventData, setEventData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchEvents = async ()=>{
      
      //const nasaURL:string = process.env.REACT_APP_NASA_EVENT_API!;
      const nasaApiUrl:string = 'https://eonet.gsfc.nasa.gov/api/v2.1/events';
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
      { !loading ? <Map eventData = {eventData} /> : <Loader /> }
    </div>
  );
}

export default App;
