import React from 'react';

export let Departure={
                airline:'Batik',
                logo: require('../../assets/image/citypark.jpg'),
                code:'XT7654',
                time:'17:50-19:05',
                leave:'17:50',
                until:'19:05',
                airportFrom:'CGK',
                airportTo:'SUB',
                long:'1H 15mnt',
                date:'Tue, 3 April 2018',
                transit:'Direct',
                price:522500,
                discount:475972,
                planeLogo: require('../../assets/image/monas.jpg'),
                class:'Economy'
            }
export let Return={
                airline:'Batik',
                logo: require('../..//assets/image/stasiuncikini.jpg'),
                code:'XT7654',
                time:'17:50-19:05',
                airportFrom:'CGK',
                airportTo:'SUB',
                long:'1H 15mnt',
                transit:'Direct',
                price:522500,
                discount:475972
            }

export let history={
    "details": [
        {
          "id": 102,
          "id_transaction": "15501874",
          "ppob_service_id": 343,
          "number": "0001457614258",
          "qty": 1,
          "nta": 1636210,
          "nra": 1000,
          "paxpaid": 1636210,
          "status": "SUCCESS",
          "created_at": "2017-01-27 14:24:34",
          "updated_at": "2017-01-27 14:24:34",
          "commission": {
            "nra": 1000,
            "komisi": 700,
            "free": 300,
            "pusat": 140,
            "bv": 70,
            "member": 490
          }
        },
        {
            "id": 102,
            "id_transaction": "15501874",
            "ppob_service_id": 343,
            "number": "0001457614258",
            "qty": 1,
            "nta": 1636210,
            "nra": 1000,
            "paxpaid": 1636210,
            "status": "SUCCESS",
            "created_at": "2017-01-27 14:24:34",
            "updated_at": "2017-01-27 14:24:34",
            "commission": {
              "nra": 1000,
              "komisi": 700,
              "free": 300,
              "pusat": 140,
              "bv": 70,
              "member": 490
            }
          },
        {
            "id": 103,
            "id_transaction": "15501875",
            "ppob_service_id": 344,
            "number": "0001457614258",
            "qty": 1,
            "nta": 1636210,
            "nra": 1000,
            "paxpaid": 1636210,
            "status": "SUCCESS",
            "created_at": "2017-02-12 14:24:34",
            "updated_at": "2017-02-12 14:24:34",
            "commission": {
              "nra": 1000,
              "komisi": 700,
              "free": 300,
              "pusat": 140,
              "bv": 70,
              "member": 490
            }
          },
          {
            "id": 103,
            "id_transaction": "15501874",
            "ppob_service_id": 344,
            "number": "0001457614258",
            "qty": 1,
            "nta": 1636210,
            "nra": 1000,
            "paxpaid": 1636210,
            "status": "SUCCESS",
            "created_at": "2017-01-27 14:24:34",
            "updated_at": "2017-01-27 14:24:34",
            "commission": {
              "nra": 1000,
              "komisi": 700,
              "free": 300,
              "pusat": 140,
              "bv": 70,
              "member": 490
            }
          }
      ]
}
export let Booking={
                code:'1676278',
                stats:'BOOKING',
                title:'Mr.',
                name:'Anton Martono',
                ticketPrice:472600,
                airline:'Batik Air',
                old:'Adult',
                times:'1X',
                bagagePrice:0,
                airportPrice:0,
                total:880728

}

export let Accommodation={
                name:'Harvia Suites - Kebon Jeruk',
                address:'Jakarta, Indonesia',
                addressDetail:'Jalan Perjuangan Raya no.63 Kebon Jeruk, Kebon Jeruk, Jakarta Barat, Jakarta, Indonesia'
}

export let Picture={
    count:5
}

