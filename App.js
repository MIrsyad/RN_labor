import {useQuery} from '@apollo/client';
import {getOperationAST} from 'graphql';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {GraphProvider} from './graphql/apollo';
import {GET_ARTICLES_BY_CATEGORIES} from './graphql/query/articlesbycategory';

const id = 1;
function App() {
  const {loading, data, error} = useQuery(GET_ARTICLES_BY_CATEGORIES, {
    variables: {id : '1'},
  });

  useEffect(() => {
    console.log({data, error});
  }, [data, error]);

  return (
    <View>
      <Text>Halo</Text>
    </View>
  );
}

export default MasterApp = () => {
  return (
    <GraphProvider>
      <App />
    </GraphProvider>
  );
};
