import React from 'react';
;
import styles from './productSelect.scss';
import DownArrow from 'react-material-icons/icons/navigation/arrow-drop-down';

import classNames from 'classnames';

class ProductSelect extends React.Component{
  renderProducts( product ){
    if(product.selected == true){return}
      else{
    return(
        <h4 key={product.key} className="productList" onClick={(event)=>this.props.productClickUpdate(product.key)}>{product.name}</h4>
      )
  }
  }

  render(){
    let productClass = classNames(
            'product',
            {
                "helio": (this.props.product == 'HelioSight' && this.props.productContainer !== 'productSelectContainerOpen'),
                "forsight":(this.props.product == 'ForSight' && this.props.productContainer !== 'productSelectContainerOpen')
            }
        );

   

    let arrowColor = '#000';
    if((this.props.product == 'HelioSight' || this.props.product == 'ForSight') && this.props.productContainer !== 'productSelectContainerOpen'){
      arrowColor='#fff';
    }    
    return(
      <div id={this.props.productContainer} onClick={this.props.handleProductClick}>
      	<h4 className={productClass}>{this.props.product}</h4>
      	<DownArrow id="productArrow" style={{color: arrowColor, 'width': '36px', 'height': '27px'}} />
        <hr id={this.props.showProducts}/>
      	<div id={this.props.showProducts}>
      	   {this.props.products.map(this.renderProducts, this)}
      	</div>
      </div>
  )
  }
}


export default ProductSelect;