import { useState, useEffect } from 'react';

const DISPLAYED = 4;

const useListing = () => {
  const [title, setTitle] = useState('');
  const [maxGuests, setMaxGuests] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [host, setHost] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [sizedDescription, setSizedDescription] = useState('');
  const [arrangements, setArrangements] = useState([]);
  const [amenitiesBasics, setAmenitiesBasics] = useState([]);
  const [amenitiesExtras, setAmenitiesExtras] = useState(Object.create(null));
  const [amenitiesHilites, setAmenitiesHilites] = useState();
  const [amenitiesNumber, setAmenitiesNumber] = useState('');

  const fetchListing = async (listingNumber) => {
    let response = await fetch(`/api/description/${listingNumber}`);
    response = await response.json();
    setTitle(response.title);
    setMaxGuests(response.maxGuests);
    setBedrooms(response.bedrooms);
    setBeds(response.beds);
    setBaths(response.baths);
    setHost(response.host);
    setEmail(response.email);
    setDescription(response.description);
    setArrangements(response.arrangements);
    setAmenitiesBasics(response.amenities.basics);
    setAmenitiesExtras(response.amenities.extras);
  };

  useEffect(() => {
    // this HOF puts the names of all the amenities in an array.
    const amenitiesArray = Object.values(amenitiesExtras).map((obj) => !null && obj.Amenity);
    const amenitiesHilitesArray = [];
    const amenitesLength = amenitiesArray.length;
    setAmenitiesNumber(amenitesLength);
    for (let i = 0; i < DISPLAYED; i += 1) {
      // pick a random index
      const indexToShow = Math.floor(Math.random() * amenitesLength);
      amenitiesHilitesArray.push(amenitiesArray[indexToShow]);
    }
    setAmenitiesHilites(amenitiesHilitesArray);
  }, [amenitiesExtras]);


  useEffect(() => {
    // eslint-disable-next-line no-undef
    const descriptionArray = description.split(' ');
    let shortenDescription = '';
    for (let i = 0; i < 29; i += 1) {
      shortenDescription += `${descriptionArray[i]} `;
    }
    shortenDescription += `${descriptionArray[30]}...`;
    setSizedDescription(shortenDescription);
  }, [description]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const record = Number.parseInt(params.toString(), 10);
    if (record) {
      fetchListing(record);
    } else {
      fetchListing(1);
      console.error('Try adding a ?2 after the initial /"');
    }
  }, []);

  return {
    title,
    maxGuests,
    bedrooms,
    beds,
    baths,
    host,
    email,
    description,
    sizedDescription,
    arrangements,
    amenitiesBasics,
    amenitiesExtras,
    amenitiesHilites,
    amenitiesNumber,
  };
};

export default useListing;
