import React from "react";
import { View, TextInput, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) =>
{
	return (
		<View style={styles.background}>
			<Ionicons style={styles.icon} name='search' size={ 30 } />
			<TextInput
				style={ styles.input }
				placeholder="Search"
				value={ term }
				autoCapitalize='none'
				autoCorrect={ false }
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
			</View>
	);
};

const styles = StyleSheet.create( {
	background: {
		backgroundColor: '#F0EEEE',
		marginTop: 15,
		width: '80%',
		height: 50,
		borderRadius: 10,
		marginHorizontal: 15,
		flexDirection: 'row',
		paddingHorizontal: 15
	},
	input: {
		flex: 1,
		fontSize: 18
	},
	icon: {
		alignSelf: 'center',
		marginHorizontal: 10
	}
} );

export default SearchBar;