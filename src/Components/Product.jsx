import { useState } from "react";
import { useEffect } from "react";
import CardComponent from "./CardComponent";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";

import "./Product.css"

const Product = () => {
  const [state, setState] = useState([]);
  console.log(state)
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  
  const result = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const res = await response.json();
    console.log(res[0].title);
    setState(res);
  };

  const category = async () => {
    try {
      let response1;
  
      if (select === "All Categoery") {
        
        response1 = await fetch("https://fakestoreapi.com/products");
      } else {
        response1 = await fetch(
          `https://fakestoreapi.com/products/category/${select}`
        );
      }
  
      if (!response1.ok) {
       console.log("error");
        return;
      }
  
      const result1 = await response1.json();
      setState(result1);
    } catch (error) {
      console.error(error.message);
    }
  };
  

  useEffect(() => {
    category();
  }, [select]);

  

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const handleSelect = (e) => {
    setSelect(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    result();
  }, []);
  return (
    <>
      <Navbar
        handleSelect={handleSelect}
        handleSearch={handleSearch}
        value={search}
      />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {state.filter((item)=>{
            return item.title.toLowerCase() === " " ? item : item.title.toLowerCase().includes(search)
          }).map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
              <CardComponent
                image={item.image}
                title={item.title}
                price={item.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Product;
