function getTimeZoneLocation() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function displayDateTime() {
  var now = new Date();
  var weekday = now.toLocaleString('en-US', { weekday: 'long' });
  var formattedDate = now.getFullYear() + '-' + 
                      ('0' + (now.getMonth() + 1)).slice(-2) + '-' + 
                      ('0' + now.getDate()).slice(-2);
  var formattedTime = ('0' + now.getHours()).slice(-2) + ':' + 
                      ('0' + now.getMinutes()).slice(-2);
  var timezoneLocation = getTimeZoneLocation();
  var dateTime = weekday + ' ' + formattedDate + ' ' + formattedTime + ' ' + timezoneLocation;
  
  var dateTimeElement = document.getElementById('datetime');
  if (dateTimeElement) {
    dateTimeElement.appendChild(document.createTextNode(dateTime));
  }
}
