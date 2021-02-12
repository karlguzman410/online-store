import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Label } from "@material-ui/icons";

const CartItem = ({ item, handleUpdateQty, handleRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            disabled={item.quantity === 1}
            onClick={() => handleUpdateQty(item.id, item.quantity - 1)}
          >
            <RemoveIcon />
          </Button>

          <Typography>Quantity: {item.quantity}</Typography>

          <Button
            tyoe="button"
            size="small"
            onClick={() => handleUpdateQty(item.id, item.quantity + 1)}
          >
            <AddIcon />
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
