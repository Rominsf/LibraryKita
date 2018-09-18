import { icon, Lamp, gridMenuMakan, gridMaps, gridForm,
        gridHomeHD } from '../Components/ImagePath';

export const Markers = [
    {
        id: 1,
        title: 'City Park',
        description: 'Taman city',
        image: icon,
        telp: '085891099423',
        profil: require('../../assets/image/citypark.jpg'),
        coordinates: {
            latitude: -6.199390,
            longitude: 106.8326,
        }
    },
    {
        id: 2,
        title: 'Stasiun Cikini',
        description: 'kereta jakarta',
        image: icon,
        telp: '085891099424',
        profil: require('../../assets/image/stasiuncikini.jpg'),
        coordinates: {
            latitude: -6.198580,
            longitude: 106.8413,
        }
    },
    {
        id: 3,
        title: 'Jakarta',
        description: 'jakarta monas',
        image: icon,
        telp: '085891099425',
        profil: require('../../assets/image/monas.jpg'),
        coordinates: {
            latitude: -6.214620,
            longitude: 106.8451,
        }
    },
    {
        id: 4,
        title: 'Ciledug',
        description: 'Tangerang',
        image: icon,
        telp: '085891099426',
        profil: require('../../assets/image/ciledug.jpg'),
        coordinates: {
            latitude: -6.236467,
            longitude: 106.7058,
        }
    },
    {
        id: 5,
        title: 'Cipondoh',
        description: 'Cipondoh danau',
        image: icon,
        telp: '085891099427',
        profil: require('../../assets/image/cipondoh.jpg'),
        coordinates: {
            latitude: -6.186116,
            longitude: 106.6822,
        }
    },
    {
        id: 6,
        title: 'Cengkareng',
        description: 'Cengkareng jakarta barat',
        image: icon,
        telp: '085891099428',
        profil: require('../../assets/image/cengkareng.jpg'),
        coordinates: {
            latitude: -6.148665,
            longitude: 106.7353,
        }
    },
    {
        id: 7,
        title: 'Tangerang',
        description: 'Tangerang Kota',
        image: icon,
        telp: '085891099420',
        profil: require('../../assets/image/tangerang.jpg'),
        coordinates: {
            latitude: -6.202394,
            longitude: 106.6527,
        }
    },
    {
        id: 8,
        title: 'Karawaci',
        description: 'Karawaci danau',
        image: icon,
        telp: '085891099429',
        profil: require('../../assets/image/karawaci.jpg'),
        coordinates: {
            latitude: -6.180585,
            longitude: 106.6202,
        }
    },
    {
        id: 9,
        title: 'Tanjung Priok',
        description: 'Tanjung priok pelabuhan',
        image: icon,
        telp: '085891099411',
        profil: require('../../assets/image/tanjungpriok.jpg'),
        coordinates: {
            latitude: -6.132055,
            longitude: 106.8715,
        }
    },
    {
        id: 10,
        title: 'Ciputat',
        description: 'daerah ciputat',
        image: icon,
        telp: '085891099412',
        profil: require('../../assets/image/ciputat.jpg'),
        coordinates: {
            latitude: -6.307706,
            longitude: 106.7176,
        }
    },
];

