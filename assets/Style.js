import {
  StyleSheet,
  Platform
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Colors from '../constants/Colors.js';


export default StyleSheet.create({
  buttonClass: {
    backgroundColor: Colors.appBlueColor,
    padding: 12,
    borderRadius: 2.5,
    width: 200
  },

  buttonFullWidth: {
    backgroundColor: Colors.appBlueColor,
    padding: 12,
    borderRadius: 2.5,
    width: '100%'
  },

  buttonFullWidthRed: {
    backgroundColor: Colors.appRedColor,
    padding: 12,
    borderRadius: 2.5,
    width: '100%'
  },

  buttonSmallBlue: {
    backgroundColor: Colors.appBlueColor,
    borderRadius: 2.5,
    width: 80.5,
    height: 30,
    marginTop: '15%'
  },

  buttonSmallRed: {
    backgroundColor: Colors.appRedColor,
    borderRadius: 2.5,
    width: 80.5,
    height: 30,
    marginTop: '15%'
  },

    buttonSmallDisabled: {
    backgroundColor: Colors.appBrightBlueColor,
    borderRadius: 2.5,
    width: 80.5,
    height: 30,
    marginTop: '15%'
  },

  roundButtonLarge: {
    backgroundColor: Colors.appBlueColor,
    borderRadius: 100,
    elevation: 4,
    shadowOffset: {width: 4, height: 4},
    width: 50,
    height: 50,
    zIndex: 1000
  },

  roundButtonMedium: {
    backgroundColor: Colors.appBlueColor,
    borderRadius: 100,
    elevation: 4,
    shadowOffset: {width: 4, height: 4},
    width: 38.5,
    height: 38.5,
    zIndex: 1000
  },

  buttonMediumText: {
    fontSize: 15,
    fontFamily: 'alergia-normal-semibold',
    paddingTop: 5,
    paddingRight: 10,
    zIndex: 1000
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
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'alergia-normal-semibold',
    color: 'white'
  },

  buttonSmallText: {
    fontSize: 11,
    textAlign: 'center',
    fontFamily: 'alergia-normal-semibold',
    color: 'white',
    paddingTop: '7%'
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
    fontFamily: 'alergia-normal-semibold'
  },

  subTitleText: {
    fontSize: 15,
    fontFamily: 'alergia-normal-semibold'
  },

  paragraphText: {
    fontSize: 13,
    fontFamily: 'alergia-normal-light',
    lineHeight: 18,
    marginVertical: 5
  },

  lvlText: {
    fontSize: 12,
    marginTop: 5,
    marginLeft: 9,
    flex: 1
  },

  userText: {
    fontSize: 20,
    color: 'yellow',
    marginVertical: 14,
    textAlign: 'center'
  },

  inviteListText: {
    fontSize: 15,
    fontFamily: 'alergia-normal-semibold',
    color: Colors.appBlackColor
  },
  inviteListSmallText: {
    fontSize: 11,
    fontFamily: 'alergia-normal-light',
    color: Colors.appBlackColor
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
    fontSize: 15,
    fontFamily: 'alergia-normal-semibold',
    color: 'black',
    paddingTop: 20,
    paddingBottom: 5
   },

  itemNumber: {
    fontSize: 18,
    marginVertical: 10,
    marginRight: 5
  },

  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.appBackgroundColor
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
    margin: 10,
    padding: 5,
    paddingRight: 15,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderColor: Colors.appBlueColor,
    borderWidth: 1
  },

  itemContainerNoBorder: {
    borderRadius: 3,
    margin: 15,
    padding: 5,
    paddingRight: 15,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },

  particContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 2.5,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    padding: 10
  },


  particText: {
    fontSize: 15,
    fontFamily: 'alergia-normal-light'
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
      borderRadius: 2.5,
      padding: 5,
      marginVertical: 5,
      borderColor: Colors.appBlueColor,
      borderWidth: 1,
      backgroundColor: 'white'
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
     fontSize: 15,
     fontFamily: 'alergia-normal-light',
     color: 'black',
     borderRadius: 5,
     height: 40,
     width: '100%',
     borderWidth: 1,
     borderColor: Colors.appBlueColor,
     backgroundColor: 'white',
     padding: 10
   },

   pickerField: {
    ...Platform.select({
      android: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.appBlueColor,
      }
    })
   },

   tabBackground: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 0,
    backgroundColor: Colors.appBlackColor
  },

  enabledTab: {
    width: "50%",
    borderBottomWidth: 4,
    borderColor: Colors.appBackgroundColor
  },

  disabledTab: {
    width: "50%",
    borderBottomWidth: 4,
    borderColor: "transparent"
  },

  enabledTabText: {
    color: "#fff",
    padding: 10,
    fontSize: 20,
    fontStyle: "normal",
    letterSpacing: 0.31,
    textAlign: "center",
    fontFamily: 'alergia-normal-semibold'
  },

  disabledTabText: {
    color: "#fff",
    padding: 10,
    fontSize: 20,
    opacity: 0.6,
    fontStyle: "normal",
    letterSpacing: 0.31,
    textAlign: "center",
    fontFamily: 'alergia-normal-semibold'
  },

  indvCardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5%'
  },

  blueText: {
    fontFamily: 'alergia-normal-semibold',
    fontSize: 15,
    color: Colors.appBlueColor
  },

  tourInfoTitle: {
    fontSize: 11,
    fontFamily: 'alergia-normal-light',
    paddingBottom: 5
  },

  tourInfoText: {
    fontSize: 11,
    fontFamily: 'alergia-normal-semibold'
  },

  tourContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    padding: 10
  },

  whiteOverlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    opacity: .15
  },

  placementSquare: {
    backgroundColor: Colors.appBlueColor,
    width: 41,
    height: 41,
    borderRadius: 2.5,
    position: 'absolute'
  },

  placementText: {
    fontSize: 15,
    fontFamily: 'alergia-normal-semibold',
    color: 'white',
    paddingLeft: '40%',
    paddingTop: '20%',
    justifyContent: 'center'
  }
});
