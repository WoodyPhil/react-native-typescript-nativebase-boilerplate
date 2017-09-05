import * as React from "react";
import * as Expo from "expo";
import { Container, Content, Text, StyleProvider } from "native-base";
import getTheme from "../native-base-theme/components/index";
import material from "../native-base-theme/variables/material";

interface Props {
}

interface State {
}

class App extends React.Component<Props, State> {
  public render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <Content>
            <Text>
              Hello World!
            </Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }

  public async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }
}

export default App;
