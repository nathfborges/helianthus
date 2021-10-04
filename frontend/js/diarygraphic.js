const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
  ],
  datasets: [
    {
      type: 'line',
      label: 'volts',
      data: [127, 140, 115, 100],
      borderColor: '#4D75B8',
      yAxisID: 'volts',
      lineAtIndex: 2
    },
    {
      type: 'line',
      label: 'ampere',
      data: [1.7, 2.5, 3.7, 4.4],
      borderColor: '#EB5E00',
      yAxisID: 'ampere'
    },
    {
      type: 'line',
      label: 'power',
      data: [600, 150, 200, 400, 100],
      borderColor: '#B966FF',
      yAxisID: 'power',
    }
  ],
};

const config = {
  type: 'linear',
  data: data,
  options: {
    scales: {
      volts: {
        type: 'linear',
        position: 'left',
        stack: 'water',
        stackWeight: 1,
        offset: false,
      },
      ampere: {
        type: 'linear',
        position: 'left',
        stack: 'water',
        stackWeight: 1,
        offset: false,
      },
      power: {
        type: 'linear',
        position: 'left',
        stack: 'water',
        stackWeight: 1,
        offset: false,
      }
    },
  }
};


var chart = new Chart(document.getElementById("chart2").getContext("2d"), config);

