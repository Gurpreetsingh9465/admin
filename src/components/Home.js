import React from 'react';
import 'antd/dist/antd.css';
import Slider from './Sidebar';
import cookie from 'react-cookies';

class Home extends React.Component {
    constructor(props) {
      super(props);
    }
    // componentDidMount() {
    //     this.props.form.validateFields();
    // }
    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //       if (!err) {
    //         console.log('Received values of form: ', values);
    //       }
    //     });
    //   };
    
      render() {
        return (
            <div>
                <Slider content= {
                    <h1>Welcome {cookie.load('user')}</h1>
                }/>
            </div>
        );
      }
 }

 export default Home;
