import { Col, Image, Row, Table, Tag } from "antd";
import React from "react";
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Option',
    key: 'option',
    dataIndex: 'option',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (text, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];

const data = [
  {
    key: '1',
    name: `${<Image width='10rem' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiIFjCOZ-mMeqxd2ryrneiHedE8G9S0AboA&usqp=CAU'/>}John Brown`,
    age: 32,
    gender: 'New York No. 1 Lake Park',
    option: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    gender: 'London No. 1 Lake Park',
    option: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    gender: 'Sidney No. 1 Lake Park',
    option: ['cool', 'teacher'],
  },
];

const PatientList = () => {
  return (
    <Row>
      <Col span={24} style={{padding:'1rem',marginTop:'1.5rem'}}>
      <Table columns={columns} dataSource={data} />
      </Col>
    </Row>
  );
};

export default PatientList;
