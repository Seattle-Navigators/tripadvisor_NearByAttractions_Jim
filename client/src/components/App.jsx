import React from 'react';
import axios from 'axios';
import CurrrentAttInfo from './CurrentAttInfo';
import BestNearByContainer from './BestNearByContainer';
import Map from './Map';
import MapContainer from './newMapCont';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attractionId: props.attractionId,
      contact: '',
      location: '',
      nearByAttractions: [],
      nearByRestaurants: [],
      nearByExperience: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('/018/api/nearbyattractions')
      .then((res) => {
        const attractionDoc = res.data;
        this.setState({
          attractionId: attractionDoc.attractionId,
          contact: attractionDoc.contact,
          location: attractionDoc.location,
          nearByAttractions: attractionDoc.nearByAttractions,
          nearByRestaurants: attractionDoc.nearByRestaurants,
          nearByExperience: attractionDoc.nearbyExperience,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { 
      contact, location, nearByAttractions, nearByRestaurants, nearByExperience 
    } = this.state;
    return (
      <div>
        <MapContainer />
        <CurrrentAttInfo contact={contact} />
        <BestNearByContainer location={location} 
          attractions={nearByAttractions}
          experience={nearByExperience}
          restaurants={nearByRestaurants}
        />
        <Map location={location} restaurants={nearByRestaurants} attractions={nearByAttractions}/>
      </div>
    );
  }
}

export default App;
