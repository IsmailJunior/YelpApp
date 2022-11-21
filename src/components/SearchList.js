import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const SearchList = ({title, results}) =>
{
	return (
		<View style={styles.view}>
			<Text style={ styles.title }>{ title }</Text>
			<Text style={styles.text}>Results: {results.length}</Text>
		</View>
	);
};

const styles = StyleSheet.create( {
	  title: {
    fontSize: 18,
		fontWeight: 'bold',
	margin: 10
	},
	text: {
		color: 'gray'
	},
	view: {
		alignItems: 'center'
	}
} );

export default SearchList;