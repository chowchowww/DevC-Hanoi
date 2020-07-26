import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { TODOS } from '../utils/data.js';
import TodoItem from '../components/ToDoItem.js';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SingleTodoScreen from './SingleTodoScreen.js';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function AllScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='AllTODO'
        component={AllItem}
        options={{
          headerTitle: 'All TODO'
        }} />
      <Stack.Screen
        name='Single TODO'
        component={SingleTodoScreen}
      />
    </Stack.Navigator>
  )
}

function AllItem() {
  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState('');
  const navigation = useNavigation();

  const onToggleTodo = id => {
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);

    setTimeout(() => {
      navigation.navigate('Single TODO', {
        updatedTodo: todo
      });
    }, 1000);
  };

  const onDeleteTodo = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: 'Active',
      id: todoList.length + 1
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody('');
  };

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://images.unsplash.com/photo-1578852612716-854e527abf2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
      }}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}
      >
        <ScrollView style={styles.scrollView}>
            <View style={{ marginTop: 15}}>
              {todoList.map((todo, idx) => {
                return (
                  <TodoItem
                    idx={idx}
                    todo={todo}
                    key={todo.body}
                    onToggleTodo={onToggleTodo}
                    onDeleteTodo={onDeleteTodo}
                  />
                );
              })}
            <View style={styles.inputContainer}>
              <TextInput
                value={todoBody}
                style={styles.todoInput}
                onChangeText={text => setTodoBody(text)}
              />
              <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

AllScreen.options = {
  title: 'All Todos'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoInput: {
    width: '95%',
    minHeight: 30,
    color: 'white',
    borderWidth: 1,
    marginTop: '20%',
    marginBottom: '5%',
    borderColor: 'grey'
  },
  inputContainer: {
    flex: 1,
    width: '95%',
    marginTop: 10,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  scrollView: {
    flex: 1,
  },
});