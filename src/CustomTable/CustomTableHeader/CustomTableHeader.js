import React from 'react';
import PropTypes from 'prop-types';

import { lighten, makeStyles } from '@material-ui/core/styles';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';

function CustomTableHeader(props) {
    const { columns, order, orderBy, onRequestSort, sortable } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    function getLabel(column) {
        if (sortable) {
            return (
                <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={createSortHandler(column.id)}
                >
                    {column.label}
                </TableSortLabel>
            )
        } else {
            return column.label;
        }
    }

    return (
        <TableHead>
            <TableRow>
                {columns.map(column => (
                    <TableCell
                        key={column.id}
                        align={column.numeric ? 'right' : 'left'}
                        padding={column.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === column.id ? order : false}
                    >
                        { getLabel(column) }
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

CustomTableHeader.propTypes = {
    columns: PropTypes.array.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    sortable: PropTypes.bool
};

export default CustomTableHeader;
