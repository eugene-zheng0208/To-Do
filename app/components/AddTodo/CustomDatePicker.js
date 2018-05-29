import React, { Component } from 'react'
import { commonPadding } from '../../resource/constant'
import { PLACEHOLDER_COLOR } from '../../resource/color'
import { deviceWidth } from '../../util/dimension'
import DatePicker from 'react-native-datepicker'
import {
  commonInput,
  commonInputDefault,
  commonInputFont
} from '../common/InputField'
import { TEXT_CONFIRM, TEXT_DEADLINE_PLACEHOLDER } from '../../resource/text'

/**
 * Design: ReplaceMe!
 */
export class CustomDatePicker extends Component {
  render() {
    const { input } = this.props

    return (
      <DatePicker
        style={{ width: deviceWidth - commonPadding * 2, paddingVertical: 4 }}
        placeholder={TEXT_DEADLINE_PLACEHOLDER}
        mode={'datetime'}
        confirmBtnText={TEXT_CONFIRM}
        cancelBtnText={'Cancel'}
        showIcon={false}
        onDateChange={input.onChange}
        date={input.value}
        customStyles={{
          dateInput: {
            ...commonInput,
            ...commonInputDefault,
            alignItems: 'flex-start'
          },
          placeholderText: {
            ...commonInputFont,
            color: PLACEHOLDER_COLOR
          },
          dateText: {
            ...commonInputFont
          }
        }}
      />
    )
  }
}
