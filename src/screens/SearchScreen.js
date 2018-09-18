import React, { Component } from 'react';
import styles from '../screens/styles';
import { Container, Text, Item, Content, Input } from 'native-base';
import { Airlines } from '../Components/DummyData';
import { View, FlatList, Image, TouchableHighlight, ScrollView } from 'react-native';
import GridView from 'react-native-super-grid';
import Slideshow from 'react-native-slideshow';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';

class SearchScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data_airlines: Airlines,
            name_filter: ''
        }
    }

    SearchName = name_filter => {
        this.setState({name_filter});
    }
    onrenderAirlines=({item})=>{
        return(
            <View>
                <Text>{item.name}</Text>
            </View>
        )
    }
    render() {
        const { data_airlines, name_filter } = this.state;
        const filterRegex = new RegExp(String(name_filter), 'i');
        const filter = item =>
            filterRegex.test(item.name);
        const filteredData = data_airlines.filter(filter);
        return (
            <Container>
                <View>
                    <Item>
                        <Input
                            style={{fontSize: 14, borderWidth: 1, borderColor: '#6A6666'}}
                            placeholder='Search Name Airlines'
                            autoCapitalize='words' 
                            selectionColor="#4C4C4C"
                            placeholderTextColor='#4C4C4C'
                            onChangeText={this.SearchName}
                            value={name_filter}
                        />
                    </Item>
                </View>
                <Content>
                    <View>
                        <FlatList 
                            data={filteredData}
                            renderItem={this.onrenderAirlines.bind(this)}
                            keyExtractor={(item) => item.id.toString()}
                            initialNumToRender={5}
                        />
                    </View>
                </Content>
            </Container>
        )
    }
}
export default SearchScreen;