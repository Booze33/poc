import Slide from '@/components/onboarding/slide';
import Slider from '@/components/onboarding/slider';
import { onBoardingSlides } from '@/configs/constants';
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function OnboardingScreen() {
  const [index, setIndex] = useState(0);
  const prev = onBoardingSlides[index - 1];
  const next = onBoardingSlides[index + 1];

  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={prev && <Slide slide={prev} totalSlides={onBoardingSlides.length} />}
        next={next && <Slide slide={next} totalSlides={onBoardingSlides.length} />}
      >

      </Slider>
    </GestureHandlerRootView>
  );
}
