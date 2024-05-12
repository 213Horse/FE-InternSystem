import React, { useEffect, useState } from 'react';
import { Button, Drawer, Modal } from 'antd';
import TableComponent from '../../components/Table/TableCompoment';
import { callGetAllUsersInZaloGroup } from '../../services/group-api';
import moment from 'moment';
const ModalView = (props) => {
    const { isModalViewOpen, setIsModalViewOpen, groupSelectedView } = props;

    console.log('groupSelectedView', groupSelectedView);

    const [groupData, setGroupData] = useState(null);


    const columns = [
        {
            title: 'User Id',
            dataIndex: 'userId',
        },
        {
            title: 'User Name',
            dataIndex: 'userName',
        },
        {
            title: 'Mentor',
            dataIndex: 'isMentor',
            render: (isMentor) => (isMentor ? 'Yes' : 'No'),
        },
        {
            title: 'Group Zalo',
            dataIndex: 'nhomZalo',
        },
        {
            title: 'Join Time',
            dataIndex: 'joinedTime',
        },
        {
            title: 'Left Time',
            dataIndex: 'leftTime',
        },
    ];

    console.log('groupData', groupData);
    useEffect(() => {
        const fetchGroupData = async () => {
            try {
                const response = await callGetAllUsersInZaloGroup(groupSelectedView.id);
                const modifiedGroupData = response.data.map(user => ({
                    ...user,
                    joinedTime: moment(user.joinedTime).format("DD/MM/YYYY"),
                    leftTime: moment(user.leftTime).format("DD/MM/YYYY"),
                }));
                setGroupData(modifiedGroupData); // Update group data state with fetched data
            } catch (error) {
                console.error('Failed to fetch group data:', error);
            }
        };

        if (isModalViewOpen && groupSelectedView) {
            fetchGroupData(); // Fetch group data when the modal is opened and groupSelectedView is available
        }
    }, [isModalViewOpen, groupSelectedView]);
    useEffect(() => {} , [])
    const handleOk = () => {
        setIsModalViewOpen(false);
    };
    const handleCancel = () => {
        setIsModalViewOpen(false);
    };
    return (
        <>
            <Drawer width={1000}  title="View Group" open={isModalViewOpen} footer={() => { return <Button onClick={handleOk}>Close</Button>}} onOk={handleOk} onClose={handleCancel}>
                <b>id: </b><a>{groupSelectedView.id}</a><br/>
                <b style={{display:"inline-block", marginRight:"10px"}}>Group link: </b><p style={{display:"inline-block"}}>{groupSelectedView.linkNhom}</p><br/>
                <b style={{display:"inline-block", marginRight:"10px"}}>Group Name: </b><p style={{display:"inline-block"}}>{groupSelectedView.tenNhom}</p>
            <TableComponent columns={columns} dataSource={groupData} />
           
            </Drawer>
        </>
    );
};
export default ModalView;
