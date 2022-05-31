import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import axios from "axios";

const HasilSearch = (props) => {
	const [Loading, setLoading] = useState(true)

	const SearchAnime = async (inputText) => {
		try {
				const { data } = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${inputText}`);
				return data;
		} catch (error) {
				setError(error);
		}
	}; 

	useEffect(
		() => {
				SearchAnime(props.SearchValue).then(data => {
						props.setData(data.results)
						setLoading(false)
				}).catch(() => (Alert.alert('Error', 'Unstable Connection')))

		}, [props.SearchValue]
	)

	return (
		<View style={styles.container}>
		<FlatList
			data={props.Data}
			keyExtractor={item => item.mal_id}
			renderItem={({ item }) => (
				<TouchableOpacity onPress={() => {
                                    props.setTarget(item)
                                    props.setVisible(true)
                                }}>
					<View style={styles.listAnime}>
						<View style={styles.poster}>
							<Image style={styles.poster2} source={{uri: item.image_url}} />
						</View>
						<View style={styles.deskripsi}>
							<Text style={styles.judul}>{item.title}</Text>
							<Text style={styles.totep}>Total Episode : {item.episodes},  type: {item.type}</Text>
							<View style = {{flexDirection: 'row', marginTop: 'auto', marginBottom: 10, alignItems: 'center', height: 30}}>
								<Image style={styles.member} source={require('../assets/group.png')} />
								<Text style={{textAlign: 'center', fontSize: 15, color: 'gray'}}> {item.members}</Text>
								<View style={{height:30, marginLeft:'auto', marginRight: 10, marginBottom: 15,}}>
										<Image style={styles.rating} source={require('../assets/star.png')} />
										<Text style={{textAlign: 'center', fontSize: 15, color: 'gray'}}>{item.score}</Text>
								</View>
							</View>
						</View>
					</View>	
					</TouchableOpacity>		
			)}
		/>
		</View>
	)

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
  },

  headerh:{
    marginTop: 40,
    height: 35,
    borderBottomWidth: 1,
    flexDirection: 'row',

  },

  textheader: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 15,
  },

  back :{
    width: 23,
    height: 23,
    marginLeft: 10,
  },

  listAnime: {
    height: 120,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
    flexDirection: 'row',
  },

  poster: {
    height: 120,
    width: 75,
  },

  poster2: {
    height: 115,
    width: 75,
  },

  deskripsi: {
    height: 120,
    flex: 1,
    marginLeft: 10,
  },

  judul :{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },

  totep: {
    fontSize: 13,
    fontWeight: '400',
    color: '#fff',
    marginTop: 5,
  },

  member: {
    height: 28,
    width: 28,
  },

  rating: {
    height: 25,
    width: 25,
  }
})
export default HasilSearch;