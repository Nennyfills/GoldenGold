import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { GoogleComponent } from "react-google-location";

const API_KEY = "AIzaSyCzXfRT1Id_N98PDyn1EqhZGIhutA4jZdc";

class Mymap extends Component {
  state = {
    markers: [
      { lat: 37.4224764, lng: -122.0842499 },
      { lat: 37.5224764, lng: -121.0842499 },
      { lat: 37.3224764, lng: -120.0842499 }
    ]
  };

  onMarkerClick(marker, event) {}
  render() {
    return (
      <Map google={this.props.google} zoom={11} className="mapA">
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          {/* <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div> */}
        </InfoWindow>
      </Map>
    );
  }
}

// export default GoogleApiWrapper({apiKey :"AIzaSyCzXfRT1Id_N98PDyn1EqhZGIhutA4jZdc" })(Mymap);

export default GoogleApiWrapper({
  apiKey: "AIzaSyCzXfRT1Id_N98PDyn1EqhZGIhutA4jZdc"
})(Mymap);
