import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '@/styles/_joinstyle';
import { HEROLOGO, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';

export default function Join() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Image source={HEROLOGO} />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Join us by creating a free account</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput style={styles.formControl} placeholder="Enter your full name" />
        </View>

        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formControl} placeholder="Enter your email" />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput style={styles.formControl} placeholder="Create a password" secureTextEntry />
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>or sign up with</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupSubTitleText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
