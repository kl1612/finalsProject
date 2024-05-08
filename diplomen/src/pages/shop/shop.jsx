import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
    return(
        <div className="shop">

            <div className="shopTile">
                <h1> Магазин за хранителни стоки "Летящият холандец" </h1>
            </div>
            <div className="products">
                {" "}
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}
            </div>
        </div>
    );
};