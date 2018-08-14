import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addtocart } from './actions/addtocart_action';

export class cart extends Component {

  onAdd = () => {
    console.log('value=', this.refs.txt.value);

    this.props.addtocart(this.refs.txt.value)
  }

  render() {

    console.log('items',this.props.items);
    return (
      <div>
        {/* <ul>
          {this.props.items.map(item) => (
         <li>item</li>
          )}
       </ul> */}

        <label>itemname to add</label> <input type="text" ref="txt" />
        <button onClick={this.onAdd}>add to cart</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps, { addtocart })(cart)
