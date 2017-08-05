import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Chat from '../components/Chat'
import * as chatActions from '../actions/ChatActions'
import * as userActions from '../actions/UserActions'

class App extends Component {
  render() {
    const { user, chat } = this.props
     const { connectToSocket } = this.props.chatActions
    const { handleLogin } = this.props.userActions

    return <div className='row'>
      <Chat messages={chat.messages} fetching={chat.fetching} error={chat.error} connectToSocket={connectToSocket}/>
      <User name={user.name} handleLogin={handleLogin} error={user.error} />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    chat: state.chat
  }
}

function mapDispatchToProps(dispatch) {
  return {
    chatActions: bindActionCreators(chatActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
