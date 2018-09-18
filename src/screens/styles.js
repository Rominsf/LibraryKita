import { StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import { Row } from 'native-base';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';

//Default
const nav = responsiveFontSize(2.4);
const sxl = responsiveFontSize(4);
const xxl = responsiveFontSize(2.6);
const xl = responsiveFontSize(2.2);
const lg = responsiveFontSize(2);
const md = responsiveFontSize(1.8);
const sm = responsiveFontSize(1.6);
const xs = responsiveFontSize(1.4);
const numColumns= 4;

export default {
    //=====Home Screen=====
    BodyHome: {
        backgroundColor: 'red'
    },
    Header: {
        flex: 1, 
        alignItems: 'center'   
    },
    cardItem: {
        marginBottom: 10
    },
    contentContainer: {
        paddingVertical: 0,
    },
    //=====================

    //Super Grid
    gridView: {
        paddingTop: 0,
        marginBottom: responsiveHeight(30)
    },
    GridFrame:{
        margin: 0
    },
    itemContainer: {
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#AAA5A5',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        paddingRight: 0,
        height: 150,
    },
    itemImage: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    gridName:{
        alignItems: 'center'
    },
    itemName: {
        fontSize: 15,
        color: '#0D0C0C',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    //============================

    //css maps layout================
    maps_view: {
        flex: 1
    },
    maps_layout_map: { 
        flex: 1, 
        position: 'relative' 
    },
    maps: {
        ...StyleSheet.absoluteFillObject
    },
    maps_view_markertext: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    maps_image_view_marker: {
        position: 'relative'
    },
    maps_pin_marker: {
        height: responsiveHeight(15),
        width: responsiveWidth(25),
    },
    maps_text_view_marker: {
        top: 0,
        position: 'absolute',
    },
    maps_text_marker: {
        marginTop: responsiveHeight(2),
        textAlign: 'center',
        fontSize: sm, 
        color: '#0D0C0C'
    },
  
    //modal button click list refferal list nearby
    maps_modal_button_item_list_1: {
        width: responsiveWidth(80),
        bottom: 20,
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 15,
        marginLeft: responsiveWidth(9.5),
        height: responsiveHeight(15),
        borderWidth: 0.8,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'red',
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10
    },
    maps_modal_border_text_1: {
        alignItems: 'center'
    },
    maps_modal_text_title_list: {
        marginLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: md,
        color: '#6A6666'
    },
    maps_modal_list_item: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5
    },
    maps_modal_profil_frame: {
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        marginLeft: 20,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#D4D2D2',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    maps_modal_button_icon_profil: {
        height: responsiveWidth(10),
        width: responsiveWidth(10),
        alignItems: 'center',
        borderRadius: 100,
        justifyContent: 'center'
    },
    maps_modal_border_text_2: {
        flex: 3,
        justifyContent: 'center'
    },
    maps_modal_text_title_2: {
        paddingLeft: 15
    },
    maps_modal_title_list: {
        fontSize: md,
        marginLeft: 20,
        color: '#6A6666'
    },
    maps_modal_button_item_list_2: {
        width: responsiveWidth(75),
        bottom: 12,
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        marginLeft: responsiveWidth(12.3),
        height: responsiveHeight(10),
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'red',
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10
    },
    //=================================

    //Maps Modal Detail========================
    maps_modal_detail_modal: {
        position: 'absolute',
    },
    maps_modal_detail: {
        position: 'absolute',
        alignItems: "center",
        alignItems: "center"
    },
    maps_modal_content: {
        backgroundColor: 'white',
        flexDirection: 'column',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 20
    },
    maps_image_detail_frame: {
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    maps_image_detail: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '100%',
        height: responsiveHeight(35),
        padding: 10,
        marginBottom: 10
    },
    maps_text_detail_1: {
        fontSize: md,
        textAlign: 'center',
        marginBottom: 15,
        color: '#6A6666'
    },
    maps_button_modal_icon_detail_frame: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    maps_icon_telp: {
        width: responsiveWidth(5),
        height: responsiveWidth(5),
        marginHorizontal: responsiveWidth(3)
    },
    maps_text_detail_2: {
        fontSize: xl,
        textAlign: 'center',
        marginTop: 10,
        color: '#6A6666'
    },
    maps_button_detail: {
        margin: 20,
        marginTop: 15,
        backgroundColor: '#15385F',
        borderRadius: 10
    },
    maps_button_detail_text: {
        fontSize: md
    },
    //================================

    //Modal List View MAPS===========
    maps_list_modal: {
        position: 'relative',
        backgroundColor: 'white'
    },
    maps_bottom_modal: {
        justifyContent: "flex-end",
        margin: 100
    },
    maps_list_place: {
        backgroundColor: 'white',
        marginTop: responsiveHeight(10),
        marginHorizontal: 20,
        borderRadius: 20
    },
    maps_modal_list_text: {
        textAlign: 'center',
        padding: 10,
        fontSize: xl,
        color: '#2F2C2C'
    },
    maps_flatlist_column: {
        margin: 5
    },
    maps_bottom_modal: { //..
        justifyContent: "flex-end",
        margin: 0
    },
    //===============================

    //Flat List View Maps ==============
    maps_flatlist_row: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    maps_listitem: {
        flexDirection: 'row',
        margin: 5
    },
    maps_close_icon: {
        width: responsiveWidth(12),
        height: responsiveHeight(8),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    maps_icon_image_list_a: {
        height: responsiveWidth(12),
        width: responsiveWidth(12),
        alignItems: 'center',
        borderRadius: 90,
        justifyContent: 'center'
    },
    maps_border_text: {
        flex: 1,
        justifyContent: 'center',
    },
    maps_title_list: {
        fontSize: lg,
        color: '#6A6666',
        marginLeft: responsiveWidth(10)
    },
    maps_text_title: { //...
        padding: 10,
    },
    //==================================

    //Body Form Header Form Input Find Location
    form_body: {
        backgroundColor: '#5050EB'
    },
    form_body_header: {
        flex: 3
    },
    form_title: {
        marginLeft: '50%'
    },
    //==============================

    //======Form Input=========
    form:{
        flexDirection: 'column'
    },
    form_input_view: {
        marginTop: 0,
        marginRight: 10,
        marginLeft: 5
    },
    form_input_frame: {
        marginLeft: 10,
        marginTop: 15
    },
    form_input_text: {
        fontSize: md,
        color: '#6A6666'
    },
    form_input: {
        marginLeft: 10,
        borderBottomWidth: 1,
        borderColor: '#6A6666'
    },
    form_password:{
        flexDirection: 'row',
        marginTop: 0
    },
    icon_password: {
        paddingTop: 15,
        position: 'relative',
        color: '#6A6666',
        width: responsiveWidth(7.6),
        height: responsiveHeight(7.5)
    },
    form_input_note_password: {
        fontSize: xs,
        color: '#6A6666',
        marginLeft: 10
    },
    form_frame_input_birthday: {
        flexDirection: 'row',
        marginTop: 0,
        marginLeft: 10
    },
    form_input_birthday: {
        flex: 1,
        marginRight: 10,
        borderBottomWidth: 1,
        borderColor: '#6A6666'
    },
    form_input_view_gender: {
        flex: 1,
        flexDirection: 'row',
    },
    form_text_gender: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: md,
        color: '#6A6666'
    },
    form_radio_gender: {
        marginRight: 20,
        marginTop: 10
    },
    form_or:{
        alignItems: 'center',
        marginTop: 10,
        marginBottom: responsiveHeight(4),
    },
    form_text:{
        fontSize: lg,
        color: '#6A6666'
    },
    form_button_find:{
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: 8
    },
    form_button:{
        marginBottom: responsiveHeight(4)
    },
    form_button_block_find: {
        backgroundColor: '#15385F', 
        borderRadius: 10
    },
    form_button_text_find: {
        fontSize: lg,
        fontWeight: 'bold'
    },
    form_button_frame:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    form_button_next:{
        padding: 10,
        marginBottom: 5,
        marginTop: 5,
        width: '65%'
    },
    form_button_block_next: {
        backgroundColor: '#15385F',
        borderRadius: 10
    },
    form_button_text_next: {
        fontSize: xxl,
        fontWeight: 'bold'
    },
    default_line_list: {
        height: 0.6,
    },
    form_text_login:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: responsiveHeight(5)
    },
    form_text_login_view:{
        flexDirection: 'row'
    },
    form_text_login_text_1:{
        color: '#6A6666',
        marginRight: 5,
        fontSize: lg
    },
    form_text_login_text_2:{
        color: '#3484CA',
        fontSize: lg
    },
    //============================

    //Form Modal Detail========================
    form_modal_detail_modal: {
        flex: 1,
        position: 'absolute',
    },
    form_modal_detail: {
        flex: 1,
        position: 'relative',
        justifyContent: "center",
        alignItems: "center"
    },
    form_modal_content: {
        backgroundColor: 'white',
        flexDirection: 'column',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 16,
        position: 'relative'
    },
   form_image_detail_frame: {
        flexDirection: 'row',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    form_image_detail: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: responsiveHeight(40),
        padding: 10,
        marginBottom: 10
    },
    form_border_close: {
        flex: 1,
        position: 'absolute', 
        right: responsiveWidth(-0.2), 
        top: responsiveHeight(-2.5)
    },
    form_close_icon: {
        flex: 1,
        width: responsiveWidth(9),
        height: responsiveWidth(9),
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#D4D2D2',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form_icon_close: {
        width: 20,
        height: 20
    },
    form_text_detail_1: {
        fontSize: xl,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        color: '#545353'
    },
    form_text_detail_2: {
        fontSize: lg,
        marginHorizontal: 15,
        textAlign: 'center',
        marginBottom: responsiveHeight(7),
        color: '#737171'
    },
    //================================

    //========Seat Train==========
    st_status_loc_view: {
        flexDirection: 'row'
    },
    st_seat_flex_calendar: {
        flex: 1,
        borderRightWidth: 1
    },
    st_view_loading: {
        alignItems: 'center'
    },
    st_text_loading: {
        fontSize: xs
    },
    st_status_loc: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    st_status_text_loc: {
        fontSize: xl,
        fontWeight: 'bold',
        marginBottom: 5
    },
    st_status_text_calendar: {
        fontSize: md,
        marginBottom: 10
    },
    st_icon_arrow_view: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    st_circle_icon: {
        width: responsiveWidth(9),
        height: responsiveWidth(9),
        borderRadius: 100,
        backgroundColor: 'white',
        borderColor: '#8E9194',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    st_icon_arrow: {
        color: '#3F93F2'
    },
    st_seat_flex: {
        flex: 1,
    },
    st_view: {
        backgroundColor: 'rgba(0,0,0,0)',
    },
    st_frame: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        marginBottom: 20
    },
    st_circle_1: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
        borderRadius: 100,
        backgroundColor: '#6D726E',
        marginLeft: responsiveWidth(7.5),
    },
    st_text_1: {
        marginTop: 3,
        position: 'absolute',
        fontSize: responsiveFontSize(1.39),
        color: '#6D726E',
        marginLeft: responsiveWidth(16)
    },
    st_circle_2: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
        borderRadius: 100,
        backgroundColor: '#2452C6',
        marginLeft: responsiveWidth(27)
    },
    st_text_2: {
        marginTop: 3,
        position: 'absolute',
        fontSize: responsiveFontSize(1.39),
        color: '#2452C6',
        marginLeft: responsiveWidth(49)
    },
    st_circle_3: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
        borderRadius: 100,
        backgroundColor: '#E34E20',
        marginLeft: responsiveWidth(27),
    },
    st_text_3: {
        marginTop: 3,
        position: 'absolute',
        fontSize: responsiveFontSize(1.39),
        color: '#E34E20',
        marginLeft: responsiveWidth(82)
    },
    st_seat_button_view: {
        marginVertical: 10,
        marginHorizontal: responsiveWidth(10)
    },
    st_button: {
        borderRadius: 10,
        width: '100%',
        height: responsiveHeight(6),
        backgroundColor: '#15385F'
    },
    st_text_button: {
        fontSize: xl
    },
    st_view_flatList: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#6D726E',
    },
    st_title_text_train: {
        flex:1,
        fontSize: xl,
        backgroundColor: '#3FBFBF',
        textAlign: 'center'
    },
    st_circle_seat: {
        width: responsiveWidth(25),
        height: responsiveHeight(15),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    st_seat_image: {
        height: responsiveWidth(12),
        width: responsiveWidth(12),
        alignItems: 'center',
        justifyContent: 'center'
    },
    st_seat_row_text_flatlist:{
        flexDirection: 'row', 
        position: 'absolute'
    },
    st_seat_text: {
        position: 'absolute',
        color: '#696262',
    },
    //============================

    //Profil=========================
    Profil_frame: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Profil_Title_Text: {
        fontSize: 20,
        marginBottom: 25,
        marginTop: 15
    },
    Profil_Background:{
        position: 'relative'
    },
    Profil_Image:{
        width: 500,
        height: 250
    },
    Profil_Name_Text: {
        fontSize: 20,
        marginBottom: 15,
        marginTop: 10
    },
    Profil_Kontak:{
        flexDirection: 'row'
    },
    Profil_Kontak_Text:{
        marginRight: 10
    },
    //===============================

    //Contoh Modal
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "lightblue",
        padding: 12,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },
    scrollableModal: {
        height: responsiveHeight(50)
    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center"
    },
    scrollableModalContent2: {
        height: 200,
        backgroundColor: "lightgreen",
        alignItems: "center",
        justifyContent: "center"
    },

    //=======QRCODEscreen=========
    QR_BodyHeader: {
        flex: 2
    },
    QR_Title: {
        marginLeft: '50%'
    },
    QR_screen_TextView:{
        margin: 15
    },
    QR_screen_Text:{
        color: '#6D726E'
    },
    QR_screen_inputView:{
        flexDirection: 'row'
    },
    QR_screen_inputText_Frame:{
        marginLeft: 20,
        marginRight: 5
    },
    QR_screen_TextInput:{
        fontSize: 25,
        padding: 5,
        color: '#6D726E'
    },
    QR_screen_input:{
        marginRight: 5,
        width: 325
    },
    QR_ModalView: {
        position: 'relative',
    },
    QR_ModalFrame: {
        position: 'relative',
        justifyContent: "center",
        alignItems: "center"
    },
    QR_Modal_Border: {
        backgroundColor: 'white',
        flexDirection: 'column',
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    QR_Barcode_View:{
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    QR_Barcode_Text1: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
    },
    QR_Barcode_Text2:{
        fontSize: 15,
        marginLeft: 70,
        marginRight: 70,
        textAlign: 'center',
        marginBottom: 20
    },
    QR_buttonView:{
        flexDirection: 'row'
    },
    QR_button:{
        flex:1,
        margin: 15
    },
    //============================

    //=======SCAN QR CODE=========
    SC_QR_BG:{
        backgroundColor: '#38A8A8'
    },
    SC_QR_View:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SC_QR_Text:{
        color: 'white',
        marginBottom: 30
    },
    SC_QR_Camera:{
        flex:1,
        height: 450,
        width: 350,
    },
    SC_QR_FlashText:{
        color: 'white',
        marginTop: 20
    },
    SC_QR_Image:{
        marginTop: 20,
        width: 70,
        height: 50
    },
    //============================

    //Body SEAT Header===========
    ST_Body: {
        backgroundColor: '#5050EB'
    },
    ST_BodyHeader: {
        flex: 2
    },
    ST_Title: {
        marginLeft: '50%'
    },
    //============================

    //=========SEAT SCREEN========
    check_flight_flex: {
        flex: 1
    },
    check_flight_view_image_box: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 15
    },
    check_flight_image_box: {
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    check_flight_view_text_box: {
        alignItems: 'center', 
        justifyContent: 'center'
    },
    check_flight_text_box: {
        fontSize: md,
        color: '#464343'
    },
    //============================

    //======tes seat=========
    seat_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    seat_item: {
        alignItems: "center",
        backgroundColor: "#dcda48",
        flexGrow: 1,
        margin: 4,
        padding: 20
    },
    seat_itemInvisible : {
        backgroundColor: 'transparent',
    }
    //=======================
};