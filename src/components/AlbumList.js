import React, { Component } from 'react'; //we cant destruct React because it is being using all the time to convert html
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//Component está dentro da bbt react
class AlbumList extends Component {
	state = {albums: []};//only available for class components


	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({albums: response.data}));
			
	}

	renderAlbums(){
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} albumProp={album} />
			//temos que usar uma key diferente para cada elemento do array
		);
	}

	render (){//it has to exist within a class component (the only required method)
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}//classes do not require semicolumns


export default AlbumList;