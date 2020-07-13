import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Products = props => {
  const classes = useStyles();
  
  return (
    <>
      <div className="cont">
        <h1 id="category">{props.products.activeCategory}</h1>
        <p className='cd'>Category Description Goes Here</p>
      </div>
      <GridList cellHeight={350} className={classes.gridList} cols={3}>
        {props.products.products.map((cat)=>
          <Card className={classes.root} key={cat.name}>
      
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="180"
                image={cat.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {cat.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
            Price: {cat.price}$ - inStock: {cat.inStock}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
          Add To Cart
              </Button>
              <Button size="small" color="primary">
          View Detailes
              </Button>
            </CardActions>

          </Card>,
        )}
      </GridList>

    </>
  );
};  



const mapStateToProps = state => ({
  products: state.product,
});

export default connect(mapStateToProps)(Products);