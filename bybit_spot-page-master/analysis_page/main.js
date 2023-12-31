// upgrade
const upgradeNote = document.querySelector(".upgrade");
const close = upgradeNote.querySelector(".upgrade > i");

close.addEventListener("click", () => {
    upgradeNote.style.display = "none";
});
// ROI canvas
const ROI = document.querySelector("canvas#ROI").getContext("2d");
Chart.defaults.font.size = 10;

let roiChart = new Chart(ROI, {
    type: 'line',
    data: {
      labels: ['2023-11-01', '', '', '', '', '', '2023-11-07'],
      datasets: [
        {
        label: 'Cumulative ROI of the Spot Account',
        data: [0.3, 0.8, 0.8, 1, 1.68, 1.97, 1.97],
        borderWidth: 2,
        pointStyle:"circle",
        borderColor: "#f7a600",
        tension: 0.5,
        backgroundColor: "#f7a600",
        fill : false
      },
      {
        label: 'Cumulative price change of BTC (%)',
        data: [0, 1, 8, 8, 8.5, 10, 10.2],
        borderWidth: 0.8,
        pointStyle:"circle",
        borderColor: "#ffc107",
        tension: 0.5,
        backgroundColor: "#ffc107",
        fill : false
      },
    ]
    },
    
    options: {
      responsive: true,
        plugins : {
          layout: {
            padding: {
              top: 20  // Adjust the value as per your requirement
            }
          },
            legend: {
              position: 'top',
              align: 'end',
                labels: {
                  boxWidth: 8,
                  boxHeight: 8,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: {
                        size: 12
                    },
                    color :"black",
                }
            }
        },
      scales: {
        y: {
                ticks : {
                    callback: (value, index, values) => {
                        return value + "%";
                    },
                    color: "#81858c",
                    stepSize: 10,

                },
          grid : {
              color: "#9e9e9e17"
          }
        },
        x: {
            ticks : {
                color: "#81858c",
                stepSize: 3,
            },
          beginAtZero: true,
          grid : {
              color: "#9e9e9e17"
          }
        }
      }
    },
});


// Profits
const Profits = document.getElementById('profits').getContext("2d");

let profitChart = new Chart(Profits, {
  type: 'line',
  data: {
    labels: ['2023-10-14', '', '', '', '', '', '2023-10-20'],
    datasets: [{
      label: 'Cumulative Profits ',
      data: [9.5, 16, -0.5, -0.7, 22.9, 1, 9],
      borderWidth: 1.5,
      backgroundColor: "#f7a600",
      borderColor: "#f7a600",
      tension: 0.5,
      pointStyle: "circle"

    }]
  },
  options: {
    responsive: true,
    plugins : {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero : true,
        ticks : {
          color: "#81858c",
          stepSize: 5,
      },
      grid : {
        color: "#9e9e9e17"
    }
      },
      x: {
        ticks : {
          color: "#81858c",
          stepSize: 5,
      },
      grid : {
        color: "#9e9e9e17"
    }
      }
    }
  }
});

// P&L
const PL = document.getElementById('PL').getContext("2d");

let plChart = new Chart(PL, {
  type: 'bar',
  data: {
    labels: ['2023-10-14', '', '', '', '', '', '2023-10-20'],
    datasets: [{
      label: 'P&L ',
      data: [9.5, 16, -0.5, -0.7, 22.9, 1, 9],
      backgroundColor: ["#20b26c", "#20b26c", "#ef454a", "#ef454a", "#20b26c", "#20b26c", "#20b26c"],
    }]
  },
  options: {
    responsive: true,
    plugins : {
      legend : {
        display: false
      }
    },
    scales: {
      y: {
        ticks : {
          color: "#81858c",
          stepSize: 5,
      },
      grid : {
        color: "#9e9e9e17"
    }
      },
      x: {
        ticks : {
          color: "#81858c"
      },
      grid : {
        color: "#9e9e9e17"
    }
      }
    }
  }
});


// customization days count (charts)
const daysLi = document.querySelectorAll(".charts ul li");

