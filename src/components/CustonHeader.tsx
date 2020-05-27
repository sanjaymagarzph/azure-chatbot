import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

interface CustonHeaderProps {
  username: string;
  activityStatus: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 15,
  },
  label: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  activityStatus: {
    color: '#fff',
    fontSize: 14,
  },
});
export const CustonHeader: React.FC<CustonHeaderProps> = ({
  username,
  activityStatus,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome name='angle-left' size={24} color='#fff' />
      </TouchableOpacity>
      <View style={styles.label}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.activityStatus}>{activityStatus}</Text>
      </View>
      <TouchableOpacity>
        <Feather name='more-vertical' size={24} color='#fff' />
      </TouchableOpacity>
    </View>
  );
};
