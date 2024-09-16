"use client";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 45.28462480439077,
      lng: -75.76100089207875,
    },
    zoom: 12,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={45.28037950182421}
          lng={-75.57115449028393}
          text={<FaMapMarkerAlt color="red" size={32} />}
        />
      </GoogleMapReact>
    </div>
  );
}
