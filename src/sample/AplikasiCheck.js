import React, { Component } from 'react';
import styles from '../screens/styles';
import {
    Container, Text, Content, Header
} from 'native-base';
import { View, Image, FlatList } from 'react-native';
import { Airlines } from '../Components/DummyData';
import { Checklist, Unchecklist } from '../Components/ImagePath';
import Ripple from 'react-native-material-ripple';

class AplikasiCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            airlines: Airlines,
            select_airlines: [],
            status: false
        }
    }

    onStatus_AllAirlines = () => {
        if (this.state.status==true){
        let y = this.state.airlines.map((x) => {
            return x.name
        })
        this.setState({
            select_airlines :[...y],
        });
        console.log('status '+this.state.status)
        }
            this.setState({
                status: !this.state.status,
            });
    }

    onStatueSeat = (name) => {
        if (!this.state.status) {
            if (this.state.select_airlines.indexOf(name) == -1) {
                console.log(" ID VALUE IS " + name)
                this.setState({
                    select_airlines: [...this.state.select_airlines, name]
                });
            }
            else {
                let airlines = this.state.select_airlines
                let result = airlines.filter(check => check.indexOf(name))
                this.setState({
                    select_airlines: result
                })
                console.log("Value airlines is:" + result)
            }
        }
    }

    onrenderImage = ({ item }) => {
        var icon = Unchecklist;
        if (!this.state.status) {
            icon = Unchecklist;
            if (this.state.select_airlines) {
                this.state.select_airlines.map(function (name) {
                    if (name == item.name) {
                        icon = Checklist;
                    }
                })
            }
        }
        return (
                <View style={styles.check_flight_flex}>
                    <Ripple rippleColor='#3CE5E2' rippleOpacity={0.25} rippleSize={400} rippleDuration={400}
                        onPress={this.onStatueSeat.bind(this, item.name)}
                        key={item.id}
                    >
                        <View style={styles.check_flight_view_image_box}>
                            <View>
                                    <Image
                                        key={item.id}
                                        style={styles.check_flight_image_box}
                                        source={icon}
                                    />
                            </View>
                            <View style={styles.check_flight_view_text_box}>
                                <Text style={styles.check_flight_text_box}>{item.name}</Text>
                            </View>
                        </View>
                    </Ripple>
                </View>

        );
    }

    render() {
        var icon = Unchecklist;
        if (this.state.status) {
            icon = Checklist;
        } else {
            icon = Unchecklist
        };
        return (
            <Container>
                <Header></Header>
                <Text>{this.state.select_airlines}</Text>
                <Content>
                    <View style={styles.check_flight_flex}>
                        <Ripple rippleColor='#3CE5E2' rippleOpacity={0.25} rippleSize={400} rippleDuration={400}
                            onPress={()=>this.onStatus_AllAirlines()}
                        >
                            <View style={styles.check_flight_view_image_box}>
                                <View>
                                        <Image
                                            style={styles.check_flight_image_box}
                                            source={icon}
                                        />
                                </View>
                                <View style={styles.check_flight_view_text_box}>
                                    <Text style={styles.check_flight_text_box}>All Airlines</Text>
                                </View>
                            </View>
                        </Ripple>
                    </View>

                    <View style={styles.check_flight_flex}>
                        <FlatList
                            data={this.state.airlines}
                            style={{flex: 1}}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={this.onrenderImage}
                        />
                    </View>
                </Content>
            </Container>


        );
    };
}
export default AplikasiCheck;