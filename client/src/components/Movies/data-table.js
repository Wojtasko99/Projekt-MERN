import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.tytul}
                </td>
                <td>
                    {this.props.obj.rezyser}
                </td>
                <td>
                    {this.props.obj.ocena}
                </td>
            </tr>
        );
    }
}

export default DataTable;