const ctx = document.getElementById('weatherChart').getContext('2d');

const weatherChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab', 'Dom'],
        datasets: [{
            label: 'Temperatura Máxima',
            data: [25, 30, 31, 29, 29, 28, 27],
            borderColor: '#FF5722',
            backgroundColor: 'rgba(255, 87, 34, 0.2)',
            fill: false,
            borderWidth: 3,
            tension: 0.4,
        },
        {
            label: 'Temperatura Mínima',
            data: [17, 20, 20, 15, 15, 10, 12],
            borderColor: '#2196F3',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            fill: false,
            borderWidth: 3,
            tension: 0.4,
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false  // Esto oculta las etiquetas de los días en el eje X
                }
            },
            y: {
                beginAtZero: false,
                min: 5,  // Mínimo de la temperatura mínima - 5
                grid: {
                    display: true,
                    color: '#ddd'
                },
                ticks: {
                    stepSize: 5
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
