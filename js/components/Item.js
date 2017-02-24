import React from 'react';
import Relay from 'react-relay';
import hobbyUpdateMutation from './hobbyUpdateMutation';

class Item extends React.Component {
    static contextTypes = {
      relay: Relay.PropTypes.Environment,
    }

    constructor( props, context ) {
      super( props, context )
      this.state = {
      }
    }

    _handle_OnChange = ( event ) => {
        //this.setState({count: this.state.count + 1});
        console.log(this.props.viewer.hobbies.edges.length);
        /*this.context.relay.commitUpdate(
            new hobbyAddMutation( {
              id: `${this.props.viewer.hobbies.edges.length + 1}`,
              title: `blah`, // ${this.state.count}`,
              Viewer: this.props.viewer
            } )
          )
        this.setState({count: this.props.viewer.hobbies.edges.length });
        */
     }

    render() {
      return (
        <div>
            <strong>Edit Mode</strong>
            Title: <input type="text" value={this.props.hobby.title} />
            <input type="button" value="Update" onClick={this._handle_OnChange} />
        </div>
      );
    }
  }

  export default Relay.createContainer(Item, {
    fragments: {
      hobby: () => Relay.QL`
        fragment on Hobby {
            id,
            title,
            ${hobbyUpdateMutation.getFragment('hobby')},
        },
      `,
    },
  });
