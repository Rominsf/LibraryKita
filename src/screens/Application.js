import React from 'react';
import styles from '../screens/styles';
import {
    Container, Text, Content, Button, Header, Icon
} from 'native-base';
import { View, Image, ScrollView, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import { Item_Seat, data } from '../Components/DummyData';
import { IconA, IconB, IconC } from '../Components/ImagePath';
import Ripple from 'react-native-material-ripple';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const numColumns = 4;
const {width} = Dimensions.get('window');
//onst itemWidth = (width) / 4;
class Application extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            Seat: [data.details.seat.departure.seat_map],
            select_seat: [],
            data_value: 2,
            status: 0,
            data_check: null,
            loading: true,
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

    onrenderSeat = ({ item}) => {
        const { select_seat, status, data_value, data_check } = this.state;
        return item.map((item) =>
            item.avl.map((x) =>{
                var wagon = item.kode_wagon+'-'+item.no_wagon+'-';
                var result_seat = x[0]+x[1];
            if (select_seat.length <= data_value) {
              if (x[3] == '0') {
                  icon = IconA
              } else if (!status){
                    icon = IconB
              if (select_seat) {
                  select_seat.map(function (id) {
                      if (id == wagon+result_seat) {
                          icon = IconC;
                      }
                  })
              }}
              } else {
                  var len = select_seat.length;
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
              //if (!x || x.length === 0) return;
              //var len = x.length;
              //var views = [];
              //for (var i = 0, l = len - 2; i < l; i += 2) {}
            return( 
            <View key={x[3]} style={styles.st_view_flatList}>
                <View style={styles.st_seat_flex}>
                    <Ripple rippleColor='#3CE5E2' rippleOpacity={0.25} rippleSize={400} rippleDuration={400}
                        disabled={(x[3] == 0) ? true : false}
                        onPress={this.onstatusSeat.bind(this, x, item)}
                        key={x[3]}
                    >
                        <View style={styles.st_circle_seat}>
                            <Image
                                key={x[3]}
                                style={styles.st_seat_image}
                                source={icon}
                            />
                                <Text style={styles.st_seat_text}>{x[0]}{x[1]}</Text>
                        </View>
                    </Ripple>
                </View>
            </View>
            );  
            }))
    }

    render() {
        const {Seat} = this.state;
        console.log(Seat)
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
                    <View style={{ flex: 1 }}>
                    <ScrollView>
                        <FlatList
                            data={Seat}
                            style={{
                                flex: 1,
                                marginLeft: 10,
                                marginRight: 10
                            }}
                            keyExtractor={(item) => item.map((x)=>{return x.avl})}
                            renderItem={this.onrenderSeat}
                            //numColumns={numColumns}
                            initialNumToRender={5}
                        />
                        </ScrollView>
                    </View>
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

export default Application;