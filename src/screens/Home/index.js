import React, {useEffect, useState} from 'react';
import AppBackground from '../../components/AppBackground';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {appIcons, appImages} from '../../assets';
import {styles} from './styles';
import CustomText from '../../components/CustomText';
import {useRoleStore} from '../../store/roleStore';
import RoleSwitchModal from '../../components/RoleSwitchModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../utils/color';
import {Filters} from '../../dummyData/dummyData';
import NearYouSection from '../../components/NearYouSection';
import TrendingSection from '../../components/TrendingSection';

function Home() {
  const {role, setRole, loadRole} = useRoleStore();
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState('Recommended');
  const [profilePic, setProfilePic] = useState(appImages.roleA); 

  useEffect(() => {
    setProfilePic(role === 'A' ? appImages.profileImage : appImages.reviewProfile);
  }, [role]);

  return (
    <AppBackground>
      <View style={styles.mainCont}>
        <View style={styles.header}>
          <View>
            <CustomText title="Let’s Find your" textStyle={styles.title} />
            <CustomText title="Favorite Home" textStyle={styles.boldTitle} />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              activeOpacity={0.9}>
              <Image
                source={profilePic}
                style={[role === 'A' ? styles.profileImage : styles.roleImage]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color="gray"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search by Address, City, or ZIP"
              placeholderTextColor={colors.gray}
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            activeOpacity={0.9}>
            <Image
              source={appIcons.filter}
              style={styles.filterImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Filters.map((filter, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelected(filter)}
            style={[styles.tab, selected === filter && styles.selectedTab]}
            activeOpacity={0.9}>
            <Text
              style={[
                styles.tabText,
                selected === filter && styles.selectedText,
              ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TrendingSection />

      <View style={styles.mainCont}>
        <View style={styles.flexRow}>
          <CustomText title="Near You" textStyle={styles.boldTitle} />
          <CustomText title="More" textStyle={styles.moreTitle} />
        </View>
        <NearYouSection />
      </View>

      {/* Role Selection Modal */}
      <RoleSwitchModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectRole={setRole}
      />
    </AppBackground>
  );
}

export default Home;
