import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Marker.css';

const AnyReactComponent = ({ text }) => <div className="marker" style={{
  marginTop: '40px',
  background: '#FFF',
  color: "#000",
  display: 'inline-block',
  width: '32px',
  height: '32px',
  border: '6px solid #f33',
  borderRadius: ' 28px 28px 28px 0',
  transform: 'rotate(-45deg)',
  position: 'relative',
  boxShadow: '-1px 1px 2px rgba(0,0,0,.2)',


}}>{text}</div>;

class MiniMap extends Component {
  constructor(props) { //若要使用這個方法
    super(props) //必須先執行super(props)，若有用到props的話會找不到this.props，沒用到props也可以只寫super()
    this.state = {
      currentPage: 'one', //給預設值
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
    }
  }
  static defaultProps = {
    lat: 59.95,
    lng: 30.33
  }
  createMapOptions = {

    // panControl: false,
    // mapTypeControl: false,
    // scrollwheel: false,
    // styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]

  }
  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{
        height: '200px', width: '400px',
        border: '6px solid #f33',
        borderRadius: ' 10px',
        // position: 'relative',
        boxShadow: '-1px 1px 2px rgba(0,0,0,.2)',
      }}>
        <GoogleMapReact

          options={this.createMapOptions}
          bootstrapURLKeys={{ key: 'AIzaSyAHhhfSK9oqKXuDBvL0jgsbmxY6kmfh0hE' }}
          defaultCenter={
            {
              lat: this.props.lat,
              lng: this.props.lng
            }
          }
          defaultZoom={this.state.zoom}>
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text={this.props.text} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MiniMap;