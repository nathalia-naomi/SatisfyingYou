import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const InputEmail = ({ value, onChangeText, placeholder = 'E-mail' }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType="email-address"
      value={value}
      onChangeText={onChangeText}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
})

export default InputEmail;