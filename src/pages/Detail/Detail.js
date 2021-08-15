import React, { useState, useEffect } from "react"
import axios from "axios"
import styles from "./Detail.style"
import { View, Text, ActivityIndicator, Image, ScrollView, TouchableOpacity,Linking } from "react-native"

const Detail = ({ route }) => {

    const { id } = route.params;
    console.log(id)
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const { data: resData } = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
        //setData(resData.meals)
        setLoading(false)
        setData(resData.meals[0])
    }
    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }

    return (
        <View>
            <ScrollView>
                <Image style={styles.image} source={{ uri: data.strMealThumb }} />
                <Text style={styles.meal}>{data.strMeal}</Text>
                <Text style={styles.area}>{data.strArea}</Text>
                <Text style={styles.desc}>{data.strInstructions}</Text>
                <TouchableOpacity onPress={()=>Linking.openURL(data.strYoutube)} style={styles.button}>
                    <Text style={styles.buttonText}>Watch on Youtube</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Detail