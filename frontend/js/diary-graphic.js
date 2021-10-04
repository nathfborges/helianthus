window.onload = function(){ 
  const data = {
  labels: [
    '17:20',
    '17:30',
    '17:40',
    '17:50',
  ],
  datasets: [
    {
      type: 'line',
      label: 'Tensão',
      data: [127, 140, 115, 100],
      borderColor: '#4D75B8',
      yAxisID: 'volts',
      lineAtIndex: 2
    },
    {
      type: 'line',
      label: 'Corrente',
      data: [1.7, 2.5, 3.7, 4.4],
      borderColor: '#EB5E00',
      yAxisID: 'ampere'
    },
    {
      type: 'line',
      label: 'Potência',
      data: [6000, 150000, 200000, 400, 6000],
      borderColor: '#B966FF',
      yAxisID: 'power',
    }
  ],
};


const getOrCreateTooltip = (chart) => {
  let tooltipEL = chart.canvas.parentNode.querySelector('div');
  if (!tooltipEL) {
    tooltipEL = document.createElement('DIV');
    tooltipEL.classList.add('tooltipDesign');
    tooltipUL = document.createElement('UL');
    tooltipUL.classList.add('tooltipul');
    tooltipEL.appendChild(tooltipUL);

    tooltipEL.appendChild(tooltipUL);
    chart.canvas.parentNode.appendChild(tooltipEL);
  }
  return tooltipEL;
};


const externalTooltipHandler = (context) => {
  const {chart, tooltip} = context;
  const tooltipEL = getOrCreateTooltip(chart);

  if (tooltip.opacity === 0) {
    tooltipEL.style.opacity = 0;
    return;
  }

  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map (b => b.lines);
    const tooltipLI = document.createElement('LI');

    
    titleLines.forEach(title => {
      tooltipUL.appendChild(tooltipLI);
      const tooltipSPAN = document.createElement('SPAN');
      tooltipSPAN.classList.add('spanHour')
      tooltipLI.appendChild(tooltipSPAN);
       
      const tooltipHour = document.createElement('SPAN');
      const tooltipHourText = document.createTextNode('Hora')
      tooltipHour.appendChild(tooltipHourText);
      tooltipSPAN.appendChild(tooltipHour);

      const tooltipTitleP = document.createElement('P');
      const tooltipTitle = document.createTextNode(title);
      tooltipTitleP.appendChild(tooltipTitle);
      tooltipSPAN.appendChild(tooltipTitleP);
    });

    bodyLines.forEach(body => {

      const tooltipBodySPAN = document.createElement('SPAN');
      tooltipBodySPAN.classList.add('spanValues');
      tooltipLI.appendChild(tooltipBodySPAN);

      body.forEach(bodyItem=> {
        const bodyDivided = bodyItem.split(": ")
        const bodyLabelSpan = document.createElement('SPAN');
        const bodyValueP = document.createElement('p');
        const bodylabelText =  document.createTextNode(bodyDivided[0])
        var medida = " ";
        unit = bodyDivided[0];
        switch (unit) {
          case "Tensão":
            medida = 'v';
            tooltipBodySPAN.style.gridArea = 'tensao';
            tooltipBodySPAN.style.borderRight = '#C4C4C4 solid 1px';
            break;
          case "Potência":
            medida = 'kWh';
            tooltipBodySPAN.style.gridArea = 'potencia';
            tooltipBodySPAN.style.borderTop = '#C4C4C4 solid 1px';
            bodyLabelSpan.style.marginTop = '7px';
            bodyValueP.style.fontSize = '18px';
            bodyValueP.style.marginBottom = '10px';

            break;
          case "Corrente":
            medida = 'A';
            tooltipBodySPAN.style.gridArea = 'corrente'
            break;
        };

        const bodyValueText =  document.createTextNode(bodyDivided[1] + medida)


        bodyLabelSpan.appendChild(bodylabelText);
        bodyValueP.appendChild(bodyValueText);

        tooltipBodySPAN.appendChild(bodyLabelSpan);
        tooltipBodySPAN.appendChild(bodyValueP);
        tooltipLI.appendChild(tooltipBodySPAN);
      })
           
    });

    const ULnode = tooltipEL.querySelector('ul');

    while (ULnode.firstChild) {
      ULnode.firstChild.remove()
    }

    ULnode.appendChild(tooltipLI);
    tooltipEL.style.opacity = 1;

    const { offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
    tooltipEL.style.left = positionY + tooltip.caretX + 120 + 'px';
  }
};




const config = {
  type: 'linear',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
  },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    tooltip: {
      enabled: false,
      position: 'nearest',
    },
    scales: {
      xAxis: {
        grid: {
          display: true,
        },
      },
      volts: {
        type: 'linear',
        position: 'left',
        stack: 'water',
        stackWeight: 1,
        offset: true,
        grid :{
          display: true,
          drawBorder: true,
          drawOnChartArea: false,
          drawTicks: true,
          tickLength: 10,
          circular: true,
          zeroLineWidth: 3,
          zeroLineColor: 'red'
        },
      },
      ampere: {
        type: 'linear',
        position: 'left',
        stack: 'water',
        stackWeight: 1,
        offset: true,
        grid :{
          display: true,
          drawBorder: true,
          drawOnChartArea: false,
          drawTicks: true,
          tickLength: 10,
        },
      },
      power: {
        type: 'linear',
        position: 'left',
        stack: 'water',
        stackWeight: 1,
        offset: true,
        grid :{
          display: true,
          drawBorder: true,
          drawOnChartArea: false,
          drawTicks: true,
          tickLength: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        external: externalTooltipHandler
      },
    }
  }
};


var chart1 = document.getElementById("chart2").getContext("2d");


  var Chart = new Chart(chart1, config);
}
