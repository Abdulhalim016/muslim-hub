# Start.io অ্যাড ইন্টিগ্রেশন গাইড

## Start.io কি?
Start.io একটি মোবাইল অ্যাড নেটওয়ার্ক যা AdMob এর সাথে একসাথে কাজ করে আপনার অ্যাপে বিজ্ঞাপন দেখাতে পারে।

## সেটআপ স্টেপস

### ১. Start.io ড্যাশবোর্ডে সাইন আপ করুন
- [Start.io ওয়েবসাইট](https://www.start.io/) এ যান
- একটি নতুন অ্যাকাউন্ট তৈরি করুন
- আপনার অ্যাপ রেজিস্টার করুন

### ২. App ID পান
Start.io ড্যাশবোর্ড থেকে আপনার App ID কপি করুন এবং নিচের ফাইলে পেস্ট করুন:

```
config/admob.ts
```

আপডেট করুন:
```typescript
export const STARTIO_CONFIG = {
  appId: 'YOUR_STARTIO_APP_ID', // এখানে আপনার App ID পেস্ট করুন
  enabled: true,
};
```

### ৩. Ad Unit IDs পান
Start.io ড্যাশবোর্ড থেকে বিভিন্ন অ্যাড ইউনিট আইডি পান:
- ব্যানার অ্যাড ইউনিট আইডি
- ইন্টারস্টিশিয়াল অ্যাড ইউনিট আইডি
- রিওয়ার্ডেড অ্যাড ইউনিট আইডি

এগুলো `config/admob.ts` ফাইলে আপডেট করুন।

### ৪. Android Manifest আপডেট করুন
`android/AndroidManifest.xml` ফাইলে নিচের পারমিশন যোগ করুন:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

### ৫. iOS Info.plist আপডেট করুন
`ios/Info.plist` ফাইলে নিচের কী যোগ করুন:

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```

## AdMob এবং Start.io একসাথে ব্যবহার করুন

আমাদের `AdManager` কম্পোনেন্ট স্বয়ংক্রিয়ভাবে AdMob এবং Start.io এর মধ্যে সুইচ করবে।

### ব্যবহার উদাহরণ:

```typescript
import { AdManager, AdService } from './components/AdManager';

// ব্যানার অ্যাড দেখান
<AdManager 
  adType="banner"
  onAdLoaded={() => console.log('Ad loaded')}
/>

// রিওয়ার্ডেড অ্যাড দেখান
<TouchableOpacity onPress={() => {
  AdService.showRewardedAd((reward) => {
    console.log(`আপনি ${reward} পয়েন্ট অর্জন করেছেন!`);
  });
}}>
  <Text>বিজ্ঞাপন দেখে পুরস্কার পান</Text>
</TouchableOpacity>
```

## টেস্টিং

ডেভেলপমেন্টের সময় টেস্ট অ্যাড ইউনিট আইডি ব্যবহার করুন:

```typescript
export const TEST_AD_UNITS = {
  banner: 'ca-app-pub-3940256099942544/6300978111',
  interstitial: 'ca-app-pub-3940256099942544/1033173712',
  rewarded: 'ca-app-pub-3940256099942544/5224354917',
};
```

## সমস্যা সমাধান

### অ্যাড লোড না হলে:
1. আপনার App ID সঠিক কি না চেক করুন
2. ইন্টারনেট কানেকশন চেক করুন
3. Start.io ড্যাশবোর্ডে অ্যাপ অনুমোদিত কি না চেক করুন

### রিওয়ার্ড কাজ না করলে:
1. রিওয়ার্ডেড অ্যাড ইউনিট আইডি সঠিক কি না চেক করুন
2. `AdService.showRewardedAd()` কল করার সময় কলব্যাক ফাংশন পাস করুন

## আরও তথ্য

- [Start.io ডকুমেন্টেশন](https://www.start.io/developers)
- [AdMob ডকুমেন্টেশন](https://admob.google.com/)
- [Expo Ads AdMob](https://docs.expo.dev/versions/latest/sdk/admob/)
