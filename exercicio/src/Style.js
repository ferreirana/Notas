import { StyleSheet } from "react-native";
import { container } from "webpack";

export default StyleSheet.create({
    container:{
        flex: 1,
    },
    Header: {
        height: 110,
        width: '100%',
        backgroundColor: '#0F62FE',
        flexDirection: "row",
        padding: '5%',
        alignItems: 'flex-end',
        position: "absolute",
        zIndex: 1,
        
    },
    HeaderTxt: {
        fontFamily: 'IBM Plex Sans', 
        flexGrow: 1,
        fontSize: 32,
        paddingTop: '9%',
        color: '#FFF',
    },
    IconHomeSource: {
        paddingRight: '10%',
        position: "relative",
    },
    IconHomePlus:{
        position: "relative",
        paddingBottom: "3%",
    },
    Squares:{
        paddingLeft: "10%",
        paddingTop: "44%",
        maxHeight: '40%',
    },
    box: {
        height: 91,
        width: 80,
        borderWidth: 1,
        borderColor: "#0F62FE",
        backgroundColor: "#FFF",
        transform: 
                [{ rotateX: "32deg" },
                { rotateZ: "40deg" }],
    },
    txtSemNotas: {
        fontFamily: 'IBM Plex Sans', 
        fontSize: 24,
        color: "#161616",
    },
    containerTxt: {
        paddingTop: '28%',
        paddingLeft: "5%",
        bottom: "4%",
    },
    subtitle: {
        fontFamily: 'IBM Plex Sans', 
        fontSize: 16,
        color: "#8D8D8D",
    },
    notas:{
        position: 'relative',
        backgroundColor: '#0F62FE',
        height: 40,
        width: 40,
        top: '410%',
        left: '85%', 
         
    },
    IconBottomPlus: {
        position: 'relative',
        padding: '16%',
    },
    bodyNota: {
        paddingTop: 100,
        paddingLeft: 13,
        flex: 1,
        zIndex: 0,
        backgroundColor: "#EFEFEF",
        // position: "absolute",
    },
    titleNota: {
        color: "#161616",
        fontSize: 18,
        fontWeight: 'bold',
        // position: 'relative',
    },
    textInput: {
        // position: 'absolute',
        marginTop: 10,
        marginLeft: 4,
        width: 378,
        backgroundColor: "#fff",
        borderBottomColor: "#8D8D8D",
        borderBottomWidth: 1,
        padding: 10,
        letterSpacing: 1,
    },
    containerNota:{
        flex: 1,
        marginTop: 40,
    },
    prioridade:{
        backgroundColor: "#FFF",
        marginTop: 10,
        marginLeft: 3,
        width: 377,
        borderBottomColor: "#8D8D8D",
        borderBottomWidth: 1,
        borderWidth: 0,
        borderRadius: 0,
    },
    footer: {
        height: 80,
        width: '100%',
        backgroundColor: '#0F62FE',
        zIndex: 1,
        alignContent: 'flex-end',
    },
    txtFooter: {
        fontFamily: 'IBM Plex Sans', 
        flexGrow: 1,
        fontSize: 23,
        textAlign: 'center',
        marginTop: 10,
        color: '#FFF',
    },

    dropPicker: {
        borderWidth: 0,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 2,
        borderRadius: 0,
        width: 377,
        right: 18,
    },
    dataInput:{
        backgroundColor: '#fff',
        width: 340,
        marginTop: 10,
        marginLeft: 3,
        letterSpacing: 1,
        paddingLeft: 10,
        borderBottomColor: "#8D8D8D",
        borderBottomWidth: 1,
    },
    iconCalendar: {
        marginTop: 20,
        marginLeft: 17,
    },
})