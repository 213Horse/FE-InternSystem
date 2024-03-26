import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Input, Space, Col, Row, Select, DatePicker, Radio } from 'antd';
const { RangePicker } = DatePicker;


import { EyeFilled } from '@ant-design/icons';


import '../../css/filter.css';

import Filter from './Filter';
import TableComponent from './TableCompoment';
import axios from '../../ultils/axios-custom';
import { callCreateIntern, callDeleteIntern, callEditIntern, callGetIntern, callGetKiThucTaps, callGetTruongs, callGetViTris } from '../../services/api';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';


const fieldCreateIntern_ = [
    {
        key: "mssv",
        label: "MSSV",

    },
    {
        key: "hoTen",
        label: "Họ và tên",

    },
    {
        key: "ngaySinh",
        label: "Ngày sinh",

    },
    {
        key: "sdt",
        label: "Số điện thoại",

    },
    {
        key: "diaChi",
        label: "Địa chỉ",

    },
    {
        key: "gioiTinh",
        label: "Giới tính",

    },
    {
        key: "emailCaNhan",
        label: "Email cá nhân",

    },
    {
        key: "emailTruong",
        label: "Email trường",

    },
    {
        key: "linkCV",
        label: "Link CV",

    },
    {
        key: "trinhDoTiengAnh",
        label: "Trình độ tiếng Anh",

    },
    {
        key: "viTriMongMuon",
        label: "Vị trí mong muốn",

    },
    {
        key: "idTruong",
        label: "ID Trường",

    },
    {
        key: "idKiThucTap",
        label: "ID Kỳ thực tập",

    }
];
const data2CreateIntern_ = {
    mssv: "",
    hoTen: "",
    ngaySinh: "",
    sdt: "",
    diaChi: "",
    gioiTinh: true,
    emailCaNhan: "",
    emailTruong: "",
    linkCV: "",
    trinhDoTiengAnh: "",
    viTriMongMuon: "",
    idTruong: "",
    idKiThucTap: ""
};
const Intern = () => {

    const fieldCreateInternUseSelect = ['viTriMongMuon', 'idTruong', 'idKiThucTap']
    const { Search } = Input;
    const [dataSource, setDataSource] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [dataGroup, setDataGroup] = useState([]);
    const [formValues, setFormValues] = useState({ 'tenNhom': '', 'linkNhom': '' });
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [openFormCreateGroup, setOpenFormCreateGroup] = useState(false);
    const [openFormAddUser, setOpenFormAddUser] = useState(false);
    const [internData, setInternData] = useState([]);
    const [data2Del, setData2Del] = useState({ 'userId': null, 'nhomZaloId': null });
    const [openModalCreateIntern, setOpenModalCreateIntern] = useState(false);
    const [addUser2GroupData, setaddUser2GroupData] = useState({
        nhomZaloId: null,
        userId: null,
        isMentor: false
    });
    const [openModalEditGroup, setOpenModalEditGroup] = useState(false);
    const [data2Edit, setData2Edit] = useState({
        id: null,
        hoTen: '',
        ngaySinh: '',
        startDate: '',
        endDate: '',
        sdt: '',
        diaChi: '',
        gioiTinh: '',
        emailCaNhan: '',
        linkCV: '',
        trinhDoTiengAnh: '',
        idTruong: '',
        round: '',
    });
    const [data2CreateIntern, setData2CreateIntern] = useState(data2CreateIntern_);
    const [currentRecord, setCurrentRecord] = useState({})
    const [open, setOpen] = useState(false);

    const [showForm, setShowForm] = useState(false);
    const accessToken = localStorage.getItem('access_token');
    const headers = { 'Authorization': `Bearer ${accessToken}` };


    const [openViewDetail, setOpenViewDetail] = useState(false);

    const [fieldCreateIntern, setFieldCreateIntern] = useState(fieldCreateIntern_);
    const [optionTruongs, setOptionTruongs] = useState([]);
    const [optionKiThucTaps, setOptionKiThucTaps] = useState([]);
    const [optionViTriMongMuons, setOptionViTriMongMuons] = useState([]);
    useEffect(() => {
        fetchInternList();
    }, []);
    const fetchInternList = async () => {
        try {
            const response = await callGetIntern();
            const data = response.data.map((item, index) => ({ ...item, key: item.id }));
            setDataSource(data);
            setFilteredData(data);
        } catch (error) {
            console.log(error);
        }

    }
    // Set Vertical Property
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const formItemLayout = formLayout === 'vertical'
        ? {
            labelCol: {
                span: 4,
            },
            wrapperCol: {
                span: 23,
            },
        }
        : null;

    // Modal


    const handleAddIntern = () => {
        setShowForm(true);
        callGetTruongs().then((response) => {
            let data = response.data.map((item, index) => ({ value: item.id, label: item.ten }))
            setOptionTruongs(data);
        })
        callGetViTris().then((response) => {
            let data = response.data.map((item, index) => ({ value: item.id, label: item.ten }))
            setOptionViTriMongMuons(data);
        })
        callGetKiThucTaps().then((response) => {
            let data = response.data.map((item, index) => ({ value: item.id, label: item.ten }))
            setOptionKiThucTaps(data);
        })
        setOpenModalCreateIntern(true);
    };



    const handleCloseForm = () => {
        setShowForm(false);
    };




    const options = [
        { value: '1', label: 'Option 1', color: 'orange' },
        { value: '2', label: 'Option 2', color: 'blue' },
        { value: '3', label: 'Option 3', color: 'green' },
    ];

    const columns = [
        {
            title: 'Intern ID',
            dataIndex: 'id',
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
        },
        {
            title: 'Finish Date',
            dataIndex: 'endDate',
        },
        {
            title: 'Full Name',
            dataIndex: 'hoTen',


        },
        {
            title: 'Date Of Birth',
            dataIndex: 'ngaySinh',


        },
        {
            title: 'Phone Number',
            dataIndex: 'sdt',

        },
        {
            title: 'Position',
            dataIndex: 'viTriMongMuon',

        },
        {
            title: 'School',
            dataIndex: 'truongHoc',

        },
        {
            title: 'Address',
            dataIndex: 'diaChi',

        },
        {
            title: 'Email',
            dataIndex: 'emailCaNhan',

        },
        {
            title: 'CV',
            dataIndex: 'linkCV',
            render: (text) => (
                <a href={text} style={{ textDecoration: 'underline', color: 'black' }}>Link</a>
            )

        },
        {
            title: 'Comments',
            dataIndex: 'comment',
            render: (text) => (

                <div style={{ textAlign: 'center' }}><EyeFilled /></div>
            )
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Project',
            dataIndex: 'duAn',
        },
        {
            title: 'Group Zalo',
            dataIndex: 'nhomZalo',
            render: (data) => {
                let a = ''
                data.map((item, index) => { a = a + item + ', ' })
                return a
            }
        },
        {
            title: 'Mentor',
            dataIndex: 'mentor',
        },
        {
            title: 'Status',
            dataIndex: 'status',

        },
        {
            title: 'Report Process',
            dataIndex: 'reportProcess',
        },
        {
            title: 'Button',
            dataIndex: 'button',
            render: (text, record) => {

                return (
                    <>
                        <Button type="primary" onClick={() => handleViewDetail(record)}>
                            View
                        </Button>
                    </>
                )
            },
        },
    ]
    const fieldView = ["Intern ID", "Full Name", "Phone Number", "Position", "School", "Address", "Email", "Link CV", "Mentor", "Project", "Group Zalo", "Role"]
    const handleViewDetail = (record) => {
        console.log(record);
        setOpen(true);
        setOpenViewDetail(true)
        setCurrentRecord(record);
    }
    const handleExportExcel = () => {

        try {


        } catch (error) {
            console.log(error);
        }
    }
    const handleEditIntern = () => {
        if (selectedRowKeys.length === 0) {
            alert('Vui lòng chọn nhóm cần sửa');
            return;
        }
        console.log(dataSource.find((item) => item.id === selectedRowKeys[selectedRowKeys.length - 1]));
        setData2Edit(dataSource.find((item) => item.id === selectedRowKeys[selectedRowKeys.length - 1]))

        setOpenModalEditGroup(true)

    }
    const handleEditInternOk = () => {
        const data = data2Edit;

        if (!data.startDate || !data.endDate || !data.ngaySinh) {
            alert('Vui lòng nhập đầy đủ thông tin');
            return;

        }
        data.gioiTinh = data.gioiTinh === 'Nam';
        data.ngaySinh = dayjs(data.ngaySinh, "DD/MM/YYYY").format("YYYY-MM-DD");
        data.startDate = dayjs(data.startDate, "DD/MM/YYYY").format("YYYY-MM-DD");
        data.endDate = dayjs(data.endDate, "DD/MM/YYYY").format("YYYY-MM-DD");
        callEditIntern(data).then((response) => {
            console.log(response);
            toast.success('Sửa thông tin thành công');
            fetchInternList();
            setOpenModalEditGroup(false);
            handleSelectedRowKeysChange([]);
        }).catch((error) => {
            console.log(error);
        })
    }


    const handleDeleteIntern = async () => {
        if (selectedRowKeys.length === 0) {
            alert('Vui lòng chọn nhóm cần xóa');
            return;
        }
        try {

            await Promise.all(
                selectedRowKeys.map((item) =>
                    callDeleteIntern(item)
                )
            );

            setSelectedRowKeys([]);
            await fetchInternList();
            toast.success('Delete group success');
        } catch (error) {
            console.log(error);
            toast.error('Error: ' + error.message);
        }
    }


    const handleSelectedRowKeysChange = (keys) => {
        setSelectedRowKeys(keys);
    };
    const handleCancel = () => {
        setOpen(false);
        setDataGroup([]);
        setOpenFormCreateGroup(false);
        setOpenFormAddUser(false);

        setOpenModalEditGroup(false);
    }
    const handleChangeEditValue = (e) => {
        const { name, value } = e.target;
        setData2Edit(prevData => ({
            ...prevData,
            [name]: value
        }));
    };


    const handleDateChange = (date, dateString, field) => {
        setData2Edit((prevData) => ({ ...prevData, [field]: dateString }));
    };

    const handleChangeInputCreateIntern = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setData2CreateIntern((prevData) => ({ ...prevData, [name]: value }));
    }
    const handleAddInternOk = () => {
        callCreateIntern(data2CreateIntern).then((response) => {
            console.log(response);
            toast.success('Thêm mới thành công');
            setOpenModalCreateIntern(false);
            fetchInternList();
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <div>
                <h1 style={{ marginLeft: '10px', color: '#8A2BE2' }}>Confirm CV</h1>
                <br></br>
                <div>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{ margin: '20px', width: '33%' }}
                    />
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: '#6537b1' }}>Send Email</Button>
                    {/* <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'green' }} onClick={handleExportExcel}>Export Excel</Button> */}
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'orange' }} onClick={handleEditIntern}>Edit</Button>
                    <Button size={'large'} type="primary" style={{ width: '160px', margin: '20px', backgroundColor: 'red' }} onClick={handleDeleteIntern}>Delete</Button>
                    <Button onClick={handleAddIntern} size={'large'} type="primary" style={{ width: '160px', margin: '20px 10px 20px 20px', backgroundColor: 'blue' }} >Add New Intern</Button>

                </div>
                <br></br>
            </div>


            <div>
                {/* Filter */}
                <Filter />

                {/* Table Show Data */}
                <TableComponent columns={columns} dataSource={dataSource} onSelectedRowKeysChange={handleSelectedRowKeysChange} />


                {/* View Detail */}
                <Modal
                    centered
                    open={openViewDetail}
                    onOk={() => setOpenViewDetail(false)}
                    onCancel={() => setOpenViewDetail(false)}
                    width={1000}
                    footer={null}
                    title={'View Detail'}
                >

                    <Row gutter={[34, 20]}>
                        {columns.map((item, index) => {
                            if (fieldView.includes(item.title))
                                return (
                                    <Col span={8} key={index}>
                                        <div>{item.title}</div>

                                        <Input value={currentRecord[item.dataIndex]} />
                                    </Col>
                                )
                        })}
                    </Row>
                </Modal>

                {/* Edit Intern */}
                <Modal
                    title="Edit Intern"
                    centered
                    open={openModalEditGroup}

                    onCancel={() => handleCancel()}
                    width={1200}
                    footer={
                        <Button type="primary" onClick={() => handleEditInternOk()}>Confirm</Button>
                    }
                >

                    <Row gutter={[30, 10]}>
                        <Col span={6}>
                            <div>Họ và tên</div>
                            <Input
                                style={{ width: '100%' }}
                                name="hoTen"
                                onChange={handleChangeEditValue}
                                value={data2Edit.hoTen}
                            />

                        </Col>
                        <Col span={6}>
                            <div>Ngày sinh</div>

                            <DatePicker
                                value={data2Edit.ngaySinh ? dayjs(data2Edit.ngaySinh, "DD/MM/YYYY") : null}
                                format="DD/MM/YYYY"
                                onChange={(date, dateString) =>
                                    handleDateChange(date, dateString, "ngaySinh")
                                }
                                style={{ width: "100%" }}
                            />
                        </Col>

                        <Col span={6}>
                            <div>Ngày bắt đầu</div>
                            <DatePicker
                                value={data2Edit.startDate ? dayjs(data2Edit.startDate, "DD/MM/YYYY") : null}
                                format="DD/MM/YYYY"
                                onChange={(date, dateString) =>
                                    handleDateChange(date, dateString, "startDate")
                                }
                                style={{ width: "100%" }}
                            />
                        </Col>
                        <Col span={6}>
                            <div>Ngày kết thúc</div>
                            <DatePicker
                                value={data2Edit.endDate ? dayjs(data2Edit.endDate, "DD/MM/YYYY") : ""}
                                format="DD/MM/YYYY"
                                onChange={(date, dateString) =>
                                    handleDateChange(date, dateString, "endDate")
                                }
                                style={{ width: "100%" }}
                            />
                        </Col>


                        <Col span={6}>
                            <div>Số điện thoại</div>
                            <Input
                                style={{ width: '100%' }}
                                name="sdt"
                                onChange={handleChangeEditValue}
                                value={data2Edit.sdt}
                            />
                        </Col>
                        <Col span={6}>
                            <div>Địa chỉ</div>
                            <Input
                                style={{ width: '100%' }}
                                name="diaChi"
                                onChange={handleChangeEditValue}
                                value={data2Edit.diaChi}
                            />
                        </Col>
                        <Col span={6}>
                            <div>Giới tính</div>
                            <Radio.Group
                                onChange={handleChangeEditValue}
                                value={data2Edit.gioiTinh}
                                name="gioiTinh"
                            >
                                <Radio value="Nam">Nam</Radio>
                                <Radio value="Nữ">Nữ</Radio>
                            </Radio.Group>
                        </Col>
                        <Col span={6}>
                            <div>Email cá nhân</div>
                            <Input
                                style={{ width: '100%' }}
                                name="emailCaNhan"
                                onChange={handleChangeEditValue}
                                value={data2Edit.emailCaNhan}
                            />
                        </Col>

                        <Col span={6}>
                            <div>Link CV</div>
                            <Input
                                style={{ width: '100%' }}
                                name="linkCV"
                                onChange={handleChangeEditValue}
                                value={data2Edit.linkCV}
                            />
                        </Col>
                        <Col span={6}>
                            <div>Trình độ tiếng Anh</div>
                            <Input
                                style={{ width: '100%' }}
                                name="trinhDoTiengAnh"
                                onChange={handleChangeEditValue}
                                value={data2Edit.trinhDoTiengAnh}
                            />
                        </Col>
                        <Col span={6}>
                            <div>ID Trường</div>
                            <Input
                                style={{ width: '100%' }}
                                name="idTruong"
                                onChange={handleChangeEditValue}
                                value={data2Edit.idTruong}
                            />
                        </Col>
                        <Col span={6}>
                            <div>Round</div>
                            <Input
                                style={{ width: '100%' }}
                                name="round"
                                onChange={handleChangeEditValue}
                                value={data2Edit.round}
                            />
                        </Col>
                    </Row>
                </Modal>

                {/* Add New Intern */}
                <Modal
                    title="Add New Intern"
                    centered
                    open={openModalCreateIntern}
                    onCancel={() => setOpenModalCreateIntern(false)}
                    onOk={handleAddInternOk}
                    width={1200}    >
                    <Row gutter={[30, 10]}>
                        {fieldCreateIntern.map(field => {
                            if (fieldCreateInternUseSelect.includes(field.key)) {
                                return (
                                    <Col span={8} key={field.key}>
                                        <div>{field.label}</div>
                                        <Select options={field.key === 'idTruong' ? optionTruongs : field.key === 'idKiThucTap' ? optionKiThucTaps : optionViTriMongMuons} style={{ width: "100%" }} onChange={(value => handleChangeInputCreateIntern({ target: { name: field.key, value } }))}></Select>
                                    </Col>
                                )

                            }
                            if (field.key === 'ngaySinh') {
                                return (
                                    <Col span={8} key={field.key}>
                                        <div>{field.label}</div>
                                        <DatePicker
                                            format="YYYY-MM-DD"
                                            style={{ width: "100%" }}
                                            name='ngaySinh'
                                            onChange={(date, dateString) =>
                                                handleChangeInputCreateIntern({ target: { name: 'ngaySinh', value: dateString } })
                                            }
                                        />
                                    </Col>
                                )

                            }
                            if (field.key === 'gioiTinh') {
                                return (
                                    <Col span={8} key={field.key}>
                                        <div>{field.label}</div>
                                        <Radio.Group onChange={(e) => handleChangeInputCreateIntern({ target: { name: 'gioiTinh', value: e.target.value } })} value={data2CreateIntern.gioiTinh}>
                                            <Radio value={true}>Nam</Radio>
                                            <Radio value={false}>Nữ</Radio>
                                        </Radio.Group>
                                    </Col>
                                )

                            }
                            return (
                                <Col span={8} key={field.key}>
                                    <div>{field.label}</div>
                                    <Input name={field.key} value={data2CreateIntern[field.key]} onChange={handleChangeInputCreateIntern} />
                                </Col>
                            )
                        })}
                    </Row>

                </Modal>
            </div>


        </>
    );
}

export default Intern;