import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'

class BottomNavigator extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#f8f4f4'

            }}>
                <View style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: '#f8f4f4',
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    bottom: 25,
                    zIndex: 10
                }}>
                    <Icon
                        name='add'
                        type='material'
                        color='#51a0d5'
                        containerStyle={{ alignSelf: 'center' }}
                        reverse
                        size={28}
                        onPress={() => { }}
                    />
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