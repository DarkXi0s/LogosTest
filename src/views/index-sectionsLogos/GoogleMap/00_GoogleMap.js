import React, { Component } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const LIBRARIES = ["places"];

class Map extends Component {
  render() {
    const { center, zoom } = this.props;

    return (
      <div className="wrapper">
        <LoadScript
          googleMapsApiKey="AIzaSyDSoxzHe9khsoO3CbaUDT0JBgLhZ-BHY_0"
          libraries={LIBRARIES}
        >
          <GoogleMap
            id="map"
            center={center}
            zoom={zoom}
            mapContainerStyle={{
              height: "17rem",
              maxHeight: "100%",
              width: "auto",
            }}
          >
            {/*  Marker component */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}

export default Map;
