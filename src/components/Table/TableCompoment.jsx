import { Select, Table } from 'antd';
import React from 'react';

const TableComponent = ({ columns, dataSource }) => {

    return (
        <Table
            rowSelection={{}}
            columns={columns}
            dataSource={dataSource}
            scroll={{
                x: 'max-content',


            }}
            style={{}}
            pagination={{
                pageSize: 5, position: ['bottomRight'],
                showTotal: (total, range) => (
                    <span >
                        Showing {range[0]}-{range[1]} of {total}
                    </span>
                ),
            }}
        />
    );
};

export default TableComponent;