import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import cityResult from "../../pages/CityResult Page";
import cityData from "../../utils/cities";

console.log(cityResult);

export class Maps extends React.Component {
  render() {
    const cityID = window.location.pathname.split("/").pop();
    let lat;
    let lng;
    cityData.forEach((data) => {
      // console.log(data);
      if (data.id === parseInt(cityID)) {
        // console.log("city->", data);
        lat = data.position.lat;
        lng = data.position.lng;
      }
    });
    console.log(process.env.REACT_APP_API_KEY_MAP);
    console.log(cityID);
    const mapStyles = {
      width: "100%",
      height: "100%",
    };
    return (
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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_API_KEY_MAP}`,
})(Maps);
