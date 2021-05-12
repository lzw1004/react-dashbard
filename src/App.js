import React, { Component } from 'react';
import './App.css';
import Chart from './components/chart';
import echarts from 'echarts';
import Axios from './utils/axios';
import { DatePicker, Button } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
import moment from 'moment';
moment.locale('zh-cn');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                haha
                <Button>button</Button>
            </React.Fragment>
        );
    }
}

export default App;
