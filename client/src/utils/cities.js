const cityList = [
  {
    city: "Hong Kong",
    country: "China",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2017/09/aqua-luna-hong-kong.jpg",
    youtube: "",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://lp-cms-production.imgix.net/2021-03/GettyRF_512268647.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
    youtube: "",
  },
  {
    city: "London",
    country: "United Kingdom",
    continent: "Europe",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image: "https://www.india.com/wp-content/uploads/2018/08/london-1.jpg",
    youtube: "",
  },
  {
    city: "Macau",
    country: "China",
    continent: "Asia",
    climate: "tropical;",
    pop: "Most popular places – more crowded",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-5kGGRQgxLPXoCyaZ4aBJ9NJi6XIb2R2FTb6A56qucKYO374OtUgnc_ah6O8-7bF5GQ&usqp=CAU",
    youtube: "",
  },

  {
    city: "Singapore",
    country: "Singapore",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://www.belaroundtheworld.com/wp-content/uploads/2018/06/Singapore-111.jpg",
    youtube: "https://www.youtube.com/watch?v=C25hvsaN9oo",
  },

  {
    city: "Paris",
    country: "France",
    continent: "Europe",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://media.darpanmagazine.com/library/uploads/lifestyle/content/paris.jpg",
    youtube: "",
  },

  {
    city: "Dubai",
    country: "UAE",
    continent: "Asia",
    climate: "Desert",
    pop: "Most popular places – more crowded",
    image:
      "https://www.worldatlas.com/upload/a3/f2/5a/shutterstock-151616084.jpg",
    youtube: "",
  },

  {
    city: "New York City",
    country: "US",
    continent: "North America",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://i0.wp.com/www.eatthis.com/wp-content/uploads/2019/02/new-york-city.jpg?fit=1200%2C879&ssl=1",
    youtube: "",
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/02/Petronas-Twin-Towers-in-Kuala-Lumpur.jpg",
    youtube: "",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    continent: "Asia",
    climate: "Mediterranean",
    pop: "Most popular places – more crowded",
    image:
      "https://www.ekathimerini.com/wp-content/uploads/2020/07/agia_sophia_web-320x200.jpg",
    youtube: "",
  },
  {
    city: "Delhi",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://media.istockphoto.com/photos/taj-mahal-pool-picture-id500078980?k=6&m=500078980&s=612x612&w=0&h=qWZuk7Skibf8q0f10OZQuY3ZOqUWqSWJS8MeHPDkmh4=",
    youtube: "",
  },

  {
    city: "Antalya",
    country: "Turkey",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://clickstay.s3-eu-west-1.amazonaws.com/images/blog/post/Antalya.jpg",
    youtube: "",
  },

  {
    city: "Shenzhen",
    country: "China",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://www.topchinatravel.com/pic/city/shenzhen/blog/famous-landmark-buildings-in-shenzhen-02.jpg",
    youtube: "",
  },

  {
    city: "Mumbai",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://i.pinimg.com/originals/85/d5/99/85d59953a34db05888071aeea71dc7ae.jpg",
    youtube: "",
  },

  {
    city: "Phuket",
    country: "Thailand",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://a.cdn-hotels.com/gdcs/production153/d1771/2e6084f5-c182-4f94-b793-7dd79bb78762.jpg",
    youtube: "",
  },

  {
    city: "Rome",
    country: "Italy",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Most popular places – more crowded",
    image:
      "https://cdn.thecrazytourist.com/wp-content/uploads/2020/11/ccimage-shutterstock_789412159.jpg",
    youtube: "",
  },

  {
    city: "Tokyo",
    country: "Japan",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://previews.123rf.com/images/richie0703/richie07031906/richie0703190600128/124998998-tokyo-japan-june-12-2019-shibuya-crossing-a-world-famous-and-iconic-intersection-in-shibuya-tokyo-hu.jpg",
    youtube: "",
  },

  {
    city: "Pattaya",
    country: "Thailand",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "http://static.asiawebdirect.com/m/bangkok/portals/pattaya-bangkok-com/homepage/pattaya-top10s/top10-attractions-pattaya-beach/pagePropertiesImage/pattaya66.jpg",
    youtube: "",
  },
  {
    city: "Taipei",
    country: "Taiwan",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image: "https://media.nomadicmatt.com/2021/taipeithings1a.jpg",
    youtube: "",
  },
  {
    city: "Mecca",
    country: "Saudi Arabia",
    continent: "Asia",
    climate: "Desert",
    pop: "Most popular places – more crowded",
    image:
      "https://interactive.aljazeera.com/aje/2021/hajj-mecca-changed-100-years/images/art1.jpg",
    youtube: "",
  },
  {
    city: "Guangzhou",
    country: "China",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://www.rosewoodhotels.com/conversations/conversations/wp-content/uploads/2019/09/Guangzhou-Skyline-GettyImages_small.jpg",
    youtube: "",
  },
  {
    city: "Prague",
    country: "Czechia",
    continent: "Erope",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://blog.goway.com/globetrotting/wp-content/uploads/2018/01/Mala-Strana.-Prague-Czech-Republic_344929856.jpg?x95206",
    youtube: "",
  },
  {
    city: "Medina",
    country: "Saudi Arabia",
    continent: "Asia",
    climate: "Desert",
    pop: "Most popular places – more crowded",
    image:
      "https://i.pinimg.com/originals/57/93/ec/5793ece334c258d03ff9a24126aef656.jpg",
    youtube: "",
  },
  {
    city: "Seoul",
    country: "South Korea",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://media.cntraveler.com/photos/5a70f9d68af0dc48d25daf9f/3:2/w_4448,h_2965,c_limit/Haedong-Yonggungsa-Temple-GettyImages-874460458.jpg",
    youtube: "",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    continent: "Europe",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://www.onhisowntrip.com/wp-content/uploads/2020/05/Netherlands-Tourism.jpg",
    youtube: "",
  },
  {
    city: "Agra",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTScGHhnuCBBSgMjv3JJhUQBQzJnMhMpvzUIg&usqp=CAU",
    youtube: "",
  },

  {
    city: "Miami",
    country: "US",
    continent: "North America",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://i.pinimg.com/736x/72/4c/f3/724cf360483081e48f082fd1d443fedd.jpg",
    youtube: "",
  },

  {
    city: "Osaka",
    country: "Japan",
    continent: "Asia",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://mk0matchateacomwrs9r.kinstacdn.com/wp-content/uploads/2019/01/agathe-marty-1061172-unsplash-1024x683.jpg",
    youtube: "",
  },

  {
    city: "Los Angeles",
    country: "US",
    continent: "North America",
    climate: "Temperate",
    pop: "Most popular places – more crowded",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmXD8oTFKOAnSujzzeveXXP7oWiMn3gM3mAIdx_vQZoH33z6-TqqbNbTGkmmqGJeqCe8&usqp=CAU",
    youtube: "",
  },

  {
    city: "Shanghai",
    country: "China",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Shanghai_at_night.jpg",
    youtube: "",
  },

  {
    city: "Ho Chi Minh City",
    country: "Vietnam",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://i.pinimg.com/originals/36/5d/8c/365d8cf99857ba71816b15572ec10b6b.jpg",
    youtube: "",
  },
  {
    city: "Denpasar",
    country: "Indonesia",
    continent: "Asia",
    climate: "Tropical",
    pop: "Most popular places – more crowded",
    image:
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/fkqhxzslucngzdzi7yfb/Denpasar%20City,%20Bali%20Museum%20and%20Food%20Market%20Tour.jpg",
    youtube: "",
  },
  {
    city: "Barcelona",
    country: "Spain",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Most popular places – more crowded",
    image: "https://ticketshop.barcelona/images/sights-barcelona.jpg",
    youtube: "",
  },
  {
    city: "Las Vegas",
    country: "US",
    continent: "North America",
    climate: "Desert",
    pop: "Between most popular and least popular",
    image:
      "https://www.jetsetter.com//uploads/sites/7/2018/04/e60NxKUK-1-1380x690.jpeg",
    youtube: "",
  },

  {
    city: "Milan",
    country: "Italy",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://www.adequatetravel.com/blog/wp-content/uploads/2020/04/FI-milan-famous-947x500.jpg",
    youtube: "",
  },

  {
    city: "Chennai",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://soravlifestyle.com/wp-content/uploads/2020/04/top-famous-1024x600.jpg",
    youtube: "",
  },

  {
    city: "Vienna",
    country: "Austria",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://i.pinimg.com/736x/aa/90/7a/aa907a1297e515930eb9372c24ac15fb.jpg",
    youtube: "",
  },

  {
    city: "Johor Bahru",
    country: "Malaysia",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://www.sutra.my/wp-content/uploads/2019/05/dataran-jb-1-960x636.jpg",
    youtube: "",
  },
  {
    city: "Jaipur",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/05/Best-time-to-visit1.jpg",
    youtube: "",
  },

  {
    city: "Cancun",
    country: "Mexico",
    continent: "North America",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://upload.travelawaits.com/ta/uploads/2021/05/shutterstock_1107996785-800x800.jpg",
    youtube: "",
  },

  {
    city: "Berlin",
    country: "Germany",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGMaHuPS2HKbuyO7RwvsgE2KY4opuZROlCdBy9bn13LBDaTLvLpMFRK1I9xBp96tbfzU&usqp=CAU",
    youtube: "",
  },

  {
    city: "Cairo",
    country: "Egypt",
    continent: "Africa",
    climate: "Desert",
    pop: "Between most popular and least popular",
    image:
      "https://images.skyscrapercenter.com/building/iconictower_rendering-context_(c)cscec.jpg",
    youtube: "",
  },

  {
    city: "Athens",
    country: "Greece",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image:
      "https://www.grekaddict.com/wp-content/uploads/2019/07/Acropolis-tips-header.1024x576-e1566815022874-1024x576.jpg",
    youtube: "",
  },

  {
    city: "Orlando",
    country: "US",
    continent: "North America",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://d23.com/app/uploads/2016/09/Gallery_092916_wdw-45th-45-photos-gallery_26.jpg",
    youtube: "",
  },

  {
    city: "Moscow",
    country: "Russia",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://qph.fs.quoracdn.net/main-qimg-448e895c9d17613d8e8e462ad05c4f2c.webp",
    youtube: "",
  },

  {
    city: "Venice",
    country: "Italy",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image:
      "http://www.yurtopic.com/travel/destinations/images/italy-places/Venice-lrg.jpg",
    youtube: "",
  },

  {
    city: "Madrid",
    country: "Spain",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image:
      "https://i.pinimg.com/originals/5e/1a/dc/5e1adced83abeab55a3b879f665b00e1.jpg",
    youtube: "",
  },

  {
    city: "Ha Long",
    country: "Vietnam",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://asianwaytravelcom.files.wordpress.com/2017/09/13528310_10201709271329885_1744513689222707595_o.jpg?w=1400",
    youtube: "",
  },
  {
    city: "Riyadh",
    country: "Saudi Arabia",
    continent: "Asia",
    climate: "Desert",
    pop: "Between most popular and least popular",
    image: "",
    youtube: "",
  },
  {
    city: "Dublin",
    country: "Ireland",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://www.planetware.com/photos-tiles/ireland-waterford-cashel-rock.jpg",
    youtube: "",
  },

  {
    city: "Florence",
    country: "Italy",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image:
      "https://twodrifters.us/wp-content/uploads/2021/03/shutterstock_1043431975.jpg",
    youtube: "",
  },

  {
    city: "Ha Noi",
    country: "Vietnam",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://www.travelassociates.com/sites/v2.travel-associates.com.au/files/fcl-blog/hanoi-hoankiem.jpg",
    youtube: "",
  },

  {
    city: "Toronto",
    country: "Canada",
    continent: "North America",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://localfoodtours.com/wp-content/uploads/2018/07/cn-tower-and-tourist-attractions-things-to-do-in-toronto.jpg",
    youtube: "",
  },

  {
    city: "Johannesburg",
    country: "South Africa",
    continent: "Africa",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image:
      "https://www.andbeyond.com/wp-content/uploads/sites/5/Johannesburg-Skyline.jpg",
    youtube: "",
  },
  {
    city: "Sydney",
    country: "Australia",
    continent: "Oceania",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/1200px-Sydney_Opera_House_-_Dec_2008.jpg",
    youtube: "",
  },
  {
    city: "Munich",
    country: "Germany",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image:
      "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2020/11/frankfurt-market-www.istockphoto.comgbphotochristmas-market-in-frankfurt-gm520625727-49958558-sborisov-1024x682-1.jpeg",
    youtube: "",
  },

  {
    city: "Jakarta",
    country: "Indonesia",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image: "",
    youtube: "",
  },
  {
    city: "Beijing",
    country: "China",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image: "",
    youtube: "",
  },

  {
    city: "St. Petersburg",
    country: "Russia",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image: "",
    youtube: "",
  },

  {
    city: "Brussels",
    country: "Belgium",
    continent: "Europe",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image: "",
    youtube: "",
  },

  {
    city: "Jerusalem",
    country: "Israel",
    continent: "Asia",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image: "",
    youtube: "",
  },

  {
    city: "Budapest",
    country: "Hungary",
    continent: "Europe",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image: "",
    youtube: "",
  },

  {
    city: "Lisbon",
    country: "Portugal",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image: "",
    youtube: "",
  },

  {
    city: "Dammam",
    country: "Saudi Arabia",
    continent: "Asia",
    climate: "Desert",
    pop: "Between most popular and least popular",
    image: "",
    youtube: "",
  },

  {
    city: "Penang Island",
    country: "Malaysia",
    continent: "Asia",
    climate: "Tropical",
    pop: "Between most popular and least popular",
    image: "",
    youtube: "",
  },

  {
    city: "Heraklion",
    country: "Greece",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Between most popular and least popular",
    image: "",
    youtube: "",
  },

  {
    city: "Kyoto",
    country: "Japan",
    continent: "Asia",
    climate: "Temperate",
    pop: "Between most popular and least popular",
    image: "",
    youtube: "",
  },

  {
    city: "Zhuhai",
    country: "China",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },

  {
    city: "Vancouver",
    country: "Canada",
    continent: "North America",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Chiang Mai",
    country: "Thailand",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    continent: "Europe",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "San Francisco",
    country: "US",
    continent: "North America",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Melbourne",
    country: "Australia",
    continent: "Oceania",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Krakow",
    country: "Poland",
    continent: "Europe",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },

  {
    city: "Marrakech",
    country: "Morocco",
    continent: "Africa",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Kolkatta",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Cebu",
    country: "Philippines",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Auckland",
    country: "New Zealand",
    continent: "Oceania",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Tel Aviv",
    country: "Israel",
    continent: "Asia",
    climate: "Mediterranean",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Guilin",
    country: "China",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },

  {
    city: "Honolulu",
    country: "US",
    continent: "North America",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },

  {
    city: "Hurgada",
    country: "Egypt",
    continent: "Africa",
    climate: "Desert",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },

  {
    city: "Warsaw",
    country: "Poland",
    continent: "Europe",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },

  {
    city: "Mugla",
    country: "Turkey",
    continent: "Asia",
    climate: "Mediterranean",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },

  {
    city: "Buenos Aires City",
    country: "Argentina",
    continent: "South America",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Chiba",
    country: "Japan",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },

  {
    city: "Frankfurt",
    country: "Germany",
    continent: "Europe",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Stockholm",
    country: "Sweden",
    continent: "Europe",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Lima",
    country: "Peru",
    continent: "South America",
    climate: "Temperate",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },

  {
    city: "Da Nang",
    country: "Vietnam",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Batam",
    country: "Indonesia",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Nice",
    country: "France",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Fukuoka",
    country: "Japan",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Abu Dhabi",
    country: "UAE",
    continent: "Asia",
    climate: "Desert",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Jeju",
    country: "South Korea",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Porto",
    country: "Portugal",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Rhodes",
    country: "Greece",
    continent: "Europe",
    climate: "Mediterranean",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Krabi",
    country: "Thailand",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Bangalore",
    country: "India",
    continent: "Asia",
    climate: "Tropical",
    pop: "Less popular places – less crowded",
    image: "https://images.pexels.com/photos/2889701/pexels-photo-2889701.jpeg",
    youtube: "",
  },
  {
    city: "Reykjavik",
    Country: "Iceland",
    continent: "Europe",
    climate: "Polar",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
  {
    city: "Nepal",
    Country: "Federal Democratic Republic of Nepal",
    continent: "Asia",
    climate: "Polar",
    pop: "Less popular places – less crowded",
    image: "",
    youtube: "",
  },
];
export default cityList;
