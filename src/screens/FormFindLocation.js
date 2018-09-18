import React, { Component } from 'react';
import styles from '../screens/styles';
import {
    Container, Header, Left, Body, Text, Title, Content, Input, Right,
    Button, Icon
} from 'native-base';
import { View, TouchableWithoutFeedback, Image} from 'react-native';
import Modal from 'react-native-modal';
import {imageKerja, close} from '../Components/DummyData'
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Ripple from 'react-native-material-ripple';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

export default class FormFindLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_username: '',
            user_fullname: '',
            user_email: '',
            user_telp: '',
            user_password: '',
            user_gender: '',
            user_day:'',
            user_month:'',
            user_year:'',
            user_code:'',
            user_birthday: null,
            ModalDetail: false,
            date_time_picker: false,
            lookPass: true,
            checkMale: false,
            checkFemale: false,
            selectedDate: 2000
        };
    }

    returnData(user_code) {
        this.setState({
            user_code: user_code
        });
    }
    
    onPassword=()=>{
        this.setState({
            lookPass: !this.state.lookPass
        });
    }

    onSelect(index,value) {
        this.setState({
            user_gender: value
        })
    }
    
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

    ShowModal = () => {
        this.setState({
            ModalDetail: !this.state.ModalDetail
        });
    }

    showhideDate=()=>{
        this.setState({
            date_time_picker: !this.state.date_time_picker
        });
    };

    datePicked = (date) => {
        //console.log('A date has been picked: ', date);
        this.setState({
            user_birthday: moment(date).format("YYYY-MM-DD"),
            selectedDate: date.toString()
        });
        //console.log('birth : '+this.state.user_birthday)
        //console.log('tanggal ini : '+this.state.selectedDate)
        this.showhideDate();
    };

    render() {
        const data = this.state.selectedDate;
        var user_day = moment(data).format("Do");
        var user_month = moment(data).format("MMM");
        var user_year = moment(data).format("YYYY");
        //console.log('date : '+user_day);
        //console.log('date : '+user_month);
        //console.log('date : '+user_year);
        return (
                <Container>
                    <Header style={styles.form_body}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body style={styles.form_body_header}>
                            <Title style={styles.form_title}>Sign Up</Title>
                        </Body>
                        <Right/>
                    </Header>
                    <Content>
                        <View style={styles.form}>
                           
                            <View style={styles.form_input_view}>
                                <View style={styles.form_input_frame}>
                                    <Text style={styles.form_input_text}>User Name</Text>
                                </View>
                                <View style={styles.form_input}>
                                    <Input
                                        autoCapitalize='none' 
                                        value={this.state.user_username} //user_username 
                                        onChangeText={TextInputValue => this.setState({ user_username: TextInputValue })}
                                        />
                                </View>
                            </View>

                            <View style={styles.form_input_view}>
                                <View style={styles.form_input_frame}>
                                    <Text style={styles.form_input_text}>Full Name</Text>
                                </View>
                                <View style={styles.form_input}>
                                    <Input
                                        autoCapitalize='none'
                                        value={this.state.user_fullname}
                                        onChangeText={TextInputValue => this.setState({ user_fullname: TextInputValue })}
                                    />
                                </View>
                            </View>

                            <View style={styles.form_input_view}>
                                <View style={styles.form_input_frame}>
                                    <Text style={styles.form_input_text}>Email</Text>
                                </View>
                                <View style={styles.form_input}>
                                    <Input
                                        keyboardType='email-address'
                                        keyboardAppearance='light'
                                        value={this.state.user_email}
                                        onChangeText={TextInputValue => this.setState({ user_email: TextInputValue })}
                                        />
                                </View>
                            </View>

                            <View style={styles.form_input_view}>
                                <View style={styles.form_input_frame}>
                                    <Text style={styles.form_input_text}>No Handphone</Text>
                                </View>
                                <View style={styles.form_input}>
                                    <Input
                                        keyboardType='phone-pad'
                                        keyboardAppearance='light'
                                        value={this.state.user_telp}
                                        onChangeText={TextInputValue => this.setState({ user_telp: TextInputValue })}
                                        />
                                </View>
                            </View>

                            <View style={styles.form_input_view}>
                                <View style={styles.form_input_frame}>
                                    <Text style={styles.form_input_text}>Password</Text>
                                </View>
                                <View style={styles.form_input}>
                                    <View style={styles.form_password}>
                                        <Input
                                            autoCapitalize='none'
                                            secureTextEntry= {this.state.lookPass}
                                            value={this.state.user_password}
                                            onChangeText={TextInputValue => this.setState({ user_password: TextInputValue })}
                                        />
                                        <Icon style={styles.icon_password}
                                            name="eye"
                                            onPress={this.onPassword}
                                        />
                                    </View>
                                </View>
                                <Text style={styles.form_input_note_password}>*Your password must contain numbers, uppercase & lowercase letters </Text>
                            </View>

                            <View style={styles.form_input_view}>
                                <View style={styles.form_input_frame}>
                                    <Text style={styles.form_input_text}>Birhtday</Text>
                                </View>
                                <View style={styles.form_frame_input_birthday}>
                                    <TouchableWithoutFeedback
                                        onPress={this.showhideDate}
                                    >
                                        <View style={styles.form_input_birthday}>        
                                                <Input disabled
                                                    pointerEvents="none"
                                                    placeholder= "Day"
                                                    autoCapitalize='none'
                                                    defaultValue={user_day}
                                                    onChangeText={TextInputValue => this.setState({ user_day: TextInputValue })}
                                                />                                                                                 
                                        </View> 
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback
                                        onPress={this.showhideDate}
                                    >    
                                        <View style={styles.form_input_birthday}>                                       
                                            <Input disabled 
                                                placeholder= "Month"
                                                autoCapitalize='none'
                                                value={user_month}
                                                onChangeText={TextInputValue => this.setState({ user_month: TextInputValue })}
                                            />                             
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback               
                                        onPress={this.showhideDate}
                                    >
                                        <View style={[styles.form_input_birthday, {marginRight: 0}]}>
                                            <Input disabled 
                                                placeholder= "Year"
                                                autoCapitalize='none'
                                                value={user_year}
                                                onChangeText={TextInputValue => this.setState({ user_year: TextInputValue })}
                                            />
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View> 
                            </View>

                            <View style={styles.form_input_view}>
                                <View style={styles.form_input_frame}>
                                    <Text style={styles.form_input_text}>Gender</Text>
                                </View>
                                <RadioGroup
                                    size={20}
                                    thickness={1}
                                    color='#6A6666'
                                    activeColor = '#01628F'
                                    style={styles.form_input_view_gender}
                                    onSelect = {(index, value) => this.onSelect(index, value)}
                                >   
                                    <RadioButton 
                                    value={'L'}
                                    highlightColor= '#6A6666'
                                    style={styles.form_radio_gender}
                                    >
                                    <Text style={styles.form_text_gender}>Male</Text>
                                    </RadioButton>

                                    <RadioButton 
                                    value={'P'} 
                                    style={styles.form_radio_gender}
                                    >
                                    <Text style={styles.form_text_gender}>Female</Text>
                                    </RadioButton>
                                </RadioGroup>
                            </View>
                                
                            <View style={styles.form_input_view}>
                                <View style={styles.form_input_frame}>
                                    <Text style={styles.form_input_text}>Refferal Code</Text>
                                </View>
                                <View style={styles.form_input}>
                                    <View style={styles.form_password}>
                                            <Input
                                                autoCapitalize='none'
                                                value={this.state.user_code}
                                                onChangeText={TextInputValue => this.setState({ user_code: TextInputValue })}
                                            />
                                            <Icon style={styles.icon_password}
                                                    name= "refresh"
                                                    onPress={this.ShowModal}
                                                />
                                    </View>                               
                                </View>
                            </View>

                            <View style={styles.form_or}>
                                <Text style={styles.form_text}>OR</Text>
                            </View>
                            <View style={styles.form_button_find}>
                                <View style={styles.form_button}>
                                    <Button primary 
                                        style={styles.form_button_block_find}
                                        onPress={() => this.props.navigation.navigate('Maps', { returnData: this.returnData.bind(this) })}>
                                        <Text style={styles.form_button_text_find}>FIND REFFERAL</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        
                        <LinearGradient
                                colors={['#FFF', '#666666', '#FFF']}
                                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                style={styles.default_line_list} >
                        </LinearGradient>
                        <View style={styles.form_button_frame}>
                            <View style={styles.form_button_next}>
                                <Button block
                                    style={styles.form_button_block_next}
                                    onPress={this.ShowModal}
                                    >
                                    <Text style={styles.form_button_text_next}>NEXT</Text>
                                </Button>
                            </View>
                        </View>
                        <LinearGradient
                                colors={['#FFF', '#666666', '#FFF']}
                                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                style={styles.default_line_list} >
                        </LinearGradient>

                        <View style={styles.form_text_login}>
                            <View style={styles.form_text_login_view}>
                                <View>
                                    <Text style={styles.form_text_login_text_1}>Already have an account?</Text>
                                </View>
                                <Ripple rippleColor='#4C4C4C' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}>
                                    <View>
                                        <Text style={styles.form_text_login_text_2}>Login Now</Text>
                                    </View>
                                </Ripple>
                            </View>
                        </View>

                        <DateTimePicker
                            isVisible={this.state.date_time_picker}
                            onConfirm={this.datePicked}
                            onCancel={this.showhideDate}
                        />

                        <View style={styles.form_modal_detail_modal}>
                            <View style={styles.form_modal_detail}>
                                <Modal isVisible={this.state.ModalDetail}
                                    onBackdropPress={() => this.setState({ ModalDetail: false })}
                                  >       
                                <View>
                                  <View style={styles.form_modal_content}>
                                        <View style={styles.form_image_detail_frame}>
                                            <Image style={styles.form_image_detail}
                                                source={imageKerja}
                                            />
                                        </View>
                                            <Text style={styles.form_text_detail_1}>
                                                Refferal Name
                                            </Text>

                                            <Text style={styles.form_text_detail_2}>
                                                Refferal Name is the name that is listed to 
                                                sponsor you in order to be a member
                                            </Text>
                                  </View>
                                  <View style={styles.form_border_close}>
                                    <Ripple rippleColor='#4C4C4C' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}
                                            onPress={() => this.setState({ ModalDetail: false })}
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
                        </View>
                    </Content>
                </Container>
        );
    }
}