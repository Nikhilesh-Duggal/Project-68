import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

export default class FaceBookScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style = {styles.header}>
                    <Text style = {styles.text}>Buzz - App</Text>
                </View>
                <View style = {styles.box} >
                    <Image 
                        source = {{uri:'data:image/jpeg;base64,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'}}
                        style = {styles.logo} />
                    <Text style = {styles.name}>https://www.instagram.com/</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'tomato'
    },
    box:{
        width:'50%',
        height:'80%',
        marginTop:'1%',
        marginLeft:'25%',
    },
    logo:{
        marginTop:'2%',
        width:'100%',
        height:'100%',
    },
    name:{
        position:'absolute',
        textAlign:'center',
        fontSize:35,
        fontWeight:'900',
        marginTop:'35%',
        marginLeft:'15%'
    },
    header : {
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'10%',
        backgroundColor:'black'
    },
    text : {
        fontSize:30,
        color:'white',
        fontWeight:800
    },
})