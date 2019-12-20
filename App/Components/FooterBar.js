import React from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';
import {Share} from 'react-native';

class FooterBar extends React.Component {

    constructor(props) {
      super(props);
    }

    _onLogoutPressed = () => {
      this.props.navigation.navigate('MainScreen');
    };

    onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'Red Cross Mobile App - App to share details about blood donation. Please download from AppStore',
        });
  
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };

    render() {
        return (
          <Footer>
            <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical onPress={this.onShare}>
              <Icon name="share" />
              <Text>Share</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
            <Button vertical onPress={this._onLogoutPressed}>
              <Icon name="log-out" />
              <Text>Logout</Text>
            </Button>
            </FooterTab>
          </Footer>
        )
    }
}

export default FooterBar;