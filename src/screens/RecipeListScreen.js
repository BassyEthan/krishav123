
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { categories } from "../Constant";


const RecipeListScreen = () => {


    const categoriesArray = []


    categories.map((category) => {




        let selected = category.id === "01" ? true : false


       


        return categoriesArray.push({
            ...category,
            isSelected: selected
        })
    })


    const [categoriesState, setCategoriesState] = useState(categoriesArray)


    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
            {/* render header */}
             <Header headerText={"Mission Inclusion"} headerIcon={"bell-o"} />
    {/* Add a decorative line below "Hello" */}
    <View style={{ borderBottomWidth: 2, borderBottomColor: '#ccc', marginTop: 10 }} />

            


            {/* Categories filter */}


            <View style={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
                {/* Categories list */}
                <CategoriesFilter categoriesState={categoriesState} setCategoriesState={setCategoriesState}/>
            </View>


            {/* Recipe List Filter */}


            <View style={{ marginTop: 22, flex: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Places</Text>
                {/* Recipes list */}


                <RecipeCard categoriesState={categoriesState}/>
            </View>
        </SafeAreaView>
    );
};


export default RecipeListScreen;


const styles = StyleSheet.create({});