import { createContext } from "react";
import { Product } from "../utility/Product";
export const myContext = createContext("");
export const newContext = createContext([{id:1001,name:"Laptop",price:70000}]);

// {id:1001,name:"Laptop",price:70000}