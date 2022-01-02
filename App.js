import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput,Button,FlatList } from 'react-native';
import realm,
{
  getAllBooks,
  addBook,
  deleteBook
} from './Database';
export default function App() {
  const [Library, setLibrary] = useState(getAllBooks()) ;
  const [BookName,setBookName] =useState();
  const [Author,setAuthor] =useState();
  const [Description,setDescription] =useState();
  const [recordID,setRecordID] = useState(1);
  
  let setId =() =>{
    setRecordID(recordID+1)
  }
  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}
    >
      <View style={{margin:10,alignItems:'center',justifyContent:'center'}}>
      <TextInput style={styles.inputBoxStyle}
      placeholder='Book Name'
      multiline={true}
      numberOfLines={2}
      onChangeText={setBookName}
      value={BookName}
      defaultValue=''>
      </TextInput >
      <TextInput style={styles.inputBoxStyle}
      placeholder='Author Name'
      multiline={false}
      numberOfLines={1}
      onChangeText={setAuthor}
      value={Author}
      defaultValue=''>
      </TextInput >
      <TextInput style={styles.inputBoxStyle2}
      placeholder='Description'
      multiline={true}
      numberOfLines={4}
      defaultValue=''
      onChangeText={setDescription}
      value={Description}>
      </TextInput >
      <View style={{marginTop:10}}>
      <Button
      title={'ADD BOOK'}
      onPress={()=>{
        addBook(recordID, BookName, Author,Description);
        setLibrary(getAllBooks)
        setId()
        console.log(recordID,BookName)
      }}
      >
      </Button>
      </View>
      </View>
      <View style={{marginLeft:30,width:'35%',height:'5%',backgroundColor:'#fff',alignItems:'center',justifyContent:'center',elevation:4}}>
        <Text style={{fontSize:22,fontWeight:'bold',color:'blue'}} >Book Details</Text>
      </View>
      <FlatList
      style={{height:300,marginTop:10,backgroundColor:'#ffff'}}
        data={Library}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',borderColor:'red',borderWidth:1,marginBottom:10 }}>
              <Text style={{margin:10,color:'green',fontSize:18}}>{item.recordID}</Text>
              <Text style={{margin:10,color:'blue',fontSize:18}} multiline numberOfLines={2}>{item.BookName}</Text>
              <Text style={{margin:10,color:'orange',fontSize:18}}multiline numberOfLines={2}>{item.AuthorName}</Text>
              <Text style={{margin:10,color:'#aaa',fontSize:12}}multiline numberOfLines={4}>{item.Description}</Text>
            </View>
          )
        }}
      />


      <View style={{width:'100%',alignItems:'center',justifyContent:'center',marginTop:10}}>
      <Button
      
      title={'DELETE ALL BOOKS'}
      onPress={() => {
        deleteBook();
        setLibrary(getAllBooks);
        setRecordID(1)
      }}>

      </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#eee'
  },
  inputBoxStyle: {
    borderWidth: 1,
    borderRadius: 8,
    width: '90%',
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'skyblue',
    margin:5,
    padding:10,
  },
  
  inputBoxStyle2: {
    borderWidth: 1,
    borderRadius: 8,
    width: '90%',
    height: "25%",
    borderColor:'skyblue',
    alignItems:'baseline',
    justifyContent:'flex-start',
    margin:5,
    paddingLeft:10
  },

    

  
});