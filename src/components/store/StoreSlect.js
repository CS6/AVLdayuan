import React, { Component } from 'react';
// import firebase from 'firebase';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import storeDB from "./data";
import GetTime from "./GetTime";
import StoreCard from "./StoreCard";
import 'antd/dist/antd.css';
import '../../Assts/font.css';

import { List, WhiteSpace, WingBlank } from 'antd-mobile';
import moment from 'moment';
import { Modal, Button } from 'antd';

import { TimePicker, DatePicker } from 'antd';
const format = 'HH:mm';

class StoreSlect extends Component {
  constructor(props) { //若要使用這個方法
    super(props) //必須先執行super(props)，若有用到props的話會找不到this.props，沒用到props也可以只寫super()
    this.state = {
      currentPage: 'one', //給預設值
      zoom: 11,
      min: "12:00",
      array: [
        { lat: 75.955413, lng: 60.337844 },
        { lat: 77.955413, lng: 55.337844 },
        { lat: 85.955413, lng: 50.337844 },
        { lat: 95.955413, lng: 45.337844 },
      ],
      completed: false,
      activeStoreList: [],
      today: 0,
      visible: false,
    }
    // this.app = firebase.initializeApp(firebaseConfig);
    // this.database = this.app.database();


  }
  static defaultProps = {
    lat: 59.95,
    lng: 30.33
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  onChange(that) {
    return (date, dateString) => {
      var days = new Date(dateString).getDay()
      var warray = ["Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",]

      console.log(date, dateString, warray[days]);
      var d = new Date()
      // if (    storeDB[0].Mon[0] < d.getHours().toString() + ":" + d.getMinutes().toString() && d.getHours().toString() + ":" + d.getMinutes().toString() < storeDB[0].Mon[1]    ){
      // }
      console.log('ddd', storeDB)
      let activeStore = storeDB.filter(index => {
        // console.log(index)
        // debugger


        /// WIP   "store": "丸壽司",
        // "Sun": "11:00-01:00", WIP要處理營業時間過夜的問題
        return index[0][0] < this.state.min && this.state.min < index[0][1]
      });
      // console.log(index)

      // this.setState({
      //   today: warray
      // })
      that.active(activeStore);
    }

  }
  onChangeMin(that) {
    return (value, dateString) => {

      console.log(value, dateString);
      // var d = new Date()
      // // if (    storeDB[0].Mon[0] < d.getHours().toString() + ":" + d.getMinutes().toString() && d.getHours().toString() + ":" + d.getMinutes().toString() < storeDB[0].Mon[1]    ){
      // // }
      // console.log('ddd', storeDB)
      // let activeStore = storeDB.filter(index => {
      //   // console.log(index)
      //   // debugger
      //   return index[0][0] < d.getHours().toString() + ":" + d.getMinutes().toString() && d.getHours().toString() + ":" + d.getMinutes().toString() < index[0][1]
      // });
      // // console.log(index)

      // // this.setState({
      // //   today: warray
      // // })
      that.upTime(dateString);
    }

  }
  componentDidMount() {
    this.onChange = this.onChange.bind(this);
    this.onChangeMin = this.onChangeMin.bind(this);

  }
  upTime(dateString) {
    this.setState({
      min: dateString
    }, () => console.log('setState min 完成', dateString));
  }
  active(activeStore) {
    this.setState({
      activeStoreList: activeStore
    }, () => console.log('setState完成', activeStore));
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
    // console.log('ddd', storeDB)
    // let activeStore = storeDB.filter(index => {
    //   // console.log(index)
    //   return index[0] < d.getHours().toString() + ":" + d.getMinutes().toString() && d.getHours().toString() + ":" + d.getMinutes().toString() < index[1]
    // });
    // // console.log(index)
    // this.setState({
    //   activeStoreList: activeStore
    // });
  }
  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{
        // height: '200px', width: '400px',
        border: '6px solid #f33',
        borderRadius: ' 10px',
        // position: 'relative',
        boxShadow: '-1px 1px 2px rgba(0,0,0,.2)',
        margin: '10px',
      }}>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Ma+Shan+Zheng&display=swap');
</style>
        <h1 style={{
          marginTop: '10px',
          // fontFamily: "'Ma Shan Zheng', cursive"
          fontFamily: "myFamily"
        }}>查查你想去的店家</h1>
        <div style={{
          // height: '200px', width: '100%',
          // border: '6px solid #fa3',
          // borderRadius: ' 10px',
          // // position: 'relative',
          // boxShadow: '-1px 1px 2px rgba(0,0,0,.2)',
          // width:"100%",
          display: 'Flex',
          flexDirection: "row",
          alignItems: 'center',
          justifyContent: "center"

          // alignContent: "space-around",
        }}>

          <TimePicker defaultValue={moment('12:08', format)} onChange={this.onChangeMin(this)} format={format} />
          <DatePicker onChange={this.onChange(this)} />
          {/* <Button activeStyle={{ backgroundColor: 'red' }} type={this.state.completed ? 'ghost' : 'primary'} size="small" inline>try</Button> */}
          <Button activeStyle={{ backgroundColor: 'red' }} type={this.state.completed ? 'ghost' : 'primary'} inline>try</Button>

          <Button type="primary" onClick={this.showModal}>
            Open Modal
        </Button>
        {/* <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}
        </div>
<StoreCard/>
        {this.state.activeStoreList.map((index) =>
        <StoreCard storeName={index.store}/>
          // <a> {index.store}</a>
    //       <List.Item
    //         style={{
    //           textDecoration: this.state.completed ? 'line-through' : 'none'
    //         }}
    //         extra={
    //           <Button activeStyle={{ backgroundColor: 'red' }}  type={this.state.completed ? 'ghost' : 'primary'} inline>看看</Button>
    //           // <Button type="primary" onClick={this.showModal}>Open Modal</Button>
    //         }
    //         multipleLine
    //       >
    //         {console.log("text", index.store)}
    //         {index.store}
    //         <h1 style={{
    //           marginTop: '10px',
    //           // fontFamily: "'Ma Shan Zheng', cursive"
    //           fontFamily: "myFamily"

    //         }}>{index.store}</h1>
    //         <List.Item.Brief >
    //           {index.store}
    //           ：提供預約服務，您也可以給予評價
    // </List.Item.Brief>

    //       </List.Item>
        )}

        {/* {this.props.array.map((index) =>
            <AnyReactComponent lat={index.lat} lng={index.lng} text={'Kreyser Avrora'} /> // eslint-disable-line react/no-array-index-key
          )} */}

      </div>
    );
  }
}

export default StoreSlect;