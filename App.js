import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Kategori from './screens/Kategori'
import ModalAnime from './screens/Rincian';
import HasilSearch from './screens/HasilSearch';
import TopAnime from './screens/topanime';

const Home = ()  => {
  const categoriesList = ['2', '3', '36', '6', '7', '24', '4', '30', '21']
  const [userInput, setUserInput] = useState("")
  const [SearchValue, setSearchValue] = useState()
  const [Target, setTarget] = useState()
  const [Data, setData] = useState([])
  const [Visible, setVisible] = useState(false)
  const [apli, setApli] = useState(0)

  const anim = ['Anime/Category', 'Top Anime'];

  const Applist = () => {
    return( <View style={styles.apl}>
      {anim.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setApli(index)}>
          <Text style = {[styles.kateg, apli == index && styles.selected]}>
            {item}
          </Text>
        </TouchableOpacity> 
      ))}
    </View>
    )
  };

  const Prs = () => {
    return(
      <View>
        {apli == 0 ?   
          <ScrollView style={{marginBottom: 160}}>
            {categoriesList.map(categoryId => (
              <View key={categoryId}>
                <Kategori
                  id={categoryId}
                  setTarget={setTarget}
                  setVisible={setVisible}
                />
              </View>
            ))}
          </ScrollView>
        :
          <TopAnime 
            setTarget={setTarget}
            setVisible={setVisible}
          />
        }
      </View>
    )
  }

  return (
    <View style={styles.container}>

    <View style={styles.header}>
        <Text style={styles.textApp}>Anime List App</Text>
        <Text style={styles.detail}>rekomendasi anime terlengkap hanya disini!</Text>
      </View>
            <View style={styles.search}>
        <TouchableOpacity style={styles.icons}>
          <Image style={styles.icons} source={require('./assets/search.png')} />
        </TouchableOpacity>

        <TextInput style={styles.cari} 
                  placeholder='Cari Anime...' 
                  placeholderTextColor={'#82A284'}
                  onChangeText={(value) => setUserInput(value)}
                  value={userInput}
                  onSubmitEditing={() => setSearchValue(userInput)}
        />
        { userInput?
        <TouchableOpacity style={styles.icons2} onPress={() => {
                                                        setUserInput('') 
                                                        setSearchValue('')
        }}>
          <Image style={styles.icons2} source={require('./assets/clear.png')} />
        </TouchableOpacity>
        : <View style={styles.icons2} />
        }
      </View>

      <Applist />

      { SearchValue? 
        <HasilSearch
            Data={Data}
            setData={setData}
            SearchValue={SearchValue}
            setTarget={setTarget}
            setVisible={setVisible} />
      :
        <Prs/>
      }

      {
        Target ?
          <ModalAnime
            Target={Target}
            Visible={Visible}
            setVisible={setVisible}
          />
          :
          <View style={{ backgroundColor: '#f2f2f2' }}>
          </View>
      }
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
  },

  header: {
    marginTop: 40,
    borderBottomWidth: 1,
    backgroundColor: "#6d1e66",
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
    alignSelf: 'center',
    marginRight: 13,
  },

  apl:{
    height: 35,
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  kateg:{ 
    marginRight: 40,
    marginLeft: 40,
    marginTop: 5,
    fontSize: 15,
    fontWeight: '400',
    color: '#fff'
  },

  selected:{
    fontWeight: 'bold',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#fff'
  },

  rec: {
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
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    flex: 1,
  },

  namea:{
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  }

});
export default Home;
