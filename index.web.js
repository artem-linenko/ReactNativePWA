import React, { Component } from 'react';
import axios from 'axios';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  View
} from 'react-native';

class ReactNativeWeb extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }

  componentDidMount() {
    const self = this;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    axios.get('/contacts', { headers: myHeaders })
      .then(function(response) {
        self.setState({ contacts: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return <FriendsList contacts={this.state.contacts} />;
  }
}


export class FriendsList extends Component {
  render() {
    return (
      <View>
        {this.props.contacts.map(friend =>
          <Friend
            key={friend.id}
            avatarUrl={friend.avatarUrl}
            firstName={friend.firstName}
            lastName={friend.lastName} />
        )}
      </View>
    );
  }
}

export class Friend extends Component {
  render() {
    const { firstName, lastName, avatarUrl } = this.props;

    return (
      <View style={styles.contact}>
        <Image style={styles.avatar} source={{ uri: avatarUrl }} />
        <Text style={styles.name}>{firstName} {lastName}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 18,
    color: '#000',
  }
});

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') });