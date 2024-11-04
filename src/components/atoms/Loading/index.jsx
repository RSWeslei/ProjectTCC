import React from 'react'
import styles from './style'
import { View, ActivityIndicator } from 'react-native'

const Loading = () => {
  return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
  )
}

export default Loading