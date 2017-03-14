import React, { Component, PropTypes } from 'react'
import fetch from 'isomorphic-fetch'
import Page from './Page'
import PagesContainer from '../containers'

const Pages = ({
  pages,
  onReloadPages
}) => (
  <div>
    <button
      className='button'
      onClick={() => onReloadPages()}>
      Reload Pages
    </button>
    <hr />
    <table className='table'>
    <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          this.pages.map((page) => (
            <Page
              key={page.id}
              id={page.id}
              title={page.title} />
          ))
        }
      </tbody>
    </table>
  </div>
)

PagesContainer.propTypes = {
  pages: PropTypes.array.isRequired,
  onReloadPages: PropTypes.func.isRequired
}

export default Pages