import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Row = ({ person }) => {
  return (
    <Text>{person.lastName}, {person.firstName}</Text>
  )
}

export default Row