import React, { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodItems, setFoodItems] = useState(foods);
  console.log(foodItems);

  return (
    <div className="App">
      <AddFoodForm foodItems={foodItems} setFoodItems={setFoodItems} />

      <Button> Hide Form / Add New Food </Button>

      <Search foodItems={foodItems} setFoodItems={setFoodItems} />

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodItems.map((food) => (
          <FoodBox key={food.name} food={food} />
        ))}
      </Row>
    </div>
  );
}

export default App;