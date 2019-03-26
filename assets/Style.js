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
    paddingBottom: 15,
    borderRadius: 5,
    width: 200
  },

  buttonClassGold: {
    backgroundColor: Colors.appGoldColor,
    padding: 12,
    paddingBottom: 15,
    borderRadius: 5,
    width: 200
  },

  buttonMedium: {
    backgroundColor: Colors.appBlueColor,
    padding: 12,
    paddingBottom: 15,
    borderRadius: 5,
    width: 130
  },

  buttonMediumRed: {
    backgroundColor: Colors.appRedColor,
    padding: 12,
    paddingBottom: 15,
    borderRadius: 5,
    width: 130
  },

  buttonFullWidth: {
    backgroundColor: Colors.appBlueColor,
    padding: 12,
    paddingBottom: 15,
    borderRadius: 2.5,
    width: '100%'
  },

  buttonFullWidthRed: {
    backgroundColor: Colors.appRedColor,
    padding: 12,
    paddingBottom: 15,
    borderRadius: 2.5,
    width: '100%'
  },

  buttonSmallBlue: {
    backgroundColor: Colors.appBlueColor,
    borderRadius: 2.5,
    width: 80.5,
    height: 30
  },

  buttonSmallRed: {
    backgroundColor: Colors.appRedColor,
    borderRadius: 2.5,
    width: 80.5,
    height: 30
  },

  buttonSmallDisabled: {
    backgroundColor: Colors.appBrightBlueColor,
    borderRadius: 2.5,
    width: 80.5,
    height: 30
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

  roundButtonSmall: {
    backgroundColor: Colors.appBlueColor,
    borderRadius: 100,
    elevation: 4,
    shadowOffset: {width: 4, height: 4},
    width: 38.5,
    height: 38.5,
    zIndex: 1000
  },

  roundButtonPos: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },

  buttonMenuItem2: {
    position: 'absolute',
    bottom: 125,
    right: 15,
    flexDirection: 'row'
  },

  buttonMenuItem1: {
    position: 'absolute',
    bottom: 80,
    right: 15,
    flexDirection: 'row'
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
    flexDirection: 'column',
    alignSelf: 'center',
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
    color: Colors.appBlackColor,
    fontFamily: 'alergia-normal-light'
  },

  italicText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 0.5,
    fontStyle: 'italic'
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

  userCardContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
  },

  backCardContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.appBackgroundColor,
    borderWidth: 2,
    borderColor: Colors.appBlueColor
  },

  backCardContent: { 
    flexWrap: 'wrap',
    height: '97%', 
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
  },

  backCardColumn: { 
    padding: 10, 
    justifyContent: 'center' 
  },

  backCardTitle: {
    fontSize: 20,
    fontFamily: 'alergia-normal-semibold',
    color: Colors.appBlueColor,
    textAlign: 'center',
    padding: 10
  },

  backCardName: {
    fontSize: 30,
    fontFamily: 'alergia-normal-semibold',
    color: Colors.appBlueColor,
    textAlign: 'center',
    paddingBottom: 20
  },

  backCardSubTitle: {
    fontSize: 16,
    fontFamily: 'alergia-normal-semibold',
    color: Colors.appBlueColor,
    textAlign: 'center',
    paddingRight: 5
  },

  backCardStatRow: { 
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 5
  },

  backCardText: {
    fontSize: 16,
    fontFamily: 'alergia-normal-light',
    textAlign: 'center'
  },

  listItemText: {
    fontSize: 15,
    fontFamily: 'alergia-normal-semibold',
    color: Colors.appBlackColor
  },

  listItemSmallText: {
    fontSize: 11,
    fontFamily: 'alergia-normal-light',
    color: Colors.appBlackColor
    },

  inputFieldText: {
    fontSize: 15,
    fontFamily: 'alergia-normal-semibold',
    color: 'black',
    paddingTop: 20,
    paddingBottom: 5
   },

   articleTitle: {
    fontSize: 20,
    fontFamily: 'alergia-normal-regular',
    color: Colors.appBlackColor,
  },

  articleDate: {
    fontSize: 10,
    fontFamily: 'alergia-normal-light',
    color: Colors.appBlackColor,
  },

  articleLink: {
    textAlign: 'center',
    fontFamily: 'alergia-normal-regular',
    color: Colors.appBlackColor,
    fontSize: 10,
    borderBottomWidth: 1.2,
    width: 55,
    borderColor: Colors.appBlackColor,
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

  articleContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: '5%',
    justifyContent: 'space-between',
    ...Platform.select({
      android: {
        padding: '5%'
      },
      ios: {
        padding: 20
      }
    })
  },

  cardsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    display: 'flex',
    padding: '2%',
    paddingBottom: '15%'
  },

  cardContainer: {
    height: '100%',
    width: '100%'
  },

  itemContainer: {
    borderRadius: 5,
    margin: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderColor: Colors.appBlueColor,
    borderWidth: 2
  },

  itemContainerGoldBorder: {
    borderRadius: 5,
    margin: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderColor: Colors.appGoldColor,
    borderWidth: 2
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

  particContainerBlueBorder: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    borderColor: Colors.appBlueColor,
    borderWidth: 1
  },

  particContainerGoldBorder: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    borderColor: Colors.appGoldColor,
    borderWidth: 1
  },

  particCardBlueBorder: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    borderColor: Colors.appBlueColor,
    borderWidth: 1
  },

  particCardGoldBorder: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    borderColor: Colors.appGoldColor,
    borderWidth: 1
  },

  popUpText: {
    fontSize: 15,
    fontFamily: 'alergia-normal-light',
    color: 'white',
    textAlign: 'center',
    padding: 5,
    lineHeight: 20
  },

  particText: {
    fontSize: 15,
    fontFamily: 'alergia-normal-light'
  },

  particCardText: {
    fontSize: 11,
    fontFamily: 'alergia-normal-light'
  },

  particCardTextBold: {
    fontSize: 11,
    fontFamily: 'alergia-normal-semibold'
  },

  badgeText: {
    position: 'absolute',
    top: 2,
    fontSize: 8,
    color: Colors.appWhiteColor,
    fontFamily: 'alergia-normal-semibold'
  },

  userBigContainer: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    padding: 5
  },

  userSmallContainer: {
    borderRadius: 2.5,
    marginVertical: 5,
    backgroundColor: 'white',
    borderColor: Colors.appBlueColor,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  bigImageContainer: {
    padding: 5,
    alignSelf: 'center'
  },

  smallImageContainer: {
      padding: 5,
      alignSelf: 'center'
  },

  bigListItemContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    paddingBottom: 5
  },

  smallListItemContainer: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 5
  },

  userSquareContainer: {
    borderRadius: 2.5,
    marginVertical: 5,
    backgroundColor: 'white',
    borderColor: Colors.appBlueColor,
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: 110,
    height: '100%'
  },

  userSquareGoldContainer: {
    borderRadius: 2.5,
    marginVertical: 5,
    backgroundColor: 'white',
    borderColor: Colors.appGoldColor,
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: 110,
    height: '100%'
  },

  friendsListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingBottom: '5%'
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

  crownContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,
    transform: [{ rotate: '340deg'}]
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

  friendsContainer: {
    width: '100%',
    height: '100%',
    flex: 1
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

  buttonContainerFullCol: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 130
  },

  singleButtonContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 10
  },

  doubleButtonContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  smallButtonContainer: {
    flexDirection: 'column',
    padding: 5,
    justifyContent: 'space-around'
  },

  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: '15%',
    alignItems: 'center'
  },

  subTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
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
    borderColor: Colors.appBlueColor
  },

  disabledTab: {
    width: "50%",
    borderBottomWidth: 4,
    borderColor: "transparent"
  },

  enabledTabText: {
    color: "#fff",
    paddingBottom: 10,
    fontSize: 18,
    fontStyle: "normal",
    letterSpacing: 0.31,
    textAlign: "center",
    fontFamily: 'alergia-normal-semibold'
  },

  disabledTabText: {
    color: "#fff",
    paddingBottom: 10,
    fontSize: 18,
    opacity: 0.6,
    fontStyle: "normal",
    letterSpacing: 0.31,
    textAlign: "center",
    fontFamily: 'alergia-normal-semibold'
  },

  indvCardContainer: {
    paddingVertical: '5%',
    paddingHorizontal: '2%'
  },

  blueText: {
    fontFamily: 'alergia-normal-semibold',
    fontSize: 15,
    color: Colors.appBlueColor,
    paddingTop: '5%',
    paddingLeft: '3%'
  },

  goldenText: {
    fontFamily: 'alergia-normal-semibold',
    fontSize: 20,
    color: Colors.appGoldColor,
    paddingTop: '5%',
    paddingLeft: '3%'
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

  overlayTitle: {
    fontFamily: 'alergia-normal-semibold',
    fontSize: 22,
    color: Colors.appBlueColor,
  },

  tourContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10
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
  },

  divider: {
    padding: 10,
    margin: 10,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.appGoldColor,
    width: '80%'
  },

  notificationCircle: {
    borderRadius: 9,
    width: 10,
    height: 10,
    backgroundColor: '#b10606',
    position: 'absolute',
    top: 5,
    right: -10,
    zIndex: 1000,
    borderWidth: .5,
    borderColor: 'white'
  },

  notificationText: {
    color: 'white',
    fontSize: 8,
    fontFamily: 'alergia-normal-semibold',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  },

});
