import React, { Children } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ViewStyle } from 'react-native';

interface GradientProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const colors: string[] = ['#2A98FF', '#5563D4'];

export const Gradient: React.FC<GradientProps> = ({ children, style }) => {
  const styles = style || { flex: 1 };
  return (
    <LinearGradient
      colors={colors}
      style={styles}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      {children}
    </LinearGradient>
  );
};
