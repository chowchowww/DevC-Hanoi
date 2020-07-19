import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import Card from './components/Card';

const CHOICES = [
  {
    name: 'rock',
    uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
  },
  {
    name: 'paper',
    uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
  },
  {
    name: 'scissors',
    uri:
      'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
  }
];

export default function App() {
  const [gamePrompt, setGamePrompt] = useState('Choose your wapon!');
  const [userChoice, setUserChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});

  const getResultColor = () => gamePrompt === 'Victory!' ? 'green' : gamePrompt === 'Defeat!' ? 'red' : null;

  const onPress = playerChoice => {
    const getRoundOutCome = userChoice => {
      const randomComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];
      const computerChoice = randomComputerChoice().name;
      console.log(computerChoice);
      let result;
      if (userChoice === 'rock') {
        result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
      }
      if (userChoice === 'paper') {
        result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
      }
      if (userChoice === 'scissors') {
        result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
      }
      if (userChoice === computerChoice) result = 'Tie game!';
      return [result, computerChoice];
    }

    const [result, compChoice] = getRoundOutCome(playerChoice);
    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);

    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, color: getResultColor() }}>{gamePrompt}</Text>
      <View style={styles.choicesContainer}>
          <Card player='Player' choice={userChoice}/>
          <Text style={{ color: '#250902'}}>vs</Text>
          <Card player='Computer' choice={computerChoice}/>
      </View>
      <View style={styles.buttonsContainer}>
        {
          CHOICES.map(choice => <Button key={choice.name} name={choice.name} onPress={onPress} />)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ebee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {height: 5, width: 5},
  },
});
