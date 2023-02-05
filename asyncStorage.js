// this contain two textinputs for enter data and key .this contain two buttons Add and Get .to store data in to async-storage ,input the data and 
// key into text inputs and press add button .for geing a data from storage ,enter the key in to key text input and press the get button then we get the 
// data corresponding to the key value .

import React,{Component, useState} from 'react'
import {
     View,
     Text,
     StyleSheet,TextInput,TouchableHighlight,FlatList
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

 export default function asyncStorage(){
   const [inputdata,setdata]= useState("")
   const [getdata,setgetdata]= useState("Data")
   const [key,setkey]= useState("")
   // const add =async()=>{
      //  try{AsyncStorage.setItem("note","todays task")}
      //  catch(e){console.error(e)}
  //  }
    const add =async(inputdata,key)=>{
        try{AsyncStorage.setItem(key,inputdata)}
        catch(e){console.error(e)}
    }

     // const get =async()=>{
      //  try{const storedata= await AsyncStorage.getItem("note")}
       // catch(e){console.error(e)}
 //   }
    const get =async(key)=>{
        try{
           
           
            const value= await AsyncStorage.getItem(key)
         setgetdata(getdata=>value)
           }
       
          catch(e){console.error(e)}

        const RenderItem= ({getdata}) => (
            <View  style={styles.productbox}>
                <Text style={{fontSize:20 , fontWeight:'bold' ,color:'green'     }}>{getdata}</Text>
                
            </View>
        )
        
    }
    return (
       < View style={styles.viewstyle}>
        
         <Text style={styles.textstyle}>{getdata}</Text>
         <Text style={styles.textstyle2}>Enter the data</Text>
         <TextInput style={styles.textinput}  
            maxLength={50}
            onChangeText={(data)=>setdata(inputdata=>data,console.log("input data=", inputdata))} placeholder="input data" placeholderTextColor="black">
        
         </TextInput>
         <Text style={styles.textstyle2}>Enter the key</Text>
         <TextInput style={styles.textinput}  
            maxLength={20}
            onChangeText={(data2)=>setkey(key=>data2,console.log("key=", key))} placeholder="input key" placeholderTextColor="black">
         </TextInput>
        

         <TouchableHighlight style={styles.buttonstyle1} 
             onPress={()=>add(inputdata,key)}>
              <Text style={styles.buttontext}>Add</Text>
         </TouchableHighlight>

         <TouchableHighlight style={styles.buttonstyle1} 
             onPress={()=> get(key)}>
              <Text style={styles.buttontext}>get</Text>
         </TouchableHighlight>
         
       </View>

    )
}
 
 const styles=StyleSheet.create({

viewstyle:{ 
    height:'100%',
    width:'100%',
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center'
},
textstyle:{
    color:'black',
    fontSize:20,
    fontWeight:'bold'
},
textstyle2:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',marginRight:250,marginBottom:5
},
textinput:{
      
    height:40,
    width:'90%',
    borderColor:'white',
    borderWidth:1,
    paddingLeft:40,
    marginBottom:5,
    backgroundColor:'#EBECF0',
    borderRadius:10
   

},
buttonstyle1:{
    height:40,
    width:'80%',
    marginLeft:0,
    marginTop:10,
    backgroundColor:'#4585FB',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    borderWidth:0.2
  
   },
   flatlist:{
        
    backgroundColor:"black"

},
productbox:{
    width:350,
    elevation:20,
    padding:10,
    marginBottom:10,
    backgroundColor:"white"
}

 })
