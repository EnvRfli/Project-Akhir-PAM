import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import axios from "axios";

const Kategori = ({id, setTarget, setVisible}) => {
    
    const [Loading, setLoading] = useState(true)
    const [GenreName, setGenreName] = useState('')
    const [GenreList, setGenreList] = useState([])
    const [index, setIndex] = useState(1);

    const fetchAnimeCategories = async (id) => {
      const { data } = await axios.get(`https://api.jikan.moe/v3/genre/anime/${id}/1`);
        setIndex(1);
        return data;
  };
  useEffect(
    () => {
  
        fetchAnimeCategories(id).then(data => {

            setGenreList(data.anime)
            setGenreName(data.mal_url.name)
            setLoading(false)

        })

    }, []
  )

  return(
    
    <View style={styles.container} key={id}>
        <View style={styles.rek}>
            <Text style={styles.genr}>{GenreName}</Text>
        </View>
        
        <FlatList horizontal showsHorizontalScrollIndicator={false}
            data={GenreList}
            renderItem={({item}) => {
                return (
                <TouchableOpacity onPress={() => {
                                        setTarget(item)
                                        setVisible(true)
                                    }}>
                    <View style={styles.bimeg}>
                    <View style={{height: 120, width: '100%'}}>
                        <Image source={{ uri: item.image_url }} style={styles.imeg}/>
                    </View>
                    
                    <Text numberOfLines={2}
                        style={styles.namea}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
                );
            }}
            keyExtractor={item => item.image_url}
        />
        </View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#282C35',
    },
  
    header: {
      marginTop: 40,
      borderBottomWidth: 1,
      backgroundColor: "#6d1e66",
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
  
    textApp: {
      color: 'white',
      fontSize: 17,
      marginBottom: 5,
      marginLeft: 5,
    },
  
    detail:{
      color: 'white',
      marginLeft: 5,
      marginBottom: 5,
    },
  
    search:{
      height: 40,
      flexDirection: 'row',
      borderBottomWidth: 1,
    },
  
    cari:{
      height: 40,
      width: '80%',
      fontSize: 18,
      color: '#82A284',
    },  
  
    icons:{
      height: 20,
      width: 20,
      marginLeft: 10,
      alignSelf: 'center',
      marginRight: 10,
    },
  
    icons2:{
      height: 30,
      width: 30,
      marginLeft: 10,
      alignSelf: 'center',
      marginRight: 10,
    },
  
    rek: {
      flexDirection: 'row',
      paddingTop: 5,
    },
  
    genr: {
      color: 'white',
      marginLeft: 15,
      marginBottom: 8,
    },
  
    seeall: {
      marginLeft: 'auto',
      marginRight: 20,
      color: 'white',
    },
  
    seeall2: {
      color: 'white',
    },
  
    list: {
      height: 150,
      flexDirection: 'row',
      borderBottomWidth: 1,
    },
  
    bimeg: {
      height: 150,
      width: 100,
      marginLeft: 10,
      alignItems: 'center',
    },
  
    imeg: {
      width: 100,
      height: 130,
      resizeMode: 'cover',
      flex: 1,
    },
  
    namea:{
      color: 'white',
      textAlign: 'center',
      fontSize: 10,
    }
  
  });
export default Kategori;