daysLi.forEach((li) => {
    li.addEventListener("click", (e) => {
      daysLi.forEach((li) => {
        li.classList.remove("active");
      });
        e.currentTarget.classList.add("active");
        if ((e.currentTarget.textContent).includes("7")) {
          // pl chart
          plChart.data.labels = ['2023-10-14', '', '', '', '', '', '2023-10-20'];
          plChart.data.datasets[0].data =  [-25, 0, -3, -3, -4, 2, 3];
          plChart.update();
          // profits chart
          profitChart.data.labels = ['2023-10-14', '', '', '', '', '', '2023-10-20'];
          profitChart.data.datasets[0].data = [-25, -26, -28, -30, -32, -29, -25];
          profitChart.update();
          // roi chart
          roiChart.data.labels = ['2023-10-14', '', '', '', '', '', '2023-10-20'];
          roiChart.data.datasets[0].data =  [-20, -20, -21, -22, -23, -20, -19];
          roiChart.update();
        }
         else if ((e.currentTarget.textContent).includes("30"))
        {
          
          plChart.data.labels = ['2023-10-14', '', '', '', '', '', '2023-10-20',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ];
          plChart.data.datasets[0].data =  [-25, 0, -3, -3, -4, 2, 3,
            10,
            5,
            1,
            0,
            3,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 ,4
          ];
          plChart.update();
          // profit Chart
          profitChart.data.labels = ['2023-10-14', '', '', '', '', '', '2023-10-20',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ];
          profitChart.data.datasets[0].data = [-25, -26, -28, -30, -32, -29, -25,
            10,
            5,
            1,
            0,
            3,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 ,4
          ];
          profitChart.update();
          // roichart
          roiChart.data.labels = ['2023-10-14', '', '', '', '', '', '2023-10-20', 
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ]
            roiChart.data.datasets[0].data =  [-20, -20, -21, -22, -23, -20, -19,
            20,
            10,
            11,
            44,
            20,
            30, 10, 30, 30, 50, 60, 10, 15, 21, 33, 40, 40, 30, 22, 15,14, 5, 3 , 2
            ];
            roiChart.data.datasets[1].data =  [0, 1, 8, 8, 8.5, 10, 10.2,
            10,
            5,
            1,
            0,
            3,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 ,4
            ];
            roiChart.update();
        }
        else {
          // pl chart
          plChart.data.labels = ['2023-10-14', '', '', '', '', '', '', 
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '2023-10-104',
          ];
          plChart.data.datasets[0].data = [-20, -20, -21, -22, -23, -20, -19,
            20,
            10,
            11,
            44,
            20,
            30, 10, 30, 30, 50, 60, 10, 15, 21, 33, 40, 40, 30, 22, 15,14, 5,
            10,20,33,34,35,36,10,40,50,20,
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33,22,30 
          ];
          plChart.update();
          // profit chart
          profitChart.data.labels = ['2023-10-14', '', '', '', '', '', '2023-10-20', 
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '2023-10-104',
          ];
            profitChart.data.datasets[0].data = [-25, -26, -28, -30, -32, -29, -25,
              20,
              10,
              11,
              44,
              20,
              30, 10, 30, 30, 50, 60, 10, 15, 21, 33, 40, 40, 30, 22, 15,14, 5,
              10,20,33,34,35,36,10,40,50,20,
              12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
              12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
              12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
              12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
              12, 30, 40, 10, 40, 50, 30, 70, 20, 33,22,30 
          ];
          profitChart.update();
          // roi chart
          roiChart.data.labels = ['2023-10-14', '', '', '', '', '', '2023-10-20', 
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
            '2023-10-104',
            ];
            roiChart.data.datasets[0].data =  [-20, -20, -21, -22, -23, -20, -19,
            20,
            10,
            11,
            44,
            20,
            30, 10, 30, 30, 50, 60, 10, 15, 21, 33, 40, 40, 30, 22, 15,14, 5,
            10,20,33,34,35,36,10,40,50,20,
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33,22,30 
            ];
            roiChart.data.datasets[1].data =  [0, 1, 8, 8, 8.5, 10, 10.2,
            10,
            5,
            1,
            0,
            3,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0, 
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 ,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 ,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 ,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 ,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 ,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 
            ];
            roiChart.update();
        }
    });
});






// mobile
const bars = document.querySelector(".bars");
const mobile_menu = document.querySelector(".mobile-menu");
const close_menu = document.querySelector(".mobile-menu > i");
const profile = document.querySelector(".sub-menu a");
const profile_menu = document.querySelector(".sub-menu ul");

bars.addEventListener("click", () => {
  mobile_menu.classList.add("active");
});

close_menu.addEventListener("click", () => {
  mobile_menu.classList.remove("active");
});

profile.addEventListener("click", () => {
  profile_menu.classList.toggle("active");
});