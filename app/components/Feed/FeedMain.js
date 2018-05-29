import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, Image, Alert } from 'react-native'
import { DEADLINE_COLOR, TASK_DONE } from '../../resource/color'
import { commonPadding, paddingValue } from '../../resource/constant'
import { todoColor } from '../../resource/image/image'
import { cropText } from '../../util/text'
import Swipeout from 'react-native-swipeout'
import { commonFontFamily } from '../../resource/font'
import { convertDateToWord } from '../../util/time'

/**
 * Design: ReplaceMe!
 */
export class FeedMain extends Component {
  alertPresent = false

  handleSwipe = (direction, todoId) => {
    const { completeTodo, removeTodo, username } = this.props

    if (!this.alertPresent && direction === 'right') {
      // slide left
      setTimeout(() => {
        Alert.alert(
          'Are you sure you want to delete this TODO?',
          null,
          [
            { text: 'Cancel', onPress: () => (this.alertPresent = false) },
            {
              text: 'OK',
              onPress: () => {
                this.alertPresent = false
                removeTodo(username, todoId)
              }
            }
          ],
          { cancelable: false }
        )
      }, 100)
      this.alertPresent = true
    } else if (direction === 'left') {
      // slide right
      completeTodo(username, todoId)
    }
  }

  renderItem = ({ item, index }) => (
    <Swipeout
      close
      left={[]}
      right={[]}
      style={{ backgroundColor: 'white', paddingHorizontal: paddingValue }}
      onOpen={(sectionID, rowId, direction) =>
        this.handleSwipe(direction, item.todoId)
      }
    >
      {index === 0 && <View style={commonPadding} />}
      <View style={styles.item}>
        <Image source={todoColor[item.color]} style={styles.image} />
        <View style={{ justifyContent: 'space-between' }}>
          <Text style={item.complete ? styles.taskDone : styles.task}>
            {cropText(item.task)}
          </Text>
          <Text style={item.complete ? styles.deadlineDone : styles.deadline}>
            {`Due ${convertDateToWord(item.deadline.split(' ')[0])}`}
          </Text>
        </View>
      </View>
    </Swipeout>
  )

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.userToDos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const taskText = {
  fontSize: 18,
  ...commonFontFamily
}
const deadlineText = {
  fontSize: 12,
  ...commonFontFamily
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: 43,
    marginBottom: paddingValue
  },
  image: {
    height: 16,
    width: 16,
    alignSelf: 'center',
    marginRight: 12
  },
  task: {
    ...taskText
  },
  taskDone: {
    ...taskText,
    color: TASK_DONE,
    textDecorationLine: 'line-through'
  },
  deadline: {
    ...deadlineText,
    color: DEADLINE_COLOR
  },
  deadlineDone: {
    ...deadlineText,
    color: TASK_DONE
  }
})
