import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  sender: {
    backgroundColor: '#2d97fb',
    maxWidth: Math.floor((width * 2) / 3),
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 1,
    marginBottom: 15,
    alignSelf: 'flex-end',
  },
  sentMessage: {
    color: '#fff',
    fontSize: 15,
  },
  receiver: {
    backgroundColor: '#f5f7f8',
    maxWidth: Math.floor((width * 2) / 3),
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 1,
    marginBottom: 15,
  },
  receivedMessage: {
    color: '#000',
    fontSize: 15,
  },
  receiverBox: {
    flexDirection: 'row',
  },
  userIcon: {
    alignSelf: 'flex-end',
    bottom: 12,
  },
});

interface DisplayQuestionProps {
  question: string;
}
interface DisplayAnswerProps {
  answer: string;
}

interface MessageWrapperProps {
  questions: string[];
  answers: string[];
}

export const DisplayQuestion: React.FC<DisplayQuestionProps> = ({
  question,
}) => (
  <View style={styles.sender}>
    <Text style={styles.sentMessage}>{question}</Text>
  </View>
);

export const DisplayAnswer: React.FC<DisplayAnswerProps> = ({ answer }) => (
  <View style={styles.receiverBox}>
    <EvilIcons name='user' size={30} style={styles.userIcon} />
    <View style={styles.receiver}>
      <Text style={styles.receivedMessage}>{answer}</Text>
    </View>
  </View>
);

export const MessageWrapper: React.FC<MessageWrapperProps> = ({
  questions,
  answers,
}) => {
  return (
    <KeyboardAvoidingView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {questions.map((question, index) => (
          <DisplayQuestion question={question} key={index} />
        ))}

        {answers.map((answer, index) => (
          <DisplayAnswer answer={answer} key={index} />
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
