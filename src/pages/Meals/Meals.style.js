import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        position:"relative",
        backgroundColor:"orange",
    },  
    inner_container:{
        flex:1,
        margin:10,
        borderRadius:10,
        overflow:"hidden",
    },
    image:{
        height:Dimensions.get("window").height/4,
        resizeMode:"cover",
    },
    title:{
        bottom:0,right:0,backgroundColor:"#000000e0",
        color:"white",
        textAlign:"right",
        fontSize:22,
        paddingRight:15,
        fontWeight:"bold",paddingTop:3,paddingBottom:3
    }
})