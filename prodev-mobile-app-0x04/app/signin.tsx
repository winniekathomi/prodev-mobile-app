import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '@/styles/_joinstyle';
import { HEROLOGO, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';

export default function Signin() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Image source={HEROLOGO} />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Welcome Back</Text>
        <Text style={styles.subText}>Please sign in to your account</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formControl} placeholder="Enter your email" />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput style={styles.formControl} placeholder="Enter your password" secureTextEntry />
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>or sign in with</Text>
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
        <Text style={styles.signupTitleText}>Don&apos;t have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signupSubTitleText}>Join now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
