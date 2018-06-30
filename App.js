import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet,Alert} from 'react-native';

import CheckBox from 'react-native-check-box'
import names from './names.json'


export default class BlinkApp extends Component {
  constructor(props) {
    super(props);

      this.state = {
      dataArray: []

    }
  }

  onClick(data){
    data.checked=!data.checked;
  }

  componentDidMount(){
    this.loadFile();
  }

  loadFile(){
    this.setState({
      dataArray:[
  
        {
          "name": "Atul",
          "checked": false
        },
        {
          "name": "Rohit",
          "checked": false
        },
      
        {
          "name": "Madhuri",
          "checked": false
        },{
          "name": "Madhuri",
          "checked": false
        },
        {
          "name": "Himanshu",
          "checked": false
        }
      ],
    });
  }

  submitData() {
    var selectedNames=[];
    for(var j=0; j<this.state.dataArray.length; j++){
        if((this.state.dataArray[j]).checked==true){
         selectedNames.push(this.state.dataArray[j].name)
        }
  
    }
    if(!selectedNames.length){
      Alert.alert(
        "No name selected. Please select at least one."
      )
    }
    else if(selectedNames.length==1){
      Alert.alert(
        selectedNames.toString() + " is selected."
      )
    }
    else{
      Alert.alert(
        selectedNames.toString() + " are selected."
      )
    }
  }

  renderBox(data){
    var leftText = data.name;
          return (
              <CheckBox
                  style={{flex: 1, padding: 10}}
                  onClick={()=>this.onClick(data)}
                  isChecked={data.checked}
                  leftText={leftText}
                  //leftTextStyle={styles.text}
              />);
  
  }

renderNames() {
  if(!this.state.dataArray || this.state.dataArray.length==0)return;

  var boxes=[];
  for(var i=0;i<this.state.dataArray.length;i++){
    boxes.push(
      <View key={i}>
        {this.renderBox(this.state.dataArray[i])}
      </View>
    )

  }
  return boxes;  
}
  render() {   

    return (

      <View>
        <ScrollView>
          {this.renderNames()}
        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={this.submitData.bind(this)}>
          <Text style={styles.buttonText}>Submit</Text>


        </TouchableOpacity>

      </View>);

      
  }

}

const styles=StyleSheet.create({
  div: {
    flex: 1,
  },
  text:{
    fontSize: 25
  },
  button:{
    width: 200,
    height: 45,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#330066',
    //justifyContent: 'center'
    marginLeft: 100
  },
  buttonText:{
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  }

})


