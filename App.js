import React,{useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1, H3,
  Button
} from 'native-base';
import styled from 'styled-components'  

import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar';

const itemArray = new Array(9).fill('empty')

const App = () => {
  const [isCross, setIsCross] = useState(fasle);
  const [winMessage, setwinMessage] = useState('');

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
          backgroundColor: "#000",
          textColor: "#FFF",
      })
    }
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross)
      
    } else {
      return Snackbar.show({
        text: "Postion is already filled",
        backgroundColor: "red",
        textColor: "#FFF"
        
      })
    }
  }

  const reloadGame = () => {
    setIsCross(false)
    setwinMessage('')
    itemArray.fill('empty', 0, 9);
  }
  const checkIsWinner=() => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setwinMessage('${itemArray[0]} won')
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== 'empty'
    ) {
      setwinMessage('${itemArray[3]} won')
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== 'empty'
    ) {
      setwinMessage('${itemArray[6]} won')
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== 'empty'
    ) {
      setwinMessage('${itemArray[0]} won')
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== 'empty'
    ) {
      setwinMessage('${itemArray[1]} won')
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== 'empty'
    ) {
      setwinMessage('${itemArray[2]} won')
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== 'empty'
    ) {
      setwinMessage('${itemArray[0]} won')
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== 'empty'
    ) {
      setwinMessage('${itemArray[2]} won')
    } 
  };
  return (
    <Container style={{backgroundColor: '#333945 ', padding: 5}}>
      <Header>
        <Body>
          <Title>Tic Tac Toe</Title>
        </Body>
      </Header>
      <Content>
        <View>
          {itemArray.map((item, index) => (
            <TouchableOpacity style={styles.box} key={index} onPress={() => changeItem(index)}>
              <Card style={styles.card}>
                <Icon name={'empty'} />
              </Card>
            </TouchableOpacity>
          ))}
        </View>
        {winMessage ? (
          <View>
            <H1 style={styles.message}>{winMessage}</H1>
            <Button
              onPress={reloadGame}
              primary
              block
              rounded
            >
              <Text>
                Reload Game    
              </Text>
            </Button>
          </View>
         
        ) : (
            <H3 style={styles.message}>{isCross ? 'Cross' : "Circle"} turns </H3>
        )}
      </Content>
    </Container>
  );
};



export default App;


const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    marginTop: 20,
  },
  box: {
    width: '33%',
    marginBottom: 6,
  },
  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: "#FFF",
    marginTop: 20,
    backgroundColor: "#4652B3",
    paddingVertical: 10,
    marginVertical: 10,
  }
})