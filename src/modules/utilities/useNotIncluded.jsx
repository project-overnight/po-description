import { useState, useEffect } from 'react';
import useListing from './useListing';


const basicsSwitch = (basicsIndex) => {
  switch (basicsIndex) {
    case 0: {
      return 'SmokeDetector';
    }
    case 1: {
      return 'COdetector';
    }
    case 2: {
      return 'Wifi';
    }
    case 3: {
      return 'Desk';
    }
    case 4: {
      return 'Essentials';
    }
    case 5: {
      return 'Heating';
    }
    case 6: {
      return 'AC';
    }
    case 7: {
      return 'TV';
    }
    case 8: {
      return 'Washer';
    }
    case 9: {
      return 'HairDryer';
    }
    case 10: {
      return 'Shampoo';
    }
    case 11: {
      return 'Kitchen';
    }
    case 12: {
      return 'PrivateEntrance';
    }
    default: {
      return '';
    }
  }
};

const useNotIncluded = () => {
  const [notIncluded, setNotIncluded] = useState([]);
  const { amenitiesBasics } = useListing();

  useEffect(() => {
    const notIncludedBasics = amenitiesBasics.map((bool, i) => (!bool ? i : true))
      .filter((bool) => bool !== true)
      .map((indexValue) => basicsSwitch(indexValue));
    console.log(notIncludedBasics);
    setNotIncluded(notIncludedBasics);
  }, [amenitiesBasics]);

  return {
    notIncluded,
  };
};

export default useNotIncluded;
