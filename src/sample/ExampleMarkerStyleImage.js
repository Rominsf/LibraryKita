import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
} from 'react-native';

import MapView, { ProviderPropType } from 'react-native-maps';

//import image untuk pengganti amrker
import { img1, img2, img3, img4 } from '../Components/ImagePath';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.09;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

export default class ExampleMarkerStyleImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //berisi data long lat yang digunakan untuk menentukan kordinat marker dan maps
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            dataMarker: [
                { id: 1, nama: "Pesawat", coordinate: { latitude: 37.77825, longitude: -122.4224 }, image: img1, styles: { width: 50, height: 50 } },
                { id: 2, nama: "Kereta Api", coordinate: { latitude: 37.78825, longitude: -122.4324 }, image: img2, styles: { width: 75, height: 75 } },
                { id: 3, nama: "Hotel", coordinate: { latitude: 37.79825, longitude: -122.4424 }, image: img3, styles: { width: 100, height: 100 } },
                { id: 4, nama: "Kapal", coordinate: { latitude: 37.80825, longitude: -122.4524 }, image: img4, styles: { width: 125, height: 125 } },
            ]
        }
    };

    render() {
        const data = this.state.dataMarker;
        return (
            <View style={styles.container}>
                <MapView
                    provider={this.props.provider}
                    style={styles.map}
                    initialRegion={this.state.region}>
                    {this.state.dataMarker.map((marker) =>
                        <MapView.Marker title={marker.nama} coordinate={marker.coordinate} key={marker.id}>
                            <Image source={marker.image} style={marker.styles} />
                            <Text style={{ position: 'absolute' }}>{marker.nama}</Text>
                        </MapView.Marker>
                    )}
                </MapView>
            </View>
        );
    }
}

ExampleMarkerStyleImage.propTypes = {
    provider: ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
