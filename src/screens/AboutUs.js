// AboutUs.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutUs = () => {
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>About Us</Text>

      <View style={styles.textBox}>
        <Text style={styles.subHeader}>Our Work</Text>
        <Text style={styles.paragraph}>
          Meet Krishav Singla and Ethan Lung, the minds behind Access Wayfinder. Krishav, a senior at Union County Magnet High School, and Ethan, a junior at the Union County Vocational Technical School, teamed up to create an app addressing accessibility challenges.
        </Text>
        <Text style={styles.paragraph}>
          Inspired by Krishav's personal encounters, the duo conducted surveys and interviewed 130 businesses in Westfield. Collaborating with Mayor Brindey, they categorized data into sections like Restaurants, Fashion, and more. Using React-Native, they developed a user-friendly app for iOS and Android.
        </Text>
        <Text style={styles.paragraph}>
          The app allows users to explore businesses, providing ratings and key accessibility details. In the demo, a welcome screen leads users to select categories and businesses of interest. The future vision includes expanding to other towns globally. Thank you for joining us on our mission to enhance accessibility for everyone.
        </Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.subHeader}>Krishav Singla</Text>
        <Text style={styles.role}>App Developer / Information Researcher</Text>
        <Text style={styles.info}>
          Krishav attends Union County Magnet High School and is a senior. He is passionate about making a positive impact through technology.
        </Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.subHeader}>Ethan Lung</Text>
        <Text style={styles.role}>App Developer / App Designer</Text>
        <Text style={styles.info}>
          Ethan is a junior at the Union County Vocational Technical School. With a creative mind, he focuses on creating a beneficial impact by designing and developing mobile apps.
        </Text>
      </View>

      {/* Button to navigate back */}
      <TouchableOpacity
        style={styles.button}
        onPress={navigateBack}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 60,  // Increased padding at the bottom to accommodate the button
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  textBox: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#87bfd7',
    borderRadius: 10,
    padding: 15,
    width: '100%',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  role: {
    textAlign: 'center',
    color: '#87bfd7',  // Stand out color
    fontWeight: 'bold',
  },
  info: {
    textAlign: 'center',
    color: '#555',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutUs;
