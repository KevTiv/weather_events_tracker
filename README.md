# WEATHER EVENT TRACKER

# LIVE DEMO
https://kevtiv.github.io/weather_events_tracker/
# DESCRIPTION
- Web app built to take advantage of the public Nasa API that tracks weather events such as wildfire, marine storms and active volcanoes across the globe.
# GOAL
- Create an application that could update an end user with locations of severe weather events such as wildfire, maritime storms and active volcanoes.
# CHALLENGES
- Converts the response result form the Nasa API into useful data markers that will be used to populate our map API.
# SOLUTION IMPLEMENTED
- I used the locations information and weather events information from each weather events returned by the Nasa API to create markers using the leaflet map 
  library marker functions. The markers are then displayed on a map also derived from the leaflet library. I also implemented a control panel where the 
  user can choose which type of weather events are being displayed on the map. A modal panel also appears when a user click on an individual marker to reveal 
  more info on the weather event occurring at that marker location.
# FUTURE IMPROVEMENT
- Differentiate the different weather marker with different color coding for a better visual experience.
