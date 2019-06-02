import React from 'react';
import { Form, Row, Col, Input, Button, Typography, Modal, Table } from 'antd';
const { Title } = Typography;

const data = [
  {
    key: '1',
    id: '45',
    version: 1.5,
    LatLng: '(-34.397, 150.644)',
    heartbeats: 500,
  },
  {
    key: '2',
    id: '5',
    version: 1.5,
    LatLng: '(-34.397, 150.644)',
    heartbeats: 500,
  },
  {
    key: '3',
    id: '20',
    version: 1.5,
    LatLng: '(-34.397, 150.644)',
    heartbeats: 500,
  },
];

const columns = [
    {
      title: 'ChargeBox ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: 'LatLng',
      dataIndex: 'LatLng',
      key: 'LatLng',
    },
    {
      title: 'HeartBeats',
      key: 'heartbeats',
      dataIndex: 'heartbeats',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
              <Button type="danger" onClick={()=>{ console.log(record); }}>
                  Delete
              </Button>
          )
    },
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
        name: 'boxId',
        placeholder: 'Search By Box Id',
        label: 'Box-ID'
    },
    {
        name: 'ocppV',
        placeholder: 'Search By OCPP Version',
        label: 'OCPP VERSION'
    },
    {
        name: 'latlng',
        placeholder: 'Search By Latitude Longitude',
        label: 'LatLng'
    },
    {
        name: 'address',
        placeholder: 'Search By Address',
        label: 'Address'
    }
]

class ChargePoint extends React.Component {
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    
    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
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

    getAddPoint() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item label='Charge Point ID'>
                    {getFieldDecorator('add')(<Input placeholder='Enter Id' />)}
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Search Box
                </Button>
            </Form>
        );
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    render() {
        return (
        <div style={{ margin: '24px 16px', padding: 24, backgroundColor:'#fff' }}>
            <Title level={4} >Search Charge Point</Title>
            <Form onSubmit={this.handleSearch}>
                <Row>{this.getFields()}</Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            Search
                        </Button>
                        <Button type="danger" style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            Clear
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.showModal}>
                            Add New
                        </Button>
                        <Modal
                            title="Add Charge Point"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            okText='Add'
                            >
                            {this.getAddPoint()}
                        </Modal>
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
