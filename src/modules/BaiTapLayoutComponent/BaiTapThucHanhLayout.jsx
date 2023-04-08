import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-dark">
          <div className='container'>
            <div className="row">
              <div className="p-0 col-12">
                  <Header />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
            <div className="row">
                <div className="p-0 col-12">
                    <Body />
                </div>
            </div>
          </div>
          <div className="container-fluid bg-dark">
          <div className='container'>
            <div className="row">
              <div className="p-0 col-12">
                  <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
