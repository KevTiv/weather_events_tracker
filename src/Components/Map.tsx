import {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {LocationFireMarker, LocationVolcanoMarker, LocationIceMarker} from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
//Props defintions for TS.
type mapProps = {
    eventData: any[],
    zoom: number,
    center:{
        lat: number,
        lng: number
    }
}
type infoProps={
    eventType: string,
    id: string,
    title: string
}
//Google map component
const Map = ({eventData, center, zoom}: mapProps) => {
    //API key stored in .env file
    const googleMapApiKey:string|undefined = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
    const [eventLocationInfo, setEventLocationInfo] = useState<infoProps>();
    const onClickFireIcon = ()=>{
        console.log('clicked')

    }

    const fireMarkers = eventData.map((event:any) =>{
        if(event.categories[0].id === 8){
            return(
                <LocationFireMarker
                    key={event.id}  
                    lat={event.geometries[0].coordinates[1]} 
                    lng={event.geometries[0].coordinates[0]} 
                    onClick={()=>{
                        setEventLocationInfo({
                            id: event.id,
                            title: event.title,
                            eventType: event.categories[0].title
                        })
                    }}
                />
            )
        }else{
            return null;
        }
        
    })
    const volcanoMarkers = eventData.map((event:any) =>{
        if(event.categories[0].id === 12){
            return(
                <LocationVolcanoMarker
                    key={event.id}  
                    lat={event.geometries[0].coordinates[1]} 
                    lng={event.geometries[0].coordinates[0]} 
                    onClick={()=>{
                        setEventLocationInfo({
                            id: event.id,
                            title: event.title,
                            eventType: event.categories[0].title
                        })
                    }}
                />
            )
        }else{
            return null;
        }
    })
    const IceMarkers = eventData.map((event:any) =>{
        if(event.categories[0].id === 15){
            return(
                <LocationIceMarker
                    key={event.id}  
                    lat={event.geometries[0].coordinates[1]} 
                    lng={event.geometries[0].coordinates[0]} 
                    onClick={()=>{
                        setEventLocationInfo({
                            id: event.id,
                            title: event.title,
                            eventType: event.categories[0].title
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
            <div className="map-container w-10/12">
                <GoogleMapReact
                    bootstrapURLKeys = {{key:googleMapApiKey!}}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    {/* <LocationFireMarker lat={center.lat} lng={center.lng} onClick={onClickFireIcon}/> */}
                    
                    {fireMarkers}
                    {volcanoMarkers}
                    {IceMarkers}
                </GoogleMapReact>
                {eventLocationInfo && <LocationInfoBox info={eventLocationInfo}/>}
            </div>
        </>
        
    )
}
//Default location the google map react component will load to.
Map.defaultProps = {
    center: {
        lat: 41.926701,
        lng: 8.736900
    },
    zoom:6
}
export default Map
