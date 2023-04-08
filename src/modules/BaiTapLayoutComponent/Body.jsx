import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
  render() {
    return (
        <div className="row">
            <div className="p-0 col-12">
                <Banner />
            </div>
            <div className="p-0 col-12">
                <Item />
            </div>
        </div>
    )
  }
}
