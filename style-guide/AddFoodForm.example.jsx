import { useState } from "react";
import { Divider, Input } from "antd";

function AddFoodForm({ foodItems, setFoodItems }) {
  const [newFood, setNewFood] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const handleChange = (e) => {
    setNewFood({ ...newFood, [e.target.name]: e.target.value });
    console.log(newFood);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFoodItems([...foodItems, newFood]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={newFood.name}
        type="text"
        name="name"
        onChange={handleChange}
      />

      <label>Image</label>
      <Input
        value={newFood.image}
        type="text"
        name="image"
        onChange={handleChange}
      />