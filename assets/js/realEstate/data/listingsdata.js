const listingsData = [
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"282 Spring Lake Drive North",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
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
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "https://photos.zillowstatic.com/p_h/IS6anucsreemu91000000000.jpg",
    address:"9101 Wolfram Way",
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
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
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
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
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
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"15528 Hartford St",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://images1.apartments.com/i2/kk-grHbYQgIoeZVyHHWOaKKW2Uz8l5rbERbar1BQETw/111/links-at-fort-smith-fort-smith-ar-primary-photo.jpg",
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
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"173 Evelyn Way",
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
    image: "https://images1.apartments.com/i2/kk-grHbYQgIoeZVyHHWOaKKW2Uz8l5rbERbar1BQETw/111/links-at-fort-smith-fort-smith-ar-primary-photo.jpg",
    address:"9515 Genesee Avenue",
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
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
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
  },{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"5664 W County 150 Rd S",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"196 N Wabash Ave",
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
    image: "https://images1.apartments.com/i2/kk-grHbYQgIoeZVyHHWOaKKW2Uz8l5rbERbar1BQETw/111/links-at-fort-smith-fort-smith-ar-primary-photo.jpg",
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
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
    address:"1405 Truman Ave",
    city:"Fort Collins",
    state:"CO",
    homeType:"Condo",
    rooms: 2,
    bath: 2,
    price: 150500,
    floorspace: 1800,
    date:"10/26/2017",
    seller:"Amelia	Berry",
    headshot:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
    extras: []
  },
{
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"6425 Boston Cliff Rd",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
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
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
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
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
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
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://images1.apartments.com/i2/kk-grHbYQgIoeZVyHHWOaKKW2Uz8l5rbERbar1BQETw/111/links-at-fort-smith-fort-smith-ar-primary-photo.jpg",
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
    image: "https://media-cdn.tripadvisor.com/media/photo-s/05/8f/9e/81/fairmont-chicago-millennium.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"8302 Victoria Street",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
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
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
    address:"511 Kent Street",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
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
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
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
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
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
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
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
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
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
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
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
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
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
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://images1.apartments.com/i2/kk-grHbYQgIoeZVyHHWOaKKW2Uz8l5rbERbar1BQETw/111/links-at-fort-smith-fort-smith-ar-primary-photo.jpg",
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
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    address:"48 Mulberry Court",
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
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
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
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"380 Railroad Street",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
    address:"8 Grant Avenue",
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
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    address:"947 West Grandrose Avenue",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
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
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
    address:"863 Deerfield Avenue",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"8021 Oak Meadow Street",
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
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
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
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
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
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
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
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://images1.apartments.com/i2/kk-grHbYQgIoeZVyHHWOaKKW2Uz8l5rbERbar1BQETw/111/links-at-fort-smith-fort-smith-ar-primary-photo.jpg",
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
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
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
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
    address:"599 Lake View Avenue",
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
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
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
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
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
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
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
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
    image: "http://legendhomeshouston.com/sites/legendhomecorp.com/files/community/image-3-web.jpg",
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
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
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
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
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
    image: "https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg",
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
