import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {LearnScrollItem} from '../../components/LearnScrollItem';

const data = [
  {
    id: 1,
    ruWord: 'Папа',
    enWord: 'dad',
    image:
      'https://i.pinimg.com/originals/c7/25/bc/c725bc53140c199f3e2bab53ba28f83e.jpg',
  },
  {
    id: 2,
    ruWord: 'Мама',
    enWord: 'mom',
    image:
      'https://i.pinimg.com/originals/90/c9/09/90c909ccd9c2eb443f4f763000cfcc0b.jpg',
  },
  {
    id: 3,
    ruWord: 'брат',
    enWord: 'brother',
    image:
      'https://starwars-galaxy.ru/800/600/https/avatars.mds.yandex.net/get-pdb/2835179/1593b69c-4569-4f71-a856-4d5933dc7f94/s1200?webp=false',
  },
  {
    id: 4,
    ruWord: 'сестра',
    enWord: 'sister',
    image:
      'https://lh3.googleusercontent.com/proxy/h1cm_klKUwUllf6Eoh5FFrJxPt_niSJI1Xb1_9cP35XcTRoHy3Goo0Y-eFmHHNEQTIK0HpT94YgwE1NU1kDIDY8XbFwjQXeZ1JT-U2VxFKZLaaA5205GPeY',
  },
  {
    id: 5,
    ruWord: 'Папа 1',
    enWord: 'dad',
    image:
      'https://i.pinimg.com/originals/c7/25/bc/c725bc53140c199f3e2bab53ba28f83e.jpg',
  },
  {
    id: 6,
    ruWord: 'Мама 1',
    enWord: 'mom',
    image:
      'https://i.pinimg.com/originals/90/c9/09/90c909ccd9c2eb443f4f763000cfcc0b.jpg',
  },
];

export const LearnScreen = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      pagingEnabled={true}
      onScroll={scrollHandler}
      horizontal={true}
      scrollEventThrottle={20}
      style={styles.container}>
      {data.map((item, index) => (
        <LearnScrollItem
          key={item.id}
          ruWord={item.ruWord}
          enWord={item.enWord}
          image={item.image}
          length={data.length}
          translateX={translateX}
          index={index}
        />
      ))}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
