import React, { ReactNode, useState } from 'react';
import { useTable } from 'react-table';
import { Button } from '../button';
import { IoChevronDown } from 'react-icons/io5';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

export interface TableColumn {
    label: string;
    width?: string;
    dataIndex: string;
    render?: ReactNode;
}

interface CustomTableProps {
    // headers: TableColumn[];
    // data: { [key: string]: string | number | string[] | ReactNode }[];
    data: any[];
    columns: { label: string; accessor: string; width?: string }[];
    // check?: boolean;
    // className?: string;
    // width?: number;
    // pagation?: any;
}

const Table: React.FC<CustomTableProps> = ({ columns, data, ...props }) => {
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    // const handleCheckboxChange = (rowIndex: number) => {
    //     const updatedSelection = selectedRows.includes(rowIndex)
    //         ? selectedRows.filter((index) => index !== rowIndex)
    //         : [...selectedRows, rowIndex];
    //     setSelectedRows(updatedSelection);
    // };
    // const handleSelectAllChange = () => {
    //     if (selectAll) {
    //         setSelectedRows([]);
    //     } else {
    //         setSelectedRows(Array.from({ length: data.length }, (_, index) => index));
    //     }
    //     setSelectAll(!selectAll);
    // };

    const toggleRowSelection = (rowId: string) => {
        const isSelected = selectedRows.includes(rowId);

        if (isSelected) {
            setSelectedRows(selectedRows.filter((id) => id !== rowId));
        } else {
            setSelectedRows([...selectedRows, rowId]);
            // console.log([...selectedRows, rowId]);
        }
    };

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <>
            <div className="overflow-x-auto md:overflow-x-auto">
                <table {...getTableProps()} className="min-w-full bg-white lg:table-auto sm:table-auto md:table-fixed">
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                <th className="px-4 py-2">
                                    {/* Checkbox for selecting all rows */}
                                    <input
                                        type="checkbox"
                                        onChange={() => {
                                            // Toggle all row selections
                                            if (selectedRows.length === rows.length) {
                                                setSelectedRows([]);
                                            } else {
                                                const allRowIds = rows.map((row) => row.id);
                                                setSelectedRows(allRowIds);
                                            }
                                        }}
                                        checked={selectedRows.length === rows.length}
                                    />
                                </th>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{ width: column.width || 'auto' }}
                                        className="px-2 py-1 text-sm font-semibold text-black "
                                    >
                                        {column.render('label')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            const isSelected = selectedRows.includes(row.id);
                            return (
                                <tr {...row.getRowProps()}>
                                    <td className="px-4 py-2 ">
                                        {/* Checkbox for individual row selection */}
                                        <input
                                            type="checkbox"
                                            onChange={() => toggleRowSelection(row.id)}
                                            checked={isSelected}
                                        />
                                    </td>
                                    {row.cells.map((cell) => (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                width:
                                                    columns.find((col) => col.accessor === cell.column.id)?.width ||
                                                    'auto',
                                            }}
                                            className="px-2 py-1 text-sm "
                                        >
                                            {/* Check if the cell value is a ReactNode */}
                                            {React.isValidElement(cell.value) ? (
                                                cell.value // If it's a ReactNode, render it directly
                                            ) : (
                                                <div
                                                    style={{
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                    }}
                                                >
                                                    {cell.render('Cell')}
                                                </div>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="rounded-3xl flex items-center justify-between px-1 py-2 mt-2 text-base  bg-[#f8f9fb] mb-5">
                <div className="text-black">
                    {' '}
                    1 - <span className="text-gray-400">5 of 56</span>
                </div>
                <div className="flex items-center gap-4">
                    <p className="hidden text-gray-400 lg:block">The page you’re on</p>
                    <Button
                        rightIcon={<IoChevronDown />}
                        size={'sm'}
                        className="rounded-[12px] bg-white text-black text-base font-medium drop-shadow-sm border-[#CBD2DC50]"
                    >
                        1
                    </Button>
                    <span className="text-gray-400">|</span>
                    <Button
                        size={'sm'}
                        className="rounded-[12px] bg-white text-black text-base font-medium drop-shadow-sm border-[#CBD2DC50]"
                    >
                        <IoIosArrowRoundBack />
                    </Button>
                    <Button
                        size={'sm'}
                        className="rounded-[12px] bg-white text-black text-base font-medium drop-shadow-sm border-[#CBD2DC50]"
                    >
                        <IoIosArrowRoundForward />
                    </Button>
                </div>
            </div>
        </>
    );
};
export default Table;
