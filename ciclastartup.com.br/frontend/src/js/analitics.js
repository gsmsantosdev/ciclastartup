chartReceita = new Chart(ctx1, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Receita",
              data: Array(data.labels.length).fill(5000),
              borderColor: "#9ca3af",
              backgroundColor: "#9ca3af33",
              borderWidth: 2,
              pointBackgroundColor: "#9ca3af",
              pointRadius: 4,
              pointHoverRadius: 5,
              pointStyle: "circle",
              fill: false,
              tension: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: "#9ca3af" },
            },
            y: {
              grid: { color: "#f0f1ee" },
              ticks: { display: false },
              min: 0,
              max: 10000,
            },
          },
        },
      });