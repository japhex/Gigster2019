import React, {Component} from 'react'
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps"
import './GigMap.scss';

class GigMap extends Component {
	render() {
		return (
			<GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places"}
	containerElement={<div style={{ height: `400px` }} />}
	mapElement={<div style={{ height: `100%` }} />}>
				{this.props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
			</GoogleMap>
		);
	}
}

export default withGoogleMap(GigMap);