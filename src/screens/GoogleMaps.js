import React, { Component } from 'react';
import { View, FlatList, Dimensions, Image, ScrollView, Linking } from 'react-native';
import styles from '../screens/styles';
import { ProviderPropType, Marker } from 'react-native-maps';
import Modal from 'react-native-modal';
import {Text, Button, Icon } from 'native-base';
import MapView from 'react-native-map-clustering';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';

//import image untuk pengganti marker
import { Markers} from '../Components/DummyData';
import { Lamp, close} from '../Components/ImagePath';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = -6.21462;
const LONGITUDE = 106.84513;
const LATITUDE_DELTA = 0.09;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

//fungsi log eventname dan native event klik markers
function log(eventName, e) {
    console.log(eventName, e.nativeEvent);
}

export default class GoogleMaps extends Component {
    // Setting up profile activity title.
    static navigationOptions = {
        title: 'Google Maps'
    };
    
    constructor(props) {
        super(props);
        this.state = {
            modal_detail: false,
            modal_list: false,
            data_marker: Markers, //ambil variabel Markers dari DummyData
            //Ambil Data lokasi dari DummyData
            modal_id: null,
            modal_title: null,
            modal_description: null,
            modal_profil: null,
            modal_telp: null,
            modal_coordinates: null,
            drag: null,
            latitude: null,
            longitude: null,
            error: null,
            //berisi data long lat yang digunakan untuk menentukan kordinat marker dan maps
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
        }
    };

    buttondetail(id, title, description, profil, telp, coordinates){
        this.setState({
            modal_list: false,
            modal_detail: !this.state.modal_detail,
            modal_id: id,
            modal_title: title,
            modal_description: description,
            modal_profil: profil,
            modal_telp: telp,
            modal_coordinates: coordinates
        });
    }

    buttonlist() {
        this.setState({
            modal_list: !this.state.modal_list
        });
    }

