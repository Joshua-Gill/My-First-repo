
  const ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue',
        data: [1200, 1900, 3000, 2500, 4200, 3800],
        borderColor: '#4a90e2',
        backgroundColor: 'rgba(74,144,226,0.2)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
  


  new Chart(document.getElementById('chart2'), {
  type: 'bar',
  data: {
    labels: ['Mon','Tue','Wed'],
    datasets: [{
      label: 'Users',
      data: [12,19,7],
      backgroundColor: '#2ecc71'
    }]
  },
  options: { responsive: true, maintainAspectRatio: false }
});

new Chart(document.getElementById('chart3'), {
  type: 'doughnut',
  data: {
    labels: ['Sales','Profit','Loss'],
    datasets: [{
      data: [60,25,15],
      backgroundColor: ['#3498db','#2ecc71','#e74c3c']
    }]
  },
  options: { responsive: true }
});


new Chart(document.getElementById('revenueChart'), {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{
      label: 'Revenue',
      data: [1200, 1900, 3000, 2500, 4200, 3800],
      borderColor: '#4a90e2',
      backgroundColor: 'rgba(74,144,226,0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: { responsive: true, maintainAspectRatio: false }
});



new Chart(document.getElementById('usersChart'), {
  type: 'bar',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri'],
    datasets: [{
      label: 'New Users',
      data: [12, 19, 7, 15, 22],
      backgroundColor: '#2ecc71'
    }]
  },
  options: { responsive: true, maintainAspectRatio: false }
});



new Chart(document.getElementById('salesChart'), {
  type: 'doughnut',
  data: {
    labels: ['Online','Store','Partners'],
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#3498db','#f1c40f','#e74c3c']
    }]
  },
  options: { responsive: true }
});


new Chart(document.getElementById('trafficChart'), {
  type: 'pie',
  data: {
    labels: ['Direct','Social','Referral'],
    datasets: [{
      data: [40, 35, 25],
      backgroundColor: ['#9b59b6','#1abc9c','#e67e22']
    }]
  },
  options: { responsive: true }
});


new Chart(document.getElementById('miniChart'), {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5'],
    datasets: [{
      data: [5, 9, 6, 10, 8],
      borderColor: '#e84393',
      fill: false,
      tension: 0.4
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
    responsive: true,
    maintainAspectRatio: false
  }
});


new Chart(document.getElementById('kpiChart'), {
  type: 'line',
  data: {
    labels: ['M','T','W','T','F','S','S'],
    datasets: [{
      data: [3, 6, 4, 8, 5, 9, 7],
      borderColor: '#0984e3',
      backgroundColor: 'rgba(9,132,227,0.15)',
      fill: true,
      tension: 0.4,
      pointRadius: 0
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false }
    },
    responsive: true,
    maintainAspectRatio: false
  }
});


new Chart(document.getElementById('overviewChart'), {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
    datasets: [
      {
        label: 'Users',
        data: [500, 800, 1200, 1600, 2100, 2600, 3100],
        borderColor: '#6c5ce7',
        tension: 0.4
      },
      {
        label: 'Sales',
        data: [300, 600, 900, 1400, 1800, 2300, 2900],
        borderColor: '#00b894',
        tension: 0.4
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});



