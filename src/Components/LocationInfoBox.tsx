
type locationInfoProps ={
    info:{
        eventType: string,
        id: string,
        title: string
    }
}
const LocationInfoBox = ({info}:locationInfoProps) => {
    return (
        <>
            <div className="location-info-container w-96 p-4 
                bg-gray-400 text-red-800 text-2xl rounded-xl opacity-70">
                <h2 className="p-4">{info.eventType} Location Info</h2>
                <ul className="p-6">
                    <li> Id: <strong>{info.id}</strong></li>
                    <li>Title: <strong>{info.title}</strong></li>
                </ul>
            </div>
        </>
    )
}

export default LocationInfoBox
