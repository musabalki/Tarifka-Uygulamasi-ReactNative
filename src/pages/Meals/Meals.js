import React,{useState,useEffect} from "react"
import styles from "./Meals.style"
import {View,Text, FlatList,TouchableWithoutFeedback,Image, ActivityIndicator,Alert} from "react-native"
import axios from "axios"

const Meals = ({route,navigation}) => {
    const {title} = route.params;
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);

    const fetchData = async () => {
        const { data: resData } = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c="+title)
        setData(resData.meals)
        setLoading(false)
    }
    useEffect(() => {
        fetchData();
    }, [])

    const renderItem = ({item}) =>{
        const onSelect=() =>{
            navigation.navigate("DetailPage",{id:item.idMeal})
        }
        return (
            <TouchableWithoutFeedback onPress={onSelect} >
                <View style={styles.inner_container}>
                    <Image style={styles.image} source={{ uri: item.strMealThumb }} />
                    <Text style={styles.title}>{item.strMeal}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    if(loading){
        return <ActivityIndicator size="large" color="#0000ff" />
    }
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={item=>item.idMeal}/>
        </View>
    )
}

export default Meals