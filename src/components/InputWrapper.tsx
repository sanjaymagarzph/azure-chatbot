import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

interface InputWrapperProps {
  questionHandler: Function;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
  },
  messageBox: {
    height: 40,
    width: 250,
  },
  sendBox: {
    backgroundColor: '#2d97fb',
    height: 40,
    width: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const InputWrapper: React.FC<InputWrapperProps> = ({
  questionHandler,
}) => {
  const [question, setQuestion] = useState<string>('');
  const onChangeHandler = () => {
    if (question.length > 0) {
      questionHandler(question);
      // After enter, set question to empty
      setQuestion('');
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity>
        <Entypo name='attachment' size={24} />
      </TouchableOpacity>
      <View style={styles.messageBox}>
        <TextInput
          placeholder='Type your message...'
          placeholderTextColor='gray'
          onChangeText={text => setQuestion(text)}
          value={question}
        />
      </View>
      <TouchableOpacity style={styles.sendBox} onPress={onChangeHandler}>
        <Feather name='send' size={24} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
