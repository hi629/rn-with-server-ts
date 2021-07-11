import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import AddInput from "./components/AddMemo";
import MemoList from "./components/MemoList";
import axios from "axios";
import { Memo } from "./types/memo";

export default function App() {
	const [data, setData] = useState();

	const fetchMemos = async () => {
		try {
			const response = await axios.get("http://localhost:3000/memo");
			setData(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const createMemo = async (memo: Memo) => {
		try {
			await axios.post("http://localhost:3000/memo", memo);
			fetchMemos();
		} catch (error) {
			console.error(error);
		}
	};

	const deleteMemo = async (memo: Memo) => {
		try {
			await axios.delete(`http://localhost:3000/memo/${memo.id}/delete`);
			fetchMemos();
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchMemos();
	}, []);

	return (
		<View>
			<AddInput submitAddMemo={createMemo} />
			<FlatList
				data={data}
				keyExtractor={(item) => item.key}
				renderItem={({ item }) => (
					<MemoList item={item} deleteMemo={deleteMemo} />
				)}
			/>
		</View>
	);
}
