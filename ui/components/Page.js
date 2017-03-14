// Page.js
import React, { Component, PropTypes } from 'react'

export default class Page extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const { id, title } = this.props

    return (
      <tr>
        <th>{id}</th>
        <td>{title}</td>
        <td>
          <a href='javascript:void(0)'>Show</a>
        </td>
      </tr>
    )
  }
}