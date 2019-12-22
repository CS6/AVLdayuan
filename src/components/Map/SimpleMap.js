import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div  style={{
  color: 'white', 
  background: 'grey',
  padding: '15px 10px',
  display: 'inline-flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)'
}}>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11,
    array: [
      { lat: 75.955413, lng: 60.337844 },
      { lat: 77.955413, lng: 55.337844 },
      { lat: 85.955413, lng: 50.337844 },
      { lat: 95.955413, lng: 45.337844 },
    ]
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAHhhfSK9oqKXuDBvL0jgsbmxY6kmfh0hE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />

          {this.props.array.map((index) =>
            <AnyReactComponent lat={index.lat} lng={index.lng} text={'Kreyser Avrora'} /> // eslint-disable-line react/no-array-index-key
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;