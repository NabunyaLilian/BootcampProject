import React, { Component } from 'react';
import { connect } from "react-redux";
import {fetchProduct} from './actions/productsAction'
import PropTypes from "prop-types";
import SingleProduct from './SingleProduct';

export class Products extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        products: [],
        error: null,
    };
  }

 componentDidMount = () =>{
    this.props.fetchProduct()
 }
  render() {
    const {products} = this.props
    return (
      <div>
        <table className="table table-striped table-hover table-responsive-sm|md" >
        <thead>
            <tr>
            <th scope="col">Product_Id</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col"> Minimum Quantity</th>
            <th scope="col">Category</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product) => {
                return <SingleProduct 
                 key={ product.product_id }
                 id= {product.product_id}
                 name = {product.name} 
                 quantity = {product.quantity }
                 price ={product.price}
                 minimumQuantity ={product.min_quantity}
                 category ={product.category}
                 />
            })}
        </tbody>
      </table> 
      </div>
    );
  }
}

Products.propTypes = {
    fetchProduct: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  products: state.productsReducer.products,
  fetchproductserror: state.productsReducer.error,
});



export default connect(mapStateToProps, {fetchProduct})(Products);
