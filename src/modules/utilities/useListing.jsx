import { useState, useEffect } from 'react';

const DISPLAYED = 4;

const useListing = () => {
  const [title, setTitle] = useState('  ');
  const [maxGuests, setMaxGuests] = useState('  ');
  const [bedrooms, setBedrooms] = useState('  ');
  const [beds, setBeds] = useState('  ');
  const [baths, setBaths] = useState('  ');
  const [host, setHost] = useState('  ');
  const [email, setEmail] = useState('  ');
  const [description, setDescription] = useState(' ');
  const [sizedDescription, setSizedDescription] = useState(' ');
  const [arrangements, setArrangements] = useState([]);
  const [amenitiesBasics, setAmenitiesBasics] = useState([]);
  const [amenitiesExtras, setAmenitiesExtras] = useState(Object.create(null));
  const [amenitiesHilites, setAmenitiesHilites] = useState([]);
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
    const amenitiesHilitesSet = new Set();
    const amenitesLength = amenitiesArray.length;
    setAmenitiesNumber(amenitesLength);
    for (let i = 0; i < DISPLAYED; i += 1) {
      // pick a random index
      const indexToShow = Math.floor(amenitesLength / (i + 1)) - 1;
      amenitiesHilitesSet.add(amenitiesArray[indexToShow]);
    }
    const amenitiesHilitesArray = Array.from(amenitiesHilitesSet);
    setAmenitiesHilites(amenitiesHilitesArray);
  }, [amenitiesExtras]);


  useEffect(() => {
    // eslint-disable-next-line no-undef
    const descriptionArray = description.split(' ');
    let shortenDescription = '';
    for (let i = 0; i < 29; i += 1) {
      if (descriptionArray[i] !== undefined) {
        shortenDescription += `${descriptionArray[i]} `;
      } else { shortenDescription += '      '; }
    }
    if (descriptionArray[30] !== undefined) {
      shortenDescription += `${descriptionArray[30]}...`;
    } else { shortenDescription += '      '; }

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
