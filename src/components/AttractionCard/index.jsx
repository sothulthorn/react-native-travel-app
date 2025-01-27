import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const AttractionCard = ({imageSrc, title, location, style}) => {
  return (
    <View style={[styles.card, style]}>
      <Image source={{uri: imageSrc}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../../assets/location.png')}
        />
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

export default AttractionCard;
