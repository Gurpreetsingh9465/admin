import React from 'react';
import { Icon, Card, Col, Row } from 'antd';
import './css/dashboard.css';
import { Color } from './utils';

const numbers = [
    {
        icon: 'car',
        color: Color.green,
        title: 'Transaction',
        number: 20,
    },
    {
        icon: 'user',
        color: Color.blue,
        title: 'Registered Users',
        number: 500,
    },
    {
        icon: 'book',
        color: Color.purple,
        title: 'Reservations',
        number: 10,
    },
    {
        icon: 'poweroff',
        color: Color.sky,
        title: 'Total OCP',
        number: 1000,
    },
    {
        icon: 'poweroff',
        color: Color.green,
        title: 'Active OCP',
        number: 956,
    },
    {
        icon: 'heart',
        color: Color.red,
        title: 'Heartbeats',
        number: 4324,
    },
    {
        icon: 'link',
        color: Color.green,
        title: 'Connections',
        number: 'Active',
    },
    {
        icon: 'sync',
        color: Color.sky,
        title: 'OCPP Version',
        number: '1.6',
    }
]


function NumberCard({icon, color, title, number }) {
  return (
    <Card
      className="numberCard"
      bordered={false}
      bodyStyle={{ padding: 10 }}
    >
      <Icon className='iconWarp' style={{ color }} type={icon} />
      <div className='content'>
        <p className='title'>{title || 'No Title'}</p>
        <p className='number'>
          {number}
        </p>
      </div>
    </Card>
  )
}

class Dashboard extends React.Component {
      render() {
        const numberCards = numbers.map((item, key) => (
            <Col key={key} lg={6} md={12}>
              <NumberCard {...item} />
            </Col>
        ))
        return (
            <Row gutter={24}>
                { numberCards }
            </Row>
        );
      }
 }

 export default Dashboard;