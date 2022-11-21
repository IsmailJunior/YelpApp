import React from "react";
import { Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import SearchDetail from "./SearchDetail";

const SearchList = ({title, results}) =>
{
	return (
		<ScrollView  vertical contentContainerStyle={styles.conatiner}>
			<Text style={ styles.title }>{ title }</Text>
			<Text style={ styles.text }>Results: { results.length }</Text>
			<FlatList horizontal
				data={ results }
				keyExtractor={ ( result ) => result.id }
				renderItem={ ( { item } ) =>
				{
					return (
						<SearchDetail result={ item} />
					)
				}}
			/>
		</ScrollView>
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
	conatiner: {
		alignItems: 'center'
	}
} );

export default SearchList;