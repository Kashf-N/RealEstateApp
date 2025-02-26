import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {reviews} from '../dummyData/dummyData';
import {colors} from '../utils/color';
import {verticalScale} from 'react-native-size-matters';
import globalStyles from '../screens/globalStyles';

const ReviewItem = ({item}) => {
  return (
    <View style={styles.reviewContainer}>
      {/* User Info */}
      <View style={styles.header}>
        <Image source={item.profileImage} style={styles.profileImage} />
        <Text style={styles.username}>{item.name}</Text>
        <Text style={styles.timeAgo}>{item.timeAgo}</Text>
      </View>

      {/* Review Text */}
      <Text style={styles.reviewText}>{item.review}</Text>

      {/* Rating */}
      <View style={styles.flexRow}>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, index) => (
            <Ionicons key={index} name="star" size={16} color={colors.gold} />
          ))}
          <Text style={styles.rating}>{4.9}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.helpfulText}>Helpful?</Text>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="thumbs-up-outline" size={20} color="black" />
            <Text style={styles.likeCount}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="thumbs-down-outline" size={20} color="black" />
            <Text style={styles.likeCount}>{item.dislikes}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Review Images */}
      <FlatList
        data={item.images}
        horizontal
        keyExtractor={(image, index) => index.toString()}
        renderItem={({item}) => {
          return <Image source={item} style={styles.reviewImage} />;
        }}
      />
    </View>
  );
};

const Review = () => {
  return (
    <>
      <FlatList
        data={reviews}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ReviewItem item={item} />}
        contentContainerStyle={styles.container}
        ListFooterComponent={() => {
          return (
            <View style={styles.bottomCont}>
              <Text style={styles.bottomText}>View all 172 reviews</Text>
            </View>
          );
        }}
        ListFooterComponentStyle={{paddingBottom:verticalScale(30)}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: verticalScale(15),
    marginTop: verticalScale(20),
  },
  reviewContainer: {
    marginBottom: verticalScale(10),
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    color: colors.black,
  },
  timeAgo: {
    marginLeft: 'auto',
    color: 'gray',
    fontSize: 14,
  },
  reviewText: {
    marginVertical: 10,
    fontSize: 14,
    color: colors.gray,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.gray,
  },
  reviewImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 8,
    marginVertical: verticalScale(10),
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  helpfulText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 10,
    color: colors.black,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  likeCount: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.black,
  },

  flexRow: {
    ...globalStyles.directionRow,
    ...globalStyles.justifySpaceBetween,
    ...globalStyles.alignCenter,
  },

  bottomCont: {
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    paddingVertical:10,
    paddingTop:20
  },

  bottomText: {
    color: colors.red,
    ...globalStyles.font15,
    fontWeight: 'bold',
  },
});

export default Review;
