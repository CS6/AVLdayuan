import React, { Component } from 'react';

import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
// import firebase from 'firebase';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
import '../../Assts/font.css';

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../config';
// WE {El: "117690364299873802111", Zi: {…}, w3: PG, googleId: "117690364299873802111", tokenObj: {…}, …}
// El: "117690364299873802111"
// Zi: null
// w3: PG {Eea: "117690364299873802111", ig: "空白", ofa: "白", wea: "空", Paa: "https://lh6.googleusercontent.com/-2vKR0Jb1QbE/AAA…CHi3rcRrgusHXGu25yVI7mw6RdhFvDYtA/s96-c/photo.jpg", …}
// googleId: "117690364299873802111"
// tokenObj: {token_type: "Bearer", login_hint: "AJDLj6ITXDLef3cc9CMlqfVPBF0tD1nC6am2LMSvmG0vilhSmx…_pWn3qcLlZrfB9lB0zzcpbphoFa4TUFfGwf_CCc7B_1vwBnZQ", expires_in: 3600, id_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU3YjE5MjhmMmY2MzMyOW…uDRiPI2R1fEECSbhvEMHLX_NiChlpjQfNA6cKShGVLVRq3eCg", session_state: {…}, …}
// tokenId: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU3YjE5MjhmMmY2MzMyOWYyZTkyZjRmMjc4Zjk0ZWUxMDM4YzkyM2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMzEwNTcwMjg4OTU2LXB0YTlibWdycnEzajI0ZXQ3c2hydWdicjloNzZhYTZtLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMzEwNTcwMjg4OTU2LXB0YTlibWdycnEzajI0ZXQ3c2hydWdicjloNzZhYTZtLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE3NjkwMzY0Mjk5ODczODAyMTExIiwiZW1haWwiOiJzZHV1bTgyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoicWswaHpQWkZJM2VPZ1gxZDBxNjktQSIsIm5hbWUiOiLnqbrnmb0iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy0ydktSMEpiMVFiRS9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JjUnJndXNIWEd1MjV5Vkk3bXc2UmRoRnZEWXRBL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiLnmb0iLCJmYW1pbHlfbmFtZSI6IuepuiIsImxvY2FsZSI6InpoLVRXIiwiaWF0IjoxNTc2OTk2MDc1LCJleHAiOjE1NzY5OTk2NzUsImp0aSI6ImE5ZDFiNGQ4ZTg4NDIzZTE1ODZiNjA1YmFmMmQ1ZmZiNzZlMTYyMjYifQ.ry6jnSEyf_790DUimlIDJ7x5LG14eeM_50Cr_otMSH8KJxQ-6DhGSaUcXQA2DIrbncjGfApbiaia3dmDU0t3eT6Kl1h3EaGsqa0gaAy48MfOp1RA_HJ9dv1SGtqbJk6SwfS2FqgUJJfLpGpYbIlSPy9rFPVV-ULl7_42Jw1c-gj58p7gKdmvsL66JGqc43kP4Q4m7dsIK99W51qVTAXpOeBox8EdnjwgI43Dyv3Huuc_FgxXQozt6V5_9u8EG0ZN-G565R6Iye0jv1pEM_wgufIKOzaWiRuZ5txDduDRiPI2R1fEECSbhvEMHLX_NiChlpjQfNA6cKShGVLVRq3eCg"
// accessToken: undefined
// profileObj: {googleId: "117690364299873802111", imageUrl: "https://lh6.googleusercontent.com/-2vKR0Jb1QbE/AAA…CHi3rcRrgusHXGu25yVI7mw6RdhFvDYtA/s96-c/photo.jpg", email: "sduum82@gmail.com", name: "空白", givenName: "白", …}
// __proto__: Object

// const path = '/Test'
// this.database.ref(path).once("value", e => {
//   console.log(e.val())
// });
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

class Login extends Component {
  constructor(props) { //若要使用這個方法
    super(props) //必須先執行super(props)，若有用到props的話會找不到this.props，沒用到props也可以只寫super()
    this.state = {
      currentPage: 'one', //給預設值
      zoom: 11,
      userName: "工程師",
      isLogin: false,
      uid: "",
    }
    // this.app = firebase.initializeApp(firebaseConfig);
    // this.database = this.app.database();
  }
  static defaultProps = {
    lat: 59.95,
    lng: 30.33
  }

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.googleId);
    console.log(response.w3.ig);
    this.setState({
      userName: response.w3.ig,
      isLogin: true,
      uid: response.googleId,
    });
    localStorage.setItem("isLogin", "true")
  }
  componentDidMount() {
    db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
  render() {
    if (this.state.isLogin == true) {
      return (
        // Important! Always set the container height explicitly
        <div style={{
          display: "flex",
          // flexDirection: "row",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center"
        }}>

          <GoogleLogout
            clientId="310570288956-pta9bmgrrq3j24et7shrugbr9h76aa6m.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={this.responseGoogle} />
<div style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center"
        }}>

          <h1 style={{
            marginTop: '10px',
            fontFamily: "myFamily",
          }}>{this.state.userName} 你想</h1><h1 style={{
            marginTop: '10px',
            fontFamily: "myFamily",
            fontSize: 70
          }}>吃 什 麼 ？</h1>
        </div>

        </div>

      );
    } else {
      return (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center"
        }}>


          <GoogleLogin
            clientId="310570288956-pta9bmgrrq3j24et7shrugbr9h76aa6m.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <h1 style={{
            marginTop: '10px',
            fontFamily: "myFamily",
            fontSize: 70
          }}>吃 什 麼 ？</h1>
        </div>

      );
    }

  }
}

export default Login;