import React, { Component } from "react";
import * as echarts from "echarts";

class MapChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.chart = null;
  }

  componentDidMount() {
    this.initChart();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  async initChart() {
    if (!this.chartRef.current) return;

    this.chart = echarts.init(this.chartRef.current);

    // https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json
    const chinaJson = require("../data/100000_full.json");
    echarts.registerMap("china", chinaJson);

    const hospitalData = [
      // tpye字段记录地图着色映射 1-ADHD&ASD 2-ADHD 3-ASD
      { name: "北京市", brief: "BJ", hospitals: 3, doctors: 9, type: 1 },
      { name: "上海市", brief: "SH", hospitals: 2, doctors: 3, type: 2 },
      { name: "广东省", brief: "GD", hospitals: 2, doctors: 2, type: 3 },
      { name: "四川省", brief: "SC", hospitals: 1, doctors: 1, type: 1 },
    ];

    const option = {
      animation: true,
      backgroundColor: "transparent",
      title: {
        text: "ADHD/ASD可诊地图",
        subtext: "ADHD/ASD Diagnosis Map",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
        zoom: 5,
        roam: true,
        formatter: function (params) {
          const data = hospitalData.find((item) => item.name === params.name);
          if (data) {
            return `${params.name}：<br>${data.hospitals}家医院<br>${data.doctors}位医生可诊`;
          }
          return params.name + ": 暂无数据";
        },
      },
      visualMap: {
        show: false,
        min: 1,
        max: 3,
        inRange: {
          color: ["#fce7f3", "#dbeafe", "#dcfce7"],
        },
      },
      series: [
        {
          name: "中国",
          type: "map",
          map: "china",
          roam: false,
          selectedMode: false,
          label: {
            show: true,
            fontSize: 8,
            color: "#333",
          },
          itemStyle: {
            areaColor: "#e5e7eb",
            borderColor: "#fff",
            borderWidth: 1,
          },
          emphasis: {
            label: {
              show: true,
              color: "#000",
            },
            itemStyle: {
              areaColor: "#fce7f3",
            },
          },
          data: hospitalData.map((item) => ({
            name: item.name,
            value: item.type || 0,
          })),
        },
      ],
    };

    this.chart.setOption(option);

    // 添加点击事件处理
    this.chart.on("click", (params) => {
      const data = hospitalData.find((item) => item.name === params.name);
      if (data && data.brief) {
        const element = document.getElementById(data.brief);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  }

  render() {
    return (
      <div
        ref={this.chartRef}
        style={{
          width: "100%",
          height: "500px",
        }}
      />
    );
  }
}

export default MapChart;
