import React from 'react'
import UserProfile from '@/components/UserProfile/userProfile'
import UserProfileTab from '@/components/UserProfile/userProfileTab';

export default function myProfile() {
  return (
    <div className="container mx-auto">
      <UserProfile />
      <UserProfileTab />
    </div>
  );
}
