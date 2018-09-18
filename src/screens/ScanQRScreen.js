import React, { Component } from 'react';
import styles from '../screens/styles';
import {
    Container, Text, Content, Button, Icon
} from 'native-base';
import { View, Image, Alert } from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import { Lamp } from '../Components/ImagePath';

export default class ScanQRScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qrdata: ''
        }
    }

    onQrcodeScan(qrdata) {
        Alert.alert("data qrcode is" + qrdata);
    }

    render() {
        return (
            <Container style={styles.SC_QR_BG}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' style={{color:'white'}}/>
                        </Button>
                <Content>
                    <View style={styles.SC_QR_View}>
                      <View>
                          <Text style={styles.SC_QR_Text}>Scan QR or Barcode to Start a transaction</Text>
                      </View>
                    
                        <View style={styles.SC_QR_Camera}>
                                <CameraKitCameraScreen
                                showFrame={true}
                                scanBarcode={true}
                                laserColor={"red"}
                                surfaceColor={"black"}
                                frameColor={"white"}
                                //onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
                                onReadCode={((event) => this.onQrcodeScan(event.nativeEvent.codeStringValue))}
                                hideControls={true}
                                colorForScannerFrame={'blue'}
                                />
                        </View>
                      <View>
                          <Image
                            style={styles.SC_QR_Image}
                            source= {Lamp}
                            //onPress={this.Lamp}
                          />
                          <Text style={styles.SC_QR_FlashText}>Flashlight</Text>
                      </View>
                    </View>
                </Content>
            </Container>

        );
    };
}