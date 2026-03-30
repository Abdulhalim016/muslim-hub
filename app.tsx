import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, ImageBackground, Animated, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [scrollY] = useState(new Animated.Value(0));
  const [points, setPoints] = useState(0);

  // ডিজাইন কালার প্যালেট
  const colors = {
    primary: '#1B5E20',
    primaryLight: '#2E7D32',
    primaryDark: '#0D3B1F',
    accent: '#FFC107',
    accentLight: '#FFD54F',
    background: '#F5F5F5',
    white: '#FFFFFF',
    text: '#212121',
    textLight: '#757575',
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#F44336',
  };

  const HomeScreen = () => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* হেডার সেকশন */}
      <LinearGradient
        colors={[colors.primary, colors.primaryLight]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.headerGreeting}>আস্সালামু আলাইকুম</Text>
              <Text style={styles.headerTitle}>Muslim Hub</Text>
            </View>
            <View style={styles.pointsCard}>
              <MaterialCommunityIcons name="star" size={24} color={colors.accent} />
              <Text style={styles.pointsText}>{points}</Text>
            </View>
          </View>

          {/* সার্চ বার */}
          <View style={styles.searchBar}>
            <MaterialCommunityIcons name="magnify" size={20} color={colors.textLight} />
            <Text style={styles.searchPlaceholder}>খুঁজুন...</Text>
          </View>
        </View>
      </LinearGradient>

      {/* দ্রুত অ্যাক্সেস সেকশন */}
      <View style={styles.quickAccessSection}>
        <Text style={styles.sectionTitle}>দ্রুত অ্যাক্সেস</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickAccessScroll}>
          <QuickAccessCard 
            icon="clock-outline" 
            title="নামাজ" 
            color="#2E7D32"
            onPress={() => setActiveTab('prayer')}
          />
          <QuickAccessCard 
            icon="book-open-outline" 
            title="কুরআন" 
            color="#1565C0"
            onPress={() => setActiveTab('quran')}
          />
          <QuickAccessCard 
            icon="library-shelves" 
            title="হাদিস" 
            color="#F57C00"
            onPress={() => setActiveTab('hadith')}
          />
          <QuickAccessCard 
            icon="hands-pray" 
            title="দোয়া" 
            color="#6A1B9A"
            onPress={() => setActiveTab('dua')}
          />
        </ScrollView>
      </View>

      {/* প্রধান ফিচার গ্রিড */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>সমস্ত ফিচার</Text>
        <View style={styles.featureGrid}>
          <FeatureCard 
            icon="clock" 
            title="নামাজের সময়" 
            description="সঠিক নামাজের সময় জানুন"
            color="#2E7D32"
            gradient={['#2E7D32', '#1B5E20']}
          />
          <FeatureCard 
            icon="book-open" 
            title="কুরআন" 
            description="পবিত্র কুরআন পড়ুন"
            color="#1565C0"
            gradient={['#1565C0', '#0D47A1']}
          />
          <FeatureCard 
            icon="library-shelves" 
            title="হাদিস" 
            description="হাদিস সংগ্রহ পড়ুন"
            color="#F57C00"
            gradient={['#F57C00', '#E65100']}
          />
          <FeatureCard 
            icon="hands-pray" 
            title="দোয়া" 
            description="দৈনন্দিন দোয়া শিখুন"
            color="#6A1B9A"
            gradient={['#6A1B9A', '#4A148C']}
          />
          <FeatureCard 
            icon="calculator" 
            title="যাকাত" 
            description="যাকাত ক্যালকুলেটর"
            color="#C62828"
            gradient={['#C62828', '#B71C1C']}
          />
          <FeatureCard 
            icon="compass" 
            title="কিবলা" 
            description="কিবলা দিক খুঁজুন"
            color="#00838F"
            gradient={['#00838F', '#004D5C']}
          />
        </View>
      </View>

      {/* রিওয়ার্ড সেকশন */}
      <View style={styles.rewardSection}>
        <LinearGradient
          colors={[colors.accent, colors.accentLight]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.rewardCard}
        >
          <View style={styles.rewardContent}>
            <MaterialCommunityIcons name="gift-open" size={40} color={colors.primary} />
            <View style={styles.rewardText}>
              <Text style={styles.rewardTitle}>প্রতিদিন পুরস্কার জিতুন</Text>
              <Text style={styles.rewardDesc}>বিজ্ঞাপন দেখে পয়েন্ট অর্জন করুন</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.rewardButton}
            onPress={() => {
              setPoints(points + 10);
            }}
          >
            <Text style={styles.rewardButtonText}>এখনই দেখুন</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* বিজ্ঞাপন এলাকা */}
      <View style={styles.adContainer}>
        <LinearGradient
          colors={['#E0E0E0', '#F5F5F5']}
          style={styles.adBanner}
        >
          <MaterialCommunityIcons name="speaker" size={30} color="#999" />
          <Text style={styles.adText}>বিজ্ঞাপন এলাকা</Text>
          <Text style={styles.adSubtext}>(AdMob / Start.io)</Text>
        </LinearGradient>
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );

  const PrayerScreen = () => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[colors.primary, colors.primaryLight]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <Text style={styles.screenTitle}>নামাজের সময়</Text>
      </LinearGradient>

      <View style={styles.contentPadding}>
        <View style={styles.prayerCard}>
          <PrayerRow name="ফজর" time="05:30" icon="sunrise" />
          <PrayerRow name="জোহর" time="12:45" icon="white-balance-sunny" />
          <PrayerRow name="আসর" time="15:30" icon="weather-sunny" />
          <PrayerRow name="মাগরিব" time="18:15" icon="sunset" />
          <PrayerRow name="ইশা" time="19:45" icon="moon-waning-crescent" />
        </View>

        <TouchableOpacity 
          style={styles.rewardButtonLarge}
          onPress={() => setPoints(points + 10)}
        >
          <MaterialCommunityIcons name="gift" size={24} color={colors.white} />
          <Text style={styles.rewardButtonLargeText}>বিজ্ঞাপন দেখে পুরস্কার পান</Text>
        </TouchableOpacity>

        <View style={styles.adContainer}>
          <LinearGradient
            colors={['#E0E0E0', '#F5F5F5']}
            style={styles.adBanner}
          >
            <Text style={styles.adText}>বিজ্ঞাপন এলাকা</Text>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );

  const QuranScreen = () => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[colors.primary, colors.primaryLight]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <Text style={styles.screenTitle}>পবিত্র কুরআন</Text>
      </LinearGradient>

      <View style={styles.contentPadding}>
        <View style={styles.quranCard}>
          <Text style={styles.quranSurah}>সূরা আল-ফাতিহা</Text>
          <Text style={styles.quranArabic}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </Text>
          <Text style={styles.quranTranslation}>
            শুরু করছি আল্লাহর নামে যিনি অত্যন্ত করুণাময়, অসীম দয়ালু।
          </Text>
        </View>

        <View style={styles.adContainer}>
          <LinearGradient
            colors={['#E0E0E0', '#F5F5F5']}
            style={styles.adBanner}
          >
            <Text style={styles.adText}>বিজ্ঞাপন এলাকা</Text>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'prayer':
        return <PrayerScreen />;
      case 'quran':
        return <QuranScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      {renderScreen()}
      
      {/* বটম নেভিগেশন */}
      <View style={styles.bottomNav}>
        <NavItem 
          icon="home" 
          label="হোম" 
          active={activeTab === 'home'}
          onPress={() => setActiveTab('home')}
          color={colors.primary}
        />
        <NavItem 
          icon="clock" 
          label="নামাজ" 
          active={activeTab === 'prayer'}
          onPress={() => setActiveTab('prayer')}
          color={colors.primary}
        />
        <NavItem 
          icon="book-open" 
          label="কুরআন" 
          active={activeTab === 'quran'}
          onPress={() => setActiveTab('quran')}
          color={colors.primary}
        />
        <NavItem 
          icon="menu" 
          label="আরও" 
          active={activeTab === 'more'}
          onPress={() => setActiveTab('more')}
          color={colors.primary}
        />
      </View>
    </SafeAreaView>
  );
}

