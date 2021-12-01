import { useEffect, useState } from "react"

type locationInfoProps ={
    info:{
        id: string,
        details: string
    }
}
const LocationInfoBox = ({info}:locationInfoProps) => {
    const [eventId, setId] = useState<string>()
    const [eventType,setType] = useState<string>();
    const [eventLocation, setLocation] = useState<string>();
    const [eventCountry, setCountry] = useState<string>();

    
    useEffect(()=>{
        const getInfo = ()=>{
            try {
                setId(info.id);

                const infoDetails = info.details.split(' - ');
                setType(infoDetails[0]);
                setLocation(infoDetails[1]);
                setCountry(infoDetails[2]);
            } catch (err) {
                console.error(err);
            }
            
        }
        getInfo();
    },[info.id])
    return (
        <>
            <div className="location-info-container ">
                <h2>Weather Event Info</h2>
                <ul>
                    <li> Id: <strong>{eventId}</strong></li>
                    <li>Type: <strong>{eventType}</strong></li>
                    {(!eventLocation || eventLocation.length === 0) ? <li></li> : <li>Location: <strong>{eventLocation}</strong></li>}
                    {(!eventCountry || eventCountry.length === 0) ? <li></li> : <li>Country: <strong>{eventCountry}</strong></li>}
                </ul>
            </div>
        </>
    )
}

export default LocationInfoBox
