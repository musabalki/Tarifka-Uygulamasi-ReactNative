import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"orange"
    },
    image:{
        width:80,
        height:80,
        resizeMode:"contain",
        marginLeft:10
    },
    title:{
        fontSize:22,
        marginLeft:15
    },
    inner_container:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#eceff1",
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        margin:8,
        borderWidth:1,
        borderColor:"gray"
    }
})