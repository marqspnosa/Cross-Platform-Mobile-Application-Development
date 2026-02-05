import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { tailwind } from 'twrnc'; 

const Profile = () => {
 
  const user = {
    name: 'Spnosa',
    email: 'spnosa@gmail.com',
    profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg' 
  };

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <View style={tailwind('flex-1 items-center justify-center bg-white p-6')}>
      
      <Image
        source={{ uri: user.profilePicture }}
        style={tailwind('w-32 h-32 rounded-full border-4 border-gray-200 mb-4')}
      />
      
     
      <Text style={tailwind('text-2xl font-bold text-gray-800 mb-2')}>{user.name}</Text>
      
     
      <Text style={tailwind('text-base text-gray-600 mb-4')}>{user.email}</Text>
      
     
      <TouchableOpacity 
        style={tailwind('bg-red-500 px-8 py-3 rounded-lg')}
        onPress={handleLogout}
      >
        <Text style={tailwind('text-white text-lg font-bold')}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});