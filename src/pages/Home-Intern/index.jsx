import React, { useState, useEffect } from 'react';
import { Menu, Layout, Table, message } from 'antd';
import { CalendarOutlined, CheckSquareOutlined, TeamOutlined, ProjectOutlined } from '@ant-design/icons';
import { fetchInterviewSchedule } from '../../services/internview-api';
import { getAllUsers } from '../../services/user-api';
import dayjs from 'dayjs';

const { Header, Content, Sider } = Layout;

function HomeIntern() {
  const [selectedMenu, setSelectedMenu] = useState('interviewSchedule');
  const [interviewData, setInterviewData] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tasksData, setTasksData] = useState([]);
  const [tasksLoading, setTasksLoading] = useState(false);
  const [groupsData, setGroupsData] = useState([]);
  const [groupsLoading, setGroupsLoading] = useState(false);
  const [projectsData, setProjectsData] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [projectTechnologies, setProjectTechnologies] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response.data.data);
      } catch (error) {
        message.error('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedMenu === 'interviewSchedule') {
      setLoading(true);
      fetchInterviewSchedule()
        .then(data => {
          console.log("interviewData", data.data);
          setInterviewData(data.data);
          setLoading(false);
        })
        .catch(error => {
          message.error('Failed to fetch interview schedule');
          setLoading(false);
        });
    }

    if (selectedMenu === 'tasks') {
      setTasksLoading(true);
      fetch('https://api-internsystem.amazingtech.vn/api/ReportTasks/get-all')
        .then(response => response.json())
        .then(data => {
          console.log("tasksData", data.data);
          setTasksData(data.data);
          setTasksLoading(false);
        })
        .catch(error => {
          message.error('Failed to fetch tasks');
          setTasksLoading(false);
        });
    }
  }, [selectedMenu]);


  useEffect(() => {
    if (selectedMenu === 'groups') {
      setGroupsLoading(true);
      fetch('https://api-internsystem.amazingtech.vn/api/NhomZalo/get-all')
        .then(response => response.json())
        .then(data => {
          console.log("groupsData", data.data);
          setGroupsData(data.data);
          setGroupsLoading(false);
        })
        .catch(error => {
          message.error('Failed to fetch groups');
          setGroupsLoading(false);
        });
    }

    if (selectedMenu === 'projects') {
      setProjectsLoading(true);
      Promise.all([
        fetch('https://api-internsystem.amazingtech.vn/api/DuAn/get-all').then(res => res.json()),
        fetch('https://api-internsystem.amazingtech.vn/api/CongNghe/get-all').then(res => res.json()),
        fetch('https://api-internsystem.amazingtech.vn/api/CongNgheDuAn/get-all').then(res => res.json())
      ])
      .then(([projectsRes, technologiesRes, projectTechnologiesRes]) => {
        const technologies = technologiesRes.data;
        const projectTechnologies = projectTechnologiesRes.data;
        const projects = projectsRes.data;

        // Add technology names to projects
        const projectsWithTech = projects.map(project => {
          const techIds = projectTechnologies
            .filter(pt => pt.idDuAn === project.id)
            .map(pt => pt.idCongNghe);

          const techNames = techIds
            .map(id => technologies.find(t => t.id === id)?.ten)
            .filter(Boolean)
            .join(', ');

          return { ...project, techNames };
        });

        setTechnologies(technologies);
        setProjectTechnologies(projectTechnologies);
        setProjectsData(projectsWithTech);
        setProjectsLoading(false);
      })
      .catch(error => {
        message.error('Failed to fetch projects');
        setProjectsLoading(false);
      });
    }
  

  }, [selectedMenu]);

  
  
  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'interviewSchedule':
        return (
          <Table
            dataSource={interviewData}
            loading={loading}
            rowKey="id"
            columns={[
              { title: 'ID', dataIndex: 'id', key: 'id' },
              {
                title: 'Interviewer',
                dataIndex: 'createdBy',
                key: 'createdBy',
                render: (userId) => {
                  const interviewer = users.find(user => user.id === userId);
                  return interviewer ? interviewer.hoVaTen : 'Unknown';
                },
              },
              {
                title: 'Interviewee',
                dataIndex: 'id',
                key: 'id',
                render: (interviewId) => {
                  const interviewee = users.find(user => user.internInfoId === interviewId);
                  return interviewee ? interviewee.hoVaTen : 'Unknown';
                },
              },
              {
                title: 'Interview Time',
                dataIndex: 'thoiGianPhongVan',
                key: 'thoiGianPhongVan',
                render: (thoiGianPhongVan) => {
                  console.log("date", thoiGianPhongVan);
                  return thoiGianPhongVan ? dayjs(thoiGianPhongVan).format('YYYY-MM-DD HH:mm:ss') : 'No Date';
                },
              },
              { title: 'Location', dataIndex: 'diaDiemPhongVan', key: 'diaDiemPhongVan' },
              { title: 'Email Confirmed', dataIndex: 'daXacNhanMail', key: 'daXacNhanMail', render: text => (text ? 'Yes' : 'No') },
              { title: 'Result', dataIndex: 'ketQua', key: 'ketQua' },
            ]}
          />
        );
      case 'tasks':
        return (
          <Table
            dataSource={tasksData}
            loading={tasksLoading}
            rowKey="id"
            columns={[
              { title: 'ID', dataIndex: 'id', key: 'id' },
              { title: 'Task Description', dataIndex: 'moTa', key: 'moTa' },
              { title: 'Report Content', dataIndex: 'noiDungBaoCao', key: 'noiDungBaoCao' },
              {
                title: 'Report Date',
                dataIndex: 'ngayBaoCao',
                key: 'ngayBaoCao',
                render: (date) => {
                  return date ? dayjs(date).format('YYYY-MM-DD HH:mm:ss') : 'No Date';
                },
              },
              { title: 'Status', dataIndex: 'trangThai', key: 'trangThai' },
              {
                title: 'Created By',
                dataIndex: 'createdBy',
                key: 'createdBy',
                render: (userId) => {
                  const creator = users.find(user => user.id === userId);
                  return creator ? creator.hoVaTen : 'Unknown';
                },
              },
              {
                title: 'Last Updated By',
                dataIndex: 'lastUpdatedBy',
                key: 'lastUpdatedBy',
                render: (userId) => {
                  const updater = users.find(user => user.id === userId);
                  return updater ? updater.hoVaTen : 'Unknown';
                },
              },
            ]}
          />
        );
        case 'groups':
          return (
            <Table
              dataSource={groupsData}
              loading={groupsLoading}
              rowKey="id"
              columns={[
                { title: 'ID', dataIndex: 'id', key: 'id' },
                { title: 'Group Name', dataIndex: 'tenNhom', key: 'tenNhom' },
                { title: 'Link', dataIndex: 'linkNhom', key: 'linkNhom' },
                { title: 'Is Common Group', dataIndex: 'isNhomChung', key: 'isNhomChung', render: text => (text ? 'Yes' : 'No') },
                { title: 'Created Time', dataIndex: 'createdTime', key: 'createdTime', render: (date) => dayjs(date).format('YYYY-MM-DD HH:mm:ss') },
                { title: 'Last Updated Time', dataIndex: 'lastUpdatedTime', key: 'lastUpdatedTime', render: (date) => dayjs(date).format('YYYY-MM-DD HH:mm:ss') },
                { title: 'Active', dataIndex: 'isActive', key: 'isActive', render: text => (text ? 'Yes' : 'No') },
                { title: 'Deleted', dataIndex: 'isDelete', key: 'isDelete', render: text => (text ? 'Yes' : 'No') },
              ]}
            />
          );
          case 'projects':
            return (
              <Table
                dataSource={projectsData}
                loading={projectsLoading}
                rowKey="id"
                columns={[
                  { title: 'ID', dataIndex: 'id', key: 'id' },
                  { title: 'Project No', dataIndex: 'idViTri', key: 'tenDuAn' },
                  { title: 'Technology Names', dataIndex: 'techNames', key: 'techNames' },
                  { title: 'Status', dataIndex: 'trangThai', key: 'trangThai' },
                ]}
              />
            );
      default:
        return <div>Welcome to Home Intern</div>;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: 0 }}>
        <h1 style={{ textAlign: 'center', color: '#4889E9' }}>Home Intern</h1>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            selectedKeys={[selectedMenu]}
            onClick={handleMenuClick}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="interviewSchedule" icon={<CalendarOutlined />}>
              Interview Schedule
            </Menu.Item>
            <Menu.Item key="tasks" icon={<CheckSquareOutlined />}>
              Tasks
            </Menu.Item>
            <Menu.Item key="groups" icon={<TeamOutlined />}>
              Groups
            </Menu.Item>
            <Menu.Item key="projects" icon={<ProjectOutlined />}>
              Projects
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
            }}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default HomeIntern;
