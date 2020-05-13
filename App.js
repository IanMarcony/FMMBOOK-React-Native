import React, { Component } from "react";

import { View, Text, Image, Button } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "https://sujeitoprogramador.com/steve.png",
      nome: "Steve Jobs",
      show: true,
    };

    this.changePhoto = this.changePhoto.bind(this);
  }

  changePhoto() {
    if (this.state.show == true) {
      this.setState({
        img:
          "https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",
        nome: "Flamengo",
        show: false,
      });
    } else {
      this.setState({
        img: "https://sujeitoprogramador.com/steve.png",
        nome: "Steve Jobs",
        show: true,
      });
    }
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <View
          style={{
            height: 65,
            backgroundColor: "#222",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("./assets/FMMBOOK.png")}
            style={{
              marginTop: 10,
              width: 100,
              height: 40,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: this.state.img }}
            style={{ width: 300, height: 300 }}
          />
          <Text style={{ textTransform: "uppercase" }}>{this.state.nome}</Text>
          <Button title="Change" onPress={() => this.changePhoto()} />
        </View>
        <View style={{ height: 65, backgroundColor: "#222" }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "#01f324",
              marginTop: 10,
            }}
          >
            MORE OPTIONS
          </Text>
        </View>
      </View>
    );
  }
}

export default App;
