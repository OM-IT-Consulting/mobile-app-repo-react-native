import React from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';

class FooterBar extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
          <Footer>
            <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="share" />
              <Text>Share</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
            <Button vertical>
              <Icon name="log-out" />
              <Text>Logout</Text>
            </Button>
            </FooterTab>
          </Footer>
        )
    }
}

export default FooterBar;