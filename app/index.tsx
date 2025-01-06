import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import * as SecureStore from 'expo-secure-store'

export default function index() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const subscription = async () => {
      const token = await SecureStore.getItem('accessToken');
      setLoggedInUser(token ? true : false);
      setLoading(false);
    };
    subscription();
  }, [])

  return (
    <>
      {
        loading ? 
        <></>
        : (
          <Redirect href={!loggedInUser ? '/(routes)/onboarding' : '/(tabs)'} />
        )
      }
    </>
  );
}
