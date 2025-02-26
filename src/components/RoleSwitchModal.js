import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {appImages} from '../assets';

const RoleSwitchModal = ({isVisible, onClose, onSelectRole}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn="fadeIn"
      animationOut="fadeOut">
      <View style={styles.modalContent}>
        {/* Close Button */}
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Ionicons name="close" size={24} color="#888" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.modalTitle}>Switch User Role</Text>

        {/* Role A */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            onSelectRole('A');
            onClose();
          }}>
          <Image source={appImages.profileImage} style={styles.profileImage} resizeMode='contain' />
          <Text style={styles.optionText}>User A</Text>
        </TouchableOpacity>

        {/* Role B */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            onSelectRole('B');
            onClose();
          }}>
          <Image source={appImages.reviewProfile} style={styles.roleImage} />
          <Text style={styles.optionText}>User B</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    width: 320,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  option: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginVertical: 5,
    justifyContent: 'flex-start',
  },
  roleImage: {
    width: 40,
    height: 40,
    marginRight: 15,
  },

  profileImage: {width: 60, height: 60,top:12},
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default RoleSwitchModal;
