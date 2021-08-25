// video player using react-native-video package

import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Video from 'react-native-video';

class Player extends Component {
  static PropTypes = {
    video: PropTypes.string.isRequired,
  };
  render() {
    console.log('video', this.props.video);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => this.setState({ paused: !this.state.paused })}
        >
          <Video 
              source={{uri: "https://player.vimeo.com/external/346442991.hd.mp4?s=22c7c0053ee62c32ea3f6d36e1fe0c86a659ded6&profile_id=175"}}   
              ref={(ref) => {
                  this.player = ref
              }}                                      
              onBuffer={this.onBuffer}              
              onError={this.videoError}              
              style={styles.backgroundVideo} 
              muted = {false}
              resizeMode = "contain"
              repeat = {true}
              fullscreen = {false}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Player;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
});
