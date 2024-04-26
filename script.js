let radarChart; // Global variable to hold the chart instance
const ctx = document.getElementById('radar-chart').getContext('2d');

// Function to update chart with new data for Total Form
// Function to update chart with new data for Total Form
let totalFormData =[17.95,28.35,12,33.3,18.9];
let regularSampleData =[0,0,0,33.3,0];

function updateTotalChart() {
    // Get input values for Total Form
    const bioBasedTotal = parseFloat(document.getElementById('bio-based-total').value) || 0;
    const recycleTotal = parseFloat(document.getElementById('recycle-total').value) || 0;
    const biodegradableTotal = parseFloat(document.getElementById('biodegradable-total').value) || 0;
    const reusabilityTotal = parseFloat(document.getElementById('reusability-total').value) || 0;
    const recycleContentTotal = parseFloat(document.getElementById('recycle-content-total').value) || 0;

    totalFormData = [bioBasedTotal, recycleTotal, biodegradableTotal, reusabilityTotal, recycleContentTotal];

    // Call updateComparisonTable function with the correct form data
    updateComparisonTable(totalFormData,regularSampleData); // Passing 'total-form' as the identifier
    console.log(totalFormData);
    updateChart();
}


// Function to update chart with new data for Regular Sample
function updateRegularChart() {
    // Get input values for Regular Sample
    const bioBasedRegular = parseFloat(document.getElementById('bio-based-regular').value) || 0;
    const recycleRegular = parseFloat(document.getElementById('recycle-regular').value) || 0;
    const biodegradableRegular = parseFloat(document.getElementById('biodegradable-regular').value) || 0;
    const reusabilityRegular = parseFloat(document.getElementById('reusability-regular').value) || 0;
    const recycleContentRegular = parseFloat(document.getElementById('recycle-content-regular').value) || 0;

    const regularSampleData = [bioBasedRegular, recycleRegular, biodegradableRegular, reusabilityRegular, recycleContentRegular];

    updateComparisonTable(totalFormData, regularSampleData);
    console.log(regularSampleData);
    updateChart();
}

// Function to update the comparison table with new data
// Function to update the comparison table with new data
// Function to update the comparison table with new data
function updateComparisonTable(totalFormData, regularSampleData) {
    const tableContainer = document.querySelector('.table-container');
    let tableContent = '';

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
                                    <td>${(regularSampleData[0] + regularSampleData[1]).toFixed(2)}</td>
                                    <td>${(totalFormData[0] + totalFormData[1]).toFixed(2)}</td>
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
                                    <td>${(regularSampleData[2] + regularSampleData[3] + regularSampleData[4]).toFixed(2)}</td>
                                    <td>${(totalFormData[2] + totalFormData[3] + totalFormData[4]).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`;

    tableContainer.innerHTML = tableContent;
}


// Function to update chart with new data
function updateChart() {
    // Get input values for Total Form
    const bioBasedTotal = parseFloat(document.getElementById('bio-based-total').value) ||17.95;
    const recycleTotal = parseFloat(document.getElementById('recycle-total').value) || 28.35;
    const biodegradableTotal = parseFloat(document.getElementById('biodegradable-total').value) || 12;
    const reusabilityTotal = parseFloat(document.getElementById('reusability-total').value) || 33.3;
    const recycleContentTotal = parseFloat(document.getElementById('recycle-content-total').value) || 18.9;

    // Get input values for Regular Sample
    const bioBasedRegular = parseFloat(document.getElementById('bio-based-regular').value) || 0;
    const recycleRegular = parseFloat(document.getElementById('recycle-regular').value) || 0;
    const biodegradableRegular = parseFloat(document.getElementById('biodegradable-regular').value) || 0;
    const reusabilityRegular = parseFloat(document.getElementById('reusability-regular').value) || 33.3;
    const recycleContentRegular = parseFloat(document.getElementById('recycle-content-regular').value) || 0;

    const totalFormData = [bioBasedTotal, recycleTotal, biodegradableTotal, reusabilityTotal, recycleContentTotal];
    const regularSampleData = [bioBasedRegular, recycleRegular, biodegradableRegular, reusabilityRegular, recycleContentRegular];

    if (radarChart) {
        radarChart.data.datasets[0].data = totalFormData;
        radarChart.data.datasets[1].data = regularSampleData;
        radarChart.update();
    } else {
        const data = {
            labels: ['Bio-based Content (%)', 'Recycle Content (caban fooprint reduction) (%)', 'Biodegradable (%)', 'Reusability (%)', 'Recycle Content (%) (Waste Reduction)'],
            datasets: [
                {
                    label: 'Total Form',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    data: totalFormData,
                },
                {
                    label: 'Regular Sample',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    data: regularSampleData,
                }
            ]
        };

        const options = {
            scale: {
                ticks: { beginAtZero: true },
                angleLines: { display: false },
                gridLines: { circular: true }
            }
        };

        radarChart = new Chart(ctx, {
            type: 'radar',
            data: data,
            options: options
        });
    }
}

// Initialize chart when the page loads
updateChart();
