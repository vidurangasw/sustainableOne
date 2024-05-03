let radarChart; // Global variable to hold the chart instance
//let radarChart1;
//let radarChart2;
//let barChart;

//const ctxBar = document.getElementById('bar-chart').getContext('2d');

const ctx = document.getElementById("radar-chart").getContext("2d");

// const ctx2 = document.getElementById('radar-chart-2').getContext('2d');

// Function to update chart with new data for Total Form
// Function to update chart with new data for Total Form
let totalFormData = [64.1, 0, 63.9, 25.0, 43.3];
let regularSampleData = [100.0, 100.0, 100, 25.0, 100.0];

const getInputValueOrDefault = (elementId, defaultVal) => {
  const inputValue = parseFloat(document.getElementById(elementId).value);
  return !isNaN(inputValue) ? inputValue : defaultVal;
};

function updateTotalChart() {
  // Get input values for Total Form
  
    
    const bioBasedTotal = getInputValueOrDefault(
        "bio-based-total",
        totalFormData[0]
    );
    
    const recycleTotal = getInputValueOrDefault(
      "recycle-total",
      totalFormData[1]
    );
    const biodegradableTotal = getInputValueOrDefault(
      "biodegradable-total",
      totalFormData[2]
    );
    const reusabilityTotal = getInputValueOrDefault(
      "reusability-total",
      totalFormData[3]
    );
    const recycleContentTotal = getInputValueOrDefault(
      "recycle-content-total",
      totalFormData[4]
    );

    totalFormData = [
      bioBasedTotal,
      recycleTotal,
      biodegradableTotal,
      reusabilityTotal,
      recycleContentTotal,
    ];
  
    
  
  // Call updateComparisonTable function with the correct form data
  //updateComparisonTable(totalFormData,regularSampleData); // Passing 'total-form' as the identifier
  console.log(totalFormData);
  updateChart(totalFormData, regularSampleData);
}

// Function to update chart with new data for Regular Sample
function updateRegularChart() {
  // Get input values for Regular Sample
  const bioBasedRegular = getInputValueOrDefault(
    "bio-based-regular",
    regularSampleData[0]
  );
  const recycleRegular = getInputValueOrDefault(
    "recycle-regular",
    regularSampleData[1]
  );
  const biodegradableRegular = getInputValueOrDefault(
    "biodegradable-regular",
    regularSampleData[2]
  );
  const reusabilityRegular = getInputValueOrDefault(
    "reusability-regular",
    regularSampleData[3]
  );
  const recycleContentRegular = getInputValueOrDefault(
    "recycle-content-regular",
    regularSampleData[4]
  );

  regularSampleData = [
    bioBasedRegular,
    recycleRegular,
    biodegradableRegular,
    reusabilityRegular,
    recycleContentRegular,
  ];

  //updateComparisonTable(totalFormData, regularSampleData);
  console.log(regularSampleData);
  updateChart(totalFormData, regularSampleData);
}

// Function to update the comparison table with new data
// Function to update the comparison table with new data
// Function to update the comparison table with new data
function updateComparisonTable(totalFormData, regularSampleData) {
  const tableContainer = document.querySelector(".table-container");
  let tableContent = "";

  // First table for Carbon foot print reduction
  tableContent += `<div class="sub-table-container">
                        <h2>Carbon foot print reduction</h2>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Regular Sample</th>
                                    <th>Total Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bio-Based %</td>
                                    <td>${regularSampleData[0]}</td>
                                    <td>${totalFormData[0]}</td>
                                </tr>
                                <tr>
                                    <td>Recycling %</td>
                                    <td>${regularSampleData[1]}</td>
                                    <td>${totalFormData[1]}</td>
                                </tr>
                                <tr>
                                    <td>Total Carbon foot print reduction%</td>
                                    <td>${(
                                      regularSampleData[0] +
                                      regularSampleData[1]
                                    ).toFixed(2)}</td>
                                    <td>${(
                                      totalFormData[0] + totalFormData[1]
                                    ).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`;

  // Second table for Waste Reduction
  tableContent += `<div class="sub-table-container">
                        <h2>Waste Reduction</h2>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Regular Sample</th>
                                    <th>Total Form</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Biodegradable %</td>
                                    <td>${regularSampleData[2]}</td>
                                    <td>${totalFormData[2]}</td>
                                </tr>
                                <tr>
                                    <td>Recycling %</td>
                                    <td>${regularSampleData[3]}</td>
                                    <td>${totalFormData[3]}</td>
                                </tr>
                                <tr>
                                    <td>Reusability %</td>
                                    <td>${regularSampleData[4]}</td>
                                    <td>${totalFormData[4]}</td>
                                </tr>
                                <tr>
                                    <td>Total waste reduction %</td>
                                    <td>${(
                                      regularSampleData[2] +
                                      regularSampleData[3] +
                                      regularSampleData[4]
                                    ).toFixed(2)}</td>
                                    <td>${(
                                      totalFormData[2] +
                                      totalFormData[3] +
                                      totalFormData[4]
                                    ).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`;

  tableContainer.innerHTML = tableContent;
}

