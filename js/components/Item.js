import React from 'react';
import Relay from 'react-relay';
import hobbyUpdateMutation from './mutations/hobbyUpdateMutation';
import hobbyDeleteMutation from './mutations/hobbyDeleteMutation';

class Item extends React.Component {
    static contextTypes = {
      relay: Relay.PropTypes.Environment,
    }

    constructor( props, context ) {
      super( props, context )
      this.state = {
        title: this.props.hobby.title
      }
    }

    _handle_OnChange = ( evt ) => {
        this.context.relay.commitUpdate(
            new hobbyUpdateMutation( {
              hobby: this.props.hobby,
              title: this.refs.title.value,
            } )
          )
     }
     _handle_DeleteChange = ( evt ) => {
         this.context.relay.commitUpdate(
             new hobbyDeleteMutation( {
               hobby: this.props.hobby,
               viewer: this.props.viewer
             } )
           )
      }

    render() {
      return (
        <div style={{marginBottom: 10}}>
            <strong>Edit Mode</strong><br/>
            Title: <input type="text" ref="title" defaultValue={this.state.title} />
          <input type="button" value="Update" onClick={this._handle_OnChange.bind(this)} />
            <input type="button" value="Delete" onClick={this._handle_DeleteChange.bind(this)} />
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
            ${hobbyDeleteMutation.getFragment('hobby')},
        },
      `,
      viewer: () => Relay.QL`
        fragment on User {
            ${hobbyDeleteMutation.getFragment('viewer')},
          },
      `,
    },
  });
