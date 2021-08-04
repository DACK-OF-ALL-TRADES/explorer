import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import cityData from "../../utils/cities";

export class Maps extends React.Component {
  render() {
    const cityID = window.location.pathname.split("/").pop();
    let lat;
    let lng;
    cityData.forEach((data) => {
      if (data.id === parseInt(cityID)) {
        lat = data.position.lat;
        lng = data.position.lng;
      }
    });
    const mapStyles = {
      width: "100%",
      height: "100%",
    };
    return (
      <div
        style={{
          height: 350,
          width: "100%",
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "center",
          padding: 0,
        }}
      >
        <Map
          google={this.props.google}
          zoom={7}
          style={mapStyles}
          initialCenter={{
            lat: lat,
            lng: lng,
          }}
        >
          <Marker
            position={{
              lat: lat,
              lng: lng,
            }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_API_KEY_MAP}`,
})(Maps);
