import React, { useState } from 'react'

function Search({ foodItems, setFoodItems }) {


    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (e) => {
        const searchQuery = e.target.value
        setSearchTerm(searchQuery)

        const filteredFood = foodItems.filter((foodItem) => {
            return foodItem.name.includes(searchTerm)
        })
        setFoodItems(filteredFood)
      };

  return (
    <div>
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search