// কম্পোনেন্টস
const QuickAccessCard = ({ icon, title, color, onPress }) => (
  <TouchableOpacity style={[styles.quickAccessCard, { borderLeftColor: color }]} onPress={onPress}>
    <MaterialCommunityIcons name={icon} size={28} color={color} />
    <Text style={styles.quickAccessTitle}>{title}</Text>
  </TouchableOpacity>
);

const FeatureCard = ({ icon, title, description, color, gradient }) => (
  <LinearGradient
    colors={gradient}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.featureCard}
  >
    <MaterialCommunityIcons name={icon} size={32} color="#fff" />
    <Text style={styles.featureCardTitle}>{title}</Text>
    <Text style={styles.featureCardDesc}>{description}</Text>
  </LinearGradient>
);

const PrayerRow = ({ name, time, icon }) => (
  <View style={styles.prayerRow}>
    <View style={styles.prayerRowLeft}>
      <MaterialCommunityIcons name={icon} size={24} color="#2E7D32" />
      <Text style={styles.prayerName}>{name}</Text>
    </View>
    <Text style={styles.prayerTime}>{time}</Text>
  </View>
);

const NavItem = ({ icon, label, active, onPress, color }) => (
  <TouchableOpacity 
    style={[styles.navItem, active && styles.activeNav]}
    onPress={onPress}
  >
    <View style={[styles.navIconContainer, active && { backgroundColor: `${color}15` }]}>
      <MaterialCommunityIcons 
        name={icon} 
        size={24} 
        color={active ? color : '#999'} 
      />
    </View>
    <Text style={[styles.navLabel, active && styles.activeLabel]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerGradient: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerContent: {
    gap: 15,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerGreeting: {
    fontSize: 14,
    color: '#c8e6c9',
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  pointsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pointsText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchPlaceholder: {
    color: '#c8e6c9',
    fontSize: 14,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 12,
  },
  quickAccessSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  quickAccessScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  quickAccessCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginRight: 12,
    width: 100,
    alignItems: 'center',
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  quickAccessTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#212121',
    marginTop: 8,
    textAlign: 'center',
  },
  featuresSection: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  featureCardTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  featureCardDesc: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
    textAlign: 'center',
  },
  rewardSection: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  rewardCard: {
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  rewardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  rewardText: {
    flex: 1,
  },
  rewardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  rewardDesc: {
    fontSize: 12,
    color: '#2E7D32',
    marginTop: 2,
  },
  rewardButton: {
    backgroundColor: '#1B5E20',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  rewardButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  rewardButtonLarge: {
    backgroundColor: '#2E7D32',
    marginVertical: 15,
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  rewardButtonLargeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  contentPadding: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  prayerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  prayerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  prayerRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  prayerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  prayerTime: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  quranCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  quranSurah: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 15,
  },
  quranArabic: {
    fontSize: 28,
    textAlign: 'right',
    color: '#333',
    marginBottom: 15,
    lineHeight: 36,
  },
  quranTranslation: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
  adContainer: {
    marginVertical: 15,
  },
  adBanner: {
    borderRadius: 12,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  adText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
  },
  adSubtext: {
    color: '#bbb',
    fontSize: 12,
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingBottom: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeNav: {
    backgroundColor: 'rgba(46, 125, 50, 0.05)',
  },
  navIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 11,
    color: '#999',
    marginTop: 5,
  },
  activeLabel: {
    color: '#2E7D32',
    fontWeight: '600',
  },
});
