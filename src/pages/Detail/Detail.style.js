import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    image:{
        height:Dimensions.get("window").height/3
    },
    meal:{
        fontSize:30,
        fontWeight:"bold",
        color:"#a52a2a",padding:5
    },
    area:{
        fontSize:25,
        fontWeight:"bold",
        borderBottomWidth:1,
        borderBottomColor:"gray",
        color:"#a52a2a",padding:5
    },
    desc:{
        fontSize:18,padding:5
    },
    button:{
        backgroundColor:"red",
        margin:10,
        borderRadius:5,
        padding:10
    },
    buttonText:{
        color:"white",
        textAlign:"center",
        fontWeight:"bold",
       
    }
})