const titleMods = ['Charming', 'Downtown', 'Historic', 'Hidden Gettaway', 'Quaint', 'New', 'Luxury', 'Spacious', 'Private', 'Eclectic', 'Quiet', 'Craftsman', 'Art Deco', '', '', '', '', '', '', '']; // 20
const titleTypes = ['Tiny Home', 'Studio', 'Trailer', 'Loft', 'Apartment', 'Condominium', 'Residence', 'Home', 'Mansion', 'Villa']; // 10
const Names = ['Elroy', 'Evie', 'Lenard', 'Alesha', 'Arnulfo', 'Florence', 'Zane', 'Apryl', 'Elwood', 'Kenyetta', 'Bert', 'Caterina', 'Colton', 'Ashlea', 'Mac', 'Lawanda', 'Dick', 'Christeen', 'Lloyd', 'Jackqueline', 'Gil', 'Vicki', 'Tommy', 'Jovan', 'Barrett', 'Sandee', 'Jacob', 'Solange', 'Gayle', 'Kemberly', 'Vaughn', 'Ellie', 'Tony', 'Sophia', 'Graig', 'Myrta', 'Ezekiel', 'Paulene', 'Dudley', 'Alvina', 'Marc', 'Madlyn', 'Woodrow', 'Youlanda', 'Jeremy', 'Alberta', 'Lionel', 'Jeanmarie', 'Donte', 'Brianne', 'Eddy', 'Tereasa', 'Tony', 'Tiera', 'Anthony', 'Sonja', 'Erick', 'Adah', 'Jeromy', 'Anika', 'Ignacio', 'Azzie', 'Hosea', 'Marietta', 'Toney', 'Cecila', 'Guadalupe', 'Nancy', 'Gerardo', 'Charise', 'Oswaldo', 'Margarite', 'Ashley', 'Jeanice', 'Frederick', 'Ilana', 'Glen', 'Marquetta', 'Keven', 'Annabell', 'Jules', 'Simone', 'Wally', 'Yevette', 'Ellis', 'Elenore', 'Dannie', 'Celena', 'Efrain', 'Emilia', 'Wendell', 'Marth', 'Emmanuel', 'Neely', 'Claude', 'Marceline', 'Ian', 'Kathlyn', 'Malcom', 'Hilde'];
const Surnames = ['Pierson', 'Ducote', 'Battey', 'Cobble', 'Reinhold', 'Shontz', 'Zapata', 'Deane', 'Jeske', 'Priddy', 'Vaughn', 'Tracey', 'Turley', 'Austria', 'Easler', 'Blystone', 'Bunting', 'Taubman', 'Leighty', 'Calcagno', 'Pasquale', 'Pilla', 'Friley', 'Wojciechowski', 'Sondag', 'Blau', 'Hazelrigg', 'Outler', 'Wilborn', 'Harmon', 'Webster', 'Marney', 'Heck', 'Mccawley', 'Mincy', 'Regal', 'Flatley', 'Rundle', 'Darcangelo', 'Boyland', 'Wince', 'Marshal', 'Oberle', 'Mckenna', 'Pawlowicz', 'Scola', 'Means', 'Moor', 'Hernandes', 'Needham', 'Shiley', 'Mosby', 'Arredondo', 'Blay', 'Esper', 'Metoyer', 'Eanes', 'Koster', 'Gilman', 'Greeson', 'Evitt', 'Mccutchen', 'Otey', 'Manning', 'Ladwig', 'Sheahan', 'Fuller', 'Pick', 'Mitschke', 'Cadle', 'Ramires', 'Heaps', 'Kratochvil', 'Tse', 'Swift', 'Jarnigan', 'Devries', 'Quayle', 'Marmo', 'Cutting', 'Kulas', 'Tubman', 'Canela', 'Outten', 'Korando', 'Gaona', 'Tudor', 'Fukuda', 'Nicolas', 'Ulman', 'Humes', 'Kratochvil', 'Bartman', 'Provence', 'Mikkelsen', 'Jess', 'Kovach', 'Poff', 'Brizendine', 'Westling'];
const fakeText = ['Nam ac dolor consectetur risus mollis sollicitudin ut a augue. In sed bibendum est. Morbi ac turpis risus. Aliquam semper luctus felis, a maximus velit pellentesque nec. Morbi lectus augue, bibendum ac sapien eget, suscipit maximus lorem. Nulla elit neque, posuere eu condimentum non, condimentum id erat. Nunc sapien elit, iaculis quis felis vel, sodales malesuada mauris. Praesent nunc tortor, sagittis lacinia posuere id, accumsan vel urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur commodo tempor dignissim.', 'Donec ut urna sed lectus bibendum imperdiet. Sed aliquet, ipsum et cursus pellentesque, dolor elit feugiat magna, at porttitor felis eros ac lectus. Donec consequat iaculis lorem, non laoreet justo ultrices et. Donec ipsum justo, ullamcorper at odio vel, ullamcorper congue nibh. Aenean blandit aliquam est, eget luctus dolor euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tincidunt, neque nec auctor mollis, nibh felis dapibus nulla, scelerisque vehicula sem dolor sit amet augue. In porttitor turpis sit amet dignissim auctor. Suspendisse placerat quam in mollis commodo. Cras venenatis, augue sed dictum elementum, nibh libero euismod ligula, id volutpat nibh nulla sit amet justo. Suspendisse lacinia vel velit non blandit. Morbi mollis massa lacus, vitae elementum velit fermentum at.', 'Morbi sed ornare magna. In hac habitasse platea dictumst. Ut a erat eu mi tempus convallis et id orci. Fusce imperdiet condimentum ex ac ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo mi. Praesent vel augue arcu.', 'Maecenas non elit congue, hendrerit libero sed, hendrerit est. Curabitur efficitur molestie urna. Fusce non elementum ligula, a condimentum sapien. Maecenas condimentum nulla sed urna tempor blandit. Aliquam a sem diam. Ut pulvinar ligula purus, dignissim finibus lorem dignissim ac. Aenean nisl erat, blandit in porttitor eget, pretium a nunc. Ut id ante quis libero dictum egestas. Morbi sodales sit amet sapien et vehicula.', 'Duis bibendum lectus et leo molestie, non pharetra ipsum placerat. Etiam in elit et nisl venenatis efficitur. Curabitur rutrum mauris id sapien fermentum dignissim. Pellentesque volutpat nunc ut vehicula ultricies. Nulla gravida feugiat dignissim. Aliquam ornare urna in massa sagittis auctor. Suspendisse placerat nibh quis tellus consectetur accumsan. Aenean sed mauris diam. Suspendisse fermentum lectus et vulputate gravida. Cras feugiat mi in nunc commodo, sit amet gravida mi eleifend. Pellentesque eleifend ex dignissim, eleifend felis a, porta massa. Phasellus vitae mauris nec erat accumsan laoreet quis in lorem. Sed tincidunt augue neque, sed condimentum metus tincidunt vel. Cras ultrices lorem justo, vitae sollicitudin magna sollicitudin sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean at enim gravida, gravida leo a, dapibus est.', 'Nunc varius finibus suscipit. Donec efficitur, mauris sit amet sagittis laoreet, risus magna faucibus neque, at ornare sapien leo vitae ante. Praesent mattis vel ante vitae viverra. Aliquam nec purus suscipit, tincidunt arcu suscipit, efficitur enim. Ut imperdiet lorem venenatis, interdum est sed, semper lacus. Suspendisse hendrerit lorem eu dolor pretium sodales. Curabitur condimentum euismod ex a finibus. Praesent pharetra commodo hendrerit. Mauris fermentum rutrum nibh at sollicitudin. Aliquam sit amet orci eros. Nam et nisl in orci vehicula dictum id non quam. Nullam non congue lorem. Sed eget odio eget ex pharetra posuere a ac metus. Sed in elementum libero, vel suscipit dolor. Duis rutrum odio et lacus semper, auctor luctus ipsum luctus. Sed imperdiet massa a nulla malesuada consequat.', 'Nullam egestas consectetur orci, vel cursus nisi tincidunt nec. Etiam quam elit, cursus porta massa ac, ultrices eleifend sapien. Curabitur euismod libero ac mi volutpat, in iaculis augue pharetra. Sed accumsan gravida ligula, ac ultrices dolor posuere eu. Vestibulum ac lobortis quam. In id pulvinar lectus. Quisque varius elit eu vestibulum tincidunt. Nulla ut vestibulum massa. Duis quis turpis tristique, porta ligula vel, aliquet tortor. In metus nunc, feugiat ac urna at, accumsan molestie metus. Curabitur ex nisi, dapibus eu viverra non, fringilla in felis.', 'In ac ligula id odio suscipit sollicitudin ut pharetra dui. Maecenas laoreet erat justo, nec gravida magna tincidunt at. Aliquam porta felis non nunc semper, in cursus lacus dapibus. Donec tristique, erat sed gravida gravida, orci lacus laoreet turpis, id ornare est ligula non enim. Suspendisse sit amet diam pretium nisl posuere lacinia ut at nisl. Maecenas ac lorem in ligula ultricies egestas eget ut enim. Vivamus diam lectus, lobortis ac urna sit amet, semper faucibus metus. Proin eu fringilla eros, at vestibulum ligula. Sed hendrerit erat vitae rutrum euismod.', 'Suspendisse id laoreet risus, vitae tempus ante. Duis eu lectus ultricies, congue magna porttitor, tristique quam. Nullam rutrum purus ante, non laoreet diam pellentesque eu. Integer gravida eget orci nec placerat. In mattis eros diam, a tempus sapien tincidunt vel. Sed sapien lectus, posuere eget blandit vitae, porttitor a sapien. Etiam in malesuada lacus.', 'Donec nulla lacus, gravida vitae laoreet eu, pellentesque quis lacus. Praesent efficitur eget magna venenatis ultrices. Donec tincidunt nunc libero, at pulvinar velit tincidunt eget. Nunc non mauris et lectus mattis tristique nec et dui. In rutrum, dui ac ornare pulvinar, lorem purus mollis tellus, a posuere libero mi sit amet dolor. Fusce bibendum erat et sagittis iaculis. Maecenas volutpat ligula massa, et sodales diam pharetra et. In ultricies maximus erat ac volutpat. Vestibulum scelerisque, felis nec euismod bibendum, ipsum orci lacinia tortor, et venenatis ex sapien ornare purus. Cras ac tristique magna. Pellentesque consequat, diam sit amet consectetur ornare, massa dui egestas orci, eget maximus tortor mi nec justo. Vivamus ornare purus at lacinia cursus. Donec sollicitudin est non nisi consectetur congue. Maecenas fermentum aliquet dui sed accumsan. Maecenas non lorem nulla.'];
const amenitiesPossibilities = [
  { Amenity: 'First aid kit', Category: 'Safety Features' },
  { Amenity: 'Fire extinguisher', Category: 'Safety Features' },
  { Amenity: 'Indoor fireplace', Category: 'Basics' },
  { Amenity: 'Iron', Category: 'Basics' },
  { Amenity: 'Elevator', Category: 'Facilities' },
  { Amenity: 'Free Parking', Category: 'Facilities' },
  { Amenity: 'Gym', Category: 'Facilities' },
  { Amenity: 'Free Street Parking', Category: 'Facilities' },
  { Amenity: 'Paid Parking', Category: 'Facilities' },
  { Amenity: 'Pool', Category: 'Facilities' },
  { Amenity: 'Hot Tub', Category: 'Facilities' },
  { Amenity: 'Sauna', Category: 'Facilities' },
  { Amenity: 'Crib', Category: 'Family Features' },
  { Amenity: 'Children\'s books and toys', Category: 'Family Features' },
  { Amenity: 'Room Darkening Shades', Category: 'Family Features' },
  { Amenity: 'Bathtub', Category: 'Family Features' },
  { Amenity: 'Dishwasher', Category: 'Dining' },
  { Amenity: 'Cooking basics', Category: 'Dining' },
  { Amenity: 'Oven', Category: 'Dining' },
  { Amenity: 'Dishes and silverware', Category: 'Dining' },
  { Amenity: 'Refrigerator', Category: 'Dining' },
  { Amenity: 'Microwave', Category: 'Dining' },
  { Amenity: 'Stove', Category: 'Dining' },
  { Amenity: 'Private entrance', Category: 'Guest access' },
  { Amenity: 'Host greets you', Category: 'Guest access' },
  { Amenity: 'Keypad', Category: 'Guest access' },
  { Amenity: 'Cleaning before checkout', Category: 'Logistics' },
  { Amenity: 'Luggage dropoff allowed', Category: 'Logistics' },
  { Amenity: 'Hangers', Category: 'Bed and Bath' },
  { Amenity: 'Bed linens', Category: 'Bed and Bath' },
  { Amenity: 'Extra pillows', Category: 'Bed and Bath' },
  { Amenity: 'Shower gel', Category: 'Bed and Bath' },
  { Amenity: 'Patio', Category: 'Outdoor' },
  { Amenity: 'BBQ grill', Category: 'Outdoor' },
];
const bedTypes = ['Twin bed', 'Double bed', 'Queen bed', 'King Bed'];

