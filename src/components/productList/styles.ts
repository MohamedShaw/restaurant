import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
  },
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  toggel: {
    borderRadius: 20,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'red',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    backgroundColor: 'lightblue',
    margin: 5,
  },
  txt600: {color: 'white', fontWeight: '700', margin: 20},
});
