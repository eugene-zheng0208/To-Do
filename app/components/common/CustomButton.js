import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { BUTTON_COLOR } from '../../resource/color'
import { commonFontFamily } from '../../resource/font'
import { paddingValue } from '../../resource/constant'

/**
 * Design: ReplaceMe!
 */
export class CustomButton extends Component {
  static defaultProps = {
    btnText: 'Continue',
    textColor: 'white',
    backgroundColor: BUTTON_COLOR,
    borderColor: BUTTON_COLOR
  }

  render() {
    const {
      btnText,
      backgroundColor,
      textColor,
      onPress,
      borderColor
    } = this.props

    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor, borderColor }]}
        onPress={onPress}
      >
        <Text style={[styles.btnText, { color: textColor }]}>{btnText}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    height: 48,
    paddingTop: paddingValue,
    alignItems: 'center',
    borderWidth: 1
  },
  btnText: {
    fontSize: 14,
    ...commonFontFamily
  }
})
