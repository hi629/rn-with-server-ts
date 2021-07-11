import React, { useState } from "react";
import styled from "styled-components/native";
import { CheckBox } from "react-native-elements";

const ComponentContainer = styled.View`
	margin: 0 auto;
	margin-top: 20px;
`;

const InputContainer = styled.View`
	border-radius: 10px;
`;

const Input = styled.TextInput`
	font-size: 15px;
	width: 100%;
	padding: 10px;
	margin-bottom: 20px;
`;

const SubmitButton = styled.TouchableOpacity`
	width: 300px;
	justify-content: center;
	align-items: center;
	background-color: #1976d2;
	margin-bottom: 20px;
	padding: 10px;
`;

const SubmitButtonText = styled.Text`
	color: #fff;
`;

interface AddInputProps {
	submitAddMemo: (value: any) => void;
}

const AddInput: React.FC<AddInputProps> = ({ submitAddMemo }) => {
	const [title, setTitle] = useState<string>();
	const [todo, setTodo] = useState<string>();
	const [isHighPriority, setIsHighPriority] = useState(false);
	const onChangeTitle = (text: string) => {
		setTitle(text);
	};
	const onChangeTodo = (text: string) => {
		setTodo(text);
	};
	const toggleCheckBox = () => {
		setIsHighPriority(!isHighPriority);
	};

	const submit = () => {
		submitAddMemo({
			title: title,
			todo: todo,
			highPriority: isHighPriority,
		});
		setTitle("");
		setTodo("");
		setIsHighPriority(false);
	};

	return (
		<ComponentContainer>
			<InputContainer>
				<Input
					placeholder="タイトル入力"
					onChangeText={onChangeTitle}
					value={title}
				/>
				<Input
					placeholder="TODO内容を入力"
					onChangeText={onChangeTodo}
					value={todo}
				/>
				<CheckBox
					title="優先度高"
					checked={isHighPriority}
					onPress={toggleCheckBox}
				/>
			</InputContainer>
			<SubmitButton onPress={() => submit()}>
				<SubmitButtonText>タスク作成</SubmitButtonText>
			</SubmitButton>
		</ComponentContainer>
	);
};

export default AddInput;
