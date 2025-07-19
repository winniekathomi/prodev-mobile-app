import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
      <View style={styles.logoContainer}>
        <Image source={HEROLOGO} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Discover Your Dream Property</Text>
      </View>

      <View style={styles.titleSubTextContainer}>
        <Text style={styles.titleSubText}>Explore the best properties at the best prices.</Text>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push('/join')}>
          <Text style={styles.buttonPrimaryText}>Join Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/signin')}>
          <Text style={styles.buttonSecondaryText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonGroupSubText}>
        <TouchableOpacity>
          <Image source={GOOGLELOGO} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={FACEBOOKLOGO} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