export let data_hotel={
    "status": {
        "code": 200,
        "confirm": "success",
        "message": [
            "Success search detail hotel"
        ]
    },
    "details": {
        "mmid": "mastersip",
        "selectedID": "318299",
        "checkin": "2017-10-18",
        "checkout": "2017-10-20",
        "des": "WSASIDSRG",
        "room": "1",
        "adt": "2",
        "chd": "0",
        "details": {
            "data": {
                "name": "Dafam Semarang",
                "rating": "4.00",
                "rooms": "100 kamar",
                "address": "Jl. Imam Bonjol 188 Semarang , NONE, South Eastern Asia - Asia",
                "email": "info@dafamsemarang.com",
                "website": null
            },
            "fasilitas": [
                "220 Volt",
                "24 Room Service",
                "Air-condition",
                "Alarm Clock",
                "Babysit",
                "Bar_Lounge",
                "Business Center",
                "Coffee",
                "Concierge",
                "Copy",
                "Creditcard",
                "Fax",
                "Fitness Center",
                "Laundry",
                "Massage",
                "Meeting Rooms",
                "Minibar",
                "Morningcall",
                "Non Smoking Room",
                "Pets Not Allowed",
                "Rent car",
                "Restaurant",
                "Room service",
                "Safe Deposit Box",
                "Smoke Alarm",
                "Spa",
                "Taxi",
                "Teacoffee",
                "Telephone",
                "TV",
                "Valetpark",
                "Water",
                "Wifi"
            ],
            "rooms": [
                {
                    "characteristic": "DELUXE",
                    "bed": "Twin",
                    "board": "Room Only",
                    "price": "890000",
                    "nta": "890000",
                    "selectedIDroom": "44000"
                },
                {
                    "characteristic": "DELUXE",
                    "bed": "Double",
                    "board": "Room Only",
                    "price": "890000",
                    "nta": "890000",
                    "selectedIDroom": "44001"
                },
                {
                    "characteristic": "DELUXE",
                    "bed": "Twin",
                    "board": "Bed and Breakfast",
                    "price": "980000",
                    "nta": "980000",
                    "selectedIDroom": "44002"
                },
                {
                    "characteristic": "DELUXE",
                    "bed": "Double",
                    "board": "Bed and Breakfast",
                    "price": "980000",
                    "nta": "980000",
                    "selectedIDroom": "44003"
                },
                {
                    "characteristic": "TWIN/DOUBLE ROOM - DE LUXE",
                    "bed": "Double",
                    "board": "Room Only",
                    "price": "1023936",
                    "nta": "1023936",
                    "selectedIDroom": "44004"
                },
                {
                    "characteristic": "TWIN/DOUBLE ROOM - DE LUXE",
                    "bed": "Twin",
                    "board": "Room Only",
                    "price": "1023936",
                    "nta": "1023936",
                    "selectedIDroom": "44005"
                },
                {
                    "characteristic": "TWIN/DOUBLE ROOM - DE LUXE",
                    "bed": "Twin",
                    "board": "Breakfast",
                    "price": "1136023",
                    "nta": "1136023",
                    "selectedIDroom": "44006"
                },
                {
                    "characteristic": "TWIN/DOUBLE ROOM - DE LUXE",
                    "bed": "Double",
                    "board": "Breakfast",
                    "price": "1136023",
                    "nta": "1136023",
                    "selectedIDroom": "44007"
                },
                {
                    "characteristic": "EXECUTIVE",
                    "bed": "Double",
                    "board": "Room Only",
                    "price": "1170000",
                    "nta": "1170000",
                    "selectedIDroom": "44008"
                },
                {
                    "characteristic": "EXECUTIVE",
                    "bed": "Twin",
                    "board": "Room Only",
                    "price": "1170000",
                    "nta": "1170000",
                    "selectedIDroom": "44009"
                },
                {
                    "characteristic": "EXECUTIVE",
                    "bed": "Twin",
                    "board": "Bed and Breakfast",
                    "price": "1270000",
                    "nta": "1270000",
                    "selectedIDroom": "44010"
                },
                {
                    "characteristic": "EXECUTIVE",
                    "bed": "Double",
                    "board": "Bed and Breakfast",
                    "price": "1270000",
                    "nta": "1270000",
                    "selectedIDroom": "44011"
                },
                {
                    "characteristic": "TWIN/DOUBLE ROOM - EXECUTIVE",
                    "bed": "Twin",
                    "board": "Breakfast",
                    "price": "1376208",
                    "nta": "1376208",
                    "selectedIDroom": "44012"
                },
                {
                    "characteristic": "TWIN/DOUBLE ROOM - EXECUTIVE",
                    "bed": "Double",
                    "board": "Breakfast",
                    "price": "1376208",
                    "nta": "1376208",
                    "selectedIDroom": "44013"
                },
                {
                    "characteristic": "JUNIOR SUITE",
                    "bed": "Double",
                    "board": "Room Only",
                    "price": "1480000",
                    "nta": "1480000",
                    "selectedIDroom": "44014"
                },
                {
                    "characteristic": "JUNIOR SUITE",
                    "bed": "Twin",
                    "board": "Room Only",
                    "price": "1480000",
                    "nta": "1480000",
                    "selectedIDroom": "44015"
                },
                {
                    "characteristic": "JUNIOR SUITE",
                    "bed": "Double",
                    "board": "Bed and Breakfast",
                    "price": "1570000",
                    "nta": "1570000",
                    "selectedIDroom": "44016"
                },
                {
                    "characteristic": "JUNIOR SUITE",
                    "bed": "Twin",
                    "board": "Bed and Breakfast",
                    "price": "1570000",
                    "nta": "1570000",
                    "selectedIDroom": "44017"
                }
            ],
            "policy": [
                "1. No cancel and no refund"
            ],
            "images": [
                "hotel.mysmartinpays.com/storage/images/dafam-semarang/0XOCGxgdtVh5MP0gE4NrxKnc7jCTnBILXgnBLZuz.jpeg",
                "hotel.mysmartinpays.com/storage/images/dafam-semarang/Uk46LiDD9KVSQbzZrDJlCYXMMobEy7T0xhPFp307.jpeg",
                "hotel.mysmartinpays.com/storage/images/dafam-semarang/NooSHFk0b2rolCqGZdLpSQni1butpDMf0pag0LXX.jpeg",
                "hotel.mysmartinpays.com/storage/images/dafam-semarang/CteSrvRBILhhL7XZUfcCRp5aZQcMQDNKUxrAQiIx.jpeg",
                "hotel.mysmartinpays.com/storage/images/dafam-semarang/q1YVlg9WM4zUQOirCCHdm0qFlbL0F9ImKCrDFSJq.jpeg",
                "hotel.mysmartinpays.com/storage/images/dafam-semarang/RXgL1C0ThzD0n5dJ9wRomSDmJh9Lf27oUarLzqFa.jpeg",
                "hotel.mysmartinpays.com/storage/images/dafam-semarang/ASBtVvxtWgZ7UyWATcDm3zY8iqsxEgtSn6JvTJ0b.jpeg",
                "hotel.mysmartinpays.com/storage/images/dafam-semarang/CPej4rKjM8VhqlcUidowXcv33fRsQV91BTrVK8MZ.jpeg"
                
            ],
            "promo": null
        }
    }
}

