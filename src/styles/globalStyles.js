import { StyleSheet } from 'react-native';

export const colors = {
  primary: 'tomato',   
  secondary: 'yellow',  
  background: '#372775', 
  text: '#333333',       
 // white: '#ffffff',      
 // border: '#cccccc',     
};

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

export const fonts = {
  regular: 'Arial',
  bold: 'Arial-Bold',
  italic: 'Arial-Italic',
};

const globalStyles = StyleSheet.create({
  // Estilos globais para telas
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.medium,
  },
  header: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginBottom: spacing.medium,
  },
  subheader: {
    fontSize: 18,
    fontFamily: fonts.regular,
    color: colors.secondary,
    marginBottom: spacing.small,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.bold,
  },
  input: {
    height: 45,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: spacing.medium,
    marginBottom: spacing.medium,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginTop: spacing.small,
  },
  centerText: {
    textAlign: 'center',
    color: colors.text,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default globalStyles;