import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProfileMain } from '../../components/Profile/ProfileMain'
import { View } from 'react-native'
import { TabHeader } from '../../components/common/TabHeader'
import { bindActionCreators } from 'redux'
import * as toDosActions from '../../redux/modules/toDos'

const mapStateToProps = ({ currentUser }) => ({
  username: currentUser.username
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(toDosActions, dispatch)

/**
 * Design: ReplaceMe!
 */
class ProfileContainerBase extends Component {
  render() {
    const { username, clearTodoAndToLogin, navigation } = this.props

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TabHeader headerText={`Hello, ${username}`} />
        <ProfileMain
          clearTodoAndToLogin={() => clearTodoAndToLogin(username, navigation)}
        />
      </View>
    )
  }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(
  ProfileContainerBase
)
