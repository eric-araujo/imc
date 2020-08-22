import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    position: 'relative',
    maxWidth: '100%',
    height: '100%',
    marginTop: '12%',
    marginLeft: '5%',
    marginRight: '5%',
  },

  titulo: {
    position: 'relative',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#1B1D28'
  },

  input: {
    position: 'relative',
    width: '100%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EEF2FE',
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
  },

  labelFormulario: {
    position: 'relative',
    marginTop: '10%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: '#1B1D28',
  },

  labelCalcular: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: '#FFF',
  },

  buttons: {
    flexDirection: 'row',
    marginTop: '14%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonCalcular: {
    width: '100%',
    height: 50,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#567DF4",
  },

  labelCard: {
    width: '50%',
    padding: 10,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: '#567DF4',
  },

  cartao: {
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#EEF2FE',
    borderStyle: 'solid',
    borderRadius: 10,
  },

  imageCard: {
    position: 'absolute',
    top: '6%',
    left: '55%',
  },

});