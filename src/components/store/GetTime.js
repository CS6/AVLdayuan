import React, { Component } from 'react';

import 'antd/dist/antd.css';
import { Button, List, WhiteSpace, WingBlank, Flex } from 'antd-mobile';

import { TimePicker,DatePicker } from 'antd';
import moment from 'moment';
import Flatted from 'flatted';
const format = 'HH:mm';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;


class GetTime extends Component {
  constructor(props) { //若要使用這個方法
    super(props) //必須先執行super(props)，若有用到props的話會找不到this.props，沒用到props也可以只寫super()
    this.state = {
      currentPage: 'one', //給預設值
      zoom: 11,
      array: [
        { lat: 75.955413, lng: 60.337844 },
        { lat: 77.955413, lng: 55.337844 },
        { lat: 85.955413, lng: 50.337844 },
        { lat: 95.955413, lng: 45.337844 },
      ],
      completed:true,
      activeStoreList: [],

    }
    // this.app = firebase.initializeApp(firebaseConfig);
    // this.database = this.app.database();
  }
  static defaultProps = {
    lat: 59.95,
    lng: 30.33
  }


  componentDidMount() {
    //     db.collection("users").add({
    //       first: "Ada",
    //       last: "Lovelace",
    //       born: 1815
    //     })
    //     .then(function(docRef) {
    //       console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch(function(error) {
    //       console.error("Error adding document: ", error);
    //     });
    // var d = new Date()
    // // if (    storeDB[0].Mon[0] < d.getHours().toString() + ":" + d.getMinutes().toString() && d.getHours().toString() + ":" + d.getMinutes().toString() < storeDB[0].Mon[1]    ){
    // // }
    // let activeStore = storeDB.filter(index => index.Mon[0] < d.getHours().toString() + ":" + d.getMinutes().toString() && d.getHours().toString() + ":" + d.getMinutes().toString() < index.Mon[1]);

    // this.setState({
    //   activeStoreList: activeStore
    // });
  }
   onChange(date, dateString) {
    var days = new Date(dateString).getDay()
    var warray=[ "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",]
   
    console.log(date, dateString,warray[days]);
     // this.setState({
    //   activeStoreList: activeStore
    // });

  }
  
  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{
        // height: '200px', width: '400px',
        // border: '6px solid #fa3',
        // borderRadius: ' 10px',
        // // position: 'relative',
        // boxShadow: '-1px 1px 2px rgba(0,0,0,.2)',
        display:Flex,
        flexDirection:"row",
      }}>
         <DatePicker onChange={this.onChange} />
<TimePicker defaultValue={moment('12:08', format)} format={format} />
<Button  activeStyle={{ backgroundColor: 'red' }} type={this.state.completed ? 'ghost' : 'primary'} size="small" inline>small</Button>

      </div>
    );
  }
}

export default GetTime;