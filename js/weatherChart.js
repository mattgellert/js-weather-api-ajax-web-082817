function getFahrenheits(result){
  return result.hourly_forecast.map(forecast => {
    return forecast.temp.english
  })
}

function getHours(result){
  return result.hourly_forecast.map(forecast => {
    return forecast.FCTTIME.hour
  })
}

function generateDataSet(labels, data) {
  return {
    labels: labels,
    data: data.map(s => +s)
  }
}

function makeFetchRequest(endpoint, success) {
  fetch(endpoint, success).then(res => res.json()).then(json => success(json));
}
