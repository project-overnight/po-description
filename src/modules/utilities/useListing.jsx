import { useState, useEffect } from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

function useListing() {
  const [title, setTitle] = useState('');
  const [maxGuests, setMaxGuests] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [host, setHost] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [sizedDescription, setSizedDesciption] = useState('');
  const [arrangements, setArrangements] = useState([]);
  const [amenitiesBasics, setAmenitiesBasics] = useState([]);
  const [amenitiesExtras, setAmenitiesExtras] = useState();

  const fetchListing = async () => {
    let response = await fetch('/api/description/1');
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
    // eslint-disable-next-line no-undef
    const descriptionArray = description.split(' ');
    let shortenDescription = '';
    for (let i = 0; i < 29; i += 1) {
      shortenDescription += `${descriptionArray[i]} `;
    }
    shortenDescription += `${descriptionArray[30]}...`;
    setSizedDesciption(shortenDescription);
  }, [description]);

  useEffect(() => {
    fetchListing();
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
  };
}

export default useListing;
