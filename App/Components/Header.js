import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from 'App/Theme/Colors'

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: Colors.primary,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

export default memo(Header);
