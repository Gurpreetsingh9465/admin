import React from 'react';
import { Form, Row, Col, Input, Button, Typography, Table, DatePicker } from 'antd';
const { Title } = Typography;

const data = [
  {
    key: '1',
    id: '45',
    boxid: '1',
    date: 'Jul 30 2019',
    stime: '10:50',
    etime: '11:50',
    heartbeats: '100',
    price: '25$'
  }
];

const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Charge Box ID',
      dataIndex: 'boxid',
      key: 'boxid',
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
    },
    {
      title: 'HeartBeats',
      key: 'heartbeats',
      dataIndex: 'heartbeats',
    },
    {
        title: 'Price',
        key: 'price',
        dataIndex: 'price'
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
        name: 'transactionId',
        placeholder: 'Search By Transaction Id',
        label: 'Transaction-ID'
    },
    {
        name: 'boxId',
        placeholder: 'Search By Box Id',
        label: 'Box-ID'
    },
    {
        name: 'tagId',
        placeholder: 'Search By OCPP Tag Id',
        label: 'Tag Id'
    }
]

class ChargePoint extends React.Component {
    
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
        children.push(
            <Form.Item style={{ width: '100%' }} {...formItemLayout} key={4} label="Time Period">
                {getFieldDecorator('period')(<DatePicker.RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </Form.Item>
        )
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
            <Title level={4} >Search Transaction</Title>
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

export default Form.create({ name: 'ChargePoint' })(ChargePoint);
