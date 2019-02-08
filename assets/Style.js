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
    paddingTop: 12,
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  yellowHeaderText: {
    fontWeight: 'bold',
    fontSize: 28,
    alignSelf: 'center',
    color: 'yellow'
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center',
    color: 'white'
  },

  paragraphText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    marginBottom: 10
  },

  smallText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'yellow',
    letterSpacing: 0.5
  },

  itemText: {
    fontSize: 18,
    margin: 10,
    // minWidth: 150
  },

  userText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'yellow',
    marginVertical: 14,
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
    paddingRight: 15,
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: 'white',
    justifyContent: 'space-evenly'
  },

  userContainer: {
    borderRadius: 3,
    marginVertical: 5,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'white',
    borderBottomWidth: 2
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
    height: hp('54%')
  },

  ongoingContainer: {
    margin: 20,
    height: hp('70%')
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },

  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: '15%',
    alignItems: 'center'
  },

  titleRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '15%',
    alignItems: 'center'
  },

   inputField: {
     backgroundColor: 'white',
     borderRadius: 3,
     padding: 5,
     fontSize: 16
   }
});
