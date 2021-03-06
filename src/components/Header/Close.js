import React, { Component } from 'react'

import {
  StyleSheet
} from 'react-native'

import {
  em
} from '../../styles'

import Button from '../Button'
import { ResponsiveImage } from '../Icons'

const styles = StyleSheet.create({
  icon: {
    flexGrow: 0,
    width: em(1.125)
  }
})

class Close extends Component {
  render () {
    return (
      <Button action={this.props.action} innerStyle={styles.icon}>
        <ResponsiveImage icon={'iconClose'} />
      </Button>
    )
  }
}

export default Close
