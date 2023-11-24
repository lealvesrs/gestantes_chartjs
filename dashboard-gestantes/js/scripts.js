// ---------- CHARTS ----------

// Age CHART
const ctxAge = document.getElementById('ageChart');

  new Chart(ctxAge, {
    type: 'bar',
    data: {
      labels: ['10 a 15', '15 a 20', '20 a 25','25 a 30', '30 a 35', '35 a 40', '40 a 45', '45 a 50', '50 a 55', '55 a 60','60 a 65','65 a 70'],
      datasets: [
        {
        label: 'LowRisk',
        data: [19, 118, 111, 30, 33, 21, 17, 17, 6, 14, 14, 3],
        borderWidth: 2,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235)"
        },
        {
        label: 'MidRisk',
        data: [22, 79, 58, 62, 44, 11, 11, 8, 19, 8, 14, 0],
        borderWidth: 2,
        backgroundColor: "rgba(247, 239, 2, 0.2)", 
        borderColor: 'rgb(247, 239, 2)'
        },
        {
        label: 'HighRisk',
        data: [13, 26, 10, 36, 33, 34, 41, 20, 31, 18, 9, 1],
        borderWidth: 2,
        backgroundColor: "rgba( 247, 25, 5, 0.2)", 
        borderColor: 'rgb( 247, 25, 5)'
        }         
      ]
      
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//BS CHART
const ctxBS = document.getElementById('bsChart');

  new Chart(ctxBS, {
    type: 'bar',
    data: {
      labels: ['108 a 144', '144 a 180', '180 a 216', '216 a 252','252 a 288', '288 a 324', '324 a 360'],
      datasets: [
        {
        label: 'LowRisk',
        data: [396, 4, 4, 0, 0, 0, 0],
        borderWidth: 2,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235)"
        },
        {
        label: 'MidRisk',
        data: [279, 25, 8, 6, 5, 9, 4],
        borderWidth: 2,
        backgroundColor: "rgba(247, 239, 2, 0.2)", 
        borderColor: 'rgb(247, 239, 2)'
        },
        {
        label: 'HighRisk',
        data: [74, 24, 44, 21, 49, 13, 47],
        borderWidth: 2,
        backgroundColor: "rgba( 247, 25, 5, 0.2)", 
        borderColor: 'rgb( 247, 25, 5)'
        }         
      ]
      
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

// Systolic CHART
const ctxSystolic = document.getElementById('systolicChart');
  new Chart(ctxSystolic, {
    type: 'bar',
    data: {
      labels: ['70 a 80', '80 a 90', '90 a 100','100 a 110','110 a 120', '120 a 130', '130 a 140', '140 a 150', '150 a 160'],
      datasets: [
        {
        label: 'LowRisk',
        data: [32, 16, 82, 65, 2, 209, 0, 0, 0],
        borderWidth: 2,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235)"
        },
        {
        label: 'MidRisk',
        data: [2, 19, 52, 22, 17, 171, 48, 5, 0],
        borderWidth: 2,
        backgroundColor: "rgba(247, 239, 2, 0.2)", 
        borderColor: 'rgb(247, 239, 2)'
        },
        {
        label: 'HighRisk',
        data: [70, 15, 34, 5, 8, 70, 15, 115, 0],
        borderWidth: 2,
        backgroundColor: "rgba( 247, 25, 5, 0.2)", 
        borderColor: 'rgb( 247, 25, 5)'
        }         
      ]
      
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

// RADAR CHART
const ctxRadar = document.getElementById('radar');

  const data = {
  labels: [
    'Age',
    'Systolic',
    'Diastolic',
    'BS',
    'BodyTemp',
    'HeartRate'
  ],
  datasets: [ {
    label: 'LowRisk',
    data: [26.86945812807882, 105.86699507389163, 72.53448275862068, 7.220270935960589, 36.87164750957855, 72.77093596059113],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  },
  {
    label: 'MidRisk',
    data: [28.363095238095237, 113.1547619047619, 74.23214285714286, 7.795744047619047, 37.12962962962963, 74.17559523809524],
    fill: true,
    backgroundColor: 'rgba(247, 239, 2, 0.2)',
    borderColor: 'rgb(247, 239, 2)',
    pointBackgroundColor: 'rgb(247, 239, 2)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(247, 239, 2)'
  },
  {
    label: 'HighRisk',
    data: [ 36.216911764705884, 124.19485294117646, 85.07352941176471, 12.122610294117647, 37.16625816993464, 76.74264705882354],
    fill: true,
    backgroundColor: 'rgba( 247, 25, 5,0.2)',
    borderColor: 'rgb(247, 25, 5)',
    pointBackgroundColor: 'rgb(247, 25, 5)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(247, 25, 5)'
  }]
};

  new Chart(ctxRadar, {
    type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
  });