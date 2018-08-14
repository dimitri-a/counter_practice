import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class cart extends Component {

  render() {
    return (
      <div>
       this is the first item: {this.props.items[0]}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    items:state.items
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(cart)
