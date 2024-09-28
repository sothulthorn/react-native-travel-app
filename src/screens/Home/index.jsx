import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';

const ALL = 'All';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );

      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        style={{flexGrow: 1, margin: 32}}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items found.</Text>
        }
        ListHeaderComponent={
          <View>
            <Title text="Where do" style={{fontWeight: 'normal'}} />
            <Title text="you want to go?" />

            <Title text="Explore Attractions" style={styles.subtitle} />

            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
              categories={['All', ...categories]}
            />
          </View>
        }
        keyExtractor={item => String(item?.id)}
        renderItem={({item, index}) => (
          <AttractionCard
            key={item.id}
            style={index % 2 === 0 ? {marginRight: 12} : {}}
            imageSrc={item.images?.length ? item.images[0] : null}
            title={item.name}
            location={item.city}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
