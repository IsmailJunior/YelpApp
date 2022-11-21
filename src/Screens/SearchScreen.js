import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';
import SearchList from '../components/SearchList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [ searchApi, results, errorMessage, isLoading ] = useSearch();
  const filterResultsByPrice = (price) =>
  {
    return results.filter( result =>
    {
      return result.price === price;
    } );
  }
  return (
    <View style={ styles.view }>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      <Text style={styles.text}>We have found {results.length} results</Text>
      { isLoading && <Text>{ isLoading }</Text> }
      <SearchList results={filterResultsByPrice('$')} title='Cost Effective'/>
      <SearchList results={ filterResultsByPrice( '$$' ) } title='Bit Pricer'/>
      <SearchList results={ filterResultsByPrice( '$$$' ) } title='Big Spender'/>
      </View>
  );
};

const styles = StyleSheet.create( {
  view: {
    alignItems: 'center'
  },
  text: {
    margin: 15
  }
});

export default SearchScreen;
