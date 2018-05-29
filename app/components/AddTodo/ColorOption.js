import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { todoColor } from '../../resource/image/image'
import { TEXT_COLOR } from '../../resource/text'

/**
 * Design: ReplaceMe!
 */
export class ColorOption extends Component {
  render() {
    const { input, color } = this.props

    return (
      <TouchableOpacity activeOpacity={1} onPress={() => input.onChange(color)}>
        <Image
          source={todoColor[color]}
          style={[styles.image, { opacity: input.value === color ? 1 : 0.2 }]}
          testID={TEXT_COLOR}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    height: 48,
    width: 48
  }
})
