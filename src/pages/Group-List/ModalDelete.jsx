import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const ModalDelete = (props) => {
    const { isModalDeleteOpen, setIsModalDeleteOpen, selectedRows, deleteGroupZalo, fetchGroupsZalo } = props;

    const handleOk = async () => {
      if(selectedRows.length === 1) deleteGroupZalo(selectedRows[0]?.id);
      setIsModalDeleteOpen(false);
      await fetchGroupsZalo();
    };

    const handleCancel = () => {
      setIsModalDeleteOpen(false);
    };

    console.log("tenNhom", selectedRows[0]?.tenNhom);
    return (
        <>
            <Modal title="Modal Delete" open={isModalDeleteOpen} footer={() => { return <Button onClick={handleOk}>Yes</Button>}} onOk={handleOk} onCancel={handleCancel}>
                <p style={{display:"inline-block", marginRight: "15px"}}>Are you want to delete group?</p><b>{selectedRows?.length == 1 && selectedRows[0]?.tenNhom}</b>
            </Modal>
        </>
    );
};
export default ModalDelete;
