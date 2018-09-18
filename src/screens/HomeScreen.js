import React, { Component } from 'react';
import styles from '../screens/styles';
import { Container, Header, Body, Text, Title, Thumbnail } from 'native-base';
import { BUTTONS, Dataku, itemGrid, dataslideshow } from '../Components/DummyData';
import { View, Image, TouchableHighlight, ScrollView } from 'react-native';
import GridView from 'react-native-super-grid';
import Slideshow from 'react-native-slideshow';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Dataku,
            items: itemGrid,
            itemSlide: dataslideshow,
            position: 1,
            interval: null, 
        }
    };
    
    onGridView(id){
        if (id == 1) {
            this.props.navigation.navigate('Maps')
        } else if (id == 2){
            this.props.navigation.navigate('Find')
        } else if (id == 3) {
            this.props.navigation.navigate('Profil')
        } else if (id == 4){
            this.props.navigation.navigate('QrCode')
        } else if (id == 5) {
            this.props.navigation.navigate('ScanQR')
        } else if (id == 6) {
            this.props.navigation.navigate('LoginKey')
        } else if (id == 7) {
            this.props.navigation.navigate('SS')
        } else if (id == 8) {
            this.props.navigation.navigate('Application')
        } else if (id == 9) {
            this.props.navigation.navigate('Appcheck')
        } else if (id == 10) {
            this.props.navigation.navigate('Departure')
        } else if (id == 11) {
            this.props.navigation.navigate('MergeViews')
        } else if (id == 12) {
            this.props.navigation.navigate('Contoh')
        } else if (id == 13) {
            this.props.navigation.navigate('MarkerImage')
        } else if (id == 14) {
            this.props.navigation.navigate('GPS')
        } else if (id == 15) {
            this.props.navigation.navigate('find1')
        } else if (id == 16) {
            this.props.navigation.navigate('Search')
        } else if (id == 17) {
            this.props.navigation.navigate('SampleSeat')
        };
    };

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.itemSlide.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        //const { bgPicture } = this.state.data //variabel cons dari name... dari memanggil fungsi data
        return (
                <Container>
                    <Header style={styles.BodyHome}>
                        <Body style={styles.Header}>
                            <Title style={styles.TitleHome}>Happy Days</Title>
                        </Body>
                        
                    </Header>
        
                    <View>
                        <View style={styles.cardItem}>
                                <Slideshow
                                    dataSource={this.state.itemSlide}
                                    position={this.state.position}
                                    onPositionChanged={position => this.setState({ position })} />
                        </View>
                        <ScrollView contentContainerStyle={styles.contentContainer}>
                        <View style={{marginLeft: 5}}>
                                <GridView
                                    itemDimension={responsiveWidth(25)}
                                    items={this.state.items}
                                    style={styles.gridView}
                                    spacing= {responsiveWidth(5)}
                                    renderItem={item => (
                                        <View style={styles.GridFrame}>
                                        <TouchableHighlight
                                            onPress={this.onGridView.bind(this, item.id)}
                                        >
                                            <View style={styles.itemContainer}>
                                                <View style={styles.itemImage}>
                                                    <Thumbnail large source={item.image}/>
                                                </View>
                                                <View style={styles.gridName}>
                                                    <Text style={styles.itemName}>{item.name}</Text>
                                                </View>
                                            </View>
                                        </TouchableHighlight>
                                        </View>
                                    )}
                                />
                        </View>
                        </ScrollView>
                    </View>
                </Container>
        );
    }
}
