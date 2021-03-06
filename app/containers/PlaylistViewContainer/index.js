import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as QueueActions from '../../actions/queue';
import * as PlayerActions from '../../actions/player';
import * as ToastActions from '../../actions/toasts';

import PlaylistView from '../../components/PlaylistView';

const PlaylistViewContainer = props => {
  return (
    <PlaylistView
      playlist={props.playlists.playlists[props.match.params.playlistId]}
      musicSources={props.musicSources}
      addTracks={props.actions.addPlaylistTracksToQueue}
      selectSong={props.actions.selectSong}
      startPlayback={props.actions.startPlayback}
      notify={props.actions.notify}
      clearQueue={props.actions.clearQueue}
      addToQueue={props.actions.addToQueue}
    />
  );
};

function mapStateToProps (state) {
  return {
    playlists: state.playlists,
    musicSources: state.plugin.plugins.musicSources
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, QueueActions, PlayerActions, ToastActions), dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistViewContainer));
