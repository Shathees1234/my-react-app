import React, { useState } from "react";

function Search() {
    const [data, setData] = useState("");
    const fruits = [
        { name: "apple", image: "https://th.bing.com/th/id/OIP.FIhZHv7hehL-lRjEo7zmmQAAAA?pid=ImgDet&w=172&h=172&c=7&dpr=1.1" },
        { name: "mango", image: "https://th.bing.com/th/id/OIP.DqxZw_1WZXavzC0rY7L2MgHaHa?rs=1&pid=ImgDetMain" },
        { name: "banana", image: "https://th.bing.com/th/id/OIP.9uL9bdYXO1RW8GErkX9wBwHaE9?w=4000&h=2678&rs=1&pid=ImgDetMain" },
        
        // Add more fruits as needed
    ];

    const handleChange = (e) => {
        setData(e.target.value);
    };

    const filteredFruits = fruits.filter((fruit) =>
        fruit.name.toLowerCase().includes(data.toLowerCase())
    );

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Live Search Filter</h1>
            <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                style={{ fontSize: "30px", padding: "10px", width: "300px" }}
                value={data}
                aria-label="Search fruits"
            />
            {data.length > 0 && (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {filteredFruits.map((fruit) => (
                        <li key={fruit.name} style={{ fontSize: "20px", display: "flex", alignItems: "center", margin: "10px 0" }}>
                            <img src={fruit.image} alt={fruit.name} style={{marginLeft:"500px",width:"80px",height:"60px"}} />
                            {fruit.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Search;
