import React, { Component } from 'react';
import { StyleSheet, CameraRoll, Text, View, Image, Button, Platform } from 'react-native';
import { captureScreen } from "react-native-view-shot";
import CameraRollExtended from 'react-native-store-photos-album';

export default class PrintScreen extends Component {
    constructor() {
        super();
        this.state = {
            imageURI: 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg',
            uri: ''
        }
    }

    captureScreenFunction = () => {

        captureScreen({
            format: "jpg",
            quality: 0.8
        })
            .then(
                uri => this.setState({ imageURI: uri }),
                error => console.error("Oops, Something Went Wrong", error)
            );
    }

    captureScreenSavedGalleryRollExtended = () => {
        captureScreen({
            format: "jpg",
            quality: 0.8
        })
            .then(
                uri => {
                    CameraRollExtended.saveToCameraRoll({
                        uri: uri,
                        album: 'Camera Picture'
                    }, 'photo')
                },
                error => console.error("Oops, snapshot failed", error)
            );
    }

    captureScreenSavedGalleryNotRollExtended = () => {
        captureScreen({
            format: "jpg",
            quality: 0.8
        })
            .then(
                uri => {
                    CameraRoll.saveToCameraRoll({
                        uri: uri,
                        album: 'Sreenshoot'
                    }, 'photo')
                },
                error => console.error("Oops, snapshot failed", error)
            );
    }

    render() {
        return (

            <View style={styles.MainContainer}>
                <Button title=" Take Screenshot" onPress={this.captureScreenFunction} />
                <Button title=" Take Screenshot saved Gallery cameraRollExtenderd" onPress={this.captureScreenSavedGalleryRollExtended} />
                <Button title=" Take Screenshot saved Gallery cameraNotRollExtenderd" onPress={this.captureScreenSavedGalleryNotRollExtended} />
                <Image source={{ uri: this.state.imageURI }} style={{ width: 200, height: 300, resizeMode: 'contain', marginTop: 5 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        marginTop: (Platform.OS) === 'ios' ? 20 : 0,
    }
});