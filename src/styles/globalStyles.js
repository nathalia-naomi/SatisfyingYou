import { StyleSheet } from 'react-native';
import { grey100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const colors = {
  erro: 'tomato',    
  background: '#372775', 
  text: '#FFFFFF',
  azul:'#4dc6e8',
  verde: '#5cdb95',     
    
};

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

export const fonts = {
  regular: 'AveriaLibre-Regular',
  bold: 'AveriaLibre-Bold',
  italic: 'AveriaLibre-Italic',
};

const globalStyles = StyleSheet.create({
  // Estilos globais para telas
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.large,
  },
  header: {
    flexDirection: 'row',
    fontSize: 30,
    fontFamily: fonts.bold,
    color: colors.text,
    marginBottom: spacing.large,
  },

  label: {
    justifyContent:'flex-start',
    fontSize: 18,
    color: colors.text,
    fontFamily: fonts.regular
  },

 inputs: {
        width: '90%',
        color: colors.azul,
        backgroundColor: colors.text,
        fontFamily: fonts.regular,
        borderRadius: 1,
        height: 35,
        paddingHorizontal: 15,
        paddingVertical: 5,
    
  },
area: {
    marginLeft:30,
    //backgroundColor:'red',
    width:  '100%',
    paddingHorizontal: spacing.medium,
    marginBottom: spacing.medium,
  },

  button: {
    backgroundColor: colors.verde,
    borderRadius:1,
    width: '85%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonNc: {
    backgroundColor: colors.azul,
    borderRadius:1,
    width: '85%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },

  buttonRs: {
    backgroundColor: 'grey',
    borderRadius:1,
    width: '85%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {

    color: colors.text,
    fontSize: 20,
    fontFamily: fonts.regular,
  },

  errorText: {
 
    fontSize: 14,
    color: colors.erro,

  },
   linksContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop:10,
  },

});

export default globalStyles;