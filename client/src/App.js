import './App.css';
import React,{ Component } from 'react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableRow  from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import  TableHead  from '@material-ui/core/TableHead';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
    
})

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
    const { classes } =this.props;
    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호 </TableCell>
            <TableCell>이미지 </TableCell>
            <TableCell>이름 </TableCell>
            <TableCell>생일 </TableCell>
            <TableCell>성별 </TableCell>
            <TableCell>직업 </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
       </TableBody>
      </Table>
       </Paper>
    );
  }
}

export default withStyles(styles)(App);
