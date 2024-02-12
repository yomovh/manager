export const PAGE_SIZE = 300;

export const TRAFFIC_PERIODS = [
  { key: 'last6h', value: 'network_security_dashboard_filter_6_hours' },
  { key: 'last24h', value: 'network_security_dashboard_filter_24_hours' },
  { key: 'last7d', value: 'network_security_dashboard_filter_7_days' },
  {
    key: 'last14d',
    value: 'network_security_dashboard_filter_14_days',
  },
];

export const TRAFFIC_PERIOD_LIST = {
  last6h: 'last6h',
  last24h: 'last24h',
  last7d: 'last7d',
  last14d: 'last14d',
};

export const CHART = {
  colors: [
    {
      borderColor: '#D2F2C2',
      backgroundColor: '#D2F2C2',
    },
    {
      borderColor: '#FFCCD9',
      backgroundColor: '#FFCCD9',
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      position: 'bottom',
      display: true,
    },
    elements: {
      line: {
        fill: true,
        tension: 0,
        borderWidth: 2,
      },
      point: {
        radius: 0,
      },
    },
    interaction: {
      intersect: false,
      mode: 'nearest',
      axis: 'x',
    },
    tooltips: {
      mode: 'label',
      intersect: false,
    },
    scales: {
      yAxes: [
        {
          display: true,
          type: 'linear',
          position: 'left',
          ticks: {
            min: 0,
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
          },
          gridLines: {
            drawBorder: true,
            display: false,
          },
        },
      ],
      xAxes: [
        {
          display: true,
          gridLines: {
            offsetGridLines: true,
            display: false,
          },
          position: 'bottom',
          ticks: {
            display: true,
            source: 'auto',
            autoSkip: true,
          },
          time: {
            displayFormats: {
              hour: 'YYYY-MM-DD HH:MM',
            },
          },
          type: 'time',
        },
      ],
    },
  },
  units: ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb'],
};

export default { PAGE_SIZE, TRAFFIC_PERIODS, TRAFFIC_PERIOD_LIST, CHART };