// Function to update chart with new data
function updateChart(totalForm, regularSample) {
  // Get input values for Total Form
  //   const bioBasedTotal =
  //     parseFloat(document.getElementById("bio-based-total").value) || 64.1;
  //   const recycleTotal =
  //     parseFloat(document.getElementById("recycle-total").value) || 0.0;
  //   const biodegradableTotal =
  //     parseFloat(document.getElementById("biodegradable-total").value) || 63.9;
  //   const reusabilityTotal =
  //     parseFloat(document.getElementById("reusability-total").value) || 50.0;
  //   const recycleContentTotal =
  //     parseFloat(document.getElementById("recycle-content-total").value) || 43.3;

  //   // Get input values for Regular Sample
  //   const bioBasedRegular =
  //     parseFloat(document.getElementById("bio-based-regular").value) || 100;
  //   const recycleRegular =
  //     parseFloat(document.getElementById("recycle-regular").value) || 100;
  //   const biodegradableRegular =
  //     parseFloat(document.getElementById("biodegradable-regular").value) || 100;
  //   const reusabilityRegular =
  //     parseFloat(document.getElementById("reusability-regular").value) || 50.0;
  //   const recycleContentRegular =
  //     parseFloat(document.getElementById("recycle-content-regular").value) ||
  //     100.0;

  const totalFormData = [
    totalForm[0],
    totalForm[1],
    totalForm[2],
    totalForm[3],
    totalForm[4],
  ];
  const regularSampleData = [
    regularSample[0],
    regularSample[1],
    regularSample[2],
    regularSample[3],
    regularSample[4],
  ];
  // const chart1Data1 = [bioBasedTotal+recycleTotal,bioBasedRegular+recycleRegular];
  // const chart1Data2 = [bioBasedRegular+recycleRegular];
  // const chart2Data1 = [biodegradableTotal,reusabilityTotal,recycleContentTotal];
  // const chart2Data2 = [biodegradableRegular,reusabilityRegular,recycleContentRegular];
  // console.log(chart1Data1,chart1Data2,chart2Data1,chart2Data2);

  if (radarChart) {
    radarChart.data.datasets[0].data = totalFormData;
    radarChart.data.datasets[1].data = regularSampleData;
    // radarChart2.data.datasets[0].data = chart2Data1;
    // radarChart2.data.datasets[1].data = chart2Data2;
    radarChart.update();
    //radarChart2.update();
    //barChart.data.datasets[0].data = chart1Data1;

    //barChart.update();
  } else {
    const data = {
      labels: [
        "Fossil-based content (Input materials)",
        "Non Recycled Content-(Input material)",
        "Non-biodegradable (%) (Product end-of-life)",
        "Reusability (%) (Product end-of-life)",
        "Non- recyclable (%) (Product end-of-life)",
      ],
      datasets: [
        {
          label: "Total Form",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          data: totalFormData,
        },
        {
          label: "Regular Sample",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          data: regularSampleData,
        },
      ],
    };

    const options = {
      scale: {
        ticks: { beginAtZero: true },
        angleLines: { display: false },
        gridLines: { circular: true },
      },
    };

    radarChart = new Chart(ctx, {
      type: "radar",
      data: data,
      options: options,
    });

    // const dataBar = {
    //     labels: ["Total Form", "Regular Sample"],
    //     datasets: [
    //         {
    //             label: 'Total Carbon foot print reduction',
    //             backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //             borderColor: 'rgba(75, 192, 192, 1)',
    //             borderWidth: 1,
    //             data: chart1Data1
    //         },

    //     ]
    // };

    // const optionsBar = {
    //     scales: {
    //         yAxes: [{
    //             ticks: {
    //                 beginAtZero: true
    //             }
    //         }]
    //     }
    // };

    // barChart = new Chart(ctxBar, {
    //     type: 'bar',
    //     data: dataBar,
    //     options: optionsBar
    // });

    // const data2 = {
    //     labels: ['Biodegradable (%)', 'Reusability (%)', 'Recycle Content (%)'],
    //     datasets: [
    //         {
    //             label: 'Total Form',
    //             backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //             borderColor: 'rgba(75, 192, 192, 1)',
    //             data: totalFormData,
    //         },
    //         {
    //             label: 'Regular Sample',
    //             backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //             borderColor: 'rgba(255, 99, 132, 1)',
    //             data: regularSampleData,
    //         }
    //     ]
    // };

    // radarChart2 = new Chart(ctx2, {
    //     type: 'radar',
    //     data: data2,
    //     options: options
    // });
  }
}

// Initialize chart when the page loads
updateChart();
