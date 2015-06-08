/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


// Include base React components
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} = React;

// Include more React components
var Dummy = require('./dummy.ios');

// Include Meetup stuff
var gimme = require('gimme');
var foundation = require('react-native-foundation');


// Begin
var Groups = React.createClass({

  // set up state (changable data) before anything happens 
  getInitialState: function(){
    return {
      /*
      groups: []
      */
    };
  },

  // immediately after initial rendering
  componentDidMount: function(){
    /*
    var self = this;
    var shoppingList = [
      {"gimme": "groups"}
    ];
    gimme(shoppingList).then(function(data){
      self.setState({
        groups: data.groups
      });
    });
    */
  },

  // put things on the screen
  render: function() {
    var self = this;
    return (
      <View style={[foundation.stripe, foundation.bounds]}>
        <TouchableOpacity onPress={()=>{
          this.props.navigator.push({
            component: require('./map.ios'),
            name: "Hey it's a map!"
          });
        }}>
        <View style={foundation.button}>
          <Text style={foundation.buttonText}>Where am I?</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
});


// screen-specific styles 
var styles = StyleSheet.create({
  /*
  // example
  button: {
    backgroundColor: 'lightblue',
    flex: 1,
    padding: 16
  }
  */
});

module.exports = Groups;



/*
// cheat sheet
<View style={[foundation.stripe, foundation.bounds]}>
  <TouchableOpacity onPress={()=>{
    this.props.navigator.push({
      component: require('./map.ios'),
      name: "Hey it's a map!"
    });
  }}>
  <View style={foundation.button}>
    <Text style={foundation.buttonText}>Where am I?</Text>
  </View>
  </TouchableOpacity>
</View>
*/
