/* @flow weak */

import Relay from 'react-relay'


export default class ToDo_addMutation extends Relay.Mutation {
  static fragments = {
    Viewer: () => Relay.QL `
      fragment on Viewer {
        id,
        ToDo_TotalCount,
      }
    `,
  }
  getMutation() {
    return Relay.QL `mutation{ToDo_add}`
  }
  getFatQuery() {
    return Relay.QL `
      fragment on ToDo_addPayload {
        ToDosEdge,
        Viewer {
          ToDos,
          ToDo_TotalCount,
        },
      }
    `
  }
  getConfigs() {
    return [ {
      type: 'RANGE_ADD',
      parentName: 'Viewer',
      parentID: this.props.Viewer.id,
      connectionName: 'ToDos',
      edgeName: 'ToDosEdge',
      rangeBehaviors: {
        '': 'append',
        'status(any)': 'append',
        'status(active)': 'append',
        'status(completed)': null,
      },
    } ]
  }
  getVariables() {
    return {
      ToDo_Text: this.props.ToDo_Text,
    }
  }
  getOptimisticResponse() {
    return {
      // FIXME: ToDo_TotalCount gets updated optimistically, but this edge does not
      // get added until the server responds
      ToDosEdge: {
        node: {
          ToDo_Complete: false,
          ToDo_Text: this.props.ToDo_Text,
        },
      },
      Viewer: {
        id: this.props.Viewer.id,
        ToDo_TotalCount: this.props.Viewer.ToDo_TotalCount + 1,
      },
    }
  }
}



Wendy: Hi Shahzad
[12:30pm] Wendy: I had to laugh when i read your comment trying to figure out attaching a template to a page style
[12:31pm] Wendy: can't say i've done it but i can believe it.
[12:31pm] shahzadt: Hi Wendy
[12:31pm] shahzadt: lol
[12:31pm] Wendy: pretty quiet over there?
[12:31pm] shahzadt: I thought you just have to click it and then I wasn’t sure that what’s the problem
[12:32pm] shahzadt: then I saw this light grey message
[12:32pm] shahzadt: yep it’s  really quite
[12:32pm] Wendy: yeah there are some weird drag and drop things in M8...not consistent of course. you then start to drag and drop something but it doesn't apply there.
[12:32pm] Wendy: *sigh* so many quirks to learn
[12:33pm] shahzadt: yea
[12:33pm] shahzadt: I have a question for you
[12:33pm] Wendy: yes
[12:35pm] shahzadt: how do I keep the wxget but don’t show to user
[12:35pm] shahzadt: I mean hide the wxget
[12:35pm] Wendy: just wrap comments around it
[12:35pm] Wendy: <!--
[12:35pm] Wendy: -->
[12:35pm] shahzadt: keep it for future but not for current use
[12:36pm] Wendy: WXGET is server side. it holds string value. so by the time it is on the HTML page it is just text that can be commented out.
[12:36pm] Wendy: depending on the sequece of steps for the user in the template sometimes you can hide that stuff in the <head> tag
[12:36pm] Wendy: if it needs to be in the body  because of the flow then comment out.
[12:37pm] Wendy: example thing like "Select Category" and "Select Subcategory" is probably one of the first things a user does when they create one of those logo things.
[12:37pm] Wendy: these WXGET selects can be in the head tag
[12:37pm] Wendy: so when you open the template it is near the top. and the selected value is not rendred in the html page.
[12:38pm] Wendy: if you need to dump the value on the page you just repeat the wxget using the HIDE attribute
[12:38pm] Wendy: <wxget name="category" title="Select Category" HIDE></wxget>
[12:38pm] Wendy: so collect the data above, and print it out below (if needed)
[12:40pm] shahzadt: I guess this is the one HIDE
[12:40pm] shahzadt: I remove some of the subcategories which I added for testing purposes
[12:41pm] shahzadt: but wanted to keep only vexilor for now
[12:41pm] shahzadt: in case, marketing request to add other subcategories as well
[12:41pm] Wendy: yes have the ability to make subs for other categories available in case is a good idea
[12:42pm] Wendy: but only the ability don't keep dummy text or anything
[12:42pm] shahzadt: ok
[12:42pm] Wendy: can always add if you know it works
[12:42pm] shahzadt: ok
[12:42pm] shahzadt: Thanks
