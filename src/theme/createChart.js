/**
 * .
 * @param {*} chartOptions .
 * @param {*} styleOptions .
 */
export default function createChart({ colorScale }, { labelStyle }) {
  return {
    pie: {
      width: 450,
      height: 350,
      padding: 0,
      colorScale,
      legend: {
        labelWidth: 150,
        style: {
          labels: {
            title: {
              fontSize: 16,
              fontFamily: '"Open Sans", sans-serif',
            },
          },
        },
      },
    },
    area: {
      colorScale,
    },
    group: {
      colorScale,
    },
    line: {
      offset: 70,
      width: 400,
      height: 350,
      colorScale: ["#0050FF", "#CCDCFF", "#DADADA", "#99B9FF"],
      parts: {
        parent: {
          minDomain: { y: 0 },
        },
      },
      strokeWidth: [4, 3],
      style: {
        data: {
          strokeWidth: 4,
        },
        labels: {
          ...labelStyle,
        },
      },
    },
    bar: {
      width: 400,
      height: 350,
      barWidth: 40,
      offset: 50,
      style: {
        data: {
          fill: colorScale[0],
        },
        labels: {
          ...labelStyle,
        },
      },
      legend: {
        labelWidth: 150,
      },
    },
    dependentAxis: {
      fixLabelOverlap: true,
      tickCount: 3,
    },
    axis: {
      labelWidth: 150,
      style: {
        tickLabels: {
          ...labelStyle,
        },
        axisLabels: {
          ...labelStyle,
        },
      },
    },
  };
}
