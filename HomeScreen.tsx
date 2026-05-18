
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const folders = [
  { name: 'Folder1', title: 'الواجبات اليومية' },
  { name: 'Folder2', title: 'الواجبات الأسبوعية' },
  { name: 'Folder3', title: 'الواجبات الشهرية' },
  { name: 'Folder4', title: 'الواجبات السنوية' },
  { name: 'Folder5', title: 'واجبات الصلاة' },
  { name: 'Folder6', title: 'واجبات الصيام' },
  { name: 'Folder7', title: 'واجبات الزكاة' },
  { name: 'Folder8', title: 'واجبات الحج والعمرة' },
  { name: 'Folder9', title: 'واجبات الأخلاق' },
  { name: 'Folder10', title: 'واجبات المعاملات' },
  { name: 'Folder11', title: 'واجبات الدعوة' },
  { name: 'Folder12', title: 'واجبات طلب العلم' },
  { name: 'Folder13', title: 'واجبات الأسرة' },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={folders}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.folderItem}
            onPress={() => navigation.navigate('ImageScreen', { folderName: item.name, folderTitle: item.title })}
          >
            <Text style={styles.folderTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 10,
  },
  folderItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  folderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#333',
  },
});

export default HomeScreen;