const generateData = (entries) => {
  const mockData = [];
  for (let i = 0; i < entries; i += 1) {
    const size = Math.floor(Math.random() * 10);
    const title = `${titleMods[Math.floor(Math.random() * 20)]} ${titleTypes[size]}`;
    const name = `${Names[i]}`;
    const surname = `${Surnames[i]}`;
    const host = `${name} ${surname}`;
    const email = `${name}${surname}${Math.floor(Math.random() * 100)}@gmail.com`;
    let description = fakeText[Math.ceil(Math.random() * 5) + 5];
    const maxGuests = size * Math.floor(Math.random() * 2);
    let bedrooms = 0;
    let beds = 1;
    let baths = 0;
    let extrasNumber = 0;
    const paragraphCount = Math.ceil(Math.random() * 3);
    for (let j = 0; j < paragraphCount; j += 1) {
      const first = Math.floor(Math.random() * 5);
      const second = Math.floor(Math.random() * 5) + first;
      description += fakeText[first];
      description += fakeText[second];
    }
    switch (true) {
      case size < 2:
        beds = Math.ceil(Math.random() * 2);
        baths = Math.random() > 0.5 ? 1 : 0;
        extrasNumber = Math.ceil(Math.random() * 2) * size * 3;
        break;
      case size < 5:
        bedrooms = Math.ceil(Math.random() * 2);
        beds = bedrooms + Math.ceil(Math.random() * 2);
        baths = Math.random() > 0.5 ? 2 : 1;
        extrasNumber = Math.ceil(Math.random() * 2) * size * 3;
        break;
      case size < 8:
        bedrooms = Math.floor(Math.random() * 2) + 2;
        beds = bedrooms + Math.floor(Math.random() * bedrooms);
        baths = Math.random() > 0.5
          ? Math.ceil(Math.random() * bedrooms) + bedrooms
          : Math.ceil(Math.random() * bedrooms);
        extrasNumber = Math.ceil(Math.random() * 2) * size * 4;
        break;
      case size < 10:
        bedrooms = Math.floor(Math.random() * 4) + 4;
        beds = bedrooms + Math.floor(Math.random() * bedrooms);
        baths = Math.random() > 0.5
          ? Math.ceil(Math.random() * 2 * bedrooms) + bedrooms
          : Math.ceil(Math.random() * bedrooms) + bedrooms;
        extrasNumber = Math.ceil(Math.random() * 2) * size * 5;
        break;
      default:
        break;
    }


    const basics = [];
    for (let j = 0; j < 13; j += 1) {
      const coinFlip = Math.random() + (size / 30) > 0.5 ? 1 : 0;
      basics.push(!!coinFlip);
    }

    const indexes = basics.map(
      (bool, index) => (bool ? index : 0),
    ).filter(
      (index) => index !== 0,
    );

    const amenities = new Map();

    indexes.forEach((basicsIndex) => {
      switch (basicsIndex) {
        case 0: {
          amenities.set('1', {
            Amenity: 'SmokeDetector',
            Category: 'Safety Features',
          });
          break;
        }
        case 1: {
          amenities.set('2', {
            Amenity: 'COdetector',
            Category: 'Safety Features',
          });
          break;
        }
        case 2: {
          amenities.set('3', {
            Amenity: 'Wifi',
            Category: 'Basics',
          });
          break;
        }
        case 3: {
          amenities.set('4', {
            Amenity: 'Desk',
            Category: 'Basics',
          });
          break;
        }
        case 4: {
          amenities.set('5', {
            Amenity: 'Essentials',
            Category: 'Basics',
          });
          break;
        }
        case 5: {
          amenities.set('6', {
            Amenity: 'Heating',
            Category: 'Basics',
          });
          break;
        }
        case 6: {
          amenities.set('7', {
            Amenity: 'AC',
            Category: 'Basics',
          });
          break;
        }
        case 7: {
          amenities.set('8', {
            Amenity: 'TV',
            Category: 'Basics',
          });
          break;
        }
        case 8: {
          amenities.set('9', {
            Amenity: 'Washer',
            Category: 'Basics',
          });
          break;
        }
        case 9: {
          amenities.set('10', {
            Amenity: 'HairDryer',
            Category: 'Bed and Bath',
          });
          break;
        }
        case 10: {
          amenities.set('11', {
            Amenity: 'Shampoo',
            Category: 'Bed and Bath',
          });
          break;
        }
        case 11: {
          amenities.set('12', {
            Amenity: 'Kitchen',
            Category: 'Dining',
          });
          break;
        }
        case 12: {
          amenities.set('13', {
            Amenity: 'PrivateEntrance',
            Category: 'Basics',
          });
          break;
        }
        default: {
          break;
        }
      }
    });
    const extras = new Set();
    for (let j = 0; j < extrasNumber; j += 1) {
      const extra = Math.ceil(Math.random() * 34);
      extras.add(amenitiesPossibilities[extra]);
    }
    let amenitiesIndex = 13;
    extras.forEach((extra) => {
      amenities.set(`${amenitiesIndex}`, extra);
      amenitiesIndex += 1;
    });


    const rooms = [];
    let roomIterator = 1;
    const extraBeds = bedrooms ? beds % bedrooms : beds;
    if (extraBeds === 1) {
      rooms.push({ room: 'Common Spaces', furniture: [{ type: 'couch', count: 1 }] });
      for (let j = 0; j < bedrooms; j += 1) {
        const bedModel = bedTypes[Math.floor(Math.random() * 4)];
        rooms.push({ room: `bedroom${roomIterator}`, furniture: [{ type: bedModel, count: 1 }] });
        roomIterator += 1;
      }
    } else if (extraBeds > 1 && bedrooms === 0) {
      const bedModel = bedTypes[Math.floor(Math.random() * 4)];
      rooms.push({ room: 'Common Spaces', furniture: [{ type: 'couch', count: 1 }, { type: bedModel, count: extraBeds - 1 }] });
    } else if (extraBeds >= 2) {
      rooms.push({ room: 'Common Spaces', furniture: [{ type: 'couch', count: 1 }] });
      let bedsRemaining = beds - 1;
      for (let j = 0; j < bedrooms; j += 1) {
        const bedModel = bedTypes[Math.floor(Math.random() * 4)];
        const bedCount = (bedsRemaining / (bedrooms - (roomIterator - 1))) === 2 ? 2 : 1;
        rooms.push({ room: `bedroom${roomIterator}`, furniture: [{ type: bedModel, count: bedCount }] });
        roomIterator += 1;
        bedsRemaining -= bedCount;
      }
    } else {
      for (let j = 0; j < bedrooms; j += 1) {
        const bedModel = bedTypes[Math.floor(Math.random() * 4)];
        rooms.push({ room: `bedroom${roomIterator}`, furniture: [{ type: bedModel, count: 1 }] });
        roomIterator += 1;
      }
    }
    const datum = {
      id: i,
      title,
      maxGuests,
      bedrooms,
      beds,
      baths,
      host,
      email,
      description,
      arrangements: rooms,
      amenities: {
        basics,
        extras: amenities,
      },
    };
    mockData.push(datum);
  }
  return mockData;
};

module.exports.generateData = generateData;
