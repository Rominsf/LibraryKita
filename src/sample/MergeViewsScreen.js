import React from 'react';
import styles from '../screens/styles';
import { Container, Text, Content, Button, Header, Icon } from 'native-base';
import { View, Image, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { Item_Seat, data } from '../Components/DummyData';
import { IconA, IconB, IconC } from '../Components/ImagePath';
import Ripple from 'react-native-material-ripple';

const numColumns = 3;
const width = 100;
class MergeViewsScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            Seat: data.details.seat.departure.seat_map,
            select_seat: [],
            data_value: 3,
            status: 0,
            loading: true,
            //Seat: Item_Seat
        }
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 
        5)    
    }   


    onstatusSeat = (x, list, result_seat, wagon) => {
        const { select_seat, status, data_value } = this.state;
        var wagon = list.kode_wagon+ '-' + list.no_wagon + '-';
        var result_seat = x[0] + x[1];
        if (select_seat.length < data_value) {
        if (!status) {
            if (select_seat.indexOf(wagon+result_seat) == -1) {
                console.log(" ID VALUE IS " + wagon+result_seat)
                this.setState({
                    select_seat: [...select_seat, wagon+result_seat]
                });
            } else {
                let seat = select_seat
                let result = seat.filter(check => check.indexOf(wagon))
                this.setState({
                    select_seat: result
                })
                console.log("Value airlines is:" + wagon+result_seat)
            }
        }
        } else {
            if (select_seat.length <= data_value) {
                let seat = select_seat
                let result = seat.filter(check => check.indexOf(wagon + result_seat))
                this.setState({
                    select_seat: result
                })
                console.log("Value airlines is:" + wagon + result_seat)
            } else if (select_seat.indexOf(wagon + result_seat) == -1) {
                console.log(" ID VALUE IS " + wagon + result_seat)
                this.setState({
                    select_seat: [...select_seat, wagon + result_seat]
                });
            }
        }
    }

    //onrenderImage = () => {
    //    const { select_seat, status, data_value, Seat } = this.state;
    //    return Seat.map((list) => 
    //             list.avl.map((x) => {
    //    var wagon = list.kode_wagon + '-' + list.no_wagon + '-';
    //    var result_seat = x[0] + x[1];
    //    if (select_seat.length <= data_value) {
    //        if (x[3] == '0') {
    //            icon = IconA
    //        } else if (!status) {
    //            icon = IconB
    //            if (select_seat) {
    //                select_seat.map(function (id) {
    //                    if (id == wagon + result_seat) {
    //                        icon = IconC;
    //                    }
    //                })
    //            }
    //        }
    //    } else {
    //        var len = select_seat.length;
    //        if (!status) {
    //            icon = IconB
    //            if (select_seat) {
    //                select_seat.map(function (id) {
    //                    if (id == wagon + result_seat) {
    //                        icon = IconC;
    //                    }
    //                })
    //            }
    //        }
    //    }
    //    var name_seat = x[0] + x[1];
    //    var status_seat = x[3];
    //    var kode_wagon = list.kode_wagon;
    //    return(
    //            <View key={status_seat}>
    //                <Ripple rippleColor='#3CE5E2' rippleOpacity={0.25} rippleSize={400} rippleDuration={400}
    //                    disabled={status_seat == 0}
    //                    onPress={this.onstatusSeat.bind(this, x, list)}
    //                >
    //                    <View style={styles.st_circle_seat}>
    //                        <Image
    //                            style={styles.st_seat_image}
    //                            source={icon}
    //                        />
    //                        <Text style={styles.st_seat_text}>{name_seat}</Text>
    //                    </View>
    //                </Ripple>
    //            </View>
    //    );
    //    })
    //    )
    //}


    onrenderSeat=()=>{
        const { select_seat, status, data_value, Seat } = this.state;
        return (
            Seat.map((list) => {
                const wagon = list.kode_wagon
                const avl = list.avl
                return(
                <View key={wagon}>
                    <Text style={styles.st_title_text_train}>{wagon}</Text>
            { avl.map((seat)=>{
                var wagon = list.kode_wagon + '-' + list.no_wagon + '-';
                var result_seat = seat[0] + seat[1];
                if (select_seat.length <= data_value) {
                    if (seat[3] == '0') {
                        icon = IconA
                    } else if (!status) {
                        icon = IconB
                        if (select_seat) {
                            select_seat.map(function (id) {
                                if (id == wagon + result_seat) {
                                    icon = IconC;
                                }
                            })
                        }
                    }
                } else {
                    if (!status) {
                        icon = IconB
                        if (select_seat) {
                            select_seat.map(function (id) {
                                if (id == wagon + result_seat) {
                                    icon = IconC;
                                }
                            })
                        }
                    }
                }
                const name_seat = seat[0] + seat[1];
                const status_seat = seat[3];
                const name_index = seat[1]
                var text = '';
                var i;
                var maxLength = avl.length;
                const len_col = list.jml_col
                var train = []
                var datatrain = (
                    <View key={i}>
                    <Ripple rippleColor='#3CE5E2' rippleOpacity={0.25} rippleSize={400} rippleDuration={400}
                        disabled={status_seat == 0}
                        onPress={this.onstatusSeat.bind(this, seat, list)}
                    >
                        <View style={styles.seat_item}>
                            <Text>{name_seat}</Text>
                        </View>
                    </Ripple>
                    </View>
                )
                var space = (
                    <View key={i}>
                    <Ripple rippleColor='#3CE5E2' rippleOpacity={0.25} rippleSize={400} rippleDuration={400}
                        disabled={status_seat == 0}
                        onPress={this.onstatusSeat.bind(this, seat, list)}
                    >
                        <View styles={styles.seat_item}><Text>asda</Text></View>
                    </Ripple>
                    </View>
                )
                for (i = 0; i < maxLength; i++) {
                    //if (name_seat == '1A' && name_index == 'A') {
                    //  
                    //}
                     datatrain;
                     train[i] = (datatrain);
                     return train
                }
                
                
                //for (i = 0; i < maxLength; i++) {
                //    text += "[" + i + "] ";
                //    if (i !== 0 && ((i + 1 < maxLength) && ((i + 1) % len_col === 0))) {
                //        text += '\n';
                //        console.log(text)
                //    }
                //}
                //return(
                //        <View>
                //            <Text>{text}</Text>
                //        </View>
                //    )
            })
            }   
                </View>
                )
            })
        )                   
    }

    render() {
        return(
            <Container>
                <Header></Header>
                <View style={styles.st_status_loc_view}>
                    <View style={styles.st_seat_flex_calendar}>
                        <View style={styles.st_status_loc}>
                            <Text style={styles.st_status_text_loc}>GBR</Text>
                            <Text style={styles.st_status_text_calendar}>19 April 2018</Text>
                            <Text>{this.state.select_seat}</Text>
                        </View>
                    </View>

                    <View style={styles.st_icon_arrow_view}>
                        <View style={styles.st_circle_icon}>
                            <Icon
                                style={styles.st_icon_arrow}
                                name="arrow-forward"
                            />
                            {console.log("Seat Value:" + JSON.stringify(this.state.select_seat.length))}
                            {console.log("Seat Value:" + JSON.stringify(this.state.select_seat))}
                        </View>
                    </View>

                    <View style={styles.st_seat_flex}>
                        <View style={styles.st_status_loc}>
                            <Text style={styles.st_status_text_loc}>BD</Text>
                            <Text style={styles.st_status_text_calendar}>22 April 2018</Text>
                        </View>
                    </View>
                </View>
                <Content>
                    {
                        this.state.loading ?
                        <View style={styles.st_view_loading}>
                            <ActivityIndicator size="small" color="#FF0000" />
                            <Text style={styles.st_text_loading}>loading</Text>
                        </View>
                        :
                        <ScrollView>
                            {this.onrenderSeat()}
                        </ScrollView>
                 
                    }
                </Content>

                <View style={styles.st_view}>
                    <View style={styles.st_frame}>
                        <View style={styles.st_circle_1} />
                        <Text style={styles.st_text_1}>Unavailable</Text>
                        <View style={styles.st_circle_2} />
                        <Text style={styles.st_text_2}>available</Text>
                        <View style={styles.st_circle_3} />
                        <Text style={styles.st_text_3}>You</Text>
                    </View>
                    <View style={styles.st_seat_button_view}>
                        <Button block primary style={styles.st_button}>
                            <Text style={styles.st_text_button}>NEXT</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        )
    }
}

export default MergeViewsScreen;