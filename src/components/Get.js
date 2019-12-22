_onRefresh = () => {
        this.setState({ refreshing: true });
        this.JSON_Post()
        // this.setState({refreshing: false});
      }
      JSON_Post = () => {
        // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
        // let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/getAnnouncement';
        // let url = 'http://106.104.114.80:2375/images/json';
        let url = 'http://13.78.29.239:2375/images/json';
        fetch(url).then((response) => {
          return response.json();
        }).then((jsonData) => {
          // console.warn(jsonData);
          // console.warn(jsonData.excutionResult);
          //  info_data = jsonData;
          // this.JSON_body();
          console.warn('OK:');
    
          if (jsonData[0].Containers == "-1") {
            console.warn(jsonData[0].RepoTags);
            // console.warn(this.state.announcement);
            Alert.alert("更新成功");
            this.setState({ refreshing: false, isLoading: false, announcement: jsonData });
            console.warn(JSON.stringify(this.state.announcement));
          }
          else {
            Alert.alert("更新失敗", "請檢查網路");
            this.setState({ refreshing: false });
            // this.forceUpdate();
          }
        }).catch((err) => {
          console.warn('錯誤:', err);
          Alert.alert("指派失敗", "請檢查網路");
          this.setState({ refreshing: false });
          // this.forceUpdate();
        })
      }