export const BUTTONS = [
    { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
    { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
    { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
    { text: "Delete", icon: "trash", iconColor: "#fa213b" },
    { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];

export const Dataku =
{
    name: 'Romi Nursyafiq',
    position: 'Tangerang',
    education: 'Gunadarma University',
    summary: "I am React Native. im ready fighting.",
    //#3. add your profile picture url
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR180PNyjyOL9ohK1wg5FlPT1YvzLUdqJ6DQ459p3C6tWhvRhlgWw",
    //#3. Add bgPicture on state
    //bgPicture: require('../../assets/image/pantai.jpg')
};

export const Seat = [
    { id: 1, nameA: 'A', nameB: 'B', nameC: 'C', nameD: 'D', imageA: Lamp, imageB: gridMenuMakan, imageC: gridMaps },
]

export const itemGrid = [
    { id: 1, name: 'Google Maps', image: gridMaps},
    { id: 2, name: 'Form Find', image: gridForm},
    { id: 3, name: 'Home', image: gridHomeHD},
    { id: 4, name: 'QR Code', image: gridMenuMakan},
    { id: 5, name: 'Scan QR Code', image: gridMenuMakan },
    { id: 6, name: 'Login Keychain', image: Lamp},
    { id: 7, name: 'Screen Shoot', image: gridHomeHD },
    { id: 8, name: 'Application', image: gridHomeHD },
    { id: 9, name: 'Checklist Box Flat', image: Lamp },
    { id: 10, name: 'Departure Train', image: gridMenuMakan },
    { id: 11, name: 'Merge 2 View', image: Lamp },
    { id: 12, name: 'Example Modal', image: Lamp },
    { id: 13, name: 'Example Marker Style', image: Lamp },
    { id: 14, name: 'GPS GMaps', image: Lamp },
    { id: 15, name: 'Form Find Date Modal', image: gridMenuMakan },
    { id: 16, name: 'Filter Name Search', image: gridHomeHD },
    { id: 17, name: 'Sample Seat Flatlist', image: gridHomeHD },

];

export const dataslideshow = [
    {
        title: 'Cafe Happy Days',
        caption: 'Caption 1',
        url: require('../../assets/image/happydays.jpg')
    }, {
        title: 'Waffle Es krim',
        caption: 'Caption 2',
        url: require('../../assets/image/waffle.jpg')
    }, {
        title: 'Es krim Cokelat',
        caption: 'Caption 3',
        url: require('../../assets/image/eskrim.jpg')
    }
];

export const item_tanggal = [
    { id: 1, tanggal: "1" },
    { id: 2, tanggal: "2" },
    { id: 3, tanggal: "3" },
    { id: 4, tanggal: "4" },
    { id: 5, tanggal: "5" },
    { id: 6, tanggal: "6" },
    { id: 7, tanggal: "7" },
    { id: 8, tanggal: "8" },
    { id: 9, tanggal: "9" },
    { id: 10, tanggal: "10" },
    { id: 11, tanggal: "11" },
    { id: 12, tanggal: "12" },
    { id: 13, tanggal: "13" },
    { id: 14, tanggal: "14" },
    { id: 15, tanggal: "15" },
    { id: 16, tanggal: "16" },
    { id: 17, tanggal: "17" },
    { id: 18, tanggal: "18" },
    { id: 19, tanggal: "19" },
    { id: 20, tanggal: "20" },
    { id: 21, tanggal: "21" },
    { id: 22, tanggal: "22" },
    { id: 23, tanggal: "23" },
    { id: 24, tanggal: "24" },
    { id: 25, tanggal: "25" },
    { id: 26, tanggal: "26" },
    { id: 27, tanggal: "27" },
    { id: 28, tanggal: "28" },
    { id: 29, tanggal: "29" },
    { id: 30, tanggal: "30" },
];

export const item_bulan = [
    { id: 1, bulan: "Januari" },
    { id: 2, bulan: "Februari" },
    { id: 3, bulan: "Maret" },
    { id: 4, bulan: "April" },
    { id: 5, bulan: "Mei" },
    { id: 6, bulan: "Juni" },
    { id: 7, bulan: "Juli" },
    { id: 8, bulan: "Agustus" },
    { id: 9, bulan: "September" },
    { id: 10, bulan: "Oktober" },
    { id: 11, bulan: "November" },
    { id: 12, bulan: "Desember" }
];

export const item_tahun = [
    { id: 1, tahun: "1990" },
    { id: 2, tahun: "1991" },
    { id: 3, tahun: "1992" },
    { id: 4, tahun: "1993" },
    { id: 5, tahun: "1994" },
    { id: 6, tahun: "1995" },
    { id: 7, tahun: "1996" },
    { id: 8, tahun: "1997" },
    { id: 9, tahun: "1998" },
    { id: 10, tahun: "1999" },
    { id: 11, tahun: "2000" },
    { id: 12, tahun: "2001" },
    { id: 13, tahun: "2002" },
    { id: 14, tahun: "2003" },
    { id: 15, tahun: "2004" },
    { id: 16, tahun: "2005" },
    { id: 17, tahun: "2006" },
    { id: 18, tahun: "2007" },
    { id: 19, tahun: "2008" },
    { id: 20, tahun: "2009" },
    { id: 21, tahun: "2010" },
];

export const Item_Seat = [
    { id: "1A", name: "1A", status: 0 },
    { id: "1B", name: "1B", status: 1 },
    { id: "1C", name: "1C", status: 1 },
    { id: "1D", name: "1D", status: 0 },
    { id: "2A", name: "2A", status: 0 },
    { id: "2B", name: "2B", status: 1 },
    { id: "2C", name: "2C", status: 0 },
    { id: "2D", name: "2D", status: 0 },
    { id: "3A", name: "3A", status: 1 },
    { id: "3B", name: "3B", status: 1 },
    { id: "3C", name: "3C", status: 0 },
    { id: "3D", name: "3D", status: 1 },
    { id: "4A", name: "4A", status: 1 },
    { id: "4B", name: "4B", status: 0 },
    { id: "4C", name: "4C", status: 1 },
    { id: "4D", name: "4D", status: 0 },
    { id: "5A", name: "5A", status: 0 },
    { id: "5B", name: "5B", status: 1 },
    { id: "5C", name: "5C", status: 0 },
    { id: "5D", name: "5D", status: 1 },
    { id: "6A", name: "6A", status: 0 },
    { id: "6B", name: "6B", status: 0 },
    { id: "6C", name: "6C", status: 1 },
    { id: "6D", name: "6D", status: 1 },
    { id: "7A", name: "7A", status: 0 },
    { id: "7B", name: "7B", status: 1 },
    { id: "7C", name: "7C", status: 1 },
    { id: "7D", name: "7D", status: 0 },
    { id: "8A", name: "8A", status: 0 },
    { id: "8B", name: "8B", status: 1 },
    { id: "8C", name: "8C", status: 1 },
    { id: "8D", name: "8D", status: 1 },
    { id: "9A", name: "9A", status: 0 },
    { id: "9B", name: "9B", status: 1 },
    { id: "9C", name: "9C", status: 0 },
    { id: "9D", name: "9D", status: 1 },
    { id: "10A", name: "10A", status: 1 },
    { id: "10B", name: "10B", status: 1 },
    { id: "10C", name: "10C", status: 1 },
    { id: "10D", name: "10D", status: 0 }
];

export const Airlines = [
    {
        name: "Airasia",
        id: "1"
    }, {
        name: "Sriwijaya",
        id: "2"
    }, {
        name: "Citilink",
        id: "3"
    }, {
        name: "Garuda",
        id: "4"
    }, {
        name: "Batik",
        id: "5"
    }, {
        name: " Wings",
        id: "6"
    }, {
        name: " Lion",
        id: "7"
    }
];

export const keys = [
    {
        "path": "Airasia",
        "name": "Airasia",
        "checked": false,
        "id": "2"
    },
    {
        "path": "Sriwijaya",
        "name": "Sriwijaya",
        "checked": false,
        "id": "3"
    },
    {
        "path": "Citilink",
        "name": "Citilink",
        "checked": false,
        "id": "4"
    },
    {
        "path": "Garuda",
        "name": "Garuda",
        "checked": false,
        "id": "5"
    },
    {
        "path": " Batik",
        "name": " Batik",
        "checked": false,
        "id": "6"
    },
    {
        "path": " Wings",
        "name": " Wings",
        "checked": false,
        "id": "7"
    },
    {
        "path": " Lion",
        "name": " Lion",
        "checked": false,
        "id": "8"
    }
];

export const data = {
    "status": {
        "code": 200,
        "confirm": "success",
        "message": [
            "Success get seat"
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
            "inf": "0",
            "selectedIDdep": "1481944"
        },
        "seat": {
            "departure": {
                "TrainNo": "37F",
                "SubClass": "A",
                "seat_map": [{
                        "kode_wagon": "EKO_AC",
                        "no_wagon": "1",
                        "jml_row": "21",
                        "jml_col": "4",
                        "avl": [
                            [
                                "1",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "1",
                                "D",
                                "C",
                                "0"
                            ],
                            [
                                "2",
                                "A",
                                "C",
                                "0"
                            ],
                            [
                                "2",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "2",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "2",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "B",
                                "C",
                                "0"
                            ],
                            [
                                "5",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "21",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "21",
                                "B",
                                "C",
                                "1"
                            ]
                        ]
                    },
                    {
                        "kode_wagon": "EKO_AC",
                        "no_wagon": "2",
                        "jml_row": "21",
                        "jml_col": "4",
                        "avl": [
                            [
                                "1",
                                "C",
                                "F",
                                "1"
                            ],
                            [
                                "1",
                                "D",
                                "F",
                                "1"
                            ],
                            [
                                "2",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "2",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "2",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "2",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "21",
                                "A",
                                "F",
                                "1"
                            ],
                            [
                                "21",
                                "B",
                                "F",
                                "1"
                            ]
                        ]
                    },
                    {
                        "kode_wagon": "EKO_AC",
                        "no_wagon": "3",
                        "jml_row": "21",
                        "jml_col": "4",
                        "avl": [
                            [
                                "1",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "1",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "2",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "2",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "2",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "2",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "21",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "21",
                                "B",
                                "C",
                                "1"
                            ]
                        ]
                    },
                    {
                        "kode_wagon": "EKO_AC",
                        "no_wagon": "4",
                        "jml_row": "21",
                        "jml_col": "4",
                        "avl": [
                            [
                                "1",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "1",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "2",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "2",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "2",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "2",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "3",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "4",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "5",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "6",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "7",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "8",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "9",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "10",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "11",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "12",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "13",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "14",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "15",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "16",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "17",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "18",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "19",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "B",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "C",
                                "C",
                                "1"
                            ],
                            [
                                "20",
                                "D",
                                "C",
                                "1"
                            ],
                            [
                                "21",
                                "A",
                                "C",
                                "1"
                            ],
                            [
                                "21",
                                "B",
                                "C",
                                "1"
                            ]
                        ]
                    },
                    {
                        "kode_wagon": "EKS",
                        "no_wagon": "1",
                        "jml_row": "13",
                        "jml_col": "4",
                        "avl": [
                            [
                                "1",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "1",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "1",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "2",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "2",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "2",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "2",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "3",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "3",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "3",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "3",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "4",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "4",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "4",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "4",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "5",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "5",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "5",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "5",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "6",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "6",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "6",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "6",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "7",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "7",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "7",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "7",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "8",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "8",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "8",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "8",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "9",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "9",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "9",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "9",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "10",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "10",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "10",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "10",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "11",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "11",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "11",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "11",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "12",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "12",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "12",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "12",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "13",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "13",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "13",
                                "D",
                                "A",
                                "1"
                            ]
                        ]
                    },
                    {
                        "kode_wagon": "EKS",
                        "no_wagon": "2",
                        "jml_row": "13",
                        "jml_col": "4",
                        "avl": [
                            [
                                "1",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "1",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "1",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "2",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "2",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "2",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "2",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "3",
                                "A",
                                "D",
                                "1"
                            ],
                            [
                                "3",
                                "B",
                                "D",
                                "1"
                            ],
                            [
                                "3",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "3",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "4",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "4",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "4",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "4",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "5",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "5",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "5",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "5",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "6",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "6",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "6",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "6",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "7",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "7",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "7",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "7",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "8",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "8",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "8",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "8",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "9",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "9",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "9",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "9",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "10",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "10",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "10",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "10",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "11",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "11",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "11",
                                "C",
                                "D",
                                "1"
                            ],
                            [
                                "11",
                                "D",
                                "D",
                                "1"
                            ],
                            [
                                "12",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "12",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "12",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "12",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "13",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "13",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "13",
                                "D",
                                "A",
                                "1"
                            ]
                        ]
                    },
                    {
                        "kode_wagon": "EKS",
                        "no_wagon": "3",
                        "jml_row": "13",
                        "jml_col": "4",
                        "avl": [
                            [
                                "1",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "1",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "1",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "2",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "2",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "2",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "2",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "3",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "3",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "3",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "3",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "4",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "4",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "4",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "4",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "5",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "5",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "5",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "5",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "6",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "6",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "6",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "6",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "7",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "7",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "7",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "7",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "8",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "8",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "8",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "8",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "9",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "9",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "9",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "9",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "10",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "10",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "10",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "10",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "11",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "11",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "11",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "11",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "12",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "12",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "12",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "12",
                                "D",
                                "A",
                                "0"
                            ],
                            [
                                "13",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "13",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "13",
                                "D",
                                "A",
                                "1"
                            ]
                        ]
                    },
                    {
                        "kode_wagon": "EKS",
                        "no_wagon": "4",
                        "jml_row": "13",
                        "jml_col": "4",
                        "avl": [
                            [
                                "1",
                                "A",
                                "A",
                                "0"
                            ],
                            [
                                "1",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "1",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "2",
                                "A",
                                "A",
                                "0"
                            ],
                            [
                                "2",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "2",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "2",
                                "D",
                                "A",
                                "0"
                            ],
                            [
                                "3",
                                "A",
                                "A",
                                "0"
                            ],
                            [
                                "3",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "3",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "3",
                                "D",
                                "A",
                                "0"
                            ],
                            [
                                "4",
                                "A",
                                "A",
                                "0"
                            ],
                            [
                                "4",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "4",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "4",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "5",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "5",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "5",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "5",
                                "D",
                                "A",
                                "0"
                            ],
                            [
                                "6",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "6",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "6",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "6",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "7",
                                "A",
                                "A",
                                "0"
                            ],
                            [
                                "7",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "7",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "7",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "8",
                                "A",
                                "A",
                                "1"
                            ],
                            [
                                "8",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "8",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "8",
                                "D",
                                "A",
                                "1"
                            ],
                            [
                                "9",
                                "A",
                                "A",
                                "0"
                            ],
                            [
                                "9",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "9",
                                "C",
                                "A",
                                "1"
                            ],
                            [
                                "9",
                                "D",
                                "A",
                                "0"
                            ],
                            [
                                "10",
                                "A",
                                "A",
                                "0"
                            ],
                            [
                                "10",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "10",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "10",
                                "D",
                                "A",
                                "0"
                            ],
                            [
                                "11",
                                "A",
                                "A",
                                "0"
                            ],
                            [
                                "11",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "11",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "11",
                                "D",
                                "A",
                                "0"
                            ],
                            [
                                "12",
                                "A",
                                "A",
                                "0"
                            ],
                            [
                                "12",
                                "B",
                                "A",
                                "0"
                            ],
                            [
                                "12",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "12",
                                "D",
                                "A",
                                "0"
                            ],
                            [
                                "13",
                                "B",
                                "A",
                                "1"
                            ],
                            [
                                "13",
                                "C",
                                "A",
                                "0"
                            ],
                            [
                                "13",
                                "D",
                                "A",
                                "1"
                            ]
                        ]
                    }
                ]
            }
        }
    }
}