import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  buttonClass: {
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    elevation: 4,
    shadowOffset: {width: 4, height: 4}
  },
  iconClass: {
    paddingTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center'
  },
  itemText: {
    fontSize: 18,
    margin: 10
  },
  itemContainer: {
    borderWidth: 1,
    borderRadius: 3,
    margin: 5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    backgroundColor: 'pink',
    margin: 20,
    borderRadius: 3,
    width: '90%',
    padding: 10
  }
});
