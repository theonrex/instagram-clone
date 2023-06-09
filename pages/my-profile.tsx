import React from 'react'
import UserProfile from '@/components/UserProfile/userProfile'
import UserProfileTab from '@/components/UserProfile/userProfileTab';
import Footer from '@/components/Footer/Footer';
export default function myProfile() {
  return (
    <div className="container mx-auto pt-5">
      <UserProfile />
      <UserProfileTab />
      <Footer/>
    </div>
  );
}
