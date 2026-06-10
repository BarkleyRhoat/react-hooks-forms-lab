import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [search, setSearch] = useState("");
	const [itemList, setItemList] = useState(items);

	function handleSearchChange(event) {
		setSearch(event.target.value);
	}

	function handleCategoryChange(event) {
		setSelectedCategory(event.target.value);
	}

	function onItemFormSubmit(newItem) {
		setItemList([...itemList, newItem]);
	}
	const itemsToDisplay = itemList.filter((item) => {
		return ((search === "" || item.name.includes(search)) &&
			(selectedCategory === "All" || item.category === selectedCategory)
		);
	});

	return (
		<div className="ShoppingList">
			<ItemForm onItemFormSubmit={onItemFormSubmit} />
			<Filter
				onCategoryChange={handleCategoryChange}
				onSearchChange={handleSearchChange}
				search={search}
			/>
			<ul className="Items">
				{itemsToDisplay.map((item) => (
					<Item key={item.id} name={item.name} category={item.category} />
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
