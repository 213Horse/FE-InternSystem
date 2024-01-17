import { log } from 'console';
import React, { ReactNode, useState } from 'react';

export interface TableColumn {
    label: string;
    width?: string;
    dataIndex: string;
    render?: ReactNode;
}
interface CustomTableProps {
    headers: TableColumn[];
    data: { [key: string]: string | number | string[] | ReactNode }[];
    check?: boolean;
    className?: string;
}

const Table: React.FC<CustomTableProps> = ({ headers, data, check, className, ...props }) => {
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const handleCheckboxChange = (rowIndex: number) => {
        const updatedSelection = selectedRows.includes(rowIndex)
            ? selectedRows.filter((index) => index !== rowIndex)
            : [...selectedRows, rowIndex];

        setSelectedRows(updatedSelection);
    };
    const handleSelectAllChange = () => {
        if (selectAll) {
            setSelectedRows([]);
        } else {
            setSelectedRows(Array.from({ length: data.length }, (_, index) => index));
        }
        setSelectAll(!selectAll);
    };
    return (
        <div className="overflow-x-auto">
            <table className={`${className} min-w-full `} {...props}>
                <thead className="bg-white">
                    <tr>
                        {check ? (
                            <th className="py-2 text-left w-[20px]">
                                <input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} />
                            </th>
                        ) : (
                            ''
                        )}
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                scope="col"
                                style={{ width: header.width || 'auto' }}
                                className="px-2 py-1 text-left text-sm font-bold text-black tracking-wider"
                            >
                                {header.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white ">
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {check ? (
                                <td className="py-3 whitespace-nowrap text-sm text-black">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(rowIndex)}
                                        onChange={() => handleCheckboxChange(rowIndex)}
                                    />
                                </td>
                            ) : (
                                ''
                            )}
                            {headers.map((header, colIndex) => (
                                <td
                                    key={colIndex}
                                    style={{ width: header.width || 'auto' }}
                                    className="px-2 py-3  text-left text-sm text-black"
                                >
                                    {row[header.dataIndex]}
                                    {header.render}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Table;