export let data_train={
    "status": {
      "code": 200,
      "confirm": "success",
      "message": [
        "Success get schedule"
      ]
    },
    "details": {
      "queries": {
        "trip": "O",
        "org": "BD",
        "des": "GMR",
        "tgl_dep": "2017-06-12",
        "adt": "1",
        "chd": "0",
        "inf": "0"
      },
      "schedule": {
        "departure": [
          {
            "TrainNo": "37F",
            "TrainName": "ARGO PARAHYANGAN FAKULTATIF",
            "STD": "BD",
            "STA": "GMR",
            "ETD": "2017-06-12 04:00",
            "ETA": "2017-06-12 07:09",
            "Fares": [
              {
                "SubClass": "A",
                "Class": "Eksekutif",
                "SeatAvb": "91",
                "TotalFare": "120000",
                "priceAdt": "120000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481761"
              },
              {
                "SubClass": "C",
                "Class": "Ekonomi",
                "SeatAvb": "195",
                "TotalFare": "80000",
                "priceAdt": "80000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481762"
              }
            ]
          },
          {
            "TrainNo": "19",
            "TrainName": "ARGO PARAHYANGAN",
            "STD": "BD",
            "STA": "GMR",
            "ETD": "2017-06-12 05:00",
            "ETA": "2017-06-12 08:15",
            "Fares": [
              {
                "SubClass": "A",
                "Class": "Eksekutif",
                "SeatAvb": "0",
                "TotalFare": "120000",
                "priceAdt": "120000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481763"
              },
              {
                "SubClass": "H",
                "Class": "Eksekutif",
                "SeatAvb": "0",
                "TotalFare": "115000",
                "priceAdt": "115000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481764"
              },
              {
                "SubClass": "I",
                "Class": "Eksekutif",
                "SeatAvb": "0",
                "TotalFare": "105000",
                "priceAdt": "105000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481765"
              },
              {
                "SubClass": "J",
                "Class": "Eksekutif",
                "SeatAvb": "0",
                "TotalFare": "100000",
                "priceAdt": "100000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481766"
              },
              {
                "SubClass": "C",
                "Class": "Ekonomi",
                "SeatAvb": "0",
                "TotalFare": "80000",
                "priceAdt": "80000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481767"
              }
            ]
          },
          {
            "TrainNo": "21",
            "TrainName": "ARGO PARAHYANGAN",
            "STD": "BD",
            "STA": "GMR",
            "ETD": "2017-07-12 06:30",
            "ETA": "2017-06-12 09:45",
            "Fares": [
              {
                "SubClass": "A",
                "Class": "Eksekutif",
                "SeatAvb": "136",
                "TotalFare": "120000",
                "priceAdt": "120000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481768"
              },
              {
                "SubClass": "H",
                "Class": "Eksekutif",
                "SeatAvb": "0",
                "TotalFare": "115000",
                "priceAdt": "115000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481769"
              },
              {
                "SubClass": "I",
                "Class": "Eksekutif",
                "SeatAvb": "0",
                "TotalFare": "105000",
                "priceAdt": "105000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481770"
              },
              {
                "SubClass": "J",
                "Class": "Eksekutif",
                "SeatAvb": "0",
                "TotalFare": "100000",
                "priceAdt": "100000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481771"
              },
              {
                "SubClass": "B",
                "Class": "Bisnis",
                "SeatAvb": "86",
                "TotalFare": "95000",
                "priceAdt": "95000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481772"
              },
              {
                "SubClass": "K",
                "Class": "Bisnis",
                "SeatAvb": "9",
                "TotalFare": "90000",
                "priceAdt": "90000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481773"
              },
              {
                "SubClass": "N",
                "Class": "Bisnis",
                "SeatAvb": "0",
                "TotalFare": "85000",
                "priceAdt": "85000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481774"
              },
              {
                "SubClass": "O",
                "Class": "Bisnis",
                "SeatAvb": "0",
                "TotalFare": "80000",
                "priceAdt": "80000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481775"
              },
              {
                "SubClass": "C",
                "Class": "Ekonomi",
                "SeatAvb": "96",
                "TotalFare": "70000",
                "priceAdt": "70000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481776"
              }
            ]
          },
          {
            "TrainNo": "33",
            "TrainName": "ARGO PARAHYANGAN",
            "STD": "BD",
            "STA": "GMR",
            "ETD": "2017-06-12 08:35",
            "ETA": "2017-06-12 11:50",
            "Fares": [
              {
                "SubClass": "A",
                "Class": "Eksekutif",
                "SeatAvb": "315",
                "TotalFare": "120000",
                "priceAdt": "120000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481777"
              },
              {
                "SubClass": "H",
                "Class": "Eksekutif",
                "SeatAvb": "8",
                "TotalFare": "115000",
                "priceAdt": "115000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481778"
              },
              {
                "SubClass": "I",
                "Class": "Eksekutif",
                "SeatAvb": "3",
                "TotalFare": "105000",
                "priceAdt": "105000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481779"
              },
              {
                "SubClass": "J",
                "Class": "Eksekutif",
                "SeatAvb": "2",
                "TotalFare": "100000",
                "priceAdt": "100000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481780"
              }
            ]
          },
          {
            "TrainNo": "23",
            "TrainName": "ARGO PARAHYANGAN",
            "STD": "BD",
            "STA": "GMR",
            "ETD": "2017-06-12 11:35",
            "ETA": "2017-06-12 14:57",
            "Fares": [
              {
                "SubClass": "A",
                "Class": "Eksekutif",
                "SeatAvb": "161",
                "TotalFare": "120000",
                "priceAdt": "120000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481781"
              },
              {
                "SubClass": "H",
                "Class": "Eksekutif",
                "SeatAvb": "12",
                "TotalFare": "115000",
                "priceAdt": "115000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481782"
              },
              {
                "SubClass": "I",
                "Class": "Eksekutif",
                "SeatAvb": "8",
                "TotalFare": "105000",
                "priceAdt": "105000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481783"
              },
              {
                "SubClass": "J",
                "Class": "Eksekutif",
                "SeatAvb": "7",
                "TotalFare": "100000",
                "priceAdt": "100000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481784"
              },
              {
                "SubClass": "C",
                "Class": "Ekonomi",
                "SeatAvb": "315",
                "TotalFare": "80000",
                "priceAdt": "80000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481785"
              }
            ]
          },
          {
            "TrainNo": "25",
            "TrainName": "ARGO PARAHYANGAN",
            "STD": "BD",
            "STA": "GMR",
            "ETD": "2017-06-12 14:45",
            "ETA": "2017-06-12 18:03",
            "Fares": [
              {
                "SubClass": "A",
                "Class": "Eksekutif",
                "SeatAvb": "166",
                "TotalFare": "120000",
                "priceAdt": "120000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481786"
              },
              {
                "SubClass": "H",
                "Class": "Eksekutif",
                "SeatAvb": "10",
                "TotalFare": "115000",
                "priceAdt": "115000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481787"
              },
              {
                "SubClass": "I",
                "Class": "Eksekutif",
                "SeatAvb": "8",
                "TotalFare": "105000",
                "priceAdt": "105000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481788"
              },
              {
                "SubClass": "J",
                "Class": "Eksekutif",
                "SeatAvb": "4",
                "TotalFare": "100000",
                "priceAdt": "100000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481789"
              },
              {
                "SubClass": "C",
                "Class": "Ekonomi",
                "SeatAvb": "313",
                "TotalFare": "80000",
                "priceAdt": "80000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481790"
              }
            ]
          },
          {
            "TrainNo": "27",
            "TrainName": "ARGO PARAHYANGAN",
            "STD": "BD",
            "STA": "GMR",
            "ETD": "2017-06-12 16:10",
            "ETA": "2017-06-12 19:27",
            "Fares": [
              {
                "SubClass": "A",
                "Class": "Eksekutif",
                "SeatAvb": "178",
                "TotalFare": "120000",
                "priceAdt": "120000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481791"
              },
              {
                "SubClass": "H",
                "Class": "Eksekutif",
                "SeatAvb": "4",
                "TotalFare": "115000",
                "priceAdt": "115000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481792"
              },
              {
                "SubClass": "I",
                "Class": "Eksekutif",
                "SeatAvb": "4",
                "TotalFare": "105000",
                "priceAdt": "105000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481793"
              },
              {
                "SubClass": "J",
                "Class": "Eksekutif",
                "SeatAvb": "0",
                "TotalFare": "100000",
                "priceAdt": "100000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481794"
              },
              {
                "SubClass": "C",
                "Class": "Ekonomi",
                "SeatAvb": "313",
                "TotalFare": "80000",
                "priceAdt": "80000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481795"
              }
            ]
          },
          {
            "TrainNo": "29",
            "TrainName": "ARGO PARAHYANGAN",
            "STD": "BD",
            "STA": "GMR",
            "ETD": "2017-06-12 19:40",
            "ETA": "2017-06-12 22:56",
            "Fares": [
              {
                "SubClass": "A",
                "Class": "Eksekutif",
                "SeatAvb": "144",
                "TotalFare": "120000",
                "priceAdt": "120000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481796"
              },
              {
                "SubClass": "H",
                "Class": "Eksekutif",
                "SeatAvb": "23",
                "TotalFare": "115000",
                "priceAdt": "115000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481797"
              },
              {
                "SubClass": "I",
                "Class": "Eksekutif",
                "SeatAvb": "12",
                "TotalFare": "105000",
                "priceAdt": "105000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481798"
              },
              {
                "SubClass": "J",
                "Class": "Eksekutif",
                "SeatAvb": "2",
                "TotalFare": "100000",
                "priceAdt": "100000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481799"
              },
              {
                "SubClass": "C",
                "Class": "Ekonomi",
                "SeatAvb": "306",
                "TotalFare": "80000",
                "priceAdt": "80000",
                "priceChd": "0",
                "priceInf": "0",
                "selectedIDdep": "1481800"
              }
            ]
          }
        ]
      }
    }
  }