    // function user location
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                });
            },
            (error) => console.log(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
        this.watchID = navigator.geolocation.watchPosition(
            position => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }
                });
            }
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }
    //==============

    _handleOnScroll = event => {
      this.setState({
        scrollOffset: event.nativeEvent.contentOffset.y
      });
    };

    _handleScrollTo = p => {
      if (this.scrollViewRef) {
        this.scrollViewRef.scrollTo(p);
      }
    };

    returnData = (title) => {
        this.state.modal_detail = false;
        this.props.navigation.state.params.returnData(title);
        this.props.navigation.goBack();
    };
    
    renderData = function ({ item }) {
        return (
            <Ripple rippleColor='#E0E0E0' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}
            onPress={this.buttondetail.bind(
                          this, item.id, item.title, item.description, item.profil, item.telp
                        )}>
            <View styles={styles.maps_flatlist_row}>
                <View style={styles.maps_listitem}>
                        <View style={styles.maps_close_icon}>
                            <Image
                                source={item.profil} style={styles.maps_icon_image_list_a}
                            />
                        </View>    
            
                    <View style={styles.maps_border_text}>
                        <LinearGradient
                            colors={['#FFF', '#666666', '#FFF']}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            style={styles.default_line_list} >
                        </LinearGradient>
                        <View style={styles.maps_text_title}>
                            <Text style={styles.maps_title_list}>{item.title}</Text>
                        </View>
                        <LinearGradient
                            colors={['#FFF', '#666666', '#FFF']}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            style={styles.default_line_list} >
                        </LinearGradient>
                    </View>
                </View>
            </View>
            </Ripple>
        )
    };

    render() {
        var item = this.state.data_marker[0];
        return (
            <View style={styles.maps_view}>
                <View style = {styles.maps_layout_map}>
                    <MapView
                        provider={this.props.provider}
                        style={styles.maps}
                        region={{
                            latitude: -6.21462, longitude: 106.84513,
                            latitudeDelta: 1.5, longitudeDelta: 1.5 //ngerubah zoom clustering
                        }}
                        //Function User Location
                        //onRegionChange={region => this.setState({ region })}
                        onRegionChangeComplete={region => this.setState({ region })}
                        //=====================
                        mapType="standard"
                        zoomEnabled={true}
                        pitchEnabled={true}
                        showsUserLocation={true}
                        followsUserLocation={true}
                        minZoomLevel = {5}
                        maxZoomLevel = {15}
                        zoomControlEnabled={true}
                        moveOnMarkerPress={true}
                        showsCompass={true}
                        showsBuildings={true}
                        showsTraffic={false}
                        showsIndoors={true}
                        clustering={true}
                        clusterBorderWidth={2}
                        clusterTextColor='#017917'
                        clusterBorderColor='#070707'>

                        {this.state.data_marker.map((marker) =>
                            <Marker
                                onPress= {this.buttondetail.bind(this,marker.id,marker.title,marker.description, marker.profil, marker.telp)}  
                                coordinate={marker.coordinates} 
                                key={marker.id}>
                                <View style={styles.maps_view_markertext}>
                                    <View style={styles.maps_image_view_marker}>
                                        <Image source={marker.image} style={styles.maps_pin_marker} />
                                    </View>
                                    <View style={styles.maps_text_view_marker}>
                                        <Text style={styles.maps_text_marker}>{marker.title}</Text>
                                    </View>
                                </View>
                            </Marker>
                        )}
                         
                        <Marker
                        coordinate={this.state.region}
                        >
                            <Text>Location Anda</Text>
                        </Marker>
                    </MapView>
                    
                    <View style={styles.maps_modal_button_item_list_2}>
                        <Text></Text>
                    </View>
                    
                    <View style={styles.maps_modal_button_item_list_1}>
                        <Ripple rippleColor='#E0E0E0' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}
                            onPress={() => this.setState({ modal_list: true })}
                            >
                            <View style={styles.maps_modal_border_text_1}>
                                <Text style={styles.maps_modal_text_title_list}>Refferal List Nearby You</Text>
                            </View>
                            <LinearGradient
                                colors={['#FFF', '#666666', '#FFF']}
                                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                style={styles.default_line_list} >
                            </LinearGradient>
                            <View style={styles.maps_modal_list_item}>
                                    <View style={styles.maps_modal_profil_frame}>
                                        <Image source={item.profil} style={styles.maps_modal_button_icon_profil} />
                                    </View>
                                <View style={styles.maps_modal_border_text_2}>
                                    <View style={styles.maps_modal_text_title_2}>
                                        <Text style={styles.maps_modal_title_list}>{item.title}</Text>
                                    </View>
                                </View>
                            </View>
                            <LinearGradient
                                colors={['#FFF', '#666666', '#FFF']}
                                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                style={styles.default_line_list} >
                            </LinearGradient>
                        </Ripple>
                    </View>
                    
                    <View style={styles.maps_modal_detail_modal}>
                        <View style={styles.maps_modal_detail}>
                            <Modal isVisible={this.state.modal_detail}
                                onBackdropPress={() => this.setState({ modal_detail: false })}
                              >             
                                <View>           
                              <View style={styles.maps_modal_content}>
                                    <View style={styles.maps_image_detail_frame}>
                                        <Image style={styles.maps_image_detail}
                                            source={this.state.modal_profil}
                                        />
                                    </View>
                                        <Text style={styles.maps_text_detail_1}>
                                            {this.state.modal_title}
                                        </Text>
                                        
                                        <View style={styles.maps_button_modal_icon_detail_frame}>
                                                <Ripple rippleColor='#E0E0E0' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}
                                                    onPress={() => { Linking.openURL('tel:' + this.state.modal_telp) }}
                                                >
                                                    <Image
                                                     style={styles.maps_icon_telp}
                                                     source={Lamp} 
                                                     />
                                                </Ripple>
                                                <Ripple rippleColor='#E0E0E0' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}
                                                    onPress={()=> {Linking.openURL('sms:'+this.state.modal_telp)}}
                                                >
                                                    <Image 
                                                    style={styles.maps_icon_telp}
                                                    source={close}
                                                    />
                                                </Ripple>
                                        </View>
                                       
                                        <Text style={styles.maps_text_detail_2}>
                                            {this.state.modal_telp}
                                        </Text>
                                        <Button block style={styles.maps_button_detail}
                                                onPress={
                                                this.returnData.bind(this, this.state.modal_title)
                                                }>
                                          <Text style={styles.maps_button_detail_text}>CONFIRM REFFERAL</Text>
                                        </Button>
                              </View>
                                <View style={styles.form_border_close}>
                                    <Ripple rippleColor='#E0E0E0' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}
                                        onPress={() => this.setState({ modal_detail: false })}
                                    >
                                        <View style={styles.form_close_icon}>
                                            <Image style={styles.form_icon_close}
                                              source={close}
                                            />
                                        </View>
                                    </Ripple>
                                </View>
                                </View>
                            </Modal> 
                        </View>
                        
                        <View style={styles.maps_list_modal}>
                            <Modal
                                isVisible={this.state.modal_list}
                                onBackdropPress={() => this.setState({ modal_list: false })}
                                onSwipe={() => this.setState({ modal_list: false })}
                                swipeDirection="down"
                                scrollTo={this._handleScrollTo}
                                scrollOffset={this.state.scrollOffset}
                                scrollOffsetMax={400 - 300} // content height - ScrollView height
                                style={styles.maps_bottom_modal}
                            >
                                <View style={styles.maps_list_place}>
                                    <ScrollView
                                        ref={ref => (this.scrollViewRef = ref)}
                                        onScroll={this._handleOnScroll}
                                        scrollEventThrottle={16}
                                    >
                                        <View>
                                            <Text style={styles.maps_modal_list_text}>Refferal List Nearby You</Text>
                                        </View>
                                        
                                        <FlatList
                                            style = {styles.maps_flatlist_column}
                                            data={this.state.data_marker}
                                            renderItem = {this.renderData.bind(this)}
                                            keyExtractor={(item) => item.id.toString()}
                                        />
                                    </ScrollView>
                                </View>
                            </Modal>
                        </View>   
                    </View>
                </View>
            </View>
        );
    }
}

GoogleMaps.propTypes = {
    provider: ProviderPropType,
};


