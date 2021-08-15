import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"
import { SafeAreaView, View, Text, FlatList, Image, TouchableWithoutFeedback,ActivityIndicator} from "react-native"
import styles from "./Category.style"

const Category = ({navigation}) => {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);

    const fetchData = async () => {
        const { data: resData } = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        setData(resData.categories)
        setLoading(false)
    }
    useEffect(() => {
        fetchData();
    }, [])
    function renderItem({ item }) {
        const onSelect=() =>{
            navigation.navigate("MealsPage",{title:item.strCategory})
        }
        return (
            <TouchableWithoutFeedback onPress={onSelect} >
                <View style={styles.inner_container}>
                    <Image style={styles.image} source={{ uri: item.strCategoryThumb }} />
                    <Text style={styles.title}>{item.strCategory}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    if(loading){
        return <ActivityIndicator size="large" color="#0000ff" />
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.idCategory} />
        </SafeAreaView>
    )
}

export default Category