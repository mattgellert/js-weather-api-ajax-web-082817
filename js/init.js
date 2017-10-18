document.addEventListener("DOMContentLoaded", function(e){

  const API_KEY = "db826a6fcfbac2d5";
  const URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  const ctx = document.getElementById("#NYCWeatherChart")
  // const ctx = document.getElementById("#NYCWeatherChart").getContext("2d");

  makeFetchRequest(URL, function(json){
    const ctx = document.getElementById("NYCWeatherChart").getContext('2d')
    const data = generateDataSet(getHours(json), getFahrenheits(json))
    // debugger
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Temperature',
          borderColor: 'blue',
          data: data.data,
        }]
      },
      options: {}
    })
  })
  // var myChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //         datasets: [{
  //             label: '# of Votes',
  //             data: [12, 19, 3, 5, 2, 3],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)',
  //                 'rgba(153, 102, 255, 0.2)',
  //                 'rgba(255, 159, 64, 0.2)'
  //             ],
  //             borderColor: [
  //                 'rgba(255,99,132,1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)',
  //                 'rgba(75, 192, 192, 1)',
  //                 'rgba(153, 102, 255, 1)',
  //                 'rgba(255, 159, 64, 1)'
  //             ],
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {
  //         scales: {
  //             yAxes: [{
  //                 ticks: {
  //                     beginAtZero:true
  //                 }
  //             }]
  //         }
  //     }
  // });

})
