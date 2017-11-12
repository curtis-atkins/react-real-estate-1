const data = [
{
    image: "https://photos.zillowstatic.com/p_h/ISqtbui1bh6n1g1000000000.jpg",
    address:"282 Spring Lake Dr N",
    city:"Mobile",
    state:"AL",
    hometype:"House",
    rooms:3,
    bath: 2,
    price: 135000,
    floorspace: 1348,
    extras: []
  },
{
    image: "https://photos.zillowstatic.com/p_h/ISes6ski99cww50000000000.jpg",
    address:"1805 Castleberry Way",
    city:"Birmingham",
    state:"AL",
    hometype:"Ranch",
    rooms: 3,
    bath: 2,
    price: 64900,
    floorspace: 1064,
    extras: [
      gym
    ]
  },
{
    image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
    address:"605 Maxwell Blvd",
    city:"Montgomery",
    state:"AL",
    hometype:"Apartment",
    rooms:1,
    bath:1,
    price: "1199",
    floorspace: "970",
    extras: [
      elevator,
      gym
    ]
  },
{
    image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
    address:"1020 Cresent Fls",
    city:"Huntsville",
    state:"AL",
    hometype:"Condo",
    rooms:3,
    bath: 2,
    price: "229900",
    floorspace: "1883",
    extras: [
      gym
    ]
  },
{
    image: "https://t.realgeeks.media/thumbnail/mKKSLqlH1s8JzfYraIMDNYbUJ48=/trim:top-left:15/fit-in/400x0/https://property-media.realgeeks.com/264/88127ea22860e6e631d426c896c4e14c.jpg",
    address:"19665 Villages Scenic Parkway",
    city:"Anchorage",
    state:"AK",
    hometype:"House",
    rooms:3 ,
    bath: 3,
    price: 1875000,
    floorspace: 4361,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://photos.zillowstatic.com/p_h/IS6anucsreemu91000000000.jpg",
    address:"9101 Wolfram Way",
    city:"Juneau",
    state:"AK",
    hometype:"Ranch",
    rooms: 3,
    bath: 2,
    price: 429900,
    floorspace: 1675,
    extras: []
  },
{
    image: "https://images1.apartments.com/i2/l4mFLqMMWGfkYN-DTE3u3aaW7E3crTDvFawiHDobkig/117/weeks-field-estates-i-apartments-fairbanks-ak-primary-photo.jpg",
    address:"1301 Kellum St",
    city:"Fairbanks",
    state:"AK",
    hometype:"Apartment",
    rooms: 2,
    bath: 1,
    price: "1069"
    floorspace: "830",
    extras: [
      Swimming Pool,
      Gym
    ]
  },
{
    image: "https://photos.zillowstatic.com/p_h/ISy78vi81zdkxp0000000000.jpg",
    address:"L6 Middle Is",
    city:"Sitka",
    state:"AK",
    hometype:"Condo",
    rooms:3,
    bath: 1,
    price: "179000"
    floorspace: "864",
    extras: []
  },
{
    image: "https://images-mls.static-ziprealty.com/images_mls/ARMLS/5/68/68/5686848_250.jpg",
    address:"2047 E Cielo Grande Avenue",
    city:"Phoenix",
    state:"AZ",
    hometype:"House",
    rooms: 4,
    bath: 3,
    price: 371964,
    floorspace: 2676,
    extras: [
      Finished Basement,
      Swimming Pool
    ]
  },
{
    image: "http://www.viewtucsonareahouses.com/homes/az/tucson/tucsonresall2172466420170318170708074822000000/6799-n-rattlesnake-canyon-rd-tucson-az-85750",
    address:"6799 N Rattlesnake Canyon Rd",
    city:"Tucson",
    state:"AZ",
    hometype:"Ranch",
    rooms: 5,
    bath: 8,
    price:9900000 ,
    floorspace:12946 ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478"
    address:"9595 E Thunderbird Road",
    city:"Scottsdale",
    state:"AZ",
    hometype:"Apartment",
    rooms:3,
    bath:2,
    price: "1429",
    floorspace: "1371",
    extras: [
      Elevator,
      Gym,
      Swimming Pool
    ]
  },
{
    image: "http://www.searchforhousesinphoenix.com/homes/az/scottsdale/armlsresad546693320160707024149060530000000/7502-e-main-st-3003-scottsdale-az-85251",
    address:"1508 N Alta Mesa Dr 114",
    city:"Mesa",
    state:"AZ",
    hometype:"Condo",
    rooms:3,
    bath: 3,
    price: "655000"
    floorspace: "2575",
    extras: [
      Gym,
      Finished Basement
    ]
  },
{
    image: "https://thumbs.trulia-cdn.com/pictures/thumbs_3/zillowstatic/ISekk5ey76kcy01000000000.jpg",
    address:"15528 Hartford St",
    city:"Little Rock",
    state:"AR",
    hometype:"House",
    rooms: 4,
    bath: 2 ,
    price: 215000,
    floorspace: 2000,
    extras: []
  },
{
    image: "http://images.marketleader.com/HouseImages/ARKANSAS/520/1064520.jpg?434c840624",
    address:"374 Mimosa LN",
    city:"Fayetteville",
    state:"AR",
    hometype:"Ranch",
    rooms: 2,
    bath: 1,
    price: 120000,
    floorspace: 792,
    extras: []
  },
{
    image: "https://images1.apartments.com/i2/kk-grHbYQgIoeZVyHHWOaKKW2Uz8l5rbERbar1BQETw/111/links-at-fort-smith-fort-smith-ar-primary-photo.jpg",
    address:"5100 Zero St",
    city:"Fort Smith",
    state:"AR",
    hometype:"Apartment",
    rooms:1,
    bath:1,
    price: "480",
    floorspace: "551",
    extras: [
      Gym,
      Swimming Pool
    ]
  },
{
    image: "https://photos.zillowstatic.com/p_h/IS2voahwb0ikii0000000000.jpg",
    address:"5000 Central Ave APT 33",
    city:"Hot Springs",
    state:"AR",
    hometype:"Condo",
    rooms:3,
    bath: 3,
    price: "399000"
    floorspace: "",
    extras: []
  },
{
    image: "https://images-mls.static-ziprealty.com/images_mls/CA_DAMLS/17/28/88/17288834_480.jpg",
    address:"2393 Castilian Drive",
    city:"Los Angeles",
    state:"CA",
    hometype:"House",
    rooms: 4,
    bath: 5,
    price: 3250760,
    floorspace: 3620 ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://thumbs.trulia-cdn.com/pictures/thumbs_3/zillowstatic/ISyj51r0vbrulu1000000000.jpg",
    address:"173 Evelyn Way",
    city:"San Francisco",
    state:"CA",
    hometype:"Ranch",
    rooms: 3,
    bath: 1,
    price: 1099000,
    floorspace: 1025,
    extras: [
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://thumbs.trulia-cdn.com/pictures/thumbs_3/ps.108/4/6/6/7/picture-uh=5d27828aa84a6fcafb61e338eeccb11-ps=4667dcdbfba63c3b35eae421ffa58d.jpg",
    address:"9515 Genesee Avenue",
    city:"San Diego",
    state:"CA",
    hometype:"Apartment",
    rooms:2,
    bath:1,
    price: "2200"
    floorspace: "600",
    extras: [
      Gym,
      Swimming Pool
    ]
  },
{
    image: "",
    address:"",
    city:"Sacramento",
    state:"CA",
    hometype:"Condo",
    rooms:1,
    bath: 1,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },{
    image: "",
    address:"",
    city:"Denver",
    state:"CO",
    hometype:"House",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3e1u0igtfn1rPaQUcEZU-l4zhdX7vusdGBeVagYEPfDP74tgjdA",
    address:"",
    city:"Colorado Springs",
    state:"CO",
    hometype:"Ranch",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQok3ItEgva9HVWKSsBcy0xOKBxijItiVU-IofVJdKN-_9eAXvT9A",
    address:"",
    city:"Boulder",
    state:"CO",
    hometype:"Apartment",
    rooms:4,
    bath: 4,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBn6x4Dz5m2EQKfGPQ6gmbRZTxcBF26q2Lz0mbJcxqCVVLOOUT7g",
    address:"",
    city:"Fort Collins",
    state:"CO",
    hometype:"Condo",
    rooms:2,
    bath: 2,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Hartford",
    state:"CT",
    hometype:"House",
    rooms: 4,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7NZTLG0Dn5XeHKItgf_RYKF3QNKC9BPmQ9VzW_SUemrRL4ta",
    address:"",
    city:"New Haven",
    state:"CT",
    hometype:"Ranch",
    rooms: 2,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXWVslTI9_umrDK40zFb1uMjYrozADZ5ebnvpYSF2qld1jHgXgw",
    address:"",
    city:"Stamford",
    state:"CT",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIcZYQOM6AY_5nBMQ9j54zUCApoPde8iTUlleno3lnNG6EhVE",
    address:"",
    city:"Bridgeport",
    state:"CT",
    hometype:"Condo",
    rooms:3,
    bath: 3,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Wilmington",
    state:"DE",
    hometype:"House",
    rooms: 5,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYCouS62poc7l1ps3_kXkeNIVH9m6B-KgMF2Xp4AbYhG0A5nk",
    address:"",
    city:"Newark",
    state:"DE",
    hometype:"Ranch",
    rooms: 3,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwSgHjA8uP00rlgOrnJ0JjYPR1MzOGHfE5ff2YRNEau0ojpE1Ag",
    address:"",
    city:"Dover",
    state:"DE",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "http://media.chicagomag.com//images/2010/0710/C201007-Condos-Aqua.jpg?ver=1279049725",
    address:"",
    city:"Lewes",
    state:"DE",
    hometype:"Condo",
    rooms:4,
    bath: 4,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Miami",
    state:"FL",
    hometype:"House",
    rooms: 3,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlO91FfVzIkMePCL-oEhjEP6ivka8rEy3SulaORwr0K_8eLJx3",
    address:"",
    city:"Orlando",
    state:"FL",
    hometype:"Ranch",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVmTsIgxr_UczyO35aV8_XynWRCZQdpJhbN42lpVVllR3wxgS",
    address:"",
    city:"Tampa",
    state:"FL",
    hometype:"Apartment",
    rooms:2,
    bath: 2,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
    address:"",
    city:"Fort Lauderdale",
    state:"FL",
    hometype:"Condo",
    rooms:1,
    bath: 1,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Atlanta",
    state:"GA",
    hometype:"House",
    rooms: 3,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5VbqvWvb0iKcuipfS2VNcQ72C5lR3thTKVgdkWKKiDlFAJsF",
    address:"",
    city:"Savannah",
    state:"GA",
    hometype:"Ranch",
    rooms: 5,
    bath: 6,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKHeEcv4J3ibAkkjodZt5JLjkUsKaLb28-JsION_0FDrHAQUlVw",
    address:"",
    city:"Marietta",
    state:"GA",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://media-cdn.tripadvisor.com/media/photo-s/05/8f/9e/81/fairmont-chicago-millennium.jpg",
    address:"",
    city:"Augusta",
    state:"GA",
    hometype:"Condo",
    rooms:2,
    bath: 2,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Honolulu",
    state:"HI",
    hometype:"House",
    rooms: 3,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIEJ7hmAIIdXnRO0a_e8TqdnTqDHmdq8akd95qrCeb-VksXPX",
    address:"",
    city:"Kailua",
    state:"HI",
    hometype:"Ranch",
    rooms: 4,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaHUBysYeLOQSK4vahXdx6zJNh3hKswpLExY1mPk9pn12PUn6gQ",
    address:"",
    city:"Kaneohe",
    state:"HI",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
    address:"",
    city:"Kapolei",
    state:"HI",
    hometype:"Condo",
    rooms:3,
    bath: 3,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Boise",
    state:"ID",
    hometype:"House",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqTMeOjVvGb9Vjnj42__BJiXW9igIa_Yt2vqerNJ0cADmGcmn4w",
    address:"",
    city:"Coeur d'Alene",
    state:"ID",
    hometype:"Ranch",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9n0PVuX9QrDW_rImyJ2ixhuuhQarBgd3B0Ru3coHfKoXU5PE",
    address:"",
    city:"Nampa",
    state:"ID",
    hometype:"Apartment",
    rooms:2,
    bath: 2,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBojPV0uy63MNA7DJFVvdaxj6Ij9s0bVU2FkZqUBBqPs89pQXAuw",
    address:"",
    city:"Meridian",
    state:"ID",
    hometype:"Condo",
    rooms:4,
    bath: 4,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Chicago",
    state:"IL",
    hometype:"House",
    rooms: 5,
    bath: 5,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBFQVSKZ_OCaUlUF5FaF-ctHdXqQsKY4bZMjKJJDIdxs3c45b",
    address:"",
    city:"Naperville",
    state:"IL",
    hometype:"Ranch",
    rooms: 3,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ2x1Zj_7QoFm5uykoNlXHGULqWfY-SyJnxq5yoVmkipanaDK",
    address:"",
    city:"Peoria",
    state:"IL",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2d7m_cRkAH6SZBS4_gWfGNhi6_NjAH0BHyeRMSi_ZrmajUbPoA",
    address:"",
    city:"Champaign",
    state:"IL",
    hometype:"Condo",
    rooms:1,
    bath: 1,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"Indianapolis",
    city:"Carmel",
    state:"IN",
    hometype:"House",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQE27NUwbCyctqzMfFszHe3598fc1KeaaHwnOM1YtCXSYHvHZJeg",
    address:"",
    city:"Fort Wayne",
    state:"IN",
    hometype:"Ranch",
    rooms: 5,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwXtg8CaJhqaaPyho8WcEqE4Mfw4IK2zDNdKKVo4YWeNk2e7A",
    address:"",
    city:"Bloomington",
    state:"IN",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOR-oBZHcpPWRJa6p_SQp3MRz0BNMa2IpzjbbH6NerA53cD6tO",
    address:"",
    city:"South Bend",
    state:"IN",
    hometype:"Condo",
    rooms:2,
    bath: 2,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAX_YAcfdcnJyohXYkRgAfK900-2Aumtbuh6WrDucrPEtXkFzmAA",
    address:"",
    city:"Des Moines",
    state:"IA",
    hometype:"Ranch",
    rooms: 4,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-tcCVJBRMT6-mnDz9hSF7IA1wYsLpU1iKeiStwedgHbUs8Xe",
    address:"",
    city:"Iowa City",
    state:"IA",
    hometype:"Apartment",
    rooms:2,
    bath: 2,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5Xz1gh0tLMT7OZFgQ4Qyi9lrLYJgQ7vdaxHLynSVde6gHeLP",
    address:"",
    city:"Cedar Rapids",
    state:"IA",
    hometype:"Condo",
    rooms:3,
    bath: 3,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"South Bend",
    state:"IN",
    hometype:"House",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxQZs5lyF9rM3MBhDIO-NcWIBghUx3RapHSW_8yeLL8m-8SQr7g",
    address:"",
    city:"Topeka",
    state:"KS",
    hometype:"Ranch",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORUeE0Wl2M2X0RRytFD1xeu6CAj8a9ybJEdQIJIil6QKRFf_R",
    address:"",
    city:"Overland Park",
    state:"KS",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70qSAI03vjHUd9R15WgLQZsIlPaW0WYXTW9mA8LsIghqAINhU",
    address:"",
    city:"Lawrence",
    state:"KS",
    hometype:"Condo",
    rooms:4,
    bath: 4,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Ames",
    state:"IA",
    hometype:"House",
    rooms: 4,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5RX46gDcDdu4KVF3JJwkIQ13SdXYZLrdZTPTjkfA8knmgCqf",
    address:"",
    city:"Louisvile",
    state:"KY",
    hometype:"Ranch",
    rooms: 4,
    bath: 5,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GZWbCTsDI3sUghDVUC3qymhJAEFV-zQvIQtu0gqrGexTqpEf",
    address:"",
    city:"Lexington",
    state:"KY",
    hometype:"Apartment",
    rooms:4,
    bath: 4,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQhx7m5y7fIzLRH5452CB84Vc_2Z9-EWIc7bfpsQeZvB22yLBsA",
    address:"",
    city:"Frankfort",
    state:"KY",
    hometype:"Condo",
    rooms:1,
    bath: 1,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Kansas City",
    state:"KS",
    hometype:"House",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjwxl4iqJ6fRNbMrA3lSluUBzVEZGa6c8WoAAxtCDrv95gHGq",
    address:"",
    city:"New Orleans",
    state:"LA",
    hometype:"Ranch",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBzqN9uhD5LKVHuGF2jp1bxdwHin8_vmhfpQJmNN8_QbA8WEi",
    address:"",
    city:"Baton Rouge",
    state:"LA",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvDF1zNT3xq_8rpZC04KkVzp0Kyc8qoOG7Q1SUqAbHfyEjeapYg",
    address:"",
    city:"Lafayette",
    state:"LA",
    hometype:"Condo",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Bowling Green",
    state:"KY",
    hometype:"House",
    rooms: 6,
    bath: 5,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvya41DEk4ckJseqc0UOZ7tO_ostGyhKO5ZMoEUhwAVyV2KkU",
    address:"",
    city:"Portland",
    state:"ME",
    hometype:"Ranch",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtIAYvM1z4gD2ygLzVgTvOJyePoEbXwsmUcudziF-Ql-aDeuz5Q",
    address:"",
    city:"Bangor",
    state:"ME",
    hometype:"Apartment",
    rooms:2,
    bath: 2 ,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKMOJyoV5lfRzdJPwYqo_7ykh3rX8mhyhpbgWKGgL_VVtLkJov",
    address:"",
    city:"Augusta",
    state:"ME",
    hometype:"Condo",
    rooms:3,
    bath: 3,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Shreveport",
    state:"LA",
    hometype:"House",
    rooms: 3,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5C1a9yMTTsM2l_GGUg0QODBSlVuwMaleuX-tzT230bitTohuWgA",
    address:"",
    city:"Baltimore",
    state:"MD",
    hometype:"Ranch",
    rooms: 4,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuC71_6FCYForluXuDWf-UWTSBHdSGhQHnwtou_2ZMfTf6aDWxrA",
    address:"",
    city:"Annapolis",
    state:"MD",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfNxq58M7gi3Ir_Fl8J64Pk9Bs1ufmx9ot515-IWC5kL2L11gMUA",
    address:"",
    city:"Rockville",
    state:"MD",
    hometype:"Condo",
    rooms:4,
    bath: 4,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Lewiston",
    state:"ME",
    hometype:"House",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMSwLuPShyqR3AKyFVqWEEntqZdU0FDRZXXSk3wPyvwoiY-Ix",
    address:"",
    city:"Boston",
    state:"MA",
    hometype:"Ranch",
    rooms: 4,
    bath: 5,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0OhytlKQRcqYqzjWurEMDaQOm_9GlUtKeC7edwD_z2AH45-u-A",
    address:"",
    city:"Cambridge",
    state:"MA",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu43-T04TkgGRHTuldJ_1hYgb6cKqtpAkqKTvLqReyrnB5Tv7U",
    address:"",
    city:"Worcester",
    state:"MA",
    hometype:"Condo",
    rooms:1,
    bath: 1,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Silver Spring",
    state:"MD",
    hometype:"House",
    rooms: 3,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJh3VvVhRpAYAY_OoI-qZEYnBkOxo88A4-gv-zbBeCmEGPrGR9Q",
    address:"",
    city:"Detroit",
    state:"MI",
    hometype:"Ranch",
    rooms: 3,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxlUlnTIoZkXz8syN6hP_GYyaZ4YnGvtYjSfy-H5bfaN3nVKKwA",
    address:"",
    city:"Ann Arbor",
    state:"MI",
    hometype:"Apartment",
    rooms:2,
    bath: 2,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Grand Rapids",
    state:"MI",
    hometype:"Condo",
    rooms:2,
    bath: 2,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Springfield",
    state:"MA",
    hometype:"House",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEG5mr-a3-s0C-NsejR_JWlkQOjiFlFAy98dUCQPNpBxsWza7Ew",
    address:"",
    city:"Minneapolis",
    state:"MN",
    hometype:"Ranch",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWquAslPzenEZ2wi5zr4NCx-QHlzfpREhcbws9AR39pkjdBH7Faw",
    address:"",
    city:"Saint Paul",
    state:"MN",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgqkyxjHxyPFtzFNu0I8qoVLORVDOFIRljyC_sTSorFYygixbJw",
    address:"",
    city:"Duluth",
    state:"MN",
    hometype:"Condo",
    rooms:3,
    bath: 3,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Kalamazoo",
    state:"MI",
    hometype:"House",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYk1F6lDB_oD-KSU3pHyrihyCOHLE3R6kXV9hPSDTZ0oNyVNsX_g",
    address:"",
    city:"Jackson",
    state:"MS",
    hometype:"Ranch",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMC65UDFl-mQEKuO3gb4dZ_-YYoaEkr1UHbJq_fz0x7gxV9ulm",
    address:"",
    city:"Biloxi",
    state:"MS",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWEmzByu0cMvpnaiNqiSSaFc6WZVfDM6SzDtvx_ClCjcrAvmx",
    address:"",
    city:"Hattiesburg",
    state:"MS",
    hometype:"Condo",
    rooms:4,
    bath: 4,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"St. Cloud",
    state:"MN",
    hometype:"House",
    rooms: 4,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EMt4MkEmbkO4dncG464hVqNM1aA-zkkBnAj4yu4qkLojIwQi",
    address:"",
    city:"St. Louis",
    state:"MO",
    hometype:"Ranch",
    rooms: 5,
    bath: 5,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYTLqdotPDIh76QVGLLc8Xkr9Nnr08IR_K59NZ-ggzbLxZZ42xg",
    address:"",
    city:"Kansas City",
    state:"MO",
    hometype:"Apartment",
    rooms:2,
    bath: 2,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ePVGdvoeZyWl2yIm68RUOEU4uwpwl3mERmgsFmkIS2ybje8Hqw",
    address:"",
    city:"Springfield",
    state:"MO",
    hometype:"Condo",
    rooms:1,
    bath: 1,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Gulfport",
    state:"MS",
    hometype:"House",
    rooms: 3,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWXCIIhQZs05cLIgmZal3cBYlwaqZ7Vk0YB06XvoHe49nM1MH1w",
    address:"",
    city:"Missoula",
    state:"MT",
    hometype:"Ranch",
    rooms: 3,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlPKWoXaO9YpR5cdO9KoPG4IaMRBAruygv4txcZFLRJFTtkWBjfA",
    address:"",
    city:"Billings",
    state:"MT",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFdvuF6nRtDpV5ESGIPba9VzaQ33uHxYw0vRGOVg_tXCOYTKr",
    address:"",
    city:"Bozeman",
    state:"MT",
    hometype:"Condo",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Jefferson City",
    state:"MO",
    hometype:"House",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_yFZ9TRicP9oWOwhQ4xi3CCm9O-0rVR0qNP7GQty98q2z94RnA",
    address:"",
    city:"Omaha",
    state:"NE",
    hometype:"Ranch",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkDpB_BMknDLzOOBg_AjPo0E1D26KqKCZBlim_bitXdwmvBG2",
    address:"",
    city:"Lincoln",
    state:"NE",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBy8z3zrCNNRLbDRQDyDlrJG5mDa1R87VBGYDwcEexwfY_F9c",
    address:"",
    city:"Grand Island",
    state:"NE",
    hometype:"Condo",
    rooms:3,
    bath: 3,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Helena",
    state:"MT",
    hometype:"House",
    rooms: 3,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUZCbxI1BIWjVp8XcLKm0C_KritFK-yKED_mDQFmDFFjsjPVA",
    address:"",
    city:"Las Vegas",
    state:"NV",
    hometype:"Ranch",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_T7NoATOYZrdP2_kT-zJn3yesGMGM0ykv7FQcCDKi8VlMSl8",
    address:"",
    city:"Reno",
    state:"NV",
    hometype:"Apartment",
    rooms:2,
    bath: 2,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFHTwYhNy2S0e68MtlTDPKB5lP1JuHeFV06wQZfTrHlN1ciDHpg",
    address:"",
    city:"Henderson",
    state:"NV",
    hometype:"Condo",
    rooms:4,
    bath: 4,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Kearney",
    state:"NE",
    hometype:"House",
    rooms: 4,
    bath: 4,

    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZnj6NAX2oAST1pXWMQNyklejfFGvobNN6NZU1EDHvNzN986U4g",
    address:"",
    city:"Manchester",
    state:"NH",
    hometype:"Ranch",
    rooms: 5,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABl7Rs0kfLMrGdynlOPZXQtH1lUvt1Hrd22Aq0U0cUt1WvsGM",
    address:"",
    city:"Concord",
    state:"NH",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmppspjsprwfcj1HY7MQjPJ1pLxR59St-khKRPm-fwSDJLRn3",
    address:"",
    city:"Nashua",
    state:"NH",
    hometype:"Condo",
    rooms:1,
    bath: 1,
    price: ""
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Carson City",
    state:"NV",
    hometype:"House",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_b-UAOE5MRyCzcY5Iapt410LAC0SSAOvvmUKqUqZ1vwq8sPd",
    address:"",
    city:"Newark",
    state:"NJ",
    hometype:"Ranch",
    rooms: 3,
    bath: 5,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHalJAXRfwDHjA7wUwed4spY_06bxKIFy1LDmBMPBYTE7-LwoZew",
    address:"",
    city:"Trenton",
    state:"NJ",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_P4BiVqdUn7R2eVKEfP9Qa1gHk6lSrvpJX9NhB0riVOB_gfWlg",
    address:"",
    city:"Atlantic City",
    state:"NJ",
    hometype:"Condo",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Portsmouth",
    state:"NH",
    hometype:"House",
    rooms: 5,
    bath: 5,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPVihKrY87gkalP9jjmlHW8lZpVkASAtexI5lCFsJ7J3_VUxv",
    address:"",
    city:"Albuquerque",
    state:"NM",
    hometype:"Ranch",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQIRTgzzioWIwLh0QHkq62neLUOdy32bA8jMxs2VtWuyGEcET",
    address:"",
    city:"Santa Fe",
    state:"NM",
    hometype:"Apartment",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZH0ndbPwAdaJUkNQF2dZezbrBFmaKHz49wr4SzISelD82Bz3Y",
    address:"",
    city:"Las Cruces",
    state:"NM",
    hometype:"Condo",
    rooms:3,
    bath: 3,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Atlantic City",
    state:"NJ",
    hometype:"House",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbkf9iItO_kkdTKxFXHJNOxdyCK9GyxTNUsqgl93hY9qjUY48",
    address:"",
    city:"Buffalo",
    state:"NY",
    hometype:"Ranch",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaA3uowTl1OnmF_JUHbvFlUS3l7aKhkYlBwRyCziQJ-FNVrmp",
    address:"",
    city:"Albany",
    state:"NY",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjs7KwLayaU0o-60lwd9CBjimMsx3Tj1Vu5J2zjgYMSDw7WaX",
    address:"",
    city:"Syracuse",
    state:"NY",
    hometype:"Condo",
    rooms:4,
    bath: 4,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Roswell",
    state:"NM",
    hometype:"House",
    rooms: 3,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7epNiRqn22yhm5xvFq52KrhFO_N-oK1M5b7aU492tntGTOmU",
    address:"",
    city:"Raleigh",
    state:"NC",
    hometype:"Ranch",
    rooms: 5,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtw-aqh_L5i7utZBwIfwcfIQD3XLLlq708ULc-KMQ_zvFMEs-oA",
    address:"",
    city:"Fayetteville",
    state:"NC",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8tXw4g5Pw_SRJJlyxn7HTmCXMPHeOt_CRobE4z_jfeqea7giqw",
    address:"",
    city:"Charlotte",
    state:"NC",
    hometype:"Condo",
    rooms:1,
    bath: 1,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"New York City",
    state:"NY",
    hometype:"House",
    rooms: 5,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYItaz0_jwzMSvLlpcs1uC0IYbe7an0PSRkQV1wCd1dXCINUv",
    address:"",
    city:"Fargo",
    state:"ND",
    hometype:"Ranch",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK87BbZ6J2djlbrxhAWuwZrhaMn-3gQf05bFixOXvmd4009gRM8A",
    address:"",
    city:"Bismarck",
    state:"ND",
    hometype:"Apartment",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbFcKrXR0Q6-Zmb_Ts51JyGwl2utkWeWf3O5KrVFtGnMmCujK",
    address:"",
    city:"Minot",
    state:"ND",
    hometype:"Condo",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Wilmington",
    state:"NC",
    hometype:"House",
    rooms: 3,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwc2Z2-E-WEgn-q8cyAJGT16wOeoCA2z_A71C_dqRYsaYrn1b1QQ",
    address:"",
    city:"Cleveland",
    state:"OH",
    hometype:"Ranch",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd23m4wZr97kuDoc9o3scEbB_e9WbL5wXKRy8gOjao1db7hLG2xQ",
    address:"",
    city:"Cincinnati",
    state:"OH",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvVO5VE468o5jSsjXuqEcFLk3UgUJG0J3fsFS_3r-U_TR88iRcQ",
    address:"",
    city:"Columbus",
    state:"OH",
    hometype:"Condo",
    rooms:3,
    bath: 3,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Grand Forks",
    state:"ND",
    hometype:"House",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0HLVVPboelJHggx8U70W7XY6z9vmri5guQyq0CmEkxahaU8-",
    address:"",
    city:"Oklahoma City",
    state:"OK",
    hometype:"Ranch",
    rooms: 5,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRL1ati9AfbnZCjhI7X9uoicx3jaZazaAAVjnAeumE-sS84I7q",
    address:"",
    city:"Tulsa",
    state:"OK",
    hometype:"Apartment",
    rooms:4,
    bath: 4,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5TNkOojlQh0yK70B0TufQhmDkpXJ7tlM1zRJlHgxyJBZp28iCg",
    address:"",
    city:"Norman",
    state:"OK",
    hometype:"Condo",
    rooms:4,
    bath: 4,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Dayton",
    state:"OH",
    hometype:"House",
    rooms: 5,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeYB_MUvTI1IcmunGwEek5JPtJXZOXrl3vwqXvZzx6vNDSMBZ",
    address:"",
    city:"Portland",
    state:"OR",
    hometype:"Ranch",
    rooms: 3,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKA8EA6l4DoorL2qpb1aeqsG3NojSWmTu-2SX2FYW8HImypLd",
    address:"",
    city:"Eugene",
    state:"OR",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIvDyPfBwBmZG2bG_hUA4zFtzDlNsP8PlzQjXcLZQEYaXvHu8",
    address:"",
    city:"Salem",
    state:"OR",
    hometype:"Condo",
    rooms:1,
    bath: 1,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Edmond",
    state:"OK",
    hometype:"House",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSSJXZbjqxXLLYkN98xvMDo8RIFRk8DBUrs5bYqp1HVWG84nSZQ",
    address:"",
    city:"Philadelphia",
    state:"PA",
    hometype:"Ranch",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNY6huuxaH_kU373DAAj7tfafjXNwIQUP7RPrOGQsHwcT4fDg5Zw",
    address:"",
    city:"Pittsburgh",
    state:"PA",
    hometype:"Apartment",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBDIA615npFx2wq5GpI56hcgQ2rOd_moGjtcFoLfTymtE6HKXgw",
    address:"",
    city:"Harrisburg",
    state:"PA",
    hometype:"Condo",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Bend",
    state:"OR",
    hometype:"House",
    rooms: 3,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2c8p9QhuqYu73l_4C57OBEqEhLd4okZ-D9wiQmId5NXFIQo60SQ",
    address:"",
    city:"Providence",
    state:"RI",
    hometype:"Ranch",
    rooms: 5,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGCAAtXT_1clPp9s5FLU05H5XC9rpQ4cAxidNSJ_HaaXuf72Diw",
    address:"",
    city:"Newport",
    state:"RI",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTYkiwMixiOcU17xW0uuaMQYYubgKrqauIxYLX7lunY2dH7erRw",
    address:"",
    city:"Warwick",
    state:"RI",
    hometype:"Condo",
    rooms:3,
    bath: 3,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Lancaster",
    state:"PA",
    hometype:"House",
    rooms: 4,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6a_SZRjBu0neUUtc4uYi9WQ58c_nWQTorBlKXE1D7vjhyOMc",
    address:"",
    city:"Charleston",
    state:"SC",
    hometype:"Ranch",
    rooms: 5,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5fq1Q0NRZ0DBppu_NM-A2NBeXa8FdUk4R4VABRx44ZcbM7LS",
    address:"",
    city:"Columbia",
    state:"SC",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjNcsz4zjshByQ7pyR70I8hAjaaz954hdCAC8iIJIoVGShFlcaQ",
    address:"",
    city:"Myrtle Beach",
    state:"SC",
    hometype:"Condo",
    rooms:4,
    bath: 4,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Cranston",
    state:"RI",
    hometype:"House",
    rooms: 4,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fG57Rnt5V0PkYWt6gQpFcCODWhM8ucRg2c6zLTPbLNh89kqs",
    address:"",
    city:"Sioux Falls",
    state:"SD",
    hometype:"Ranch",
    rooms: 5,
    bath: 5,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rJ87xY1aMTlptJ23-u8W9PqOwdzZ5mROK8Q-X5SUdrhBofcB",
    address:"",
    city:"Rapid City",
    state:"SD",
    hometype:"Apartment",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKY5kO0IC1MsW_dSNEedIUUOzV8mg_KS3LiXeF20pg2R5ibvM0",
    address:"",
    city:"Pierre",
    state:"SD",
    hometype:"Condo",
    rooms:1,
    bath: 1,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Greenville",
    state:"SC",
    hometype:"House",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQIY0DM0GjEKx5NH3KCe5EtYXqfU1DTstFfYEhoMiRq3hg0fETg",
    address:"",
    city:"Nashville",
    state:"TN",
    hometype:"Ranch",
    rooms: 3,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaA3uowTl1OnmF_JUHbvFlUS3l7aKhkYlBwRyCziQJ-FNVrmp",
    address:"",
    city:"Memphis",
    state:"TN",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrBaRO8fKS5bOkd0P1j0-cluiBnBfLhteLODKqQi2E446Hhs",
    address:"",
    city:"Knoxville",
    state:"TN",
    hometype:"Condo",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Aberdeen",
    state:"SD",
    hometype:"House",
    rooms: 4,
    bath: 5,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPpPJq2zoc3FMsfmK0IgHcGx8Riq0e-GcwuumA-F3m2MgPN-H",
    address:"",
    city:"Houston",
    state:"TX",
    hometype:"Ranch",
    rooms: 3,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6Yk7XZmPsAf5jWohA9ximeFLItU6qlw2nGUMZoILdaGKESQj",
    address:"",
    city:"Dallas",
    state:"TX",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcK8hvtbi7tiMw6ZY0Pjqt3RPU1FpRN6__-emOdKaoTkwoNOeqA",
    address:"",
    city:"Austin",
    state:"TX",
    hometype:"Condo",
    rooms:3,
    bath: 3,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Chattanooga",
    state:"TN",
    hometype:"House",
    rooms: 3,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5g_A9g4fwc273EasSoHgZfwWBK_mfwQmPK38JOJv8blKJIi9O",
    address:"",
    city:"Salt Lake City",
    state:"UT",
    hometype:"Ranch",
    rooms: 5,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXUIN9wf1Udnb0ZiqEQAB_u8I45ILmHDidCs-MgDRRB1FQHzQYQ",
    address:"",
    city:"Provo",
    state:"UT",
    hometype:"Apartment",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPFFTWDBt9ErOwoRLaRj0OJK5hJ-PGRPqhsH5sEdnOvCnU8v7",
    address:"",
    city:"Ogden",
    state:"UT",
    hometype:"Condo",
    rooms:4,
    bath: 4,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"San Antonio",
    state:"TX",
    hometype:"House",
    rooms:3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5z61ZUgpxgvs69Y4IXVLMhSBq5yaK1VnGBTSrtEzEXgO-ro1BTw",
    address:"",
    city:"Burlington",
    state:"VT",
    hometype:"Ranch",
    rooms: 5,
    bath: 5,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0DAKSE0DNOwHYByzlz-XMfprQg7Uj0fZR9dr7FvBehzBkJS30A",
    address:"",
    city:"Montpelier",
    state:"VT",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXF9MXOszHdevHzfHVCmOsIlbuVSi5EjgAMgvfZJ79y_21JAfXBQ",
    address:"",
    city:"Rutland City",
    state:"VT",
    hometype:"Condo",
    rooms:1,
    bath: 1,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Park City",
    state:"UT",
    hometype:"House",
    rooms: 5,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-U6JnDwHKyOARhagVBFPrp8AXDgSY2j6hmCZUHUAE-As0Llc0Ig",
    address:"",
    city:"Charlottesville",
    state:"VA",
    hometype:"Ranch",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCNry98vt0QATn4UniJ1JaMVaYHuSpI2K8BfRPq7jCwl-g7CxMA",
    address:"",
    city:"Richmond",
    state:"VA",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZFnbdJ6P0Vdhj-FhEotDxcJeO21dF_aX3b67R59aCvLahFxjiQ",
    address:"",
    city:"Virginia Beach",
    state:"VA",
    hometype:"Condo",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Brattleboro",
    state:"VT",
    hometype:"House",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdO61LAq1WMRZCKEJd9f-HLpVDrt6cNrZ8L9SxEFG8egd7u-X",
    address:"",
    city:"Seattle",
    state:"WA",
    hometype:"Ranch",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IkHhyw4Ug2SPXwl2xRqvBhxUpLtTi_vXjEbfz9Aiq7EYjwaz",
    address:"",
    city:"Spokane",
    state:"WA",
    hometype:"Apartment",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7-lEZdSbYRI_6mx2CPGqNHgM5zwWppten5mtvMAaipxTPdmxvg",
    address:"",
    city:"Tacoma",
    state:"WA",
    hometype:"Condo",
    rooms:3,
    bath: 3,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Norfolk",
    state:"VA",
    hometype:"House",
    rooms: 3,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkn938XYCWxkcSeWdAC_6pWzC7s3SdYbVl8US_975LEx4Ng4FKVw",
    address:"",
    city:"Charleston",
    state:"WV",
    hometype:"Ranch",
    rooms: 4,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0OhytlKQRcqYqzjWurEMDaQOm_9GlUtKeC7edwD_z2AH45-u-A",
    address:"",
    city:"Morgantown",
    state:"WV",
    hometype:"Apartment",
    rooms:3,
    bath: 3,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVmaHxY1MYTh4Rn-z7Ft8BRO-nbpqSHtmFPyhsc_bYqBtsvUo",
    address:"",
    city:"Huntington",
    state:"WV",
    hometype:"Condo",
    rooms:4,
    bath: 4,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Bellevue",
    state:"WA",
    hometype:"House",
    rooms: 3,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyE5GIObV5FDnCAn79Uv6Oc9GJz_J2OAe1Kc6HFXjJbFpuaTYr",
    address:"",
    city:"Milwaukee",
    state:"WI",
    hometype:"Ranch",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWquAslPzenEZ2wi5zr4NCx-QHlzfpREhcbws9AR39pkjdBH7Faw",
    address:"",
    city:"Madison",
    state:"WI",
    hometype:"Apartment",
    rooms:4,
    bath: 4,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0yMJjhdQiuceoONKaNKp0pEFXt9NOy4QTAAgWHlYymUIPWPt",
    address:"",
    city:"Green Bay",
    state:"WI",
    hometype:"Condo",
    rooms:1,
    bath: 1,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Wheeling",
    state:"WV",
    hometype:"House",
    rooms: 3,
    bath: 3,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-LZ-FHokepg1euq8R-gykQL8nmrjHnyi8QgmuY_rBGjsbupop",
    address:"",
    city:"Cheyenne",
    state:"WY",
    hometype:"Ranch",
    rooms: 3,
    bath: 2,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWGS4MWfZzWi9GrtmaS5ODtTbeRxyNw2_Cg9ZUakUwi7UsIIo74A",
    address:"",
    city:"Jackson",
    state:"WY",
    hometype:"Apartment",
    rooms:1,
    bath: 1,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII3ZW_IpGzpvcQEs82bL0aT4RAqCHfW2cPFUReJkmsGTBgDYK",
    address:"",
    city:"Laramie",
    state:"WY",
    hometype:"Condo",
    rooms:2,
    bath: 2,
    price: "",
    floorspace: "",
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  },
{
    image: "",
    address:"",
    city:"Wisconsin Dells",
    state:"WI",
    hometype:"House",
    rooms: 4,
    bath: 4,
    price: ,
    floorspace: ,
    extras: [
      Elevator,
      Gym,
      Swimming Pool,
      Finished Basement
    ]
  }
]
