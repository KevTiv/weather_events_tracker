import {Icon} from '@iconify/react';
import locationFireIcon from '@iconify/icons-mdi/fire-alert';
import locationVolcanoIcon from '@iconify/icons-mdi/image-filter-hdr';
import locationCloudIcon from '@iconify/icons-mdi/weather-pouring';

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
            </div>
        </>
    )
}
const LocationVolcanoMarker = ({lat, lng, onClick}:LocationMarkerProps) => {
    return (
        <>
            <div className="location-fire-marker" onClick={onClick}>
                <Icon icon={locationVolcanoIcon} className="icon-marker text-yellow-300"/>
            </div>
        </>
    )
}
const LocationStormMarker = ({lat, lng, onClick}:LocationMarkerProps) => {
    return (
        <>
            <div className="location-fire-marker" onClick={onClick}>
                <Icon icon={locationCloudIcon} className="icon-marker text-blue-200"/>
            </div>
        </>
    )
}

export {LocationFireMarker, LocationVolcanoMarker, LocationStormMarker};