export let data_flight = {
    "status": {
        "code": 200,
        "confirm": "success",
        "message": [
            "Success get schedule class."
        ]
    },
    "details": {
        "error_code": "000",
        "error_msg": "",
        "mmid": "mastersip",
        "ac": "GA",
        "org": "CGK",
        "des": "SUB",
        "flight": "O",
        "tgl_dep": "2017-01-10",
        "tgl_ret": "",
        "adt": "1",
        "chd": "0",
        "inf": "0",
        "schedule": {
            "departure": [
                {
                    "Flights": [
                        {
                            "FlightNo": "GA318",
                            "Transit": "0",
                            "STD": "CGK",
                            "STA": "SUB",
                            "ETD": "2017-01-10 15:10",
                            "ETA": "2017-01-10 16:45"
                        }
                    ],
                    "Fares": [
                        [
                            {
                                "SubClass": "H",
                                "SeatAvb": "9",
                                "TotalFare": "817000",
                                "selectedIDdep": "463695"
                            },
                            {
                                "SubClass": "S",
                                "SeatAvb": "9",
                                "TotalFare": "927000",
                                "selectedIDdep": "463696"
                            },
                            {
                                "SubClass": "V",
                                "SeatAvb": "9",
                                "TotalFare": "1037000",
                                "selectedIDdep": "463697"
                            },
                            {
                                "SubClass": "Y",
                                "SeatAvb": "9",
                                "TotalFare": "1644200",
                                "selectedIDdep": "463698"
                            },
                            {
                                "SubClass": "D",
                                "SeatAvb": "9",
                                "TotalFare": "2777600",
                                "selectedIDdep": "463699"
                            },
                            {
                                "SubClass": "C",
                                "SeatAvb": "9",
                                "TotalFare": "3207300",
                                "selectedIDdep": "463700"
                            }
                        ]
                    ]
                }
            ]
        }
    }
}