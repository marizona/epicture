import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'
import Upload from './screens/Upload';
import User from "./User";


class BottomNavigator extends Component {
    render() {
        const {ShowUpload, setShowUpload}=this.props;
        return (
            <View style={{ 
                flexDirection: 'column',
            }}>
                
                <View style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    bottom: 25,
                    zIndex: 10,
                    flexDirection: 'row',
                }}>
                    <View style={{ marginRight: 40,}}>
                        <Icon
                            name='add'
                            type='material'
                            color='#1cb36c'
                            containerStyle={{ alignSelf: 'center' }}
                            reverse
                            size={28}
                            onPress={()=> setShowUpload(!ShowUpload)}
                        />
                    </View>
            {/* <View style={{marginTop: 5 }}>
                        <User />
                    </View>  */}
                </View> 
                <View style={{
                    position: 'absolute',
                    backgroundColor: 'lightgrey',
                    bottom: 0,
                    zIndex: 1,
                    width: '100%',
                    height: 60,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 15,
                    paddingVertical: 10
                }}>


                </View>
            </View>
        );
    }
}

export default BottomNavigator;
