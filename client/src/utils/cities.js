const cityList = [
  {
    city: "Hong Kong",
    country: "China",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "London",
    country: "United Kingdom",
    continent: "Europe",
    climate: "",
    image: "",
  },
  {
    city: "Macau",
    country: "China",
    continent: "Asia",
    climate: "tropica;",
    image: ""
  },
  {
    city: "Singapore",
    country: "Singapore",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Paris",
    country: "France",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },

  {
    city: "Dubai",
    country: "UAE",
    continent: "Asia",
    climate: "desert",
    image: "",
  },

  {
    city: "New York City",
    country: "US",
    continent: "North America",
    climate: "temperate",
    image: "",
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    continent: "Asia",
    climate: "mediterranean",
    image: "",
  },
  {
    city: "Delhi",
    country: "India",
    continent: "",
    climate: "tropical",
    image: "",
  },

  {
    city: "Antalya",
    country: "Turkey",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Shenzhen",
    country: "China",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Mumbai",
    country: "India",
    continent: "Asia",
    climate: tropical"
    , image: "",
  },

  {
    city: "Phuket",
    country: "Thailand",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Rome",
    country: "Italy",
    continent: "Europe",
    climate: "mediterranean",
    image: "",
  },

  {
    city: "Tokyo",
    country: "Japan",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Pattaya",
    country: "Thailand",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Taipei",
    country: "Taiwan",
    continent: "Asia",
    climate: "tropical",
    image: ""
  },
  {
    city: "Mecca",
    country: "Saudi Arabia",
    continent: "Asia",
    climate: "desert",
    image: "",
  },
  {
    city: "Guangzhou",
    country: "China",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Prague",
    country: "Czechia",
    continent: "Erope",
    climate: "temperate",
    image: "",
  },
  {
    city: "Medina",
    country: "Saudi Arabia",
    continent: "Asia",
    climate: "desert",
    image: "",
  },
  {
    city: "Seoul",
    country: "South Korea",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },
  {
    city: "Agra",
    country: "India",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Miami",
    country: "US",
    continent: "North America",
    climate: "temperate",
    image: "",
  },

  {
    city: "Osaka",
    country: "Japan",
    continent: "Asia",
    climate: "temperate",
    image: "",
  },

  {
    city: "Los Angeles",
    country: "US",
    continent: "North America",
    climate: "temperate",
    image: "",
  },

  {
    city: "Shanghai",
    country: "China",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Ho Chi Minh City",
    country: "Vietnam",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Denpasar",
    country: "Indonesia",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Barcelona",
    country: "Spain",
    continent: "Europe",
    climate: "mediterranean",
    image: "",
  },
  {
    city: "Las Vegas",
    country: "US",
    continent: "North America",
    climate: "desert",
    image: "",
  },

  {
    city: "Milan",
    country: "Italy",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },

  {
    city: "Chennai",
    country: "India",
    continent: "",
    climate: "",
    image: "",
  },

  {
    city: "Vienna",
    country: "Austria",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },

  {
    city: "Johor Bahru",
    country: "Malaysia",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Jaipur",
    country: "India",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Cancun",
    country: "Mexico",
    continent: "North America",
    climate: "tropical"
      image: "",
  },

  {
    city: "Berlin",
    country: "Germany",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },

  {
    city: "Cairo",
    country: "Egypt",
    continent: "Africa",
    climate: "desert",
    image: "",
  },

  {
    city: "Athens",
    country: "Greece",
    continent: "Europe",
    climate: "mediterranean",
    image: "",
  },

  {
    city: "Orlando",
    country: "US",
    continent: "North America",
    climate: "tropical",
    image: "",
  },

  {
    city: "Moscow",
    country: "Russia",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },

  {
    city: "Venice",
    country: "Italy",
    continent: "Europe",
    climate: "mediterranean",
    image: "",
  },

  {
    city: "Madrid",
    country: "Spain",
    continent: "Europe",
    climate: "mediterranean",
    image: "",
  },

  {
    city: "Ha Long",
    country: "Vietnam",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Riyadh",
    country: "Saudi Arabia",
    continent: "Asia",
    climate: "desert",
    image: "",
  },
  {
    city: "Dublin",
    country: "Ireland",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },

  {
    city: "Florence",
    country: "Italy",
    continent: "Europe",
    climate: "mediterranean",
    image: "",
  },

  {
    city: "Ha Noi",
    country: "Vietnam",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Toronto",
    country: "Canada",
    continent: "North America",
    climate: "temperate",
    image: "",
  },

  {
    city: "Johannesburg",
    country: "South Africa",
    continent: "Africa",
    climate: "tropical",
    image: "",
  },
  {
    city: "Sydney",
    country: "Australia",
    continent: "Oceania",
    climate: "temperate",
    image: "",
  },
  {
    city: "Munich",
    country: "Germany",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },

  {
    city: "Jakarta",
    country: "Indonesia",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Beijing",
    country: "China",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "St. Petersburg",
    country: "Russia",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },

  {
    city: "Brussels",
    country: "Belgium",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },

  {
    city: "Jerusalem",
    country: "Israel",
    continent: "Asia",
    climate: "mediterranean",
    image: "",
  },

  {
    city: "Budapest",
    country: "Hungary",
    continent: "Europe",
    climate: "tropical",
    image: "",
  },

  {
    city: "Lisbon",
    country: "Portugal",
    continent: "Europe",
    climate: "Mediterranean",
    image: "",
  },

  {
    city: "Dammam",
    country: "Saudi Arabia",
    continent: "Asia",
    climate: "desert",
    image: "",
  },

  {
    city: "Penang Island",
    country: "Malaysia",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Heraklion",
    country: "Greece",
    continent: "Europe",
    climate: "mediterranean",
    image: "",
  },

  {
    city: "Kyoto",
    country: "Japan",
    continent: "Asia",
    climate: "temperate",
    image: "",
  },

  {
    city: "Zhuhai",
    country: "China",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Vancouver",
    country: "Canada",
    continent: "North America",
    climate: "temperate",
    image: "",
  },
  {
    city: "Chiang Mai",
    country: "Thailand",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },
  {
    city: "San Francisco",
    country: "US",
    continent: "North America",
    climate: "temperate",
    image: "",
  },
  {
    city: "Melbourne",
    country: "Australia",
    continent: "Oceania",
    climate: "temperate",
    image: "",
  },
  {
    city: "Krakow",
    country: "Poland",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },

  {
    city: "Marrakech",
    country: "Morocco",
    continent: "Africa",
    climate: "tropical",
    image: "",
  },
  {
    city: "Kolkatta",
    country: "India",
    continent: "Asia",
    climate: "tropical",
    image: ""
  },
  {
    city: "Cebu",
    country: "Philippines",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Auckland",
    country: "New Zealand",
    continent: "Oceania",
    climate: "temperate",
    image: "",
  },
  {
    city: "Tel Aviv",
    country: "Israel",
    continent: "Asia",
    climate: "mediterranean",
    image: "",
  },
  {
    city: "Guilin",
    country: "China",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Honolulu",
    country: "US",
    continent: "North America",
    climate: "tropical",
    image: "",
  },

  {
    city: "Hurgada",
    country: "Egypt",
    continent: "Africa",
    climate: "desert",
    image: "",
  },

  {
    city: "Warsaw",
    country: "Poland",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },

  {
    city: "Mugla",
    country: "Turkey",
    continent: "Asia",
    climate: "mediterranean",
    image: "",
  },

  {
    city: "Buenos Aires City",
    country: "Argentina",
    continent: "South America",
    climate: "tropical",
    image: "",
  },
  {
    city: "Chiba",
    country: "Japan",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Frankfurt",
    country: "Germany",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },
  {
    city: "Stockholm",
    country: "Sweden",
    continent: "Europe",
    climate: "temperate",
    image: "",
  },
  {
    city: "Lima",
    country: "Peru",
    continent: "South America",
    climate: "temperate",
    image: "",
  },

  {
    city: "Da Nang",
    country: "Vietnam",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Batam",
    country: "Indonesia",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Nice",
    country: "France",
    continent: "Europe",
    climate: "mediterranean",
    image: "",
  },

  {
    city: "Fukuoka",
    country: "Japan",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Abu Dhabi",
    country: "UAE",
    continent: "Asia",
    climate: "desert",
    image: "",
  },

  {
    city: "Jeju",
    country: "South Korea",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },
  {
    city: "Porto",
    country: "Portugal",
    continent: "Europe",
    climate: "mediterranean",
    image: "",
  },

  {
    city: "Rhodes",
    country: "Greece",
    continent: "Europe",
    climate: "mediterranean",
    image: "",
  },

  {
    city: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    climate: "tropical",
    image: "",
  },
  {
    city: "Krabi",
    country: "Thailand",
    continent: "Asia",
    climate: "tropical",
    image: "",
  },

  {
    city: "Bangalore",
    country: "India",
    climate: "tropical",
    image: "https://images.pexels.com/photos/2889701/pexels-photo-2889701.jpeg",
  },
];
export default cityList;
