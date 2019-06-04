import React from 'react';
import { Form, Row, Col, Input, Button, Typography, Table, DatePicker } from 'antd';
const { Title } = Typography;

const data = [
  {
    key: '1',
    id: '45',
    name: 'Noobmaster',
    date: 'Jul 30 2019',
    stime: '10:50',
    etime: '11:50'
  },
  {
    key: '2',
    id: '45',
    name: 'Noobmaster',
    date: 'Jul 30 2019',
    stime: '10:50',
    etime: '11:50'
  },
  {
    key: '3',
    id: '45',
    name: 'Noobmaster',
    date: 'Jul 30 2019',
    stime: '10:50',
    etime: '11:50'
  }
];

const columns = [
    {
      title: 'Reservation ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
        title: 'User Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
        title: 'Start Time',
        dataIndex: 'stime',
        key: 'stime',
    },
    {
        title: 'End Time',
        dataIndex: 'etime',
        key: 'etime',
    }
];

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    }
};

const inputFields = [
    {
        name: 'name',
        placeholder: 'Search By Name',
        label: 'Name'
    },
    {
        name: 'email',
        placeholder: 'Search By Email',
        label: 'email'
    },
    {
        name: 'address',
        placeholder: 'Search By Address',
        label: 'address'
    }
]

class Reservation extends React.Component {
    
    getFields() {
        const { getFieldDecorator } = this.props.form;
        const children = [];
        inputFields.forEach((value, key)=>{
            children.push(
                <Form.Item style={{ textAlign: 'right' }} {...formItemLayout} key={key} label={value.label}>
                    {getFieldDecorator(value.name)(<Input placeholder={value.placeholder} />)}
                </Form.Item>
            );
        });
        return children;
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
            this.handleReset();
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    render() {
        return (
        <div style={{ margin: '24px 16px', padding: 24, backgroundColor:'#fff' }}>
            <Title level={4} >Reservation</Title>
            <Form onSubmit={this.handleSearch}>
                <Row>{this.getFields()}</Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            Get
                        </Button>
                    </Col>
                </Row>
            </Form>
            <br/>
            <Table columns={columns} dataSource={data} />
        </div>
        );
    }
}

export default Form.create({ name: 'Reservation' })(Reservation);
