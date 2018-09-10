//Import a library to help create a component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a componant
//Components can only return one single tag, so we have to wrap
//our header and albumlist with the view tag and return it
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'}/>
		<AlbumList />
	</View>
);

// Render ir to the device
AppRegistry.registerComponent('albums', () => App);