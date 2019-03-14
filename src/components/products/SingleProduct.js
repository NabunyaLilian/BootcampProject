import React from 'react';

const SingleProduct = ({id,name,quantity,price,minimumQuantity, category}) => {

    return(
        <tr>
            <td> {id}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{minimumQuantity}</td>
            <td>{category}</td>
        </tr>
    )
}
export default SingleProduct;