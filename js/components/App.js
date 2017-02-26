import React from 'react';
import Relay from 'react-relay';
import hobbyAddMutation from './mutations/hobbyAddMutation';
import Item from './Item';

class App extends React.Component {

    static contextTypes = {
      relay: Relay.PropTypes.Environment,
    }

    constructor( props, context ) {
      super( props, context )
      this.state = {
        count: 0,
      }
    }

_handle_OnChange = ( event ) => {
      this.context.relay.commitUpdate(
        new hobbyAddMutation( {
          title: this.refs.title.value,
          viewer: this.props.viewer
        } )
      )
    //this.setState({count: this.props.viewer.hobbies.edges.length });
 }
  render() {
    return (
      <div>
        <h1>Hobbies list (Total: {this.state.count})</h1>
        <ul>
          {this.props.viewer.hobbies.edges.map((edge, i) =>
            <li key={i}>{edge.node.title} (ID: {i}): <br/>
              <Item
                  hobby={edge.node}
                  viewer={this.props.viewer} />
            </li>
          )}
        </ul>
        <fieldset>
          <legend>Form</legend>
          Title: <input type="text" ref="title" /><br/>
          <button onClick={this._handle_OnChange.bind(this)}>Add New</button>
        </fieldset>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        hobbies(first: 100) {
          edges {
            node {
              id,
              title,
              ${Item.getFragment('hobby')},
            },
          },
        },
        ${hobbyAddMutation.getFragment('viewer')},
        ${Item.getFragment('viewer')},
      }
    `,
  },
});
