import {Dimensions, StyleSheet} from 'react-native';
import globalStyles from '../globalStyles';
import {verticalScale} from 'react-native-size-matters';
import {colors} from '../../utils/color';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainCont: {
    marginHorizontal: verticalScale(15),
  },

  header: {
    marginTop: verticalScale(20),
    ...globalStyles.directionRow,
    ...globalStyles.justifySpaceBetween,
  },

  title: {color: colors.text, ...globalStyles.font20},
  boldTitle: {
    fontWeight: 'bold',
    color: colors.secondary,
    ...globalStyles.font22,
  },
  profileImage: {width: 100, height: 100, left: 19},
  roleImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    marginVertical:25,
    bottom:10
  },

  searchContainer: {
    width: width * 0.69,
    height: height * 0.07,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  searchIcon: {marginRight: 10},
  searchInput: {flex: 1, color: colors.gray},

  filterImage: {width: width * 0.2, height: height * 0.11, left: 11},

  flexRow: {
    ...globalStyles.directionRow,
    ...globalStyles.justifySpaceBetween,
  },

  tab: {
    marginLeft: verticalScale(15),
    backgroundColor: colors.lightGray,
    padding: verticalScale(15),
    borderRadius: 50,
  },

  selectedTab: {
    backgroundColor: colors.lightBlue,
  },

  tabText: {color: colors.secondary, fontWeight: 'bold'},

  selectedText: {color: colors.blue},

  moreTitle: {
    color: colors.gray,
    fontWeight: 'bold',
    ...globalStyles.font18,
  },
});
