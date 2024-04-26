// Get the canvas element
const ctx = document.getElementById('radar-chart').getContext('2d');

// Initialize the radar chart with empty data
let radarChart;

// Function to update chart with new data
// Function to update chart with new data
function updateChart() {
    // Get input values and ensure they are within the range of 0% to 100%
    const bioBased = Math.min(100, Math.max(0, parseInt(document.getElementById('bio-based').value))) || 0;
    const recycle = Math.min(100, Math.max(0, parseInt(document.getElementById('recycle').value))) || 0;
    const biodegradable = Math.min(100, Math.max(0, parseInt(document.getElementById('biodegradable').value))) || 0;
    const reusability = Math.min(100, Math.max(0, parseInt(document.getElementById('reusability').value))) || 0;
    const recycleContent = Math.min(100, Math.max(0, parseInt(document.getElementById('recycle-content').value))) || 0;

    const totalFormData = [bioBased, recycle, biodegradable, reusability, recycleContent];
    const regularSampleData = [50, 70, 40, 60, 65]; // Example percentages for Regular Sample

    if (radarChart) {
        radarChart.data.datasets[0].data = totalFormData;
        radarChart.data.datasets[1].data = regularSampleData;
        radarChart.update();
    } else {
        const data = {
            labels: ['Bio-based Content (%)', 'Recycle Content (%)', 'Biodegradable (%)', 'Reusability (%)', 'Recycle Content (%)'],
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
