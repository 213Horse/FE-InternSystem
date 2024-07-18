import { Divider, Radio, Table } from 'antd';
import React, { useState } from 'react';

const TableComponent = ({ columns, dataSource , rowSelection = false}) => {

  
 
    return (
        <>
            <Divider />
            <Table   
            rowKey="id"
                rowSelection={{ 
                    ...rowSelection,
                }}      
                columns={columns}
                dataSource={dataSource}
                scroll={{
                    x: 'max-content',
                }}
                pagination={{
                    pageSize: 5,
                    position: ['bottomRight'],
                    showTotal: (total, range) => (
                        <span>
                            Showing {range[0]}-{range[1]} of {total}
                        </span>
                    ),
                }}
            />
        </>
    );
};

export default TableComponent;
