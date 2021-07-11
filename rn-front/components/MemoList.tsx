import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { Memo } from "../types/memo";

const ListContainer = styled.TouchableOpacity`
	background-color: rgb(250, 250, 250);
	border: 1px solid rgb(237, 237, 237);
	height: auto;
	width: 350px;
	margin-bottom: 30px;
	flex-direction: row;
	word-wrap: break-word;
`;

const ComponentContainer = styled.View`
	flex-direction: row;
	justify-content: center;
	height: auto;
	width: auto;
`;

const TextItemWrap = styled.View`
	margin-right: auto;
	margin-left: 10px;
`;

const TextItem = styled.Text`
	height: auto;
	font-size: 15px;
	margin-top: 10px;
`;

const IconContainer = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	margin-top: 15px;
	height: 40px;
`;

interface TodoListProps {
	item: { id: number; title: string; todo: string; highPriority: boolean };
	deleteMemo: (value: Memo) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
	return (
		<ComponentContainer>
			<ListContainer>
				<TextItemWrap>
					<TextItem>タイトル:{props.item.title}</TextItem>
					<TextItem>TODO:{props.item.todo}</TextItem>
					<TextItem>
						優先度:
						{props.item.highPriority ? (
							<TextItem>高</TextItem>
						) : (
							<TextItem>低</TextItem>
						)}
					</TextItem>
				</TextItemWrap>
				<IconContainer onPress={() => props.deleteMemo(props.item)}>
					<MaterialIcons name="delete" size={30} color="red" />
				</IconContainer>
			</ListContainer>
		</ComponentContainer>
	);
};

export default TodoList;
