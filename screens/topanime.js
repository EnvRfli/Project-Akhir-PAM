import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Dimensions} from 'react-native';
import axios from "axios";

const TopAnime = ({setTarget, setVisible}) => {

	const [Loading, setLoading] = useState(true)
	const [index, setIndex] = useState(1);
	const [resultList, setResultList] = useState([])

	const fetchTopAnime = async () => {
		try {
				const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime`);
				setIndex(1);
				return data;
		} catch (error) {
				setError(error);
		}
	};

	useEffect(
    () => {
			fetchTopAnime(). then(data => {
				setResultList(data.data)
				setLoading(false)
			})
		}, []
	)

	const width = Dimensions.get("screen").width/2-30

	return(
		<FlatList showsVerticalScrollIndicator={false} style={{marginBottom: 165}}
			data={resultList} numColumns={2} columnWrapperStyle={{justifyContent: 'space-between'}}
			renderItem={({item}) => {
				return(
					<TouchableOpacity key={item.mal_id}
                                  onPress={() => {
                                  setTarget(item)
                                  setVisible(true)
                                  }}>

						<View style={{flex : 1, height: 200, width, marginHorizontal: 15, marginBottom: 30}} >
							<Image source={{uri : item.images.jpg.large_image_url}}  style= {{height: '90%', width}} />
							<Text style={{fontSize: 15, color: '#fff', textAlign: 'center'}} numberOfLines={2}>{item.title}</Text>
						</View>

					</TouchableOpacity>
				)
			}}
			keyExtractor={item => item.mal_id}
		/>
	)
}

export default TopAnime;