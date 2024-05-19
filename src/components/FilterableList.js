import React from "react";

const FilterableList = ({items}) => {
    const [filter, setFilter] = React.useState("");

    const filterItems = items.filter((item) => 
        item.toLowerCase().includes(filter.toLowerCase())
    );

    return(
        <div>
            <input 
                type="text" 
                placeholder="Filter items" 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}/>
            <ul>
                {filterItems.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default FilterableList