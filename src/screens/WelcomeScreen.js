import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../../assets/images/Logo-removebg-preview.png")}
				style={{ marginTop: 30 }}
			/>

			<Text style={{ color: "#000", fontSize: 22, fontWeight: "bold" }}>
				Demystifying Accessibility
			</Text>

			<Text
				style={{
					fontSize: 42,
					fontWeight: "bold",
					color: "#000",
					marginTop: 44,
					marginBottom: 40,
				}}
			>
				Access Wayfinder
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#87bfd7",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#000", fontWeight: "700" }}>
					Let's Go
				</Text>
			</TouchableOpacity>
			
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
