import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const colors = {
    primary: '#1B5E20',
    accent: '#FFC107',
    background: '#F5F5F5',
    white: '#FFFFFF',
    text: '#212121',
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.content}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: colors.primary }]}>
          <Text style={styles.title}>Muslim Hub</Text>
          <Text style={styles.subtitle}>আপনার ইসলামিক জ্ঞানের সঙ্গী</Text>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text style={styles.heading}>স্বাগতম</Text>
          <Text style={styles.description}>
            এই অ্যাপটি আপনাকে ইসলামিক জ্ঞান এবং দৈনন্দিন নির্দেশনা প্রদান করে।
          </Text>

          {/* Features */}
          <View style={styles.featuresContainer}>
            <FeatureCard icon="quran" title="কুরআন" description="কুরআন পড়ুন এবং শিখুন" />
            <FeatureCard icon="prayer" title="নামাজ" description="নামাজের সময় এবং নিয়ম" />
            <FeatureCard icon="calendar" title="ইসলামিক ক্যালেন্ডার" description="হিজরী ক্যালেন্ডার দেখুন" />
            <FeatureCard icon="book" title="হাদিস" description="সহীহ হাদিস সংগ্রহ" />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={[styles.bottomNav, { backgroundColor: colors.white }]}>
        <NavItem icon="home" label="হোম" active={activeTab === 'home'} onPress={() => setActiveTab('home')} color={colors.primary} />
        <NavItem icon="book-open" label="শিক্ষা" active={activeTab === 'learn'} onPress={() => setActiveTab('learn')} color={colors.primary} />
        <NavItem icon="heart" label="প্রিয়" active={activeTab === 'favorites'} onPress={() => setActiveTab('favorites')} color={colors.primary} />
        <NavItem icon="account" label="আমার" active={activeTab === 'profile'} onPress={() => setActiveTab('profile')} color={colors.primary} />
      </View>
    </SafeAreaView>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <View style={styles.card}>
      <MaterialCommunityIcons name={icon} size={40} color="#1B5E20" />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  );
}

function NavItem({ icon, label, active, onPress, color }) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <MaterialCommunityIcons name={icon} size={24} color={active ? color : '#999'} />
      <Text style={[styles.navLabel, { color: active ? color : '#999' }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFC107',
  },
  mainContent: {
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 20,
    lineHeight: 22,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#212121',
    marginTop: 10,
  },
  cardDescription: {
    fontSize: 12,
    color: '#757575',
    marginTop: 5,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  navLabel: {
    fontSize: 11,
    marginTop: 4,
  },
});
