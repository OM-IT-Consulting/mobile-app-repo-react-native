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

    _onContactUsPressed = () => {
      this.props.navigation.navigate('ContactUsScreen');
    };

    _onNotificationPressed = () => {
      this.props.navigation.navigate('DonorNotificationScreen');
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
            <FooterTab style={{backgroundColor: 'red'}}>
            <Button style={{backgroundColor: 'red'}} badge vertical onPress={this._onNotificationPressed}>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button style={{backgroundColor: 'red'}} vertical onPress={this.onShare}>
              <Icon name="share" />
              <Text>Share</Text>
            </Button>
            <Button style={{backgroundColor: 'red'}} vertical onPress={this._onContactUsPressed}>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
            <Button style={{backgroundColor: 'red'}} vertical onPress={this._onLogoutPressed}>
              <Icon name="log-out" />
              <Text>Logout</Text>
            </Button>
            </FooterTab>
          </Footer>
        )
    }
}

export default FooterBar;