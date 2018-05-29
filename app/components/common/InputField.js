import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { INPUT_BORDER, PLACEHOLDER_COLOR } from '../../resource/color'
import { commonFontFamily } from '../../resource/font'
import { paddingValue } from '../../resource/constant'

// declare before defaultProps
export const commonInputDefault = {
  borderColor: INPUT_BORDER,
  height: 48
}

/**
 * Design: ReplaceMe!
 */
export class InputField extends Component {
  static defaultProps = {
    multiline: false,
    ...commonInputDefault
  }

  render() {
    const { input, borderColor, height, ...inputProps } = this.props

    return (
      <TextInput
        {...inputProps}
        placeholderTextColor={PLACEHOLDER_COLOR}
        onChangeText={input.onChange}
        value={input.value}
        style={[styles.input, { borderColor, height }]}
      />
    )
  }
}

export const commonInput = {
  borderRadius: 4,
  borderWidth: 1,
  paddingHorizontal: 12,
  paddingTop: paddingValue,
  paddingBottom: 15
}

export const commonInputFont = {
  fontSize: 14,
  ...commonFontFamily
}

const styles = StyleSheet.create({
  input: {
    ...commonInput,
    ...commonInputFont
  }
})
