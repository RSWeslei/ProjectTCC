import { StyleSheet } from 'react-native';
import colors from '../../utils/globalColors';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  inputContainer: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 30,
    gap: 20,
  },
  inputField: {
    marginBottom: 15,
  },
  loginContainer: {
    alignItems: 'center',
  },
  getLocationButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  getLocationText: {
    fontSize: 16,
    marginLeft: 10,
    color: colors.primary,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
  },
  picker: {
    height: 50, // Altura semelhante ao campo de entrada
    borderWidth: 1, // Borda como o campo de entrada
    borderColor: '#ccc', // Cor da borda semelhante ao campo
    borderRadius: 8, // Bordas arredondadas
    paddingHorizontal: 10, // Espaçamento interno
    fontSize: 16, // Tamanho do texto
    backgroundColor: '#fff', // Fundo branco
    color: '#333', // Cor do texto
    marginBottom: 15, // Espaço inferior
  },

});

export default style;
