import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      { isLoading && <Text>{ isLoading }</Text> }
      <ScrollView>
      <SearchList  results={filterResultsByPrice('$')} title='Cost Effective'/>
      <SearchList  results={ filterResultsByPrice( '$$' ) } title='Bit Pricer'/>
      <SearchList  results={ filterResultsByPrice( '$$$' ) } title='Big Spender' />
        </ScrollView>
      </>
  );
};

const styles = StyleSheet.create( {
  view: {
    alignItems: 'center',
    borderWidth: 1,
    flex: 1
  },
  text: {
    margin: 5
  }
});

export default SearchScreen;
