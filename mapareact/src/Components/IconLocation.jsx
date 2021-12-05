 
import L from "leaflet";
import Icon from '../icons/icon.svg'
import IconCurrent from '../icons/currentLocation.svg'

export const IconLocation = L.icon({
  iconUrl: Icon,
  iconRetinaUrl: Icon,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});

export const IconCurrentLocation = L.icon({
  iconUrl: IconCurrent,
  iconRetinaUrl: IconCurrent,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});