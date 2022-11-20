import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState( '' );
  const [ isLoading, setIsLoading ] = useState( '' );

  const searchApi = async searchTerm => {
    console.log('Hi there!');
    try
    {
      setIsLoading( 'Loading' );
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults( response.data.businesses );
      setIsLoading(null)
    } catch (err) {
      setErrorMessage( 'Something went wrong' );
      console.log(err)
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return (
    <View style={ styles.view }>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      <Text>We have found {results.length} results</Text>
      { isLoading && <Text>{ isLoading }</Text> }
      </View>
  );
};

const styles = StyleSheet.create( {
  view: {
    alignItems: 'center'
  }
});

export default SearchScreen;
