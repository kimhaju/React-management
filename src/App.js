import './App.css';
import React,{ Component } from 'react';
import Customer from './components/Customer';

const customers = [
  {
  'id':1,
  'image': 'https://placeimg.com/64/64/any/1',
  'name': '홍길동',
  'birthday': '9622222',
  'gender':'남성',
  'job': '대학생',
 },
 {
  'id':2,
  'image': 'https://placeimg.com/64/64/any/2',
  'name': '김첨지',
  'birthday': '8622222',
  'gender':'남성',
  'job': '건물주',
 },
 {
  'id':3,
  'image': 'https://placeimg.com/64/64/any/3',
  'name': '박서생',
  'birthday': '9122222',
  'gender':'남성',
  'job': '선생',
 },
]

class App extends Component {
  render() {
    return (
      <>
      {
        customers.map(c=>{
          return (
          <Customer 
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job = {c.job}
          />
          );
        })
      }
      
       </>
    );
  }
}

export default App;
