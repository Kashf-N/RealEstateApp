import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useRoleStore = create(set => ({
  role: 'A',
  setRole: async role => {
    await AsyncStorage.setItem('userRole', role);
    set({role});
  },
  loadRole: async () => {
    const storedRole = await AsyncStorage.getItem('userRole');
    if (storedRole) {
      set({role: storedRole});
    }
  },
}));
