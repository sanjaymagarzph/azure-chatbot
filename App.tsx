import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import { Gradient } from './src/components/Gradient';
import { CustonHeader } from './src/components/CustonHeader';
import { MessageWrapper } from './src/components/MessageWrapper';
import { InputWrapper } from './src/components/InputWrapper';
import { DirectLine } from 'botframework-directlinejs';

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  messageWrapper: {
    marginTop: 35,
    backgroundColor: '#fff',
    height: height * 0.7,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default function App() {
  const [questions, setQuestion] = useState<string[]>(['What can I ask?']);
  const [answers, setAnswer] = useState<string[]>([]);

  const directline = new DirectLine({
    secret: '<Secret Key>',
  });

  const Question = (question: string) => {
    /* Post activities to the bot */
    directline
      .postActivity({
        from: { id: 'user', name: 'User' },
        type: 'message',
        text: question,
      })
      .subscribe(
        () => console.log('Asked question:: ' + question),
        error => console.log('Error posting activity', error)
      );
  };

  /* Listen to activities sent from the bot */
  directline.activity$
    .filter(activity => activity.type === 'message')
    .subscribe(activity => {
      const response: string = activity?.text || "Sorry, I didn't get you";
      setAnswer(() => [...answers, response]);
    });

  const questionHandler = (question: string) => {
    Question(question);
    setQuestion(() => [...questions, question]);
  };

  console.log('Answers:::' + JSON.stringify(answers));

  return (
    <Gradient>
      <StatusBar barStyle='light-content' />
      <CustonHeader username='zConnect AI' activityStatus='Online' />
      <View style={styles.messageWrapper}>
        <MessageWrapper {...{ questions, answers }} />
      </View>
      <View style={styles.inputWrapper}>
        <InputWrapper questionHandler={questionHandler} />
      </View>
    </Gradient>
  );
}
