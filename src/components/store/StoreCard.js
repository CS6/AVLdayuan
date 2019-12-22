import React, { Component } from 'react';
// import firebase from 'firebase';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import 'antd/dist/antd.css';
import '../../Assts/font.css';
import MiniMap from "../Map/MiniMap"
import { List, WhiteSpace, WingBlank } from 'antd-mobile';
import { Modal, Button } from 'antd';


class StoreCard extends Component {
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
      ArrrToLcal: "110台北市信義區莊敬路239巷12號",
      lat: 59.95,
      lng: 30.33,
      completed: false,
      activeStoreList: [],
      today: 0,
      visible: false,
    }
  }
  static defaultProps = {
    storeName: "吃 什 麼 ？ 記得別點太多，流量要錢的",
    address: "110台北市信義區莊敬路239巷12號",
    phone: "02 8786 0126"

  }
  componentDidMount() {
    this.Get_AddrToLc();
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
  Get_AddrToLc = (store) => {
    // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
    console.warn("addr");


    fetch(url).then((response) => {
      return response.json();
    }).then((jsonData) => {
      if (jsonData.status == "OK") {
        for (var i = 0; i < jsonData.results.length; i++) {
          console.log(jsonData.results[i].formatted_address);
          console.log(jsonData.results[i].geometry.location.lat, jsonData.results[i].geometry.location.lng);
          this.setState({ ArrrToLcal: jsonData.results[i].formatted_address, lng: jsonData.results[i].geometry.location.lng, lat: jsonData.results[i].geometry.location.lat });
        }
      }
      else {
        console.log("更新失敗", "請檢查網路");
        // this.setState({ refreshing: false });
      }
    }).catch((err) => {
      console.log('錯誤:', err);
      console.log("指派失敗", "請檢查網路");
      // this.setState({ refreshing: false });
    })
  }
  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{
        // // height: '200px', width: '400px',
        // border: '6px solid #f33',
        // borderRadius: ' 10px',
        // // position: 'relative',
        // boxShadow: '-1px 1px 2px rgba(0,0,0,.2)',
        // margin: '10px',
      }}>

        <List.Item
          style={{
            textDecoration: this.state.completed ? 'line-through' : 'none'
          }}
          extra={
            <Button activeStyle={{ backgroundColor: 'red' }} onClick={this.showModal} type={this.state.completed ? 'ghost' : 'primary'} inline>看看</Button>} multipleLine>
          {console.log("text", this.props.storeName)}
          {/* {this.props.storeName} */}
          <h1 style={{
            marginTop: '10px',
            fontFamily: "myFamily"

          }}>{this.props.storeName}</h1>

          <div style={{ marginTop: '5px', marginBottom: "-10px", display: "flex", flexDirection: "row" }}>
            <h6> {this.props.phone}</h6>
            &emsp;
          <h6 >{this.state.ArrrToLcal}</h6>

          </div>


          <List.Item.Brief >
            {this.props.storeName}
            ：提供預約服務，您也可以給予評價
    </List.Item.Brief>
          <Modal
            title={this.props.storeName}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            {/* <MiniMap text="aaa" lat={24.33} lng={120.95}  /> */}
            <MiniMap text="aaa" lat={this.state.lat} lng={this.state.lng} text={this.props.storeName} />

          </Modal>
        </List.Item>



      </div>
    );
  }
}

export default StoreCard;