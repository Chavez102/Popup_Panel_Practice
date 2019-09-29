/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import Carousel from "react-native-carousel-control";
import React, { Fragment } from 'react';
import { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { Modal, TouchableHighlight, Alert } from 'react-native';

class App extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  render() {
    return (

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignitems: 'center',
        backgroundColor: 'red'
      }}>


        <View >

          {/*Main Page "Show Modal"*/}
          <View>
            <TouchableHighlight
              onPress={() => { this.setModalVisible(true); }}>
              <Text>Show Modal</Text>

            </TouchableHighlight>

          </View>

         

          {/* MODAL */}
          <Modal  
            animationType="slide"
             transparent={false}
             visible={this.state.modalVisible}
             onRequestClose={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>



            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
             }}>


              <View style={{ backgroundColor: 'Red' }}>

                {/* Carousel= POPUP PANEL SLIDE */}
                <Carousel >


                  {/* First Page in Slide */}
                  <View style=
                   {[
                     {backgroundColor:'red',
                    
                     
                    
                    },
                     styles.PanelPages
                   ]}>
                    <TouchableHighlight
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      <Text style={styles.PanelTitle}>Hide Modal</Text>
                    </TouchableHighlight>
                  </View> 
                  


                  {/* Second Page in Slide */}
                  <View style={[
                    {
                     backgroundColor: 'blue',
                    },
                    styles.PanelPages,
                  ]}>
                    <Text style=
                    {[
                      styles.PanelTitle
                    ]}>

                      Second
                    </Text>
                  
                  
                  </View>

                {/* Third Page in Slide */}
                <View style={[
                    {backgroundColor: 'green'},
                    styles.PanelPages,
                  ]}>
                    <Text style={styles.PanelTitle}>
                      Third
                    </Text>
                </View>



                {/* Fourth Page in Slide */}
                <View style=
                {[
                    {backgroundColor: 'yellow'},
                    styles.PanelPages,
                  ]}>
                    <Text style=
                    {[
                      styles.PanelTitle,
                      {color:'black'}
                    ]}>

                      Fourth 
                    </Text>
                </View>


                </Carousel>

              </View>

            </View>

          </Modal>

        </View>

      </View>

    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  PanelPages:{
    marginTop:35,
    marginBottom:35,
    flex:1,
    fontSize:35,
    alignItems: 'center',
  },
  //used for text 
  PanelTitle:{
    fontSize:35,
    color:'white',
  }
  
});

export default App;
