import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { getAdvertisingInfo } from 'react-native-idfa-aaid';

export default function App() {
  const [result, setResult] = React.useState<{
    isAdTrackingLimited: boolean;
    id?: string;
  }>();

  React.useEffect(() => {
    getAdvertisingInfo().then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        isAdTrackingLimited: {result?.isAdTrackingLimited?.toString()}
      </Text>
      <Text>id: {result?.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
