import React from "react";
import { Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from "react-navigation";
import SearchDetail from "./SearchDetail";

const SearchList = ({title, results, navigation}) =>
{
	if ( !results.length )
	{
		return null;
	}
	return (
		<ScrollView scrollEnabled={ false } contentContainerStyle={ styles.container }>
			<Text style={ styles.title }>{ title }</Text>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={ results }
				keyExtractor={ ( result ) => result.id }
				renderItem={ ( { item } ) =>
				{
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
							<SearchDetail result={ item } />
						</TouchableOpacity>
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
		marginLeft: 10,
	marginBottom: 5
	},
	text: {
		color: 'gray'
	},
	container: {
		marginBottom: 5
	}
} );

export default withNavigation(SearchList);