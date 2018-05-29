import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HEADER_COLOR, HEADER_TEXT_COLOR } from '../../resource/color'
import { commonFontFamily } from '../../resource/font'
import { paddingValue } from '../../resource/constant'

/**
 * Design: ReplaceMe!
 */
export class TabHeader extends Component {
  render() {
    const { headerText } = this.props

    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: HEADER_COLOR,
    height: 96,
    justifyContent: 'flex-end'
  },
  headerText: {
    color: HEADER_TEXT_COLOR,
    fontSize: 32,
    padding: paddingValue,
    ...commonFontFamily
  }
})
