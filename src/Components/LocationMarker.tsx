import {Icon} from '@iconify/react';
import locationFireIcon from '@iconify/icons-mdi/fire-alert';

type LocationMarkerProps ={
    lat: number,
    lng: number,
    onClick: ()=>void
}
const LocationFireMarker = ({lat, lng, onClick}:LocationMarkerProps) => {
    return (
        <>
            <div className="location-fire-marker" onClick={onClick}>
                <Icon icon={locationFireIcon} className="icon-fire-marker text-3xl text-red-600"/>
            </div>
        </>
    )
}
const LocationVolcanoMarker = ({lat, lng, onClick}:LocationMarkerProps) => {
    return (
        <>
            <div className="location-fire-marker" onClick={onClick}>
                <Icon icon={locationFireIcon} className="icon-volcano-marker text-3xl text-brown-500"/>
            </div>
        </>
    )
}
const LocationIceMarker = ({lat, lng, onClick}:LocationMarkerProps) => {
    return (
        <>
            <div className="location-fire-marker" onClick={onClick}>
                <Icon icon={locationFireIcon} className="icon-Ice-marker text-3xl text-blue-600"/>
            </div>
        </>
    )
}

export {LocationFireMarker, LocationVolcanoMarker, LocationIceMarker};
