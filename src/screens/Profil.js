import React, { Component } from 'react';
import styles from '../screens/styles';
import {
    Container, Header, Left, Body, Text, Title, Content, Right,
    Footer, FooterTab, Button, Icon, Thumbnail
} from 'native-base';
import { BUTTONS, Dataku, itemGrid, dataslideshow } from '../Components/DummyData';
import { gridHomeHD, bgPicture } from '../Components/ImagePath';
import { View, Image, Dimensions, TouchableHighlight } from 'react-native';
import GridView from 'react-native-super-grid';
import Slideshow from 'react-native-slideshow';

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
//#2. Get the dimensions width of the android screen
const width = Dimensions.get('window').width;

export default class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        }
    };

    render() {
        return (
            <Container>
                <View style={styles.Profil_frame}>
                    <View style={styles.Profil_Background}>
                        <Image source={bgPicture} style={styles.Profil_Image}/>
                    </View>
                    <View>
                        <Text style={styles.Profil_Title_Text}>My Account</Text>
                    </View>
                    <View>
                        <Thumbnail large source={gridHomeHD}/>
                    </View>
                    <View>
                        <Text style={styles.Profil_Name_Text}>Anton25</Text>
                    </View>
                    <View style={styles.Profil_Kontak}>
                        <View>
                            <Text style={styles.Profil_Kontak_Text}>Anton Martono</Text>
                        </View>
                        <View>
                            <Text style={styles.Profil_Kontak_Text}>|</Text>
                        </View>
                        <View>
                            <Text style={styles.Profil_Kontak_Text}>081231231223</Text>
                        </View>
                    </View>
                </View>

               <View>
                   <View>
                        <View>
                            <Text>Referer Detail</Text>
                        </View>
                        <View>
                            <Icon/>
                        </View>
                   </View>

                    <View>
                        <View>
                            <Text>Change Password</Text>
                        </View>
                        <View>
                            <Icon />
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text>Connect With Facebook</Text>
                        </View>
                        <View>
                            <Icon />
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text>Code Referral</Text>
                        </View>
                        <View>
                            <Icon />
                        </View>
                    </View>
               </View>
            </Container>
        );
    }
}
