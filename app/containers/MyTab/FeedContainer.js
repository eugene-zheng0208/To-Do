import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { FeedMain } from '../../components/Feed/FeedMain'
import { TabHeader } from '../../components/common/TabHeader'
import { sortDate } from '../../util/time'
import * as toDosActions from '../../redux/modules/toDos'
import { bindActionCreators } from 'redux'

const mapStateToProps = ({ toDos, currentUser }) => {
  const username = currentUser.username

  return {
    userToDos: toDos[username] ? toDos[username].userToDos : [],
    username
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(toDosActions, dispatch)

/**
 * Design: ReplaceMe!
 */
class FeedContainerBase extends Component {
  render() {
    const { userToDos, username, completeTodo, removeTodo } = this.props

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TabHeader headerText={'Todo'} />
        <FeedMain
          userToDos={sortDate(userToDos)}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          username={username}
        />
      </View>
    )
  }
}

export const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(
  FeedContainerBase
)
