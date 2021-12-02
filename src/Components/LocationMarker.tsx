import {Icon} from '@iconify/react';
import locationFireIcon from '@iconify/icons-ic/outline-local-fire-department';
import locationVolcanoIcon from '@iconify/icons-emojione-monotone/snow-capped-mountain';
import locationCloudIcon from '@iconify/icons-wi/storm-showers';

type LocationMarkerProps ={
    lat: number,
    lng: number,
    onClick: ()=>void
}
const LocationFireMarker = ({lat, lng, onClick}:LocationMarkerProps) => {
    return (
        <>
            <div className="location-fire-marker" onClick={onClick}>
                <Icon icon={locationFireIcon} className="icon-marker text-red-600"/>
                {/* <img src={locationFireIcon} alt="fire icon" className="icon-marker text-red-600"/> */}
            </div>
        </>
    )
}
const LocationVolcanoMarker = ({lat, lng, onClick}:LocationMarkerProps) => {
    return (
        <>
            <div className="location-volcano-marker" onClick={onClick}>
                <Icon icon={locationVolcanoIcon} className="icon-marker text-yellow-300"/>
                {/* <img src={locationVolcanoIcon} alt="volcano icon" className="icon-marker text-red-600"/> */}
            </div>
        </>
    )
}
const LocationStormMarker = ({lat, lng, onClick}:LocationMarkerProps) => {
    return (
        <>
            <div className="location-storm-marker" onClick={onClick}>
                <Icon icon={locationCloudIcon} className="icon-marker text-blue-200"/>
                {/* <img src={locationCloudIcon} alt="storm icon" className="icon-marker text-red-600"/> */}
            </div>
        </>
    )
}

export {LocationFireMarker, LocationVolcanoMarker, LocationStormMarker};
