import React, { Component } from 'react';
// import firebase from 'firebase';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import storeDB from "./data";
import 'antd/dist/antd.css';

import { Table, Divider, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


class StoreTab extends Component {
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
    var d = new Date()
    // if (    storeDB[0].Mon[0] < d.getHours().toString() + ":" + d.getMinutes().toString() && d.getHours().toString() + ":" + d.getMinutes().toString() < storeDB[0].Mon[1]    ){
    // }
    let activeStore = storeDB.filter(index => index.Mon[0] < d.getHours().toString() + ":" + d.getMinutes().toString() && d.getHours().toString() + ":" + d.getMinutes().toString() < index.Mon[1]);

    this.setState({
      activeStoreList: activeStore
    });
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
      }}>
        <a>Invite {storeDB[0].store}</a>
        {this.state.activeStoreList.map((index) =>
          <a>Invite {index.store}</a>
          )}
        <Table columns={columns} dataSource={data} />
        {/* {this.props.array.map((index) =>
            <AnyReactComponent lat={index.lat} lng={index.lng} text={'Kreyser Avrora'} /> // eslint-disable-line react/no-array-index-key
          )} */}
      </div>
    );
  }
}

export default StoreTab;