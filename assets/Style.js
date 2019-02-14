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

  roundButton: {
    backgroundColor: 'yellow',
    borderRadius: 100,
    elevation: 4,
    shadowOffset: {width: 4, height: 4},
    width: 60,
    height: 60
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

  cardContainer: {
    // width: wp('100%'),
    // height: hp('100%'),
    height: '100%',
    width: '100%',
    // display: 'flex',
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
});
