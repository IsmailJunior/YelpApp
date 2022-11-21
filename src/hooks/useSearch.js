import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () =>
{
	const [ results, setResults ] = useState( [] );
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
      console.log(response.data.businesses)
      setIsLoading(null)
    } catch (err) {
      setErrorMessage( 'Something went wrong' );
      console.log(err)
    }
  };

  useEffect(() => {
    searchApi('mac');
  }, [] );
	
	return [searchApi, results, errorMessage, isLoading]
}