import React, {Component} from 'react';
import { View, ScrollView, FlatList, Image} from 'react-native';
import { Container, Text, Content, Button, Header, Icon } from 'native-base';
import {data} from '../Components/DummyData';
import { IconA, IconB, IconC } from '../Components/ImagePath';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Ripple from 'react-native-material-ripple';
import styles from '../screens/styles';

//const createRows = (data, numColumns) => {
//  const numberOfFullRows = Math.floor(data.length / numColumns);
//  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
//  
//  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
//    data.push({
//      key: `blank-${numberOfElementsLastRow}`,
//      empty: true
//    });
//    numberOfElementsLastRow++;
//  }
//
//  return data;
//};

export default class SampleSeatFlatlist extends Component {
    state={
        c:false,
        data:[data.details.seat.departure.seat_map[0].avl],
        column:data.details.seat.departure.seat_map[0].jml_col,
        kode_wagon: data.details.seat.departure.seat_map[0].kode_wagon,
        no_wagon: data.details.seat.departure.seat_map[0].no_wagon,
        select_seat: [],
        status: 0,
        data_value: 2,
    }

    onstatusSeat = (item, result_seat, wagon) => {
        const { select_seat, status, data_value, kode_wagon, no_wagon } = this.state;
        var wagon = kode_wagon+ '-' + no_wagon + '-';
        var result_seat = item[0] + item[1];
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

    onrenderSeat =({item}) => {
      const { kode_wagon, no_wagon, select_seat, data_value, status, column } = this.state;
      var wagon =  kode_wagon + '-' + no_wagon + '-';
                var result_seat = item[0] + item[1];
                if (select_seat.length <= data_value) {
                    if (item[3] == '0') {
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
                const name_seat = item[0] + item[1];
                const name_seatA = item[0] + 'A';
                const space = (
                  <View style={[styles.seat_item, styles.seat_itemInvisible]}></View>
                )
                const status_seat = item[3];
                //if (item.empty) { 
                //return <View styles = {[styles.item, styles.itemEmpty]} />; 
                //} 
                if (name_seat == 'A') {
                  {space}
                } else {
                 return <View key={name_seat}>
                    <Ripple rippleColor='#3CE5E2' rippleOpacity={0.25} rippleSize={400} rippleDuration={400}
                        disabled={status_seat == 0}
                        onPress={this.onstatusSeat.bind(this, item)}
                    >
                        <View style={[styles.st_circle_seat, {width: responsiveWidth(100) / column}]}>
                            <Image
                                style={styles.st_seat_image}
                                source={icon}
                            />
                            <Text style={styles.st_seat_text}>{name_seat}</Text>
                        </View>
                    </Ripple>
                    </View>
                }
    }

  render() {
      const data=[...this.state.data[0].map((x)=>{return x})]
      const numColumns = parseInt(this.state.column)
      //console.log('data is :' + data.map((x)=>{return x.map((x)=>{return x[0,2]})}))
    return (
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
          <View style = {styles.seat_container}>
            <Text style={{ padding: 10, backgroundColor: '#3FBFBF', marginTop: 10}}>{this.state.kode_wagon}</Text>
          <ScrollView style={{flex:1}}>
              <FlatList
              data={data}
              keyExtractor={(item) => item.map((x)=>{return x.avl})}
              renderItem = {this.onrenderSeat}
              numColumns={numColumns}
              />
            </ScrollView>
          </View>
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
    );
  }
}
