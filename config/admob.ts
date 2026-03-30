// AdMob Configuration
// আপনার AdMob App ID এবং Ad Unit ID দিয়ে এগুলো রিপ্লেস করুন

export const ADMOB_CONFIG = {
  // AdMob App ID (Google Play Console থেকে পাবেন)
  appId: 'ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy',
  
  // Banner Ad Unit IDs
  bannerAdUnitId: 'ca-app-pub-3940256099942544/6300978111', // Test Banner Ad
  
  // Rewarded Ad Unit ID
  rewardedAdUnitId: 'ca-app-pub-3940256099942544/5224354917', // Test Rewarded Ad
  
  // Interstitial Ad Unit ID
  interstitialAdUnitId: 'ca-app-pub-3940256099942544/1033173712', // Test Interstitial Ad
};

// Test Ad Unit IDs (ডেভেলপমেন্টের সময় ব্যবহার করুন)
export const TEST_AD_UNITS = {
  banner: 'ca-app-pub-3940256099942544/6300978111',
  interstitial: 'ca-app-pub-3940256099942544/1033173712',
  rewarded: 'ca-app-pub-3940256099942544/5224354917',
  rewardedInterstitial: 'ca-app-pub-3940256099942544/5354046494',
  native: 'ca-app-pub-3940256099942544/2247696110',
};

// Production Ad Unit IDs (লাইভ অ্যাপের জন্য)
export const PRODUCTION_AD_UNITS = {
  banner: 'ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy', // আপনার Banner Ad Unit ID
  interstitial: 'ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy', // আপনার Interstitial Ad Unit ID
  rewarded: 'ca-app-pub-xxxxxxxxxxxxxxxx/yyyyyyyyyy', // আপনার Rewarded Ad Unit ID
};

// ============================================
// Start.io Configuration
// ============================================
export const STARTIO_CONFIG = {
  // Start.io App ID (Start.io ড্যাশবোর্ড থেকে পাবেন)
  appId: 'YOUR_STARTIO_APP_ID',
  
  // Start.io Ad Unit IDs
  bannerAdUnitId: 'YOUR_STARTIO_BANNER_AD_UNIT_ID',
  interstitialAdUnitId: 'YOUR_STARTIO_INTERSTITIAL_AD_UNIT_ID',
  rewardedAdUnitId: 'YOUR_STARTIO_REWARDED_AD_UNIT_ID',
  
  // Start.io সক্ষম করুন
  enabled: true,
  
  // Start.io এর জন্য ব্যাকআপ হিসেবে ব্যবহার করুন (AdMob ফেইল হলে)
  useAsBackup: true,
};

// ============================================
// Ad Network Priority (অগ্রাধিকার)
// ============================================
export const AD_NETWORK_PRIORITY = {
  primary: 'admob',      // প্রথমে AdMob ব্যবহার করুন
  secondary: 'startio',  // তারপর Start.io ব্যবহার করুন
  fallback: 'none',      // যদি কোনো অ্যাড লোড না হয়
};

// ============================================
// Ad Display Settings
// ============================================
export const AD_DISPLAY_SETTINGS = {
  // ব্যানার অ্যাড দেখানোর ফ্রিকোয়েন্সি (প্রতি কত স্ক্রিনে একবার)
  bannerFrequency: 2,
  
  // ইন্টারস্টিশিয়াল অ্যাড দেখানোর ফ্রিকোয়েন্সি
  interstitialFrequency: 5,
  
  // রিওয়ার্ডেড অ্যাড সবসময় দেখান
  alwaysShowRewarded: true,
  
  // অ্যাড দেখানোর আগে অপেক্ষার সময় (মিলিসেকেন্ড)
  adLoadDelay: 1000,
};

// ============================================
// Reward Settings
// ============================================
export const REWARD_SETTINGS = {
  // রিওয়ার্ডেড অ্যাড দেখলে কত পয়েন্ট পাবেন
  rewardedAdPoints: 10,
  
  // ইন্টারস্টিশিয়াল অ্যাড দেখলে কত পয়েন্ট পাবেন
  interstitialAdPoints: 5,
  
  // ব্যানার অ্যাড দেখলে কত পয়েন্ট পাবেন
  bannerAdPoints: 1,
};
