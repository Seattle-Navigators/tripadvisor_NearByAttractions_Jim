// import React from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import key from '../../../MapAPI'

// const style = {
//   width: '100%',
//   height: '372px'
// }
 
// const MapContainer = ({ location, attractions, restaurants }) => {
//   return (
//     <div className="map">
//       <Map 
//         google={window.google} 
//         style={style} 
//         initialCenter={location} 
//         zoom={10}
//       >
//         <Marker 
//           position={location}
//         />
//         {attractions.map((attraction) => {
//           return (
//             <Marker 
//               position={attraction.location} 
//               icon={{ 
//                 url: "https://cdn2.iconfinder.com/data/icons/building-vol-1-6/512/12-512.png",
//                 scaledSize: new google.maps.Size(15, 15),
//               }}
//             />
//           )
//         })}
//         {restaurants.map((restaurant) => {
//           return (
//             <Marker 
//               position={restaurant.location} 
//               icon={{ 
//                 url:"https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/eat-circle-orange-512.png",
//                 scaledSize: new google.maps.Size(15, 15),
//               }}
//             />
//           )
//         })}
//       </Map>
//     </div>
//   );
// }

 
// export default GoogleApiWrapper({
//   apiKey: (key)
// })(MapContainer)