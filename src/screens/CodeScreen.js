import React, { Component } from 'react';
import styles from '../screens/styles';
import {
    Container, Header, Left, Body, Text, Title, Content, Input, Right,
    Button, Icon, Radio
} from 'native-base';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { QRIcon } from '../Components/DummyData'
import QRCode from 'react-native-qrcode-svg';

export default class CodeScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            nominal: '0',
            ModalQR: false,
            lengthdata: 0
        }
    }

    onViewQR=()=>{
        this.setState({
            ModalQR: !this.state.ModalQR,
            nominal: this.state.nominal
        });
    }
    resetForm = () => {
        this.setState({
            ModalQR: !this.state.ModalQR,
            nominal: '0'
        });
    }

    ValidateNumber=(nominal,IconQR)=>{
        const defauldatalength = 0;
        this.setState({
            lengthdata: defauldatalength + nominal.length,
            nominal: nominal
        })
    }

    render() {
        const { lengthdata } = this.state;
        var valid = (lengthdata < 1) ? true: false;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={styles.QR_BodyHeader}>
                        <Title style={styles.QR_Title}>My Qr Code</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content>
                    <View>
                        <View style={styles.QR_screen_TextView}>
                            <Text style={styles.QR_screen_Text}>Nominal Received</Text>
                        </View>
                        <View style={styles.QR_screen_inputView}>
                            <View style={styles.QR_screen_inputText_Frame}>
                                <Text style={styles.QR_screen_TextInput}>RP</Text>
                            </View>
                            <View>
                                <Input style={styles.QR_screen_input}
                                    keyboardType='phone-pad'
                                    keyboardAppearance='light'
                                    value={this.state.nominal}
                                    onChangeText={this.ValidateNumber}
                                />
                            </View>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Button block primary style={{margin: 10}}
                                disabled={valid}
                                onPress={this.onViewQR}
                            >
                                <Text>Create QR Code</Text>
                            </Button>
                        </View>
                    </View>

                    <View style={styles.QR_ModalView}>
                        <View style={styles.QR_ModalFrame}>
                            <Modal isVisible={this.state.ModalQR}
                                onBackdropPress={this.onViewQR}
                            >
                                <View style={styles.QR_Modal_Border}>
                                    <View style={styles.QR_Barcode_View}>
                                        <Text style={styles.QR_Barcode_Text1}>MY QR CODE</Text>
                                        <Text style={styles.QR_Barcode_Text2}>
                                            Show your QR Code when trading 
                                            in a Smart In Pays partner
                                        </Text>
                                        <QRCode
                                            value={this.state.nominal}
                                            logo={QRIcon}
                                            logoSize={150}
                                            size= {300}
                                            logoBackgroundColor='transparent'
                                            bgColor='#0A0909'
                                            fgColor='white' />
                                    </View>
                                    <View style={styles.QR_buttonView}>
                                        <View style={styles.QR_button}>
                                            <Button block primary
                                            onPress={this.onViewQR}
                                            >
                                            <Text>Hide</Text>
                                            </Button>
                                        </View>
                                        <View style={styles.QR_button}>
                                            <Button block success 
                                            onPress={this.resetForm}
                                            >
                                                <Text>Create Again</Text>
                                            </Button>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </View>
                </Content>
            </Container>
            
        );
    };
}