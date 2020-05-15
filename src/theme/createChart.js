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
        orientation: "orizontal",
        x: 0,
        y: 0,
        style: { 
          labels: {
            title: { 
              fontSize: 16, 
              fontFamily: '"Open Sans", sans-serif'
            }
          }
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
      height: 400,
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
