
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type ImageScreenRouteProp = RouteProp<RootStackParamList, 'ImageScreen'>;

type Props = {
  route: ImageScreenRouteProp;
};

const { width } = Dimensions.get('window');

// Helper function to dynamically require images
const getImagesForFolder = (folderName: string) => {
  const images = [];
  // Assuming images are named image_01.png, image_02.png, etc.
  // You would need to adjust this logic based on your actual image naming and count
  // For demonstration, let's assume up to 10 images per folder.
  // In a real app, you might have a manifest file or a more robust way to list images.
  for (let i = 1; i <= 10; i++) {
    const imageName = `image_${i.toString().padStart(2, '0')}.png`;
    try {
      // This dynamic require will only work if the paths are known at compile time.
      // For a truly dynamic list, you might need a different approach or a build script.
      // For now, we'll use a switch statement as a common workaround for a limited number of folders.
      switch (folderName) {
        case 'Folder1':
          images.push(require(`../assets/images/Folder1/${imageName}`));
          break;
        case 'Folder2':
          images.push(require(`../assets/images/Folder2/${imageName}`));
          break;
        case 'Folder3':
          images.push(require(`../assets/images/Folder3/${imageName}`));
          break;
        case 'Folder4':
          images.push(require(`../assets/images/Folder4/${imageName}`));
          break;
        case 'Folder5':
          images.push(require(`../assets/images/Folder5/${imageName}`));
          break;
        case 'Folder6':
          images.push(require(`../assets/images/Folder6/${imageName}`));
          break;
        case 'Folder7':
          images.push(require(`../assets/images/Folder7/${imageName}`));
          break;
        case 'Folder8':
          images.push(require(`../assets/images/Folder8/${imageName}`));
          break;
        case 'Folder9':
          images.push(require(`../assets/images/Folder9/${imageName}`));
          break;
        case 'Folder10':
          images.push(require(`../assets/images/Folder10/${imageName}`));
          break;
        case 'Folder11':
          images.push(require(`../assets/images/Folder11/${imageName}`));
          break;
        case 'Folder12':
          images.push(require(`../assets/images/Folder12/${imageName}`));
          break;
        case 'Folder13':
          images.push(require(`../assets/images/Folder13/${imageName}`));
          break;
        default:
          break;
      }
    } catch (e) {
      // Image not found, break the loop for this folder
      break;
    }
  }
  return images;
};

const ImageScreen: React.FC<Props> = ({ route }) => {
  const { folderName, folderTitle } = route.params;
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const loadedImages = getImagesForFolder(folderName);
    setImages(loadedImages);
    setLoading(false);
  }, [folderName]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>جاري تحميل الصور...</Text>
      </View>
    );
  }

  if (images.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>لا توجد صور في هذا المجلد.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {images.map((imageSource, index) => (
        <Image
          key={index}
          source={imageSource}
          style={styles.image}
          resizeMode="contain"
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: width * 0.95, // Adjust image width to fit screen with some padding
    height: width * 0.95 * (4 / 3), // Assuming a 4:3 aspect ratio, adjust as needed
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
  },
});

export default ImageScreen;
