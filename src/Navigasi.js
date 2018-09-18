import React, { Component } from 'react';
import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';

//==========Sample==============
import ExampleModal from './sample/ExampleModal';
//import MyMapView from './sample/MyMapView';
import FormFindLocation1 from './sample/FormFindLocation1';
//import ExampleMarkerStyleImage from './sample/ExampleMarkerStyleImage';
//import GeolocationExample from './sample/GeolocationExample';
import LoginKeychainScreen from './sample/LoginKeychainScreen';
import AplikasiCheck from './sample/AplikasiCheck';
import MergeViewsScreen from './sample/MergeViewsScreen';
import SampleSeatFlatlist from './sample/SampleSeatFlatlist';
//==============================

//===========Project============
import HomeScreen from './screens/HomeScreen';
import FormFindLocation from './screens/FormFindLocation';
//import GoogleMaps from './screens/GoogleMaps';
import Profil from './screens/Profil';
import CodeScreen from './screens/CodeScreen';
//import ScanQRScreen from './screens/ScanQRScreen';
import PrintScreen from './screens/PrintScreen';
import Application from './screens/Application';
import DepartureTrain from './screens/DepartureTrain';
import SearchScreen from './screens/SearchScreen';
//===============================

const Navigasi = StackNavigator(
    {
        //=========Sample========
        Appcheck: AplikasiCheck,
        //MarkerImage: ExampleMarkerStyleImage,
        Contoh: ExampleModal,
        find1: FormFindLocation1,
        //GPS: GeolocationExample,
        LoginKey: LoginKeychainScreen,
        MergeViews: MergeViewsScreen,
        //Map: MyMapView,
        SampleSeat: SampleSeatFlatlist,
        //=======================

        //=========Project=======
        Home: HomeScreen, //halaman berupa gambar
        Find: FormFindLocation,
        //Maps: GoogleMaps,
        Profil: Profil,
        QrCode: CodeScreen,
        //ScanQR: ScanQRScreen,
        SS: PrintScreen,
        Application: Application,
        Departure: DepartureTrain,
        Search : SearchScreen
        //=======================
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

export default Navigasi;