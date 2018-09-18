import React from "react";
import{Image, View, Text, FlatList,ScrollView, ActivityIndicator,TouchableNativeFeedback,TouchableOpacity,Alert} from "react-native";
import {Departure,data_train} from '../Components/DummyBlog'
import styles from '../screens/styles';
import Ripple from 'react-native-material-ripple';
import ThousandFormatter from '../Components/ThousandFormat'
import Modal from "react-native-modal";
import moment from 'moment'

const _format = 'HH:mm'
export default class DepartureTrain extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={
        data:data_train.details.schedule.departure,
        dep:false,
        return:0,
        select:'',
        isModalVisible:false,
        sorting:false,
        price:'',
        loading:true
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
          loading:false
      })
  },5)
  }
  onDepartureRender=()=>{ 
    let {dep} = this.state
      if(dep==true){
          return
      }
  }
  _dataItem=()=>{
    let data=[]
    data=this.state.data
    return data
  }

  _onPressDeparture=()=>{
    this.setState({
      select:list.TrainName,
      dep:true,})
  }
  _renderItem=({item:lol})=>{
    return lol.map((list)=>
      list.Fares.map((x)=>
       <View style={{borderBottomWidth:0.3,borderColor:'#777'}}>
       <TouchableNativeFeedback disabled={x.SeatAvb=='0'? true:null} onPress={()=>
       {  this.setState({
          select:list.TrainName,
          dep:true,})
          this.state.return++
          if(this.state.return>1){
          this.props.navigation.navigate('ChooseClass')
         }}}>
                          <View style={styles.depCard}>
                                <View style={{padding:15}}>
                                <View style={styles.rowView}>
                                     <View >
                                       <Text style={x.SeatAvb=='0'? styles.grayFont:null}> {list.TrainName} ({x.SubClass})</Text>
                                     </View> 
                                     <View style={styles.endText}>
                                        <View style={styles.priceLine}>
                                        </View>
                                        <View style={styles.rowView}>
                                          <ThousandFormatter 
                                          numberStyle={styles.discountText} 
                                          numberValue={x.TotalFare}
                                          kursValue={'IDR '}
                                          kursStyle={styles.discountText}/>
                                          <Text>/Pax</Text>
                                        </View>
                                     </View>
                                </View>
                                <View style={[styles.rowView, styles.topMargin]}>
                                     <View style={{paddingHorizontal:10}}>
                                       <Text style={x.SeatAvb=='0'? styles.grayFont:null}>{moment(list.ETD).format(_format)}</Text> 
                                     </View>
                                     <View style={{paddingHorizontal:10}}>
                                       <Text style={styles.grayFont}>{Math.floor(moment.duration(moment(list.ETA).diff(list.ETD)).asHours())}h{moment.duration(moment(list.ETA).diff(list.ETD)).minutes()}m </Text> 
                                     </View>
                                     <View style={{paddingHorizontal:10}}>
                                       <Text style={x.SeatAvb=='0'? styles.grayFont:null}>{moment(list.ETA).format(_format)}</Text> 
                                     </View>      
                                          
                                     <View style={styles.endText}>
                                        <View style={styles.priceLine}>
                                        </View>
                                        <View>
                                          {x.SeatAvb=='0'? <Text style={styles.txtRed}>Fully Booked</Text>:<Text style={styles.codeText}>{x.SeatAvb} seats left</Text>}
                                        </View>
                                     </View>
                                </View>
                                <View style={styles.rowView}>
                                    <View style={{paddingHorizontal:15}}>
                                       <Text style={styles.grayFont}>{list.STD}</Text>
                                    </View>
                                     <View style={{paddingHorizontal:15}}>
                                       <Text style={styles.grayFont}> {Departure.transit}</Text>
                                    </View>
                                    <View style={{paddingHorizontal:15}}>
                                       <Text style={styles.grayFont}>{list.STA}</Text>
                                    </View>
                                </View>
                                </View>
                                </View>
                        </TouchableNativeFeedback>
                        </View>
                  
            ))}
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  _departureRender=()=>{
    this.setState({renturn:!this.state.return})
    return <View>
    <View style={styles.depCard}>
    <View style={{padding:15}}>
    <Text>Departure</Text> 
    <View style={styles.rowView}>
    <View style={styles.txtFlexStart}>
        <Text style={styles.airlineName}>{this.state.select} </Text>
    </View>
    <View style={styles.endText}>
        <TouchableNativeFeedback onPress={()=>this.setState({dep:false,return:0})}>
        <Text style={styles.codeText}>| Cancel</Text>
        </TouchableNativeFeedback>
     </View>
     </View>
     </View>
    </View>
  </View>
  }
      

  render() {
    let {data}=this.state
    return <View style={styles.container}>
    <View style={{position:'relative'}}>
    <View style={{alignItems:"center"}}>
      <View>
      <TouchableOpacity onPress={()=>this._toggleModal()}>
              <View style={styles.depCard}>
              <View style={{alignItems:'center'}}>
                <View style={styles.rowView}>
                    <View style={styles.paddingVerCenter}><Text> Sort List | </Text></View>
                    <View  style={styles.paddingVerCenter}><Text> By Class </Text></View>
                </View>
              </View>
            </View>
    </TouchableOpacity>
    </View>
    </View>
    <ScrollView>
    {this.state.dep?
          this._departureRender()
          :
          null}
          {
            this.state.loading?
            <View style={styles.imageCenterLoadingTrain}>
              <ActivityIndicator size="large" color="#5ec7dd"/>
              <Text>Loading</Text>
            </View>
          :
          <FlatList
          data={[data]}
          renderItem={this._renderItem}
          keyExtractor={(item,index)=>item.map((x)=>{return x.Fares})}
          initialNumToRender={8}
          maxToRenderPerBatch={2}
          onEndReachedThreshold={0.5}
          />
          }
            </ScrollView>
            </View>
      
         
            <Modal isVisible={this.state.isModalVisible}
                style={styles.bottomModal}
                 onBackButtonPress={() => this.setState({ isModalVisible: null })}
                 onBackdropPress={() => this.setState({ isModalVisible: null })}>
                   <View style={styles.bottomCard}>
            <Ripple onPress={()=>{this.setState({sorting:true, isModalVisible:null})}}>
             <View style={styles.sortCard}>
                <Text style={{padding:10}}>Highest Price</Text>     
            </View>
            </Ripple>
            <Ripple onPress={()=>{this.setState({sorting:false, isModalVisible:null})}}>
             <View style={styles.sortCard}>
                <Text style={{padding:10}}>Lower Price</Text>     
            </View>
            </Ripple>
            
          </View>
                </Modal>
         
            </View>
  }
}
