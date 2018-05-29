import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginMain from '../../components/Login/LoginMain'
import { bindActionCreators } from 'redux'
import * as toDosActions from '../../redux/modules/toDos'
import { resetStack } from '../../util/navigation'

const mapStateToProps = ({ currentUser }) => ({
  username: currentUser.username || ''
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(toDosActions, dispatch)

/**
 * Design: ReplaceMe!
 */
class LoginContainerBase extends Component {
  componentDidMount() {
    const { clearRedux, username, navigation } = this.props

    // clearRedux()
    if (username !== '') {
      resetStack('MyTab', navigation)
    }
  }

  render() {
    const { userLogin, navigation } = this.props

    return (
      <LoginMain
        onSubmit={({ username }) => username && userLogin(username, navigation)}
      />
    )
  }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(
  LoginContainerBase
)
