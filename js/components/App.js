import React from 'react';
import Relay from 'react-relay';
import HobbiesList from './units/Hobbies';
import Viewer_updateMutation from './Viewer_updateMutation';

class App extends React.Component {

  static contextTypes = {
    relay: Relay.PropTypes.Environment,
  }

  _handleUpdate = ( ) =>
  {
    this.context.relay.commitUpdate(
      new Viewer_updateMutation( {
        Viewer: this.props.Viewer,
        email: this.refs.email.value,
      } )
    );
  }
  render() {
    return (
        <div>
          <strong>Email: </strong> {this.props.Viewer.email}<br/>
        <input type="text" ref="email" />
          <button onClick={this._handleUpdate.bind(this)}>Update</button>
          <HobbiesList Viewer={this.props.Viewer} />
        </div>)
  }
}

export default Relay.createContainer(App, {
  fragments: {
    Viewer: () => Relay.QL`
      fragment on Viewer {
        id,
        email,
        ${Viewer_updateMutation.getFragment('Viewer')}
        ${HobbiesList.getFragment('Viewer')},
      }
    `,
  },
});
