const syncrequest = require("sync-request");
const moment = require("moment");

module.exports.search = function search(date, time, track) {
    console.log("Date", date);
    console.log("Time", time);
    console.log("Track", track);
    
    console.log("Converted time", moment().format('hh:mm a'));
    
    
    var url = 'https://whova.com/xems/whova_backend/agenda/get_webpage_data_json/?event_id=voice_201907&day=Jul+23%2C+2019';

    console.log("URL", url);

    var res = syncrequest('GET', url);
    var schedules = JSON.parse(res.getBody());
    
    //var filtered = findSessions(schedules, time, track);
    
    console.log("schedules", schedules);
    
    var results = [];
    results.push({ 'title': "The Nitty Gritty of Voice Design: A Half-Day Workshop on creating a Voice Interaction Model document you can hand to your development team", 'local': "CTR 240" });
    results.push({ 'title': "The Google Conversation Design Workshop", 'local': "CTR Ballroom A" });
    results.push({ 'title': "Learn how to build a game Action for the Google Assistant", 'local': "CTR Ballroom B" });
    
    console.log("schedules", results);
    
    return results;
}

var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
];

function findSessions(candidates, time, track) {
  if(time) {
    candidates = candidates.time_ranges.find(function(candidate) {
     return candidate[1][0][0].start_time === time
    });
    console.log(candidates)
  }
  if(track) {
    candidates = candidates[1][0][0].sessions.filter(function(candidate) {
      return candidate.track = track
    }
   );
    console.log(candidates)
  }
  return candidates
}

function parseDate(date) {
  var dateArr = date.split(date)
  
  return months[date[1]-1]+"+"+date[2]+"%2C+" + date[0]
}