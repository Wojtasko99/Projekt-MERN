import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.favMovie}
                </td>
                <td>
                    {this.props.obj.country}
                </td>
                <td>
                    {this.props.obj.types}
                </td>
                <td>
                    {this.props.obj.rate}
                </td>
            </tr>
        );
    }
}

export default DataTable;