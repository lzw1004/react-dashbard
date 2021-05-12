import React, { Component } from 'react';
import echarts from 'echarts';
import './chart.css';

class Chart extends Component {
    state = {
        chart: null,
    };
    componentDidMount() {
        const { chartId, option } = this.props; //继承父级传递的值
        const chartIdDiv = document.getElementById(chartId);
        if (chartIdDiv) {
            this.chart = echarts.init(chartIdDiv); //实例化echats画布
            if (this.chart) {
                this.renderChart(this.chart, option); //加载数据
            }
        }
        //
        window.addEventListener('resize', this.handleResize, false); //监听改变画布大小
    }

    componentDidUpdate(prevProps) {
        const { option } = this.props;
        if (prevProps.option !== option && this.chart) {
            this.renderChart(this.chart, option);
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize, false);
        if (this.chart) {
            this.chart.dispose();
            this.chart = null;
        }
    }

    //  放大缩小重新布局
    handleResize = () => {
        if (this.chart) {
            setTimeout(() => {
                this.chart.resize();
            });
        }
    };
    // 图表配置及渲染
    renderChart = (chart, option) => {
        const { handleClick } = this.props;
        chart.clear();
        // echarts.registerMap('china', chinadata);
        chart.setOption(option);
        chart.off('click'); // 要是不加上这行，事件会重复n次
        chart.on('click', params => {
            if (handleClick) {
                handleClick(params);
            }
        });
    };

    render() {
        return (
            <div id={this.props.chartId} className="chart-content">
                {this.props.children}
            </div>
        );
    }
}

export default Chart;
