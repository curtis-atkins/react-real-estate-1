const listingsData = [
{
    image: "https://activerain-store.s3.amazonaws.com/image_store/uploads/agents/rocummings/files/4149%20Bay%20Front%20Rd%20Mobile%20AL%2036605.jpg",
    address:"4149 Spring Lake Drive North",
    city:"Mobile",
    state:"AL",
    homeType:"House",
    rooms: 3,
    bath: 2,
    price: 135000,
    floorspace: 1348,
    date:"12/11/2017",
    seller:"Wilson Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: []
  },
{
    image: "https://cdnparap90.paragonrels.com/ParagonImages/Property/P9/GALMLS/827855/0/0/0/38ba31ea96e9ae1532742d6b635ddac9/1/9ae89262437a4a8c58cfa28d4af0b815/827855.JPG",
    address:"1805 Castleberry Way",
    city:"Birmingham",
    state:"AL",
    homeType:"Ranch",
    rooms: 3,
    bath: 2,
    price: 64900,
    floorspace: 1064,
    date:"12/1/2017",
    seller:"Sherry Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Gym"
    ]
  },
{
    image: "https://image3.apartmentfinder.com/i2/aqG-j66ES5l9OPVkeD20qoHa7mbYBpK2QWxX-Xa7BBg/117/verandas-at-taylor-oaks-montgomery-al-building-photo.jpg",
    address:"605 Maxwell Boulevard",
    city: "Montgomery",
    state: "AL",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 1199,
    floorspace: 970,
    date:"1/9/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Elevator",
      "Gym"
    ]
  },
{
    image: "http://media.al.com/business_impact/photo/artisan-courtyard11jpg-1a1bfb51bff343da.jpg",
    address:"1020 Cresent Falls",
    city:"Huntsville",
    state:"AL",
    homeType:"Condo",
    rooms: 3,
    bath: 2,
    price: 229900,
    floorspace: 1883,
    date:"1/10/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: [
      "Gym"
    ]
  },
{
    image: "https://thumbs.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISyvy3awu4f16r0000000000.jpg",
    address:"19665 Villages Scenic Parkway",
    city:"Anchorage",
    state:"AK",
    homeType:"House",
    rooms: 3,
    bath: 3,
    price: 1875000,
    floorspace: 4361,
    date:"11/20/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://cdnparap80.paragonrels.com/ParagonImages/Property/P8/SEAMLS/18831/0/0/0/672db1c1938656041f2658e84f3315b2/5/422dbc55f2b00ef7aaab4df0a01b87c8/18831.JPG",
    address:"1023 Wolfram Way",
    city:"Juneau",
    state:"AK",
    homeType:"Ranch",
    rooms: 3,
    bath: 2,
    price: 429900,
    floorspace: 1675,
    date:"1/23/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: []
  },
{
    image: "https://storage.googleapis.com/idx-photos-gs.ihouseprd.com/AK-GFMLS/136280/org/000.jpg",
    address:"1301 Kellum Street",
    city:"Fairbanks",
    state:"AK",
    homeType:"Apartment",
    rooms: 2,
    bath: 1,
    price: 1069,
    floorspace: 830,
    date:"1/26/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Swimming Pool",
      "Gym"
    ]
  },
{
    image: "https://thumbs.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISmepz2ojx7ktd1000000000.jpg",
    address:"L6 Middle Is",
    city:"Sitka",
    state:"AK",
    homeType:"Condo",
    rooms: 3,
    bath: 1,
    price: 179000,
    floorspace: 864,
    date:"2/1/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: []
  },
{
    image: "https://highestcashoffer.com/wp-content/uploads/2017/02/phoenix-az-homes-for-sale-1.jpg",
    address:"2047 E Cielo Grande Avenue",
    city:"Phoenix",
    state:"AZ",
    homeType:"House",
    rooms: 4,
    bath: 3,
    price: 371964,
    floorspace: 2676,
    date:"2/16/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Finished Basement",
      "Swimming Pool"
    ]
  },
{
    image: "http://www.whitehouse51.com/pic/activerain-store.s3.amazonaws.com/blog_entries/850/4976850/original/scottsdale_ranch_house.jpg?1478420684",
    address:"6799 N Rattlesnake Canyon Rd",
    city:"Tucson",
    state:"AZ",
    homeType:"Ranch",
    rooms: 5,
    bath: 8,
    price:9900000 ,
    floorspace:12946 ,
    date:"2/20/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://images1.apartments.com/i2/rHg72g2H7kFdt0UbHqzOW4hVOh71EYTJZWJ37LiMoPA/111/image.jpg",
    address:"9595 E Thunderbird Road",
    city:"Scottsdale",
    state:"AZ",
    homeType:"Apartment",
    rooms: 3,
    bath: 2,
    price: 1429,
    floorspace: 1371,
    date:"2/28/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://cdngeneral.rentcafe.com/dmslivecafe/3/521497/CieloGilbert_gilbert_az_bkgrd.jpg?crop=(0,0,300,191)&cropxunits=300&cropyunits=191&quality=85&scale=both&",
    address:"1508 N Alta Mesa Dr 114",
    city:"Mesa",
    state:"AZ",
    homeType:"Condo",
    rooms: 3,
    bath: 3,
    price: 655000,
    floorspace: 2575,
    date:"3/6/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Gym",
      "Finished Basement"
    ]
  },
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thurston_House%2C_Little_Rock%2C_AR.JPG/1200px-Thurston_House%2C_Little_Rock%2C_AR.JPG",
    address:"923 Hartford St",
    city:"Little Rock",
    state:"AR",
    homeType:"House",
    rooms: 4,
    bath: 2 ,
    price: 215000,
    floorspace: 2000,
    date:"5/1/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: []
  },
{
    image: "https://thumbs.trulia-cdn.com/pictures/thumbs_6/ps.110/6/e/d/7/picture-uh=db9d4f6a49283d4d1851fe1834212be1-ps=6ed7faa6736a07092ec9592c0d483.jpg",
    address:"374 Mimosa Lane",
    city:"Fayetteville",
    state:"AR",
    homeType:"Ranch",
    rooms: 2,
    bath: 1,
    price: 120000,
    floorspace: 792,
    date:"5/3/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: []
  },
{
    image: "https://images1.apartments.com/i2/eCGGaOZTwoeXTTItqkLm5-uwpzBx8JBxwuj3BrklOLE/117/willow-lake-townhomes-fort-smith-ar-primary-photo.jpg",
    address:"5100 Zero St",
    city:"Fort Smith",
    state:"AR",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 480,
    floorspace: 551,
    date:"5/9/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://mediavault.point2.com/p2a/htmltext/7064/ea94/3719/ef4502d142c24a4f1461/original.jpg",
    address:"5000 Central Ave APT 33",
    city:"Hot Springs",
    state:"AR",
    homeType:"Condo",
    rooms: 3,
    bath: 3,
    price: 399000,
    floorspace: 1600,
    date:"5/22/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: []
  },
{
    image: "https://www.thepropertyseekers.com/wp-content/uploads/2017/06/los-angeles-homes-for-sale.jpg",
    address:"2393 Castilian Drive",
    city:"Los Angeles",
    state:"CA",
    homeType:"House",
    rooms: 4,
    bath: 5,
    price: 3250760,
    floorspace: 3620,
    date:"6/2/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://cdn.vox-cdn.com/uploads/chorus_image/image/49473701/445108_1.0.jpg",
    address:"6705 Evelyn Way",
    city:"San Francisco",
    state:"CA",
    homeType:"Ranch",
    rooms: 3,
    bath: 1,
    price: 1099000,
    floorspace: 1025,
    date:"6/4/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/163-27/carmel-terrace-apartments-exterior.jpg",
    address:"11727 Genesee Avenue",
    city:"San Diego",
    state:"CA",
    homeType:"Apartment",
    rooms: 2,
    bath: 1,
    price: 2200,
    floorspace: 600,
    date:"7/19/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://www.sacbee.com/news/business/real-estate-news/3te3tb/picture144870839/alternates/FREE_1140/Cresleigh",
    address:"4077 Libby Street",
    city:"Sacramento",
    state:"CA",
    homeType:"Condo",
    rooms: 1,
    bath: 1,
    price:1088000,
    floorspace: 1000,
    date:"8/25/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
  image: "https://thumbs.trulia-cdn.com/pictures/thumbs_6/ps.73/d/6/1/b/picture-uh=381a4b46862467abd3584781fcb6b6-ps=d61b88ca4fe214844adc26ec5746e17.jpg",
  address:"5188 W County 150 Rd S",
  city:"Denver",
  state:"CO",
  homeType:"House",
  rooms: 3,
  bath: 3,
  price: 347999,
  floorspace: 1800,
  date:"9/24/2017",
  seller:"Wilson	Foster",
  headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: [
    "Elevator",
    "Gym",
    "Swimming Pool",
    "Finished Basement"
  ]
},
{
    image: "https://www.mychallengerhomes.com/images/uploaded/810109558049589_rwr.jpg",
    address:"8418 N Wabash Ave",
    city:"Colorado Springs",
    state:"CO",
    homeType:"Ranch",
    rooms: 3,
    bath: 3,
    price: 290000,
    floorspace: 2300,
    date:"10/4/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: []
  },
{
    image: "https://apollostore.blob.core.windows.net/apex5510/uploads/images/photogallery/5510-spine-rd-boulder-co-80301-large-011-10-igp9035-6-7-8-9-1500x994-72dpi.7034b1b2-3aa0-4d50-90d4-edbe1a6529bb.jpg",
    address:"3381 New London Rd",
    city:"Boulder",
    state:"CO",
    homeType:"Apartment",
    rooms: 4,
    bath: 4,
    price: 2500,
    floorspace: 1800,
    date:"10/14/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://odis.homeaway.com/odis/listing/81346a07-f807-4429-b6b2-f117b722d015.c10.jpg",
    address:"2727 Iowa Dr",
    city:"Fort Collins",
    state:"CO",
    homeType:"Condo",
    rooms: 2,
    bath: 2,
    price: 150500,
    floorspace: 1800,
    date:"10/26/2017",
    seller:"Amelia Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: []
  },
{
    image: "https://maps.googleapis.com/maps/api/streetview?size=2048x1536&sensor=false&location=30+Tredeau+St%2C+Hartford+CT+06114&client=gme-zillowinc3&signature=G6CgGOAF_fXLkrbyGUmfODTqzlw=",
    address:"30 Boston Cliff Rd",
    city:"Hartford",
    state:"CT",
    homeType:"House",
    rooms: 4,
    bath: 3,
    price: 398000,
    floorspace:2100,
    date:"10/31/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Gym",
      "Finished Basement"
    ]
  },
{
    image: "https://cdn.listingphotos.sierrastatic.com/large/v1539373139/142/142_18032490_01.jpg",
    address:"15729 Parkwood Dr S",
    city:"New Haven",
    state:"CT",
    homeType:"Ranch",
    rooms: 2,
    bath: 3,
    price: 140500,
    floorspace: 1750,
    date:"11/20/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: []
  },
{
    image: "https://yukbisniskost.com/wp-content/uploads/2018/07/apartment-1-1024x576.jpg",
    address:"2404 Edmonton Rd",
    city:"Stamford",
    state:"CT",
    homeType:"Apartment",
    rooms: 3,
    bath: 3,
    price: 1375,
    floorspace: 1975,
    date:"12/1/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://4.bp.blogspot.com/-6T5VJTW7HoA/VAKcnY90bfI/AAAAAAAABUw/xG9uSwr-SQE/s1600/3deckers.jpg",
    address:"220 Meadow Ln",
    city:"Bridgeport",
    state:"CT",
    homeType:"Condo",
    rooms: 3,
    bath: 3,
    price: 267500,
    floorspace: 1900,
    date:"12/11/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Swimming Pool"
    ]
  },
{
    image: "http://images.mris.com/image/V3/1/gWunFXNklPB-GE4cJhW3gzKVj8DtEJZ5uJzQFbAIVlI_jmYJN3ZyPDC0qsMb3qQvG3w6HWTPttDWKLaWUWslowz_XBVf_uP5U7Lp5_XpWfk.jpg",
    address:"738 Kentucky Ave",
    city:"Wilmington",
    state:"DE",
    homeType:"House",
    rooms: 8,
    bath: 6,
    price: 12900000,
    floorspace: 9000,
    date:"1/9/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://bright-media.brightmls.com/bright/images/0000/3007/4851/4316/300748514316_2048_1536_WM_qUI7EV6TplHGrw8g.jpg",
    address:"4201 Townsend Ave",
    city:"Newark",
    state:"DE",
    homeType:"Ranch",
    rooms: 3,
    bath: 4,
    price: 180850,
    floorspace: 2375,
    date:"1/10/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "http://spxeastwebfarm7.spherexx.com/common/dynamic.asp?p=/common/uploads/www_liveatthegrande_com/property_photos/11173-pho-Grande-Exterior-8_Opt_1__161358.jpg&w=1&mw=1920&h=1&mh=1080&q=50",
    address:"81 S. Fairground Lane",
    city:"Dover",
    state:"DE",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 1699,
    floorspace: 879,
    date:"1/23/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://cbanker.com/media/images/property_plus_extras_image/RLC_POOL-3.jpg",
    address:"403 Glen Creek Lane",
    city:"Lewes",
    state:"DE",
    homeType:"Condo",
    rooms: 4,
    bath: 4,
    price: 190000,
    floorspace: 1750,
    date:"1/26/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://thumbs.trulia-cdn.com/pictures/thumbs_6/ps.109/4/e/1/e/picture-uh=7997771747b8fccb55f97af45bda48-ps=4e1ebfeb91c23ec7ec58854c2027ebb.jpg",
    address:"7 Maple Street",
    city:"Miami",
    state:"FL",
    homeType:"House",
    rooms: 3,
    bath: 2,
    price: 315759,
    floorspace: 2900,
    date:"2/1/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "http://jonathanmcgrathconstruction.com/new/wp-content/uploads/2012/03/Sanford-FL-Home-Exterior-Renovation-Project-Preview.jpg",
    address:"384 South Drive",
    city:"Orlando",
    state:"FL",
    homeType:"Ranch",
    rooms: 4,
    bath: 4,
    price: 315000,
    floorspace: 2500,
    date:"2/16/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: []
  },
{
    image: "https://greystar.mytouchtour.com/uploads/31_184_Greystar-Crescent-Bayshore-Apartment-6289_1920x1270.jpg",
    address:"195 West Lane",
    city:"Tampa",
    state:"FL",
    homeType:"Apartment",
    rooms: 2,
    bath: 2,
    price: 2450,
    floorspace: 1400,
    date:"2/20/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://www.seasidepropertiesgroup.com/upload/condobuilding/desktop_slideshow_img_20160705151808.jpg",
    address:"8157 Railroad Lane",
    city:"Fort Lauderdale",
    state:"FL",
    homeType:"Condo",
    rooms: 1,
    bath: 1,
    price: 379000,
    floorspace: 1980,
    date:"2/28/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://www.whitehouse51.com/pic/homeatlantaga.com/images/homes-atlanta/homethree.jpg",
    address:"6 Grant Street",
    city:"Atlanta",
    state:"GA",
    homeType:"House",
    rooms: 3,
    bath: 4,
    price: 235000,
    floorspace: 2459,
    date:"3/6/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: []
  },
{
    image: "https://peachtreerealtygroup.com/wp-content/uploads/2018/03/420-Savannah-Dr-57Front1_HDR.jpg",
    address:"78 Fifth Lane",
    city:"Savannah",
    state:"GA",
    homeType:"Ranch",
    rooms: 5,
    bath: 6,
    price: 345500,
    floorspace: 2600,
    date:"5/1/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://www.lowincomehousing.us/gallery/127974_abbington-trail-apartments_ris.jpg",
    address:"677 Richardson Drive",
    city:"Marietta",
    state:"GA",
    homeType:"Apartment",
    rooms: 3,
    bath: 3,
    price: 2200,
    floorspace: 1400,
    date:"5/3/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://www.rhodesporter.com/wp-content/uploads/2013/08/3422-Covington-Lexington-Augusta-Ga-Rhodes-Porter-homes-20130719_093456-1.jpg",
    address:"81 Miles Road",
    city:"Augusta",
    state:"GA",
    homeType:"Condo",
    rooms: 2,
    bath: 2,
    price: 450500,
    floorspace: 1750,
    date:"5/9/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://photonet.hotpads.com/search/listingPhoto/HotPads/2gsq93kmgm27/0008_1122794267_large.jpg",
    address:"4747 Victoria Street",
    city:"Honolulu",
    state:"HI",
    homeType:"House",
    rooms: 5,
    bath: 5,
    price: 789999,
    floorspace: 3475,
    date:"5/22/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://thumbs.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISijqcs0pn5n9b0000000000.jpg",
    address:"9085 Orchard Street",
    city:"Kailua",
    state:"HI",
    homeType:"Ranch",
    rooms: 4,
    bath: 2,
    price: 385000,
    floorspace: 2450,
    date:"6/2/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "https://images1.apartments.com/i2/0mCVCKXXkCzSmR7zqv64ggUIlZ2SUlV-_QzkQbnKO3I/111/waikiki-walina-apartments-honolulu-hi-primary-photo.jpg",
    address:"7973 Bedford Drive",
    city:"Kaneohe",
    state:"HI",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 2400,
    floorspace: 1399,
    date:"6/4/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://thumbs.trulia-cdn.com/pictures/thumbs_6/zillowstatic/IS66w65wjdbr6k1000000000.jpg",
    address:"525 Manawai Street",
    city:"Kapolei",
    state:"HI",
    homeType:"Condo",
    rooms: 3,
    bath: 3,
    price: 300000,
    floorspace: 1675,
    date:"7/19/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://s3-us-west-2.amazonaws.com/hh-wp-images/sites/126/helen-law-boise-idaho-real-estate-homes-7-2000x800.jpg",
    address:"822 Green Lake Lane",
    city:"Boise",
    state:"ID",
    homeType:"House",
    rooms: 3,
    bath: 3,
    price: 266899,
    floorspace: 2175,
    date:"8/25/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: []
  },
{
    image: "https://thumbs.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISq9oyeoa886c50000000000.jpg",
    address:"59 Argyle Drive",
    city:"Coeur d'Alene",
    state:"ID",
    homeType:"Ranch",
    rooms: 3,
    bath: 3,
    price: 270000,
    floorspace: 2345,
    date:"9/24/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://cdn.homes.com/cgi-bin/readimage/6567187234/4595-stamm-ln-canyon-county-id-83687-0.jpg",
    address:"9025 Clay Street",
    city:"Nampa",
    state:"ID",
    homeType:"Apartment",
    rooms: 2,
    bath: 2,
    price: 1899,
    floorspace: 1350,
    date:"10/4/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://img.tourre.com/mls_images/swidaho/98681094/IMLS98681094-01.jpg",
    address:"7792 Annadale Drive",
    city:"Meridian",
    state:"ID",
    homeType:"Condo",
    rooms: 4,
    bath: 4,
    price: 230000,
    floorspace: 1400,
    date:"10/14/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://www.trbimg.com/img-5771b415/turbine/ct-elite-street-scottie-pippen-highland-park-mansion-0630-biz-20160627",
    address:"8371 Augusta Street",
    city:"Chicago",
    state:"IL",
    homeType:"House",
    rooms: 4,
    bath: 3,
    price: 375888,
    floorspace: 2925,
    date:"10/26/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Gym",
      "Finished Basement"
    ]
  },
{
    image: "http://photos.listhub.net/MREDIL/09946754/1?lm=20180511T122438",
    address:"202 S. Jones Street",
    city:"Naperville",
    state:"IL",
    homeType:"Ranch",
    rooms: 3,
    bath: 4,
    price: 325500,
    floorspace: 2460,
    date:"10/31/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "http://www.catoncommercial.com/wp-content/uploads/2018/04/311371.jpg",
    address:"7669 Edgemont Drive",
    city:"Peoria",
    state:"IL",
    homeType:"Apartment",
    rooms: 3,
    bath: 3,
    price: 2500,
    floorspace: 1365,
    date:"11/20/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://d2cc5bro5bu049.cloudfront.net/57251/14336121/large.jpg",
    address:"8 Summit Court",
    city:"Champaign",
    state:"IL",
    homeType:"Condo",
    rooms: 1,
    bath: 1,
    price: 520000,
    floorspace: 1340,
    date:"12/1/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "http://blog.thegreenhouseproject.org.72-10-34-23.d7yv-zwls.accessdomain.com/wp-content/uploads/2016/09/exterior-Carmel-home.jpg",
    address:"172 South Blackburn Avenue",
    city:"Carmel",
    state:"IN",
    homeType:"House",
    rooms: 3,
    bath: 2,
    price: 199799,
    floorspace: 1875,
    date:"12/11/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: []
  },
{
    image: "https://ap.rdcpix.com/930580018/40306a54a8337ac4f475cd400e089ad9l-m0xd-w1020_h770_q80.jpg",
    address:"114 Virginia Road",
    city:"Fort Wayne",
    state:"IN",
    homeType:"Ranch",
    rooms: 5,
    bath: 4,
    price: 456700,
    floorspace: 2555,
    date:"1/9/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: []
  },
{
    image: "http://www.tenthandcollege.com/wp-content/uploads/2014/12/East-Bay-apartments-bloomington-indiana.jpg",
    address:"9619 Longfellow Street",
    city:"Bloomington",
    state:"IN",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 1475,
    floorspace: 1255,
    date:"10/31/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://www.atthecascade.com/wp-content/uploads/ThreeTwenty_Night_1920x1078.jpg",
    address:"672 Rock Maple Lane",
    city:"South Bend",
    state:"IN",
    homeType:"Condo",
    rooms: 2,
    bath: 2,
    price: 353265,
    floorspace: 1850,
    date:"10/26/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "http://photos.listhub.net/DMAARIA/558650/1?lm=20180416T194659",
    address:"295 Jockey Hollow Lane",
    city:"Des Moines",
    state:"IA",
    homeType:"Ranch",
    rooms: 4,
    bath: 3,
    price: 222000,
    floorspace: 2150,
    date:"10/14/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: []
  },
{
    image: "https://pp.walk.sc/full/p/139420812/b5a052.jpg",
    address:"3 St Paul Avenue",
    city:"Iowa City",
    state:"IA",
    homeType:"Apartment",
    rooms: 2,
    bath: 2,
    price: 1799,
    floorspace: 1480,
    date:"10/4/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://c1.staticflickr.com/6/5489/30986748970_5911d1bc5e_b.jpg",
    address:"8166 Myrtle Street",
    city:"Cedar Rapids",
    state:"IA",
    homeType:"Condo",
    rooms: 3,
    bath: 3,
    price: 230000,
    floorspace: 1899,
    date:"9/24/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://cdnparap90.paragonrels.com/ParagonImages/Property/P9/IRMLS/201607251/0/0/0/945f0cfc77842f90566ff62892640bfc/4/787b15dd295d6e11177a3104a3273e0e/201607251.JPG",
    address:"42 Grove Avenue",
    city:"South Bend",
    state:"IN",
    homeType:"House",
    rooms: 4,
    bath: 3,
    price: 585888,
    floorspace: 3000,
    date:"8/25/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Swimming Pool"
    ]
  },
{
    image: "https://s3.amazonaws.com/rewsllc-photos-listings/topeka_201863_0.jpg",
    address:"43 Glen Eagles Road",
    city:"Topeka",
    state:"KS",
    homeType:"Ranch",
    rooms: 3,
    bath: 3,
    price: 240000,
    floorspace: 2145,
    date:"7/19/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "https://apollostore.blob.core.windows.net/cityplace/uploads/assets/gemini-background-template.3e5b9015-bde4-43fa-8767-f733a06379c3.jpg",
    address:"714 Augusta Street",
    city:"Overland Park",
    state:"KS",
    homeType:"Apartment",
    rooms: 3,
    bath: 3,
    price: 1766,
    floorspace: 1425,
    date:"6/4/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://www.firstconstructionllc.com/_img/888Lofts/DSC_2712_preview.jpeg",
    address:"7 New Saddle Avenue",
    city:"Lawrence",
    state:"KS",
    homeType:"Condo",
    rooms: 4,
    bath: 4,
    price: 200000,
    floorspace: 2000,
    date:"6/2/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://thumbs.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISaxj6jk9ewuxk1000000000.jpg",
    address:"992 Valley Court",
    city:"Ames",
    state:"IA",
    homeType:"House",
    rooms: 4,
    bath: 2,
    price: 275999,
    floorspace: 2200,
    date:"5/22/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: []
  },
{
    image: "https://southlandrealtors.com/wp-content/uploads/Wakefield.jpg",
    address:"7840 Walnut Street",
    city:"Louisville",
    state:"KY",
    homeType:"Ranch",
    rooms: 4,
    bath: 5,
    price: 470500,
    floorspace: 2500,
    date:"5/9/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://res.cloudinary.com/apartmentlist/image/upload/t_fullsize/ae9e7984b308a59f9dc529263b833a0c.jpg",
    address:"85 W. State Avenue",
    city:"Lexington",
    state:"KY",
    homeType:"Apartment",
    rooms: 4,
    bath: 4,
    price: 1900,
    floorspace: 1800,
    date:"5/3/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://res.cloudinary.com/apartmentlist/image/upload/t_fullsize/ypqdl4r5ant6ejmw6ikr.jpg",
    address:"96 Cottage Street",
    city:"Frankfort",
    state:"KY",
    homeType:"Condo",
    rooms: 1,
    bath: 1,
    price: 500000,
    floorspace: 1550,
    date:"5/1/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://activerain-store.s3.amazonaws.com/image_store/uploads/agents/overlandparkhomes/files/12815%20Hubbard%20Rd%20-%20Web-100.jpg",
    address:"99 Sunnyslope Lane",
    city:"Kansas City",
    state:"KS",
    homeType:"House",
    rooms: 3,
    bath: 3,
    price: 220500,
    floorspace: 2160,
    date:"3/6/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "https://www.paloverdehome.com/blog/wp-content/uploads/2016/10/AdobeStock_850933.jpeg",
    address:"472 Glenlake Street",
    city:"New Orleans",
    state:"LA",
    homeType:"Ranch",
    rooms: 3,
    bath: 3,
    price: 465000,
    floorspace: 2800,
    date:"2/28/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://i.pinimg.com/originals/2c/38/57/2c385786a2455c25fb4fa68771a3432f.jpg",
    address:"930 Tarkiln Hill Drive",
    city:"Baton Rouge",
    state:"LA",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 999,
    floorspace: 850,
    date:"2/20/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://ap.rdcpix.com/2078256230/56d092bca4a851d5006d8167c7e08f2fl-m1xd-w1020_h770_q80.jpg",
    address:"9718 South Fremont Avenue",
    city:"Lafayette",
    state:"LA",
    homeType:"Condo",
    rooms: 2,
    bath: 2,
    price: 200000,
    floorspace: 1100,
    date:"2/16/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: [
      "Gym"
    ]
  },
{
    image: "http://photos.listhub.net/RASKKY/20183884/1?lm=20180917T180113",
    address:"194 Thompson Road",
    city:"Bowling Green",
    state:"KY",
    homeType:"House",
    rooms: 6,
    bath: 5,
    price: 555555,
    floorspace: 3425,
    date:"2/1/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://www.mainehomeconnection.com/image_display.php?id=3668",
    address:"20 Armstrong Street",
    city:"Portland",
    state:"ME",
    homeType:"Ranch",
    rooms: 4,
    bath: 4,
    price: 199000,
    floorspace: 1850,
    date:"1/26/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: []
  },
{
    image: "https://www.publichousing.com/gallery/_tx_75217_sterlingshire-apartment-homes_kyn.jpg",
    address:"48 Mulberry Court",
    city:"Bangor",
    state:"ME",
    homeType:"Apartment",
    rooms: 2,
    bath: 2 ,
    price: 1320,
    floorspace: 1099,
    date:"1/23/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://photos.zolo.ca/303-1750-augusta-avenue-burnaby-r2287256-photo-1.jpg?2018-09-06+15%3A49%3A29",
    address:"469 Victoria Avenue",
    city:"Augusta",
    state:"ME",
    homeType:"Condo",
    rooms: 3,
    bath: 3,
    price: 255500,
    floorspace: 1800,
    date:"1/10/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bliss-Hoyer_House%2C_Shreveport%2C_LA_IMG_1580.JPG/1200px-Bliss-Hoyer_House%2C_Shreveport%2C_LA_IMG_1580.JPG",
    address:"194 Thompson Road",
    city:"Shreveport",
    state:"LA",
    homeType:"House",
    rooms: 3,
    bath: 2,
    price: 195999,
    floorspace: 1800,
    date:"1/9/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"21606 Mulberry Court",
    city:"Baltimore",
    state:"MD",
    homeType:"Ranch",
    rooms: 4,
    bath: 5,
    price: 600000,
    floorspace: 3500,
    date:"1/10/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://cdnselect.rentcafe.com/dmslivecafe/3/567974/Exterior-Courtyard-1.jpg?crop=(0,0,300,138)&cropxunits=300&cropyunits=138&quality=85&scale=both&",
    address:"815 Belmont Avenue",
    city: "Annapolis",
    state: "MD",
    homeType: "Apartment",
    rooms: 3,
    bath: 3,
    price: 1599,
    floorspace: 1200,
    date:"1/23/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://images1.apartments.com/i2/gg1Wbn2Iw5wMwObg3XHwdAKzbMO09OqpiTuV0Yq-9pc/111/the-terano-rockville-md-the-terano-apartments-in-rockville.jpg",
    address:"462 Brown Drive",
    city:"Rockville",
    state:"MD",
    homeType:"Condo",
    rooms: 4,
    bath: 4,
    price: 269800,
    floorspace: 2200,
    date:"1/26/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://mapio.net/images-p/101782855.jpg",
    address:"36 Railroad Street",
    city:"Lewiston",
    state:"ME",
    homeType:"House",
    rooms: 3,
    bath: 3,
    price: 199900,
    floorspace: 1750,
    date:"2/1/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: []
  },
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Henry_Swan_House%2C_ArlingtonMA_-_IMG_2724.JPG/1200px-Henry_Swan_House%2C_ArlingtonMA_-_IMG_2724.JPG",
    address:"34 South Galvin Street",
    city:"Boston",
    state:"MA",
    homeType:"Ranch",
    rooms: 4,
    bath: 5,
    price: 425600,
    floorspace: 3400,
    date:"2/16/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: []
  },
{
    image: "http://www.compassfurnishedapartments.com/wp-content/uploads/SS-Exterior.jpg",
    address:"8 6th St",
    city:"Cambridge",
    state:"MA",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 999,
    floorspace: 875,
    date:"2/20/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://res.cloudinary.com/apartmentlist/image/upload/t_fullsize/6adaf2125da2c8e6c8d4670e0720a411.jpg",
    address:"307 Sherwood Road",
    city:"Worcester",
    state:"MA",
    homeType:"Condo",
    rooms: 1,
    bath: 1,
    price: 1500000,
    floorspace: 1100,
    date:"2/28/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://bright-media.brightmls.com/bright/images/0000/3007/8528/4364/300785284364_2048_1536_WM_aeb0ncqwGtKlJXL_.jpg",
    address:"1510 West Grandrose Avenue",
    city:"Silver Spring",
    state:"MD",
    homeType:"House",
    rooms: 3,
    bath: 4,
    price: 235750,
    floorspace: 1900,
    date:"3/6/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: [
      "Swimming Pool"
    ]
  },
{
    image: "https://c1.staticflickr.com/3/2449/4059278368_8881052c10_b.jpg",
    address:"658 E. Sierra Court",
    city:"Detroit",
    state:"MI",
    homeType:"Ranch",
    rooms: 3,
    bath: 2,
    price: 355899,
    floorspace: 2200,
    date:"5/1/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://photonet.hotpads.com/search/listingPhoto/PropertySolutions/173413/0014_1963526125_large.jpg",
    address:"8 Windsor Avenue",
    city:"Ann Arbor",
    state:"MI",
    homeType:"Apartment",
    rooms: 2,
    bath: 2,
    price: 888,
    floorspace: 1100,
    date:"5/3/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://images1.apartments.com/i2/EDG7XAhnrD4bhBUww80R_ChSruk-WPmkPnWfr6oPNak/111/image.jpg",
    address:"234 Deerfield Avenue",
    city:"Grand Rapids",
    state:"MI",
    homeType:"Condo",
    rooms: 2,
    bath: 2,
    price: 399000,
    floorspace: 1420,
    date:"5/9/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://ap.rdcpix.com/296471891/ad77cadf5d2b98a5a8a26d27e46c4898l-m0xd-w1020_h770_q80.jpg",
    address:"402 Rosewood Street",
    city:"Springfield",
    state:"MA",
    homeType:"House",
    rooms: 4,
    bath: 4,
    price: 300000,
    floorspace: 2600,
    date:"5/22/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: []
  },
{
    image: "https://3kpnuxym9k04c8ilz2quku1czd-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/IMG_8077.jpg",
    address:"7927 Oak Meadow Street",
    city:"Minneapolis",
    state:"MN",
    homeType:"Ranch",
    rooms: 3,
    bath: 3,
    price: 200999,
    floorspace: 2000,
    date:"6/2/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "https://images.adsttc.com/media/images/5422/1d25/c07a/800d/e500/0143/large_jpg/Seven27_MikeRebholz_005.jpg?1411521799",
    address:"97 Lafayette Road",
    city:"Saint Paul",
    state:"MN",
    homeType:"Apartment",
    rooms: 3,
    bath: 3,
    price: 2640,
    floorspace: 1355,
    date:"5/22/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://www.beaconpointeduluth.com/wp-content/uploads/2016/02/beacon-pointe.jpg",
    address:"8138 Peachtree Avenue",
    city:"Duluth",
    state:"MN",
    homeType:"Condo",
    rooms: 3,
    bath: 3,
    price: 549500,
    floorspace: 1525,
    date:"10/31/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://cdn.resize.sparkplatform.com/ric/1024x768/true/20170421212538370348000000-o.jpg",
    address:"7956 Lincoln Court",
    city:"Kalamazoo",
    state:"MI",
    homeType:"House",
    rooms: 3,
    bath: 3,
    price: 299000,
    floorspace: 2555,
    date:"10/26/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "https://www.ryanhomes.com/rh-community-gallery-NewAspectRatio/38071061-2fb5-4b60-a4fa-eeb822b57d60/db/38071061-2fb5-4b60-a4fa-eeb822b57d60.jpg",
    address:"43 Fieldstone Street",
    city:"Jackson",
    state:"MS",
    homeType:"Ranch",
    rooms: 4,
    bath: 4,
    price: 285999,
    floorspace: 2185,
    date:"10/14/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "https://www.shopapartments.com/apartment-image/Maison-D-Orleans5hhbklkt.0fr.jpg",
    address:"392 Winchester Court",
    city:"Biloxi",
    state:"MS",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 600,
    floorspace: 700,
    date:"10/4/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: []
  },
{
    image: "https://res.cloudinary.com/apartmentlist/image/upload/t_fullsize/77c7256b1d2b6f1e26041221eaa2551d.jpg",
    address:"895 Carriage Street",
    city:"Hattiesburg",
    state:"MS",
    homeType:"Condo",
    rooms: 4,
    bath: 4,
    price: 758200,
    floorspace: 1500,
    date:"9/24/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://1037theloon.com/files/2017/04/1512-Lucille-Lane-Saint-Cloud-MN-56303-4765412-image1.jpg",
    address:"8965 Goldfield Street",
    city:"St. Cloud",
    state:"MN",
    homeType:"House",
    rooms: 6,
    bath: 6,
    price: 775750,
    floorspace: 3750,
    date:"8/25/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "http://www.mcbridehomes.com/images/community/slideshow/full/2733.jpg",
    address:"17 Valley Avenue",
    city:"St. Louis",
    state:"MO",
    homeType:"Ranch",
    rooms: 5,
    bath: 5,
    price: 465999,
    floorspace: 3450,
    date:"7/19/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Gym",
      "Finished Basement"
    ]
  },
{
    image: "https://pp.walk.sc/full/p/75028/adfb01.jpg",
    address:"7874 Arcadia Street",
    city:"Kansas City",
    state:"MO",
    homeType:"Apartment",
    rooms: 2,
    bath: 2,
    price: 965,
    floorspace: 1422,
    date:"6/4/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://pp.walk.sc/full/p/132625469/9a213d.jpg",
    address:"9981 Wentworth Drive",
    city:"Springfield",
    state:"MO",
    homeType:"Condo",
    rooms: 1,
    bath: 1,
    price: 1089900,
    floorspace: 1525,
    date:"6/2/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://photonet.hotpads.com/search/listingPhoto/ZillowSale/2089265879/0000_1205966474_large.jpg",
    address:"92 Overlook Street",
    city:"Gulfport",
    state:"MS",
    homeType:"House",
    rooms: 6,
    bath: 4,
    price: 500999,
    floorspace: 2975,
    date:"5/22/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Elevator",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://www.theranchatrockcreek.com/wp-content/uploads/2015/03/moose-house-hero-1600x660.jpg",
    address:"808 4th Drive",
    city:"Missoula",
    state:"MT",
    homeType:"Ranch",
    rooms: 3,
    bath: 4,
    price: 535500,
    floorspace: 4350,
    date:"5/9/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://www.interpointeapartments.com/gridmedia/img/slide4.jpg",
    address:"9595 Division Street",
    city:"Billings",
    state:"MT",
    homeType:"Apartment",
    rooms: 3,
    bath: 3,
    price: 1799,
    floorspace: 1855,
    date:"5/3/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: []
  },
{
    image: "https://cdn-1.eneighborhoods.com/L2/@v=521342763@/3/316/3yd-GARMT-308316/4948278116.jpg",
    address:"833 Cambridge Street",
    city:"Bozeman",
    state:"MT",
    homeType:"Condo",
    rooms: 2,
    bath: 2,
    price: 460055,
    floorspace: 1650,
    date:"5/1/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://img.houseofbrokers.com/Homes/Images/Listings/127745897/1/984f1e646ac062030a12277861697a70/Photo.jpg",
    address:"34 Wagon Street",
    city:"Jefferson City",
    state:"MO",
    homeType:"House",
    rooms: 5,
    bath: 4,
    price: 325500,
    floorspace: 2200,
    date:"3/6/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Dundee_HD_Omaha_NE.JPG",
    address:"798 Squaw Creek Drive",
    city:"Omaha",
    state:"NE",
    homeType:"Ranch",
    rooms: 3,
    bath: 3,
    price: 380000,
    floorspace: 2345,
    date:"2/28/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://res.cloudinary.com/apartmentlist/image/upload/t_fullsize/7d8ec18c0ed7afb660494b4dbea69f74.jpg",
    address:"8180 Cambridge Drive",
    city:"Lincoln",
    state:"NE",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 1050,
    floorspace: 699,
    date:"2/20/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: []
  },
{
    image: "https://www.guidehabitation.ca/wp-content/themes/gh/pub/auto/9355/xl-myx-condos-791890013x.jpg",
    address:"8257 W. Goldfield Street",
    city:"Grand Island",
    state:"NE",
    homeType:"Condo",
    rooms: 3,
    bath: 3,
    price: 299900,
    floorspace: 1700,
    date:"2/16/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: []
  },
{
    image: "http://explore.virtualmontana.com/wp-content/uploads/2014/07/DSC01806.jpg",
    address:"192 Sierra Avenue",
    city:"Helena",
    state:"MT",
    homeType:"House",
    rooms: 4,
    bath: 4,
    price: 360600,
    floorspace: 2750,
    date:"2/1/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://www.lennar.com/images/com/images/new-homes/14/38/2293/mhi/1NEWPLAN2174IMG011200x650.jpg?w=1200&h=650&as=1",
    address:"6429 Lake View Avenue",
    city:"Las Vegas",
    state:"NV",
    homeType:"Ranch",
    rooms: 4,
    bath: 4,
    price: 342000,
    floorspace: 1788,
    date:"1/26/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: []
  },
{
    image: "https://images1.apartments.com/i2/dNO4UBfqQdSMq9XA7AXs8p72DmNsxwGrkejjZ3MCGq0/111/younion-at-reno--student-living-reno-nv-primary-photo.jpg",
    address:"56 NW. Circle Avenue",
    city:"Reno",
    state:"NV",
    homeType:"Apartment",
    rooms: 2,
    bath: 2,
    price: 1500,
    floorspace: 999,
    date:"1/23/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://photonet.hotpads.com/search/listingPhoto/HotPads/1374088/0001_1871826743_large.jpg",
    address:"20 Birch Hill Court",
    city:"Henderson",
    state:"NV",
    homeType:"Condo",
    rooms: 4,
    bath: 4,
    price: 503800,
    floorspace: 2199,
    date:"1/10/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://www.kearneysagent.com/house2.jpg",
    address:"844 Courtland Street",
    city:"Kearney",
    state:"NE",
    homeType:"House",
    rooms: 4,
    bath: 4,
    price: 245500,
    floorspace: 1785,
    date:"1/9/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "https://s3.amazonaws.com/files.usmre.com/5633/PC280111.JPG",
    address:"8035 Iroquois Court",
    city:"Manchester",
    state:"NH",
    homeType:"Ranch",
    rooms: 5,
    bath: 2,
    price: 300000,
    floorspace: 2450,
    date:"12/11/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://a10e3ce81812d2c62d8f-ff67b352b586fa3c9d6df2715cadd8d2.ssl.cf5.rackcdn.com/fe7fac39e216fff8f465b696bbc85786-1-.jpg?1506722288",
    address:"394 Canterbury Street",
    city:"Concord",
    state:"NH",
    homeType:"Apartment",
    rooms: 3,
    bath: 3,
    price: 3250,
    floorspace: 1850,
    date:"12/1/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://m.cbhomes.com/p/951/4650605/513D68819BDF440/original.jpg",
    address:"218 Beech Street",
    city:"Nashua",
    state:"NH",
    homeType:"Condo",
    rooms: 1,
    bath: 1,
    price: 397800,
    floorspace: 1450,
    date:"11/20/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://c58ba9090ae0d2a43db7-6e08ef50cda417f6a96c0267d4afbe38.ssl.cf5.rackcdn.com/180009127-residential-n18ion-o.jpg",
    address:"800 Fawn Street",
    city:"Carson City",
    state:"NV",
    homeType:"House",
    rooms: 6,
    bath: 3,
    price: 425000,
    floorspace: 3000,
    date:"10/31/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Gym",
      "Finished Basement"
    ]
  },
{
    image: "https://thumbs.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISin96n0tptkzt1000000000.jpg",
    address:"5 Lexington Street",
    city:"Newark",
    state:"NJ",
    homeType:"Ranch",
    rooms: 3,
    bath: 5,
    price: 659500,
    floorspace: 3455,
    date:"10/26/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "https://photonet.hotpads.com/search/listingPhoto/DiverseSolutionsMls1433/202644485/0000_1967663340_large.jpg",
    address:"39 Taylor Road",
    city:"Trenton",
    state:"NJ",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 785,
    floorspace: 800,
    date:"10/4/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://cdnparap70.paragonrels.com/ParagonImages/Property/P7/SJSR/484922/0/0/0/01e6a99c52ec74b28ff32165bee58031/5/5f61d54057a5d7e17d8147323ca371b7/484922.JPG",
    address:"670 Shirley Street",
    city:"Atlantic City",
    state:"NJ",
    homeType:"Condo",
    rooms: 2,
    bath: 2,
    price: 469999,
    floorspace: 1645,
    date:"9/24/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://2.bp.blogspot.com/-Qi49KHt2Uzw/UfGXT5Vi_TI/AAAAAAAABOs/xIaizKirXr8/s1600/portsmouth1.jpg",
    address:"477 Columbia Avenue",
    city:"Portsmouth",
    state:"NH",
    homeType:"House",
    rooms: 3,
    bath: 3,
    price: 275500,
    floorspace: 2150,
    date:"8/25/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: []
  },
{
    image: "https://wp.zillowstatic.com/1/NM-ranch-resized-hero-image-37a7cc.jpg",
    address:"99 Oak Meadow Street",
    city:"Albuquerque",
    state:"NM",
    homeType:"Ranch",
    rooms: 4,
    bath: 4,
    price: 1550000,
    floorspace: 5400,
    date:"7/19/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://cdngeneral.rentcafe.com/dmslivecafe/3/114543/Slider%20C%20-%2091.jpg?quality=85&scale=both&",
    address:"7877 Edgewood Avenue",
    city:"Santa Fe",
    state:"NM",
    homeType:"Apartment",
    rooms: 2,
    bath: 2,
    price: 1300,
    floorspace: 1100,
    date:"6/4/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://www.whitehouse51.com/pic/s3.amazonaws.com/iremlsimg/snmmls/1600297-1.jpg",
    address:"28 Trusel Lane",
    city:"Las Cruces",
    state:"NM",
    homeType:"Condo",
    rooms: 3,
    bath: 3,
    price: 659000,
    floorspace: 1640,
    date:"6/2/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "http://cdnparap70.paragonrels.com/ParagonImages/Property/P7/SJSR/504423/0/0/0/943a10a50c60b5d2e0415ebde0c4bc2d/5/522f7d9e9eb90c5cc92cea165cf15600/504423.JPG",
    address:"583 Hall Drive",
    city:"Atlantic City",
    state:"NJ",
    homeType:"House",
    rooms: 3,
    bath: 2,
    price: 210000,
    floorspace: 2600,
    date:"5/22/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: []
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"786 Primrose Drive",
    city:"Buffalo",
    state:"NY",
    homeType:"Ranch",
    rooms: 3,
    bath: 3,
    price: 345999,
    floorspace: 2200,
    date:"5/9/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://images1.apartments.com/i2/kk-grHbYQgIoeZVyHHWOaKKW2Uz8l5rbERbar1BQETw/111/links-at-fort-smith-fort-smith-ar-primary-photo.jpg",
    address:"42 North Argyle Street",
    city:"Albany",
    state:"NY",
    homeType:"Apartment",
    rooms: 3,
    bath: 3,
    price: 4600,
    floorspace: 1500,
    date:"5/3/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
    address:"8423 Bellevue Drive",
    city:"Syracuse",
    state:"NY",
    homeType:"Condo",
    rooms: 4,
    bath: 4,
    price: 9870000,
    floorspace: 2000,
    date:"5/1/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"7669 Edgemont Drive",
    city:"Roswell",
    state:"NM",
    homeType:"House",
    rooms: 3,
    bath: 4,
    price: 189990,
    floorspace: 2450,
    date:"3/6/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: []
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"97 Lafayette Avenue",
    city:"Raleigh",
    state:"NC",
    homeType:"Ranch",
    rooms: 5,
    bath: 3,
    price: 185999,
    floorspace: 2500,
    date:"2/28/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: []
  },
{
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
    address:"712 Sunset Drive",
    city:"Fayetteville",
    state:"NC",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 1145,
    floorspace: 900,
    date:"2/20/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
    address:"37 Delaware Street",
    city:"Charlotte",
    state:"NC",
    homeType:"Condo",
    rooms: 1,
    bath: 1,
    price: 275599,
    floorspace: 1099,
    date:"2/16/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"429 Church Street",
    city:"New York City",
    state:"NY",
    homeType:"House",
    rooms: 3,
    bath: 3,
    price: 205500,
    floorspace: 1950,
    date:"2/1/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: []
  },
{
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
    address:"30 Ohio Street",
    city:"Fargo",
    state:"ND",
    homeType:"Ranch",
    rooms: 3,
    bath: 3,
    price: 1300,
    floorspace: 1300,
    date:"1/26/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
    address:"670 Jockey Hollow Drive",
    city:"Bismarck",
    state:"ND",
    homeType:"Apartment",
    rooms: 2,
    bath: 2,
    price: 2699,
    floorspace: 1300,
    date:"1/23/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
    address:"778 Prairie Drive",
    city:"Minot",
    state:"ND",
    homeType:"Condo",
    rooms: 2,
    bath: 2,
    price: 454500,
    floorspace: 1499,
    date:"1/10/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"45 South King Street",
    city:"Wilmington",
    state:"NC",
    homeType:"House",
    rooms: 3,
    bath: 2,
    price: 475750,
    floorspace: 3600,
    date:"1/9/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"64 Riverside Avenue",
    city:"Cleveland",
    state:"OH",
    homeType:"Ranch",
    rooms: 4,
    bath: 4,
    price: 875999,
    floorspace: 4400,
    date:"1/10/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
    address:"43 Aspen Avenue",
    city:"Cincinnati",
    state:"OH",
    homeType:"Apartment",
    rooms: 3,
    bath: 3,
    price: 3555,
    floorspace: 1755,
    date:"1/23/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
    address:"7 Beaver Ridge Street",
    city:"Columbus",
    state:"OH",
    homeType:"Condo",
    rooms: 3,
    bath: 3,
    price: 400321,
    floorspace: 1999,
    date:"1/26/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"29 Greenrose Street",
    city:"Grand Forks",
    state:"ND",
    homeType:"House",
    rooms: 5,
    bath: 4,
    price: 450550,
    floorspace: 8000,
    date:"2/1/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"32 Homestead Road",
    city:"Oklahoma City",
    state:"OK",
    homeType:"Ranch",
    rooms: 5,
    bath: 4,
    price: 333999,
    floorspace: 2000,
    date:"2/16/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: []
  },
{
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
    address:"757 Mayfair Drive",
    city:"Tulsa",
    state:"OK",
    homeType:"Apartment",
    rooms: 4,
    bath: 4,
    price: 3650,
    floorspace: 1700,
    date:"2/20/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
    address:"1 High Ridge Court",
    city:"Norman",
    state:"OK",
    homeType:"Condo",
    rooms: 4,
    bath: 4,
    price: 355350,
    floorspace: 1650,
    date:"2/28/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: []
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"7031 Maiden Street",
    city:"Dayton",
    state:"OH",
    homeType:"House",
    rooms: 4,
    bath: 3,
    price: 285000,
    floorspace: 2500,
    date:"3/6/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: []
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"7070 St Margarets Drive",
    city:"Portland",
    state:"OR",
    homeType:"Ranch",
    rooms: 3,
    bath: 4,
    price: 298000,
    floorspace: 2300,
    date:"5/1/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Swimming Pool"
    ]
  },
{
    image: "https://images1.apartments.com/i2/kk-grHbYQgIoeZVyHHWOaKKW2Uz8l5rbERbar1BQETw/111/links-at-fort-smith-fort-smith-ar-primary-photo.jpg",
    address:"9968 Bayport Avenue",
    city:"Eugene",
    state:"OR",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 998,
    floorspace: 899,
    date:"5/3/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
    address:"597 University Road",
    city:"Salem",
    state:"OR",
    homeType:"Condo",
    rooms: 1,
    bath: 1,
    price: 212900,
    floorspace: 985,
    date:"5/9/2017",
    seller:"Ashley	Kennedy",headshot:"",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"9176 Durham Drive",
    city:"Edmond",
    state:"OK",
    homeType:"House",
    rooms: 3,
    bath: 3,
    price: 235600,
    floorspace: 2200,
    date:"5/22/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: []
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"8135 Cactus Lane",
    city:"Philadelphia",
    state:"PA",
    homeType:"Ranch",
    rooms: 4,
    bath: 4,
    price: 342500,
    floorspace: 2600,
    date:"6/2/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: []
  },
{
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
    address:"607 South Union Avenue",
    city:"Pittsburgh",
    state:"PA",
    homeType:"Apartment",
    rooms: 2,
    bath: 2,
    price: 2359,
    floorspace: 1555,
    date:"6/4/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Gym",
      "Swimming Pool",
    ]
  },
{
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
    address:"927 Corona Street",
    city:"Harrisburg",
    state:"PA",
    homeType:"Condo",
    rooms: 2,
    bath: 2,
    price: 759500,
    floorspace: 2000,
    date:"7/19/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"678 School Avenue",
    city:"Bend",
    state:"OR",
    homeType:"House",
    rooms: 4,
    bath: 2,
    price: 265999,
    floorspace: 2850,
    date:"8/25/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"535 Bay Street",
    city:"Providence",
    state:"RI",
    homeType:"Ranch",
    rooms: 5,
    bath: 4,
    price: 320990,
    floorspace: 2250,
    date:"9/24/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: []
  },
{
    image: "https://images1.apartments.com/i2/kk-grHbYQgIoeZVyHHWOaKKW2Uz8l5rbERbar1BQETw/111/links-at-fort-smith-fort-smith-ar-primary-photo.jpg",
    address:"9659 Newport Street",
    city:"Newport",
    state:"RI",
    homeType:"Apartment",
    rooms: 3,
    bath: 3,
    price: 3499,
    floorspace: 1645,
    date:"10/4/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
    address:"7683 Pilgrim Lane",
    city:"Warwick",
    state:"RI",
    homeType:"Condo",
    rooms: 3,
    bath: 3,
    price: 769350,
    floorspace: 1750,
    date:"10/14/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"56 N. Sunbeam Street",
    city:"Lancaster",
    state:"PA",
    homeType:"House",
    rooms: 4,
    bath: 2,
    price: 288600,
    floorspace: 1950,
    date:"10/26/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: []
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"2 Rockledge Avenue",
    city:"Charleston",
    state:"SC",
    homeType:"Ranch",
    rooms: 5,
    bath: 4,
    price: 760465,
    floorspace: 3560,
    date:"10/14/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
    address:"71 State Street",
    city:"Columbia",
    state:"SC",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 799,
    floorspace: 675,
    date:"10/4/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
    address:"789 Anderson Street",
    city:"Myrtle Beach",
    state:"SC",
    homeType:"Condo",
    rooms: 4,
    bath: 4,
    price: 599900,
    floorspace: 2100,
    date:"9/24/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"50 S. Rock Maple Street",
    city:"Cranston",
    state:"RI",
    homeType:"House",
    rooms: 5,
    bath: 3,
    price: 475000,
    floorspace: 3800,
    date:"8/25/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"204 Gainsway Street",
    city:"Sioux Falls",
    state:"SD",
    homeType:"Ranch",
    rooms: 3,
    bath: 3,
    price: 139575,
    floorspace: 2255,
    date:"7/19/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: []
  },
{
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
    address:"226 Old Beach Street",
    city:"Rapid City",
    state:"SD",
    homeType:"Apartment",
    rooms: 2,
    bath: 2,
    price: 1699,
    floorspace: 1485,
    date:"6/4/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
    address:"9878 Columbia Avenue",
    city:"Pierre",
    state:"SD",
    homeType:"Condo",
    rooms: 1,
    bath: 1,
    price: 313299,
    floorspace: 1250,
    date:"6/2/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"8016 Addison Avenue",
    city:"Greenville",
    state:"SC",
    homeType:"House",
    rooms: 3,
    bath: 3,
    price: 215999,
    floorspace: 2375,
    date:"5/22/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: []
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"7701 North Heather Drive",
    city:"Nashville",
    state:"TN",
    homeType:"Ranch",
    rooms: 3,
    bath: 2,
    price: 2450,
    floorspace: 2755,
    date:"5/9/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Swimming Pool"
    ]
  },
{
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
    address:"216 W. Brewery Drive",
    city:"Memphis",
    state:"TN",
    homeType:"Apartment",
    rooms: 3,
    bath: 3,
    price: 1675,
    floorspace: 1445,
    date:"5/3/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
    address:"75 Del Monte Lane",
    city:"Knoxville",
    state:"TN",
    homeType:"Condo",
    rooms: 2,
    bath: 2,
    price: 867000,
    floorspace: 1955,
    date:"5/1/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"7160 Wilson Street",
    city:"Aberdeen",
    state:"SD",
    homeType:"House",
    rooms: 4,
    bath: 4,
    price: 310675,
    floorspace: 2350,
    date:"3/6/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Swimming Pool"
    ]
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"7016 Baker Lane",
    city:"Houston",
    state:"TX",
    homeType:"Ranch",
    rooms: 3,
    bath: 4,
    price: 400500,
    floorspace: 3545,
    date:"2/28/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
    address:"6 Morris Street",
    city:"Dallas",
    state:"TX",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 8599,
    floorspace: 2150,
    date:"2/20/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
    address:"824 Bohemia Road",
    city:"Austin",
    state:"TX",
    homeType:"Condo",
    rooms: 3,
    bath: 3,
    price: 649250,
    floorspace: 1765,
    date:"2/16/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"902 Parker Street",
    city:"Chattanooga",
    state:"TN",
    homeType:"House",
    rooms: 3,
    bath: 2,
    price: 175000,
    floorspace: 1950,
    date:"2/1/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: []
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"9690 Essex Drive",
    city:"Salt Lake City",
    state:"UT",
    homeType:"Ranch",
    rooms: 5,
    bath: 4,
    price: 445000,
    floorspace: 2655,
    date:"1/26/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
    address:"19 Nut Swamp Drive",
    city:"Provo",
    state:"UT",
    homeType:"Apartment",
    rooms: 2,
    bath: 2,
    price: 9000,
    floorspace: 2000,
    date:"1/23/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
    address:"59 Oak Drive",
    city:"Ogden",
    state:"UT",
    homeType:"Condo",
    rooms: 4,
    bath: 4,
    price: 562765,
    floorspace: 1500,
    date:"1/10/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: [
      "Elevator",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"331 East Edgemont Street",
    city:"San Antonio",
    state:"TX",
    homeType:"House",
    rooms: 3,
    bath: 3,
    price: 220000,
    floorspace: 2350,
    date:"1/9/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Swimming Pool"
    ]
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"8888 Thatcher Road",
    city:"Burlington",
    state:"VT",
    homeType:"Ranch",
    rooms: 5,
    bath: 5,
    price: 300999,
    floorspace: 2430,
    date:"1/10/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
    address:"490 Union Street",
    city:"Montpelier",
    state:"VT",
    homeType:"Apartment",
    rooms: 3,
    bath: 3,
    price: 1959,
    floorspace: 1600,
    date:"1/23/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
    address:"3 Fifth Street",
    city:"Rutland City",
    state:"VT",
    homeType:"Condo",
    rooms: 1,
    bath: 1,
    price: 388000,
    floorspace: 1445,
    date:"1/26/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"565 Smoky Hollow Drive",
    city:"Park City",
    state:"UT",
    homeType:"House",
    rooms: 4,
    bath: 3,
    price: 345700,
    floorspace: 3200,
    date:"2/1/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Finished Basement"
    ]
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"97 Pennsylvania Avenue",
    city:"Charlottesville",
    state:"VA",
    homeType:"Ranch",
    rooms: 4,
    bath: 4,
    price: 198000,
    floorspace: 2000,
    date:"2/16/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: []
  },
{
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
    address:"7569 Pennington Street",
    city:"Richmond",
    state:"VA",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 3500,
    floorspace: 900,
    date:"2/20/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: []
  },
{
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
    address:"977 Kent Street",
    city:"Virginia Beach",
    state:"VA",
    homeType:"Condo",
    rooms: 2,
    bath: 2,
    price: 521000,
    floorspace: 1299,
    date:"2/28/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: [
      "Elevator",
      "Gym"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"7998 North Rock Maple Street",
    city:"Brattleboro",
    state:"VT",
    homeType:"House",
    rooms: 3,
    bath: 2,
    price: 169500,
    floorspace: 2000,
    date:"3/6/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: []
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"8260 Edgefield Street",
    city:"Seattle",
    state:"WA",
    homeType:"Ranch",
    rooms: 3,
    bath: 3,
    price: 7520,
    floorspace: 1450,
    date:"5/1/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
    address:"8721 Thompson Road",
    city:"Spokane",
    state:"WA",
    homeType:"Apartment",
    rooms: 2,
    bath: 2,
    price: 2400,
    floorspace: 1500,
    date:"5/3/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
    address:"8122 N.E. Canal Street",
    city:"Tacoma",
    state:"WA",
    homeType:"Condo",
    rooms: 3,
    bath: 3,
    price: 769955,
    floorspace: 1800,
    date:"5/9/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"747B Cherry Hill Road",
    city:"Norfolk",
    state:"VA",
    homeType:"House",
    rooms: 3,
    bath: 2,
    price: 345500,
    floorspace: 2200,
    date:"6/2/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"554 Hill Field Road",
    city:"Charleston",
    state:"WV",
    homeType:"Ranch",
    rooms: 4,
    bath: 3,
    price: 145000,
    floorspace: 2050,
    date:"6/4/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: []
  },
{
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
    address:"10 Gartner Road",
    city:"Morgantown",
    state:"WV",
    homeType:"Apartment",
    rooms: 3,
    bath: 3,
    price: 1150,
    floorspace: 1350,
    date:"7/19/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
    address:"8052 Heather Street",
    city:"Huntington",
    state:"WV",
    homeType:"Condo",
    rooms: 4,
    bath: 4,
    price: 645500,
    floorspace: 1888,
    date:"8/25/2017",
    seller:"Kate	Wagner",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"39 Morris Street",
    city:"Bellevue",
    state:"WA",
    homeType:"House",
    rooms: 3,
    bath: 2,
    price: 399000,
    floorspace: 1970,
    date:"9/24/2017",
    seller:"Wilson	Foster",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
    extras: []
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"792 High Avenue",
    city:"Milwaukee",
    state:"WI",
    homeType:"Ranch",
    rooms: 4,
    bath: 4,
    price: 355000,
    floorspace: 2250,
    date:"10/4/2017",
    seller:"Sherry	Tucker",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
    extras: []
  },
{
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
    address:"555 Illinois Avenue",
    city:"Madison",
    state:"WI",
    homeType:"Apartment",
    rooms: 4,
    bath: 4,
    price: 2850,
    floorspace: 2000,
    date:"10/14/2017",
    seller:"Randy	Wood",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
    extras: [
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
    address:"47 Hillside Street",
    city:"Green Bay",
    state:"WI",
    homeType:"Condo",
    rooms: 1,
    bath: 1,
    price: 430450,
    floorspace: 1675,
    date:"10/26/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"55 Rockaway Drive",
    city:"Wheeling",
    state:"WV",
    homeType:"House",
    rooms: 6,
    bath: 4,
    price: 500999,
    floorspace: 3450,
    date:"10/31/2017",
    seller:"Austin	Alvarado",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
    extras: [
      "Swimming Pool",
      "Finished Basement"
    ]
  },
{
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"41 Kent Street",
    city:"Cheyenne",
    state:"WY",
    homeType:"Ranch",
    rooms: 3,
    bath: 2,
    price: 265755,
    floorspace: 2540,
    date:"11/20/2017",
    seller:"Ivan	Walters",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
    extras: [
      "Swimming Pool"
    ]
  },
{
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
    address:"9832 Oak Valley Avenue",
    city:"Jackson",
    state:"WY",
    homeType:"Apartment",
    rooms: 1,
    bath: 1,
    price: 900,
    floorspace: 850,
    date:"12/1/2017",
    seller:"Ashley	Kennedy",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
    address:"80 Mammoth Avenue",
    city:"Laramie",
    state:"WY",
    homeType:"Condo",
    rooms: 2,
    bath: 2,
    price: 379950,
    floorspace: 1345,
    date:"12/11/2017",
    seller:"Marshall	Patrick",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
    extras: [
      "Elevator",
      "Gym",
      "Swimming Pool"
    ]
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"399 Discovery Way",
    city:"Wisconsin Dells",
    state:"WI",
    homeType:"House",
    rooms: 4,
    bath: 2,
    price: 360000,
    floorspace: 3500,
    date:"6/2/2017",
    seller:"Mattie	Simon",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
    extras: []
  }
]


export default listingsData;
