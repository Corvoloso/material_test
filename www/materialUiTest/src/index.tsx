import React, {useCallback} from 'react';
import {View} from 'react-native';

import {Button, ActivityIndicator} from 'react-native-paper';

const App: React.FC = () => {
  const handleOnPress = useCallback(() => {
    console.log('ping');
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Button
        style={{backgroundColor: '#cef710'}}
        color="#f0f0f0"
        onPress={handleOnPress}>
        Call API
      </Button> */}
      <ActivityIndicator color="#cef710" size="large" />;
    </View>
  );
};

export default App;
