import { StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { Row } from 'native-base';

export default {
    //css maps layout================
    Maps_View: {
        flex: 1
    },
    Maps_layoutmap: { 
        flex: 1, 
        position: 'relative' 
    },
    Maps: {
        ...StyleSheet.absoluteFillObject
    },
    Maps_PinMarker: {
        flex: 1, 
        height: 100,
        width: 50
    },
    Maps_TextMarker: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'column', 
        justifyContent: 'center', 
        fontSize: 15, 
        textAlign: 'center', 
        color: '#0D0C0C'
    },
  
    //modal button click list refferal list nearby
    Maps_Modal_buttonitemlist_1: {
        width: '80%',
        bottom: 15,
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 40,
        borderWidth: 0.8,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'red',
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10
    },
    Maps_Modal_bordertext_1: {
        marginLeft: 50,
    },
    Maps_Modal_texttitle_list: {
        marginLeft: 20,
        padding: 20,
        fontSize: 15
    },
    Maps_Modal_listitem: {
        flexDirection: 'row',
        padding: 5,
        margin: 5
    },
    Maps_Modal_profil_frame: {
        marginLeft: 20
    },
    Maps_Modal_buttonIconProfil: {
        height: 60,
        width: 50
    },
    Maps_Modal_bordertext_2: {
        flex: 3,
        justifyContent: 'flex-start'
    },
    Maps_Modal_texttitle_2: {
        padding: 20
    },
    Maps_Modal_titlelist: {
        fontSize: 15,
        marginLeft: 20
    },
    Maps_Modal_buttonitemlist_2: {
        width: '75%',
        bottom: 38,
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 15,
        marginLeft: 48,
        height: 50,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'red',
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10
    },
    //=================================

    //Maps Modal Detail========================
    Maps_ModalDetail_modal: {
        position: 'absolute',
    },
    Maps_ModalDetail: {
        position: 'absolute',
        justifyContent: "center",
        alignItems: "center"
    },
    Maps_ModalContent: {
        backgroundColor: 'white',
        flexDirection: 'column',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 20
    },
    Maps_image_detail_frame: {
        flexDirection: 'row',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    Maps_image_detail: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: 300,
        padding: 10,
        marginBottom: 10
    },
    Maps_text_detail_1: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15
    },
    Maps_buttonModalIconDetail_frame: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Maps_ButtonHome_1: {
        backgroundColor: 'green'
    },
    Maps_ButtonHome_2: {
        marginLeft: 25,
        backgroundColor: 'yellow'
    },
    Maps_text_detail_2: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15
    },
    Maps_button_detail: {
        margin: 20,
        marginTop: 15
    },
    Maps_button_detail_text: {
        fontSize: 15
    },
    //================================

    //Modal List View MAPS===========
    Maps_listmodal: {
        position: 'relative',
        backgroundColor: 'white'
    },
    Maps_bottomModal: {
        justifyContent: "flex-end",
        margin: 100
    },
    Maps_ListPlace: {
        backgroundColor: 'white',
        height: '90%',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20
    },
    Maps_Modal_List_Text: {
        textAlign: 'center',
        padding: 19,
        fontSize: 20
    },
    Maps_flatlist_column: {
        margin: 5
    },
    Maps_bottomModal: { //..
        justifyContent: "flex-end",
        margin: 0
    },
    //===============================

    //Flat List View Maps ==============
    Maps_flatlist_row: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    Maps_listitem: {
        flexDirection: 'row',
        padding: 5,
        margin: 5
    },
    Maps_iconimageList_a: {
        width: 50,
        height: 60
    },
    Maps_bordertext: {
        flex: 1,
        justifyContent: 'center',
    },
    Maps_titlelist: {
        fontSize: 15,
        marginLeft: 35
    },
    Maps_texttitle: { //...
        padding: 20,
    },
    //==================================

    //Body Form Header Form Input Find Location
    Form_Body: {
        backgroundColor: '#5050EB'
    },
    Form_BodyHeader: {
        flex: 3
    },
    Form_Title: {
        marginLeft: '50%'
    },
    //==============================

    //======Form Input=========
    Form:{
        flexDirection: 'column'
    },
    form_Input_View: {
        marginTop: 0,
        marginRight: 15,
        marginLeft: 10
    },
    Form_Input_frame: {
        marginLeft: 10,
        marginTop: 15
    },
    Form_Input_Text: {
        fontSize: 15,
        color: '#6A6666'
    },
    Form_Input: {
        marginLeft: 10,
        borderBottomWidth: 1,
        borderColor: '#BAB9B9'
    },
    Form_password:{
        flexDirection: 'row',
        marginTop: 0,
        marginRight: 15
    },
    iconpassword: {
        paddingTop: 15,
        position: 'relative',
        justifyContent: 'flex-end',
        right: 0
    },
    Form_Input_NotePassword: {
        fontSize: 10,
        color: '#6A6666',
        marginLeft: 10
    },
    Form_frameInputBirthday: {
        flexDirection: 'row',
        marginTop: 0,
        marginRight: 15,
        marginLeft: 15
    },
    Form_InputBirthday: {
        flex: 1,
        marginRight: 15,
        borderBottomWidth: 1,
        borderColor: '#BAB9B9'
    },
    Form_Input_ViewGender: {
        flexDirection: 'row',
        width: 280
    },
    Form_Gender: {
        flex: 1
    },
    Form_TextGender: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10,
        alignItems: 'flex-start',
        color: '#928B8B'
    },
    Form_RadioGender_A: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10
    },
    Form_RadioGender_B: {
        flex: 1,
        marginLeft: 15,
        marginTop: 10
    },
    form_Input_password: {
        width: 350
    },
    formOr:{
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    formText:{
        fontSize: 15
    },
    Form_ButtonFind:{
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: 8
    },
    Form_Button:{
        marginBottom: 20
    },
    Form_Button_Frame:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    Form_ButtonNext:{
        padding: 10,
        marginBottom: 5,
        marginTop: 5,
        width: '65%'
    },
    default_line_list: {
        height: 0.6,
    },
    Form_buttonText:{
        fontSize: 20
    },
    Form_TextLogin:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    Form_TextLogin_View:{
        flexDirection: 'row'
    },
    Form_TextLogin_Text_1:{
        color: '#6A6666',
        marginRight: 5
    },
    Form_TextLogin_Text_2:{
        color: '#3484CA'
    },
    //============================

    //Modal List Form Find Location====
    Form_listmodal: { 
        position: 'relative', 
        backgroundColor: 'white' 
    },
    Form_bottomModal: {
        justifyContent: "flex-end",
        margin: 100
    },
    Form_ListPlace: {
        backgroundColor: 'white',
        height: '90%',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20
    },
    Form_Modal_List_Text: {
        textAlign: 'center',
        padding: 19,
        fontSize: 20
    },
    Form_flatlist_column: {
        margin: 5
    },
    //=========================

    //style flat list Form Find Location====
    Form_flatlist_row: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    Form_listitem: {
        flexDirection: 'row',
        padding: 5,
        margin: 5
    },
    Form_iconimageList_a: {
        width: 50,
        height: 60
    },
    Form_bordertext: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#D4D2D2'
    },
    Form_texttitle: {
        padding: 20,
        alignItems: 'center'
    },
    Form_titlelist: {
        fontSize: 15
    },
    //===============================
    
    //Form Modal Detail========================
    Form_ModalDetail_modal: {
        position: 'absolute',
    },
    Form_ModalDetail: {
        position: 'relative',
        justifyContent: "center",
        alignItems: "center"
    },
    Form_ModalContent: {
        backgroundColor: 'white',
        flexDirection: 'column',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 20
    },
   Form_image_detail_frame: {
        flexDirection: 'row',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    Form_image_detail: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: 300,
        padding: 10,
        marginBottom: 10
    },
    Form_text_detail_1: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
        color: '#545353'
    },
    Form_text_detail_2: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
        color: '#737171'
    },
    //================================

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
        position: 'absolute'
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
        height: 300
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

    //Super Grid
    gridView: {
        paddingTop: 0
    },
    GridFrame:{
        margin: 0
    },
    itemContainer: {
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#AAA5A5',
        borderLeftWidth: 2,
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
        position: 'absolute',
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

    //============================
};
