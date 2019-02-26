import {
  StyleSheet,
  Platform
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
    width: 150,
    marginTop: 10
  },

  roundButton: {
    backgroundColor: 'yellow',
    borderRadius: 100,
    elevation: 4,
    shadowOffset: {width: 4, height: 4},
    width: 60,
    height: 60
  },
  
  buttonDisabled: {
    borderColor: 'yellow',
    borderWidth: 2,
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
    fontSize: 16,
    textAlign: 'center'
  },

  buttonTextDisabled: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: 'white'
  },

  yellowHeaderText: {
    fontWeight: 'bold',
    fontSize: 28,
    alignSelf: 'center',
    color: 'yellow'
  },

  scoreText: {
    fontSize: 24,
    alignSelf: 'center',
    color: 'white',
    justifyContent: 'space-between'
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

  cardText: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.5
  },

  smallText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'yellow',
    letterSpacing: 0.5
  },

  italicText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 0.5,
    fontStyle: 'italic'
  },

  mediumText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'yellow',
    letterSpacing: 0.5
  },

  playerText: {
    fontSize: 18,
    color: 'yellow',
    letterSpacing: 0.5
  },

  itemText: {
    fontSize: 18,
    margin: 10,
    flex: 1
  },

  userText: {
    fontSize: 20,
    color: 'yellow',
    marginVertical: 14,
    textAlign: 'center'
  },

  inviteListText: {
    fontSize: 20,
    color: 'yellow',
    marginVertical: 14,
    flex: 1
  },

  inviteMessageText: {
    fontSize: 20,
    color: 'yellow',
    display: 'flex',
    textAlign: 'center',
    padding: 10,
    width: '100%'
  },

  inputFieldText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white'
   },

  itemNumber: {
    fontSize: 18,
    marginVertical: 10,
    marginRight: 5
  },

  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: 'black'
  },

  cardsContainer: {
    maxWidth: '100%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    display: 'flex',
    flex: 1,
    paddingBottom: '10%'
  },

  cardContainer: {
    height: '100%',
    width: '100%'
  },

  itemContainer: {
    borderRadius: 3,
    margin: 5,
    padding: 5,
    paddingRight: 15,
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },

  userContainer: {
    borderRadius: 3,
    marginVertical: 5,
    elevation: 2,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inviteListContainer: {
      borderRadius: 3,
      marginVertical: 5,
      elevation: 2,
      borderBottomColor: 'white',
      borderBottomWidth: 2
  },

  inputFieldContainer: {
    width: '90%',
    height: '100%',
    marginLeft: '5%',
    marginRight: '5%'
  },

  userCard: {
    margin: 20,
    borderColor: 'white',
    borderWidth: 4
  },

  cardFrame: {
    marginTop: 30,
    marginHorizontal: 19,
    borderColor: 'yellow',
    borderWidth: 15,
    width: 320,
    height: 445
  },

  createContainer: {
    borderRadius: 3,
    margin: 5,
    padding: 5,
    elevation: 2
  },

  container: {
    margin: 20,
    width: '90%',
    height: hp('54%')
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },

  buttonContainerCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },

  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: '15%',
    alignItems: 'center'
  },

   inputField: {
     backgroundColor: 'white',
     borderRadius: 3,
     padding: 5,
     fontSize: 16,
     marginVertical: 10
   },

   pickerField: {
    ...Platform.select({
      android: {
        backgroundColor: 'white',
        borderRadius: 3,
        marginVertical: 10
      }
    })
   },

   tabBackground: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 0,
    backgroundColor: 'black'
  },

  enabledTab: {
    width: "50%",
    borderBottomWidth: 4,
    borderColor: 'yellow'
  },

  disabledTab: {
    width: "50%",
    borderBottomWidth: 4,
    borderColor: "transparent"
  },

  enabledTabText: {
    color: "#fff",
    fontWeight: "900",
    padding: 10,
    fontSize: 20,
    fontStyle: "normal",
    letterSpacing: 0.31,
    textAlign: "center"
  },

  disabledTabText: {
    color: "#fff",
    fontWeight: "900",
    padding: 10,
    fontSize: 20,
    opacity: 0.6,
    fontStyle: "normal",
    letterSpacing: 0.31,
    textAlign: "center"
  },

  indvCardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5%'
  }
});
