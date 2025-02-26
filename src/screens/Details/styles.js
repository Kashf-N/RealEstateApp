import {StyleSheet} from 'react-native';
import globalStyles from '../globalStyles';
import {colors} from '../../utils/color';
import { verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  cont: {
    ...globalStyles.mainContainer,
    backgroundColor:colors.white
  },

  container: {
    marginHorizontal: verticalScale(15),
    marginVertical: verticalScale(10)
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 4,
    color: colors.gray,
  },
  reviewText: {
    fontSize: 12,
    color: '#888',
    marginLeft: 4,
  },
  badge: {
    backgroundColor:colors.lightGray,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  badgeText: {
    fontSize: 15,
    color: colors.blue,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 5,
  },
  address: {
    fontSize: 14,
    color: colors.text,
    marginTop: 2,
  },
});
