import { View, Text, ScrollView, TouchableOpacity, StyleSheet }  from "react-native";
import React from "react";
import { categories, colors } from "../Constant";

const CategoriesFilter = ({ categoriesState, setCategoriesState }) => {
	const toggleCategory = (index) => {
		const updatedCategories = categoriesState.map((category, i) => {
		  return {
			...category,
			isSelected: i === index,
		  };
		});
		setCategoriesState(updatedCategories);
	  };
  
	return (
	  <View>
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
		  {categoriesState.map((category, index) => {
			return (
			  <TouchableOpacity
				key={index}
				onPress={() => toggleCategory(index)}
			  >
				<View
				  style={{
					backgroundColor: category.isSelected
					  ? colors.COLOR_PRIMARY
					  : colors.COLOR_LIGHT,
					marginRight: 36,
					borderRadius: 8,	
					paddingHorizontal: 16,
					paddingVertical: 10,
					shadowColor: '#000',
					shadowOffset: { width: 0, height: 4 },
					shadowOpacity: 0.1,
					shadowRadius: 7,
					marginVertical: 16,
				  }}
				>
				  <Text
					style={{
					  color: category.isSelected ? colors.COLOR_LIGHT : colors.COLOR_DARK,
					  fontSize: 18,
					}}
				  >
					{category.category}
				  </Text>
				</View>
			  </TouchableOpacity>
			);
		  })}
		</ScrollView>
	  </View>
	);
  };

export default CategoriesFilter;

const styles = StyleSheet.create({});
