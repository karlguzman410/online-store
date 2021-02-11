import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$10",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._SwLaDkWHaG-p9nUWpLmVgHaHa%26pid%3DApi&f=1",
  },
  {
    id: 2,
    name: "Laptop",
    description: "Gaming laptop",
    price: "$2000",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.inckphXYRssjXPMSEvw-rAHaE8%26pid%3DApi&f=1",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {/* mock products */}
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
