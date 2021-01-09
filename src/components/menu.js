import React, { Component } from 'react';
import plain from './images/plain.jpg';
import pepperoni from './images/pepperoni.jpg';
import veggie from './images/veggie.jpeg';
import meat from './images/meat.jpg';
import hawaiian from './images/hawaiian.jpg';
import bbq from './images/bbq.jpg';
import Slice from './slice';
import './css/menu.css';

function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
        <Slice
        img={plain}
        type="Plain"
        description="It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?"
        price="$1.00"/>
        <Slice
        img={pepperoni}
        type="Pepperoni"
        description="A classic slice with cheese, sauce, and guess what else...that's right, pepperoni"
        price="$1.00"/>
        <Slice
        img={veggie}
        type="Veggie"
        description="Trying to be healthy but still want pizza? Try our Veggie Slice for guilt free pleasure"
        price="$1.00"/>
        <Slice
        img={meat}
        type="Meat Lover"
        description="Pepperoni not enough for you? Well this slice has pepperoni, meatballs, and sausage. "
        price="$1.00"/>
        <Slice
        img={hawaiian}
        type="Hawaiian"
        description="We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza."
        price="$1.00"/>
        <Slice
        img={bbq}
        type="BBQ"
        description="You have to try this delicious slice!"
        price="$1.00"/>
      </div>
    </div>
  );
}

export default Menu;
