import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import AddInput from "./components/AddMemo";

const ComponentContainer = styled.View`
	flex-direction: row;
`;

const InputContainer = styled.View`
	flex-direction: row;
	border-radius: 10px;
`;

const Input = styled.TextInput`
	font-size: 20px;
	background-color: white;
	width: 300px;
	margin-right: 20px;
	padding: 10px;
	margin-bottom: 20px;
	border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
	width: 50px;
	justify-content: center;
	align-items: center;
	background-color: whitesmoke;
	margin-bottom: 20px;
	border-radius: 50px;
`;

export default function App() {
	const [data, setData] = useState([]);
	const submitHandler = (value) => {
		setData((prevTodo) => {
			return [
				{
					value: value,
					key: Math.random().toString(),
				},
				...prevTodo,
			];
		});
	};
	return (
		<View>
			<AddInput submitHandler={submitHandler} />
		</View>
	);
}
