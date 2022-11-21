import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SearchDetail = ({result}) =>
{
	return (
		<View style={styles.view}>
			<Image style={styles.image} source={{uri: result.image_url}} />
			<Text style={ styles.name } >{ result.name }</Text>
			<Text>{ result.rating } Stars, {result.review_count} Reviews</Text>
		</View>
	)
};

const styles = StyleSheet.create( {
	image: {
		width: 250,
		height: 120
	},
	name: {
		fontWeight: 'bold',
	},
	view: {
		marginLeft: 10,
		padding: 5
	}
} );

export default SearchDetail;