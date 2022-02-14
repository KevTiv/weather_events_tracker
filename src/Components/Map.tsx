/* import {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {LocationFireMarker, LocationVolcanoMarker, LocationStormMarker} from './LocationMarker';

import locationFireIcon from '@iconify/icons-ic/outline-local-fire-department';
import locationVolcanoIcon from '@iconify/icons-emojione-monotone/snow-capped-mountain';
import locationCloudIcon from '@iconify/icons-wi/storm-showers';

import LocationInfoBox from './LocationInfoBox';*/

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

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
// type infoProps={
//     id: string,
//     details: string
// }

//Google map component
const Map = ({eventData, center, zoom, showFires, showVolcanos, showStorms}: mapProps) => {
    //API key stored in .env file
    // const googleMapApiKey:string|undefined = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
    // const [eventLocationInfo, setEventLocationInfo] = useState<infoProps>();
    
   
    //Fire markers object
    const fireMarkers = eventData.map((event:any) =>{
        if(event.categories[0].id === 'wildfires'){
            return(
                // <LocationFireMarker
                //     key={event.id}  
                //     lat={event.geometry[0].coordinates[1]} 
                //     lng={event.geometry[0].coordinates[0]} 
                //     onClick={()=>{
                //         setEventLocationInfo({
                //             id: event.id,
                //             details: event.title
                //         })
                        
                //     }}
                // />
                <Marker position={[event.geometry[0].coordinates[1],event.geometry[0].coordinates[0]]}>
                    <Popup>
                        <h2>id: {event.id},</h2><br/>
                        <h2>details: {event.title}</h2>
                    </Popup>
                </Marker>
            )
        }else{
            return null;
        }
        
    })
    //Volcano markers object
    const volcanoMarkers = eventData.map((event:any) =>{
        if(event.categories[0].id === 'volcanoes'){
            return(
                // <LocationVolcanoMarker
                //     key={event.id}  
                //     lat={event.geometry[0].coordinates[1]} 
                //     lng={event.geometry[0].coordinates[0]} 
                //     onClick={()=>{
                //         setEventLocationInfo({
                //             id: event.id,
                //             details: event.title
                //         })
                        
                //     }}
                // />

                <Marker position={[event.geometry[0].coordinates[1],event.geometry[0].coordinates[0]]}>
                    <Popup>
                        <h2>id: {event.id},</h2><br/>
                        <h2>details: {event.title}</h2>
                    </Popup>
                </Marker>
            )
        }else{
            return null;
        }
    })
    //Storm markers object
    const stormMarkers = eventData.map((event:any) =>{
        if(event.categories[0].id === 'severeStorms'){
            return(
                // <LocationStormMarker
                //     key={event.id}  
                //     lat={event.geometry[0].coordinates[1]} 
                //     lng={event.geometry[0].coordinates[0]} 
                //     onClick={()=>{
                //         setEventLocationInfo({
                //             id: event.id,
                //             details: event.title
                //         })
                        
                //     }}
                // />
                <Marker position={[event.geometry[0].coordinates[1],event.geometry[0].coordinates[0]]}>
                    <Popup>
                        <h2>id: {event.id},</h2><br/>
                        <h2>details: {event.title}</h2>
                    </Popup>
                </Marker>

            )
        }else{
            return null;
        }
    })
    return (
        <>
            <div className="map-container">
                {/* <div className="google-map">
                    <GoogleMapReact
                        bootstrapURLKeys = {{key:googleMapApiKey!}}
                        defaultCenter={center}
                        defaultZoom={zoom}
                    >
                        {(showFires) ? fireMarkers : <></>}
                        {(showVolcanos) ? volcanoMarkers : <></>}
                        {(showStorms) ? stormMarkers : <></>}
                    </GoogleMapReact>
                </div> */}
                <MapContainer center={[center.lat, center.lng]} zoom={zoom}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                        {(showFires) ? fireMarkers : <></>}
                        {(showVolcanos) ? volcanoMarkers : <></>}
                        {(showStorms) ? stormMarkers : <></>}
                </MapContainer>
                {/* {eventLocationInfo && <LocationInfoBox info={eventLocationInfo}/>} */}
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
    zoom:4
}
export default Map
