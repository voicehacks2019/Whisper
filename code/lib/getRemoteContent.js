exports.getSchedule = getSchedule

var http = require('http')

function getSchedule(date) {
  return http.getUrl('https://whova.com/xems/whova_backend/agenda/get_webpage_data_json/?event_id=voice_201907&day=' + date.replace('/', '%2C'), {
    format: 'json',
    headers: {
      accept: 'application/json'
    }
  });
}