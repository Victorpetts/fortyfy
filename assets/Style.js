import {
  StyleSheet
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';


export default StyleSheet.create({
  buttonClass: {
    backgroundColor: 'yellow',
    padding: 20,
    borderRadius: 5,
    elevation: 4,
    shadowOffset: {width: 4, height: 4},
    width: 150
  },
  iconClass: {
    paddingTop: 20,
  },
  iconClass: {
    paddingTop: 12
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center',
    color: 'white',
    marginBottom: 30,
  },
  itemText: {
    fontSize: 18,
    margin: 10,
    minWidth: 150
  },
  itemNumber: {
    fontSize: 18,
    marginVertical: 10,
    marginLeft: 60,
    marginRight: 5
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: 'black'
  },
  itemContainer: {
    borderRadius: 3,
    margin: 5,
    padding: 5,
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: 'white'
  },
  createContainer: {
    borderRadius: 3,
    margin: 5,
    padding: 5,
    elevation: 2
  },
  container: {
    margin: 20,
    borderRadius: 3,
    width: '90%',
    padding: 10,
    height: hp('50%')
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
   inputField: {
     backgroundColor: 'white',
     borderRadius: 3,
     padding: 5,
     fontSize: 16
   }
});
