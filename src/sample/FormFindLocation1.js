import React, { Component } from 'react';
import styles from '../sample/styles1';
import {
    Container, Header, Left, Body, Text, Title, Content, Input, Right,
    Button, Icon
} from 'native-base';
import { View, FlatList, Image} from 'react-native';
import Modal from 'react-native-modal';
import {item_tanggal, item_bulan, item_tahun } from '../Components/DummyData'
import { imageKerja } from '../Components/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

export default class FormFindLocation1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            fullname: '',
            email: '',
            telp: '',
            passsword: '',
            lookPass: true,
            gender: '',
            checkMale: true,
            checkFemale: false,
            day:'',
            month:'',
            year:'',
            code:'',
            data_Day: item_tanggal,
            data_Month: item_bulan,
            data_Year: item_tahun,
            modalListDay: false,
            modalListMonth: false,
            modalListYear: false,
            id: '',
            ModalDetail: false
        };
    }

    returnData(title) {
        this.setState({
            title: title
        });
    }

    onPassword=()=>{
        this.setState({
            lookPass: !this.state.lookPass
        });
    }

    onCheckRadioMale=()=>{
        this.setState({
            checkMale: !this.state.checkMale,
            checkFemale: false,
            gender: this.state.gender
        });
    }

    onCheckRadioFemale = () => {
        this.setState({
            checkFemale: !this.state.checkfemale,
            checkMale: false,
            gender: this.state.gender
        });
    }

    onListDay(id,tanggal){
        this.setState({
            modalListDay: !this.state.modalListDay,
            id: id,
            day: tanggal
        });
    }

    onClickListDay=()=>{
        this.setState({
            modalListDay: !this.state.modalListDay
        });
    }

    onListMonth(id, bulan) {
        this.setState({
            modalListMonth: !this.state.modalListMonth,
            id: id,
            month: bulan
        });
    }

    onClickListMonth = () => {
        this.setState({
            modalListMonth: !this.state.modalListMonth
        });
    }
    
    onListYear(id, tahun) {
        this.setState({
            modalListYear: !this.state.modalListYear,
            id: id,
            year: tahun
        });
    }

    onClickListYear = () => {
        this.setState({
            modalListYear: !this.state.modalListYear
        });
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

    onDayData = function ({ item }) {
        return (
            <Ripple rippleColor='#4C4C4C' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}
                onPress={this.onListDay.bind(this, item.id, item.tanggal)}
            >
                <View styles={styles.Form_flatlist_row}>
                    <View style={styles.Form_listitem}>
                        <View style={styles.Form_bordertext}>
                            <View style={styles.Form_texttitle}>
                                <Text style={styles.Form_titlelist}>{item.tanggal}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Ripple>
        )
    };

    onMonthData = function ({ item }) {
        return (
            <Ripple rippleColor='#4C4C4C' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}
                onPress={this.onListMonth.bind(this, item.id, item.bulan)}
            >
                <View styles={styles.Form_flatlist_row}>
                    <View style={styles.Form_listitem}>
                        <View style={styles.Form_bordertext}>
                            <View style={styles.Form_texttitle}>
                                <Text style={styles.Form_titlelist}>{item.bulan}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Ripple>
        )
    };

    onYearData = function ({ item }) {
        return (
            <Ripple rippleColor='#4C4C4C' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}
                onPress={this.onListYear.bind(this, item.id, item.tahun)}
            >
                <View styles={styles.Form_flatlist_row}>
                    <View style={styles.Form_listitem}>
                        <View style={styles.Form_bordertext}>
                            <View style={styles.Form_texttitle}>
                                <Text style={styles.Form_titlelist}>{item.tahun}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Ripple>
        )
    };

    render() {
        return (
                <Container>
                    <Header style={styles.Form_Body}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body style={styles.Form_BodyHeader}>
                            <Title style={styles.Form_Title}>Sign Up</Title>
                        </Body>
                        <Right/>
                    </Header>
                    <Content>
                        <View style={styles.Form}>
                           
                            <View style={styles.form_Input_View}>
                                <View style={styles.Form_Input_frame}>
                                    <Text style={styles.Form_Input_Text}>User Name</Text>
                                </View>
                                <View style={styles.Form_Input}>
                                    <Input
                                        autoCapitalize='none' 
                                        value={this.state.title} //title 
                                        //onChangeText={TextInputValue => this.setState({ title: TextInputValue })}
                                        />
                                </View>
                            </View>

                            <View>
                                
                            </View>
                            <View style={styles.form_Input_View}>
                                <View style={styles.Form_Input_frame}>
                                    <Text style={styles.Form_Input_Text}>Full Name</Text>
                                </View>
                                <View style={styles.Form_Input}>
                                    <Input
                                        autoCapitalize='none'
                                        value={this.state.fullname}
                                        onChangeText={TextInputValue => this.setState({ fullname: TextInputValue })}
                                    />
                                </View>
                            </View>

                            <View style={styles.form_Input_View}>
                                <View style={styles.Form_Input_frame}>
                                    <Text style={styles.Form_Input_Text}>Email</Text>
                                </View>
                                <View style={styles.Form_Input}>
                                    <Input
                                        keyboardType='email-address'
                                        keyboardAppearance='light'
                                        value={this.state.email}
                                        onChangeText={TextInputValue => this.setState({ email: TextInputValue })}
                                        />
                                </View>
                            </View>

                            <View style={styles.form_Input_View}>
                                <View style={styles.Form_Input_frame}>
                                    <Text style={styles.Form_Input_Text}>No Handphone</Text>
                                </View>
                                <View style={styles.Form_Input}>
                                    <Input
                                        keyboardType='phone-pad'
                                        keyboardAppearance='light'
                                        value={this.state.telp}
                                        onChangeText={TextInputValue => this.setState({ telp: TextInputValue })}
                                        />
                                </View>
                            </View>

                            <View style={styles.form_Input_View}>
                                <View style={styles.Form_Input_frame}>
                                    <Text style={styles.Form_Input_Text}>Password</Text>
                                </View>
                                <View style={styles.Form_Input}>
                                    <View style={styles.Form_password}>
                                        <Input
                                            autoCapitalize='none'
                                            secureTextEntry= {this.state.lookPass}
                                            value={this.state.password}
                                            onChangeText={TextInputValue => this.setState({ password: TextInputValue })}
                                        />
                                        <Icon style={styles.iconpassword}
                                            name="eye"
                                            onPress={this.onPassword}
                                        />
                                    </View>
                                </View>
                                <Text style={styles.Form_Input_NotePassword}>*Your password must contain numbers, uppercase & lowercase letters </Text>
                            </View>

                            <View style={styles.form_Input_View}>
                                <View style={styles.Form_Input_frame}>
                                    <Text style={styles.Form_Input_Text}>Birhtday</Text>
                                </View>
                                <View style={styles.Form_frameInputBirthday}>
                                <Ripple rippleColor='#4C4C4C' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}
                                        onPress={this.onClickListDay}
                                    >
                                        <View style={styles.Form_InputBirthday}>
                                                <Text></Text>          
                                                <Input disabled 
                                                    pointerEvents="none"
                                                    placeholder= "Day"
                                                    autoCapitalize='none'
                                                    defaultValue={this.state.day}
                                                    onChangeText={TextInputValue => this.setState({ day: TextInputValue })}
                                                />                                                                                 
                                        </View> 
                                    </Ripple>

                                <Ripple rippleColor='#4C4C4C' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}
                                        onPress={this.onClickListMonth}
                                    >    
                                        <View style={styles.Form_InputBirthday}>                                       
                                            <Input disabled 
                                                placeholder= "Month"
                                                autoCapitalize='none'
                                                value={this.state.month}
                                                onChangeText={TextInputValue => this.setState({ month: TextInputValue })}
                                            />                             
                                        </View>
                                    </Ripple>

                                <Ripple rippleColor='#4C4C4C' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}
                                        onPress={this.onClickListYear}
                                    >
                                        <View style={styles.Form_InputBirthday}>
                                            <Input disabled 
                                                placeholder= "Year"
                                                autoCapitalize='none'
                                                value={this.state.year}
                                                onChangeText={TextInputValue => this.setState({ year: TextInputValue })}
                                            />
                                        </View>
                                    </Ripple>
                                </View> 
                            </View>

                            <View style={styles.form_Input_View}>
                                <View style={styles.Form_Input_frame}>
                                    <Text style={styles.Form_Input_Text}>Gender</Text>
                                </View>
                                <View style={styles.Form_Input_ViewGender}>
                                        <View style={styles.Form_Gender}>  
                                                <Text style={styles.Form_TextGender}>Male</Text>
                                        </View>
                                        <View style={styles.Form_Gender}>
                                                <Radio style={styles.Form_RadioGender_A}
                                                selected={this.state.checkMale}
                                                onPress= {this.onCheckRadioMale}
                                                selectRadio = {this.state.selectRadio}
                                                selectedColor={"green"}
                                                color={""} 
                                                />
                                        </View> 
                                        <View style={styles.Form_Gender}>
                                                <Text style={styles.Form_TextGender}>Female</Text>
                                        </View>
                                        <View style={styles.Form_Gender}>
                                                <Radio style={styles.Form_RadioGender_B}
                                                selected={this.state.checkFemale}
                                                onPress={this.onCheckRadioFemale}
                                                selectRadio={this.state.selectRadio}
                                                selectedColor={"green"}
                                                color={""}  
                                                />
                                        </View> 
                                </View>
                            </View>
                                
                            <View style={styles.form_Input_View}>
                                <View style={styles.Form_Input_frame}>
                                    <Text style={styles.Form_Input_Text}>Refferal Code</Text>
                                </View>
                                <View style={styles.Form_Input}>
                                    <View style={styles.Form_password}>
                                            <Input
                                                autoCapitalize='none'
                                                value={this.state.code}
                                                onChangeText={TextInputValue => this.setState({ code: TextInputValue })}
                                            />
                                            <Icon style={styles.iconpassword}
                                                    name= "refresh"
                                                    onPress={this.ShowModal}
                                                />
                                    </View>                               
                                </View>
                            </View>

                            <View style={styles.formOr}>
                                <Text style={styles.formText}>OR</Text>
                            </View>
                            <View style={styles.Form_ButtonFind}>
                                <View style={styles.Form_Button}>
                                    <Button primary 
                                        onPress={() => this.props.navigation.navigate('Maps', { returnData: this.returnData.bind(this) })}>
                                        <Text>Find Referral</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        
                        <LinearGradient
                                colors={['#FFF', '#666666', '#FFF']}
                                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                style={styles.default_line_list} >
                        </LinearGradient>
                        <View style={styles.Form_Button_Frame}>
                            <View style={styles.Form_ButtonNext}>
                                <Button block onPress={this.ShowModal}>
                                    <Text  style={styles.Form_buttonText}>Next</Text>
                                </Button>
                            </View>
                        </View>
                        <LinearGradient
                                colors={['#FFF', '#666666', '#FFF']}
                                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                style={styles.default_line_list} >
                        </LinearGradient>

                        <View style={styles.Form_TextLogin}>
                            <View style={styles.Form_TextLogin_View}>
                                <View>
                                    <Text style={styles.Form_TextLogin_Text_1}>Already have an account?</Text>
                                </View>
                            <Ripple rippleColor='#4C4C4C' rippleOpacity={0.25} rippleSize={200} rippleDuration={200}>
                                    <View>
                                        <Text style={styles.Form_TextLogin_Text_2}>Login Now</Text>
                                    </View>
                                </Ripple>
                            </View>
                        </View>

                        

                        <View style={styles.Form_listmodal}>
                            <Modal
                                isVisible={this.state.modalListDay}
                                onBackdropPress={() => this.setState({ modalListDay: false})}
                                style={styles.Form_bottomModal}
                            >
                                <View style={styles.Form_ListPlace}>
                                        <View>
                                            <Text style={styles.Form_Modal_List_Text}>Date</Text>
                                        </View>

                                        <FlatList
                                            style={styles.Form_flatlist_column}
                                            data={this.state.data_Day}
                                            renderItem={this.onDayData.bind(this)}
                                            keyExtractor={(item) => item.id.toString()}
                                        />
                                </View>
                            </Modal>
                        </View>

                        <View style={styles.Form_listmodal}>
                            <Modal
                                isVisible={this.state.modalListMonth}
                                onBackdropPress={() => this.setState({ modalListMonth: false})}
                                style={styles.Form_bottomModal}
                            >
                                <View style={styles.Form_ListPlace}>
                                        <View>
                                            <Text style={styles.Form_Modal_List_Text}>Month</Text>
                                        </View>

                                        <FlatList
                                            style={styles.Form_flatlist_column}
                                            data={this.state.data_Month}
                                            renderItem={this.onMonthData.bind(this)}
                                            keyExtractor={(item) => item.id.toString()}
                                        />
                                </View>
                            </Modal>
                        </View>

                        <View style = {styles.Form_listmodal}> 
                            <Modal 
                                isVisible={this.state.modalListYear} 
                                onBackdropPress={() => this.setState({ modalListYear: false})}
                                style={styles.Form_bottomModal}
                            >
                                <View style={styles.Form_ListPlace}>
                                        <View>
                                            <Text style={styles.Form_Modal_List_Text}>Year</Text>
                                        </View>

                                        <FlatList
                                            style={styles.Form_flatlist_column}
                                            data={this.state.data_Year}
                                            renderItem={this.onYearData.bind(this)}
                                            keyExtractor={(item) => item.id.toString()}
                                        />
                                </View>
                            </Modal> 
                        </View>

                        <View style={styles.Maps_ModalDetail_modal}>
                            <View style={styles.Form_ModalDetail}>
                                <Modal isVisible={this.state.ModalDetail}
                                    onBackdropPress={() => this.setState({ ModalDetail: false })}
                                  >                         
                                  <View style={styles.Form_ModalContent}>
                                        <View style={styles.Form_image_detail_frame}>
                                            <Image style={styles.Form_image_detail}
                                                source={imageKerja}
                                            />
                                        </View>
                                            <Text style={styles.Form_text_detail_1}>
                                                Refferal Name
                                            </Text>

                                            <Text style={styles.Form_text_detail_2}>
                                                Refferal Name is the name that is listed to 
                                                sponsor you in order to be a member
                                            </Text>
                                  </View>
                                </Modal> 
                            </View>
                        </View>
                    </Content>
                </Container>
        );
    }
}