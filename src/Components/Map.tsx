import {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {LocationFireMarker, LocationVolcanoMarker, LocationStormMarker} from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

//Props defintions for TS.
type mapProps = {
    eventData: any[],
    zoom: number,
    center:{
        lat: number,
        lng: number
    },
    showFires: boolean,
    showVolcanos: boolean,
    showStorms: boolean
}
type infoProps={
    id: string,
    details: string
}
//Google map component
const Map = ({eventData, center, zoom, showFires, showVolcanos, showStorms}: mapProps) => {
    //API key stored in .env file
    const googleMapApiKey:string|undefined = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
    const [eventLocationInfo, setEventLocationInfo] = useState<infoProps>();
    //Fire markers object
    const fireMarkers = eventData.map((event:any) =>{
        if(event.categories[0].id === 'wildfires'){
            return(
                <LocationFireMarker
                    key={event.id}  
                    lat={event.geometry[0].coordinates[1]} 
                    lng={event.geometry[0].coordinates[0]} 
                    onClick={()=>{
                        setEventLocationInfo({
                            id: event.id,
                            details: event.title
                        })
                        
                    }}
                />
            )
        }else{
            return null;
        }
        
    })
    //Volcano markers object
    const volcanoMarkers = eventData.map((event:any) =>{
        if(event.categories[0].id === 'volcanoes'){
            return(
                <LocationVolcanoMarker
                    key={event.id}  
                    lat={event.geometry[0].coordinates[1]} 
                    lng={event.geometry[0].coordinates[0]} 
                    onClick={()=>{
                        setEventLocationInfo({
                            id: event.id,
                            details: event.title
                        })
                        
                    }}
                />
            )
        }else{
            return null;
        }
    })
    //Storm markers object
    const stormMarkers = eventData.map((event:any) =>{
        if(event.categories[0].id === 'severeStorms'){
            return(
                <LocationStormMarker
                    key={event.id}  
                    lat={event.geometry[0].coordinates[1]} 
                    lng={event.geometry[0].coordinates[0]} 
                    onClick={()=>{
                        setEventLocationInfo({
                            id: event.id,
                            details: event.title
                        })
                        
                    }}
                />
            )
        }else{
            return null;
        }
    })
    return (
        <>
            <div className="map-container">
                <div className="google-map">
                    <GoogleMapReact
                        bootstrapURLKeys = {{key:googleMapApiKey!}}
                        defaultCenter={center}
                        defaultZoom={zoom}
                    >
                        {(showFires) ? fireMarkers : <></>}
                        {(showVolcanos) ? volcanoMarkers : <></>}
                        {(showStorms) ? stormMarkers : <></>}
                    </GoogleMapReact>
                </div>
                {eventLocationInfo && <LocationInfoBox info={eventLocationInfo}/>}
            </div>
        </>
        
    )
}
//Default location the google map react component will load to.
Map.defaultProps = {
    center: {
        //Ajacio, corsica, france geo location.
        lat: 41.926701,
        lng: 8.736900
    },
    zoom:6
}
export default Map
