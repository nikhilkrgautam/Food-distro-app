import React from 'react'
import { withFirebaseHOC } from '../firebase'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

var myIcon = L.icon({
  iconUrl: 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/67-512.png',
  iconSize: [40, 51],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
})

class Leaflet extends React.Component {
  constructor(props) {
    super(props)
    // this.mapRef = React.createRef()
    this.state = {
      allMarkers: [],
      hasLocation: false,
      latlng: {
        lat: 19.076,
        lng: 72.877,
      },
      zoom: 13,
    }
  }

  componentDidMount() {
    const db = this.props.firebase.db()
    db.collection('restaurant-data').get()
      .then((snap) => {
        snap.docs.forEach((doc, i) => {
          console.log(doc.data().latlong);
          this.setState(state => ({
            allMarkers: [...state.allMarkers, {lat: doc.data().latlng._lat, lng: doc.data().latlng._long, name: doc.data().name}]
          }))
        })
      })
      .catch(err => console.log(err))
  }

  handleClick = (e) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
    console.log(this.state.allMarkers);
  }

  handlePopup = () => {
    this.props.firebase.addMapPoint(this.state.latlng)
      .catch(err => console.log(err))
  }

  render() {
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng} icon={myIcon}>
        <Popup>
          <h2>Select this location?</h2>
          <button onClick={this.handlePopup}>Confirm</button>
        </Popup>
      </Marker>
    ) : null

    let allMarkers = []

    this.state.allMarkers.forEach((mark, i) => {
      console.log(mark)
      allMarkers.push((
        <Marker position={{lat: mark.lat, lng: mark.lng}} icon={myIcon}>
          <Popup>
            <h2>{mark.name}</h2>
          </Popup>
        </Marker>
      ))
    })


    return (
      <Map style={{height: "800px"}} length={4} center={this.state.latlng} onClick={this.handleClick} zoom={this.state.zoom} ref={this.mapRef}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
        {allMarkers}
      </Map>

    )
  }
}

export default withFirebaseHOC(Leaflet)
