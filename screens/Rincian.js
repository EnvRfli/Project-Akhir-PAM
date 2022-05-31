import React from 'react'
import {Modal, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'

const ModalRincian = (props) => {

return(
	<Modal
	visible={props.Visible}>
		<ScrollView>
			<View style = {styles.container}>
				<View style={{height: 40, width: '100%', backgroundColor:'#6d1e66', marginTop: 10, flexDirection: 'row'}}>
					<TouchableOpacity onPress={() =>  props.setVisible(false)}>
						<Image style={{height: 30, width: 30, marginLeft: 15, marginTop: 6}} source={require('../assets/left.png')}/>
					</TouchableOpacity>	
					<Text style={{fontSize: 25, fontWeight: 'bold', marginLeft: 10, color: '#888888', marginTop: 3}}>Back</Text>
				</View>
					<View style={styles.box}>

							<View style={{height: 300,
													width: 200,
													borderWidth: 1,
													borderColor: 'grey',
													}}
													>
									<Image style={{height: 270, width: 170, marginTop: 15, marginLeft: 15 }} source={{uri : props.Target.image_url ? props.Target.image_url : props.Target.images.jpg.large_image_url}} />
							</View>
					
							<View style={{ height: 300, marginLeft:'auto'}}>
									<Text style={{marginTop: 15, textAlign: 'right', fontSize: 15, color: '#fff', fontWeight:'400'}}>Score</Text>
									<View style={{flexDirection:'row', height: 30, marginLeft: 'auto'}}>
											<Image style={{height: 24, width: 24, marginTop: 4}} source={require('../assets/star.png')} />
											<Text style={{color:'#fff', fontSize: 24, fontWeight:'bold', marginLeft: 5}}>{props.Target.score}</Text>
									</View>
									{/* <Text style={{fontSize: 16, color:'#EF9F9F', marginTop: 10, textAlign: 'right'}}>Rank</Text>
									<Text style={{fontSize: 17, fontWeight: 'bold', color: '#7858A6', textAlign:'right'}}>#5</Text>
									<Text style={{fontSize: 16, color:'#EF9F9F', marginTop: 10, textAlign: 'right'}}>Popularity</Text>
									<Text style={{fontSize: 17, fontWeight: 'bold', color: '#7858A6', textAlign:'right'}}>#223</Text> */}
									<Text style={{fontSize: 16, color:'#EF9F9F', marginTop: 10, textAlign: 'right'}}>Members</Text>
									<Text style={{fontSize: 17, fontWeight: '500', color: '#fff', textAlign:'right'}}>{props.Target.members}</Text>
									<Text style={{fontSize: 16, color:'#EF9F9F', marginTop: 10, textAlign: 'right'}}>Source</Text>
									{props.Target.source == null ? 
									<Text style={{fontSize: 17, fontWeight: '500', color: '#fff', textAlign:'right'}}>Unknown</Text>
									:
									<Text style={{fontSize: 17, fontWeight: '500', color: '#fff', textAlign:'right'}}>{props.Target.source}</Text>
									}
									<Text style={{fontSize: 16, color:'#EF9F9F', marginTop: 10, textAlign: 'right'}}>Episode</Text>
									{props.Target.episodes == 0 || props.Target.episodes == null ? 
									<Text style={{fontSize: 17, fontWeight: '500', color: '#fff', textAlign:'right'}}>Unknown</Text>
									: <Text style={{fontSize: 17, fontWeight: '500', color: '#fff', textAlign:'right'}}>{props.Target.episodes}</Text>
									}
									<Text style={{fontSize: 16, color:'#EF9F9F', marginTop: 10, textAlign: 'right'}}>R18+ ?</Text>
									{props.Target.r18 == true || props.Target.rated == 'Rx' ? 
									<Text style={{fontSize: 17, fontWeight: '500', color: '#fff', textAlign:'right'}}>Yes</Text>
									: <Text style={{fontSize: 17, fontWeight: '500', color: '#fff', textAlign:'right'}}>No</Text>
									}
							</View>
					</View>

					<Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center', color: '#fff'}}>{props.Target.title}</Text>
					<View style={{height: 20, backgroundColor: '#383838', width: '100%', marginTop: 10}}>
							<Text style={{ textAlign: 'center', color:'#EF9F9F'}}>More Info : https://myanimelist.net</Text>
					</View>
					
					<Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10, marginTop: 10, color: '#fff'}}>Synopsis</Text>
					<Text style={{margin: 10, fontSize: 15, color: '#fff'}}>{props.Target.synopsis}</Text>
					<TouchableOpacity onPress={() =>  props.setVisible(false)} >
							<View style={{height: 30, width: '100%', backgroundColor: '#541690', alignItems: 'center', marginBottom: 100}}>
									<Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Close</Text>
							</View>
					</TouchableOpacity>
			</View>
		</ScrollView>
	</Modal>
)

}

const styles = StyleSheet.create({
container:{
	flex: 1,
	backgroundColor: '#282C35'
},

box: {
	flexDirection: 'row',
	height: 300,
	marginTop: 20,
	marginRight: 30,
	marginLeft: 30,
	marginBottom: 10,

},

modals:{
	flex: 1,
	
}
})

export default ModalRincian;