// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-purple; icon-glyph: calendar;
/*

~

Welcome to Weather Cal. Run this script to set up your widget.

Add or remove items from the widget in the layout section below.

You can duplicate this script to create multiple widgets. Make sure to change the name of the script each time.

Happy scripting!

~

*/

// Specify the layout of the widget items.
const settings = {
  widget: {
    // Set the locale code. Leave blank "" to match the device's locale.
    locale: ""
    
    // Set to imperial for Fahrenheit, or metric for Celsius
    ,units: "metric"
    // The size of the widget preview in the app.
    ,preview: "medium"
    // Set the padding around each item. Default is 5.
    ,padding: 5
    // Decide if icons should match the color of the text around them.
    ,tintIcons: false
  },
  
/*
 * LAYOUT
 * Decide what items to show on the widget.
 * ========================================
 */
// You always need to start with "row" and "column" items. Set the width of a column with parentheses, like "column(90)".
// Adding left, right, or center will align everything after that. Add "space" for a flexible space, or "space(50)" for a specific height.
// There are many possible items, including: date, greeting, events, reminders, current, future, forecast, battery, sunrise, text
  layout: `
  row
   column
    date
    greeting
    covid
    events
    space
   column(70)
    center
    current
    future
  `,
  
/*
 * LOCALIZATION
 * Change the language or wording of text displayed.
 * =================================================
 */  
 
  localization: {
  
    // The text shown if you add a greeting item to the layout.
    nightGreeting: "님, 좋은 밤되세요."
    ,morningGreeting: "님, 좋은 아침입니다."
    ,afternoonGreeting: "님, 좋은 하루되세요."
    ,eveningGreeting: "님, 남은 하루도 잘 마무리하세요."
  
    // The text shown if you add a future weather item to the layout, or tomorrow's events.
    ,nextHourLabel: "1시간 후"
    ,tomorrowLabel: "내일"
    // Shown when noEventBehavior is set to "message".
    ,noEventMessage: ""
  
    // The text shown after the hours and minutes of an event duration.
    ,durationMinute: "m"
    ,durationHour: "h"   
    
    // Each {token} is replaced with the number from the data.
    ,covid: "신규 확진자: {todayCases}"
    
    // The text shown for the Weeknumber
    ,week: "Week"
  },
 
/*
 * ITEMS
 * Choose how each item is displayed.
 * ==================================
 */  
   
  // DATE
  // ====
  date: {
    // If set to true, date will become smaller when events are displayed.
    dynamicDateSize: true
    // If the date is not dynamic, should it be large or small?
    ,staticDateSize: "small"
    // Determine the date format for each date type. See docs.scriptable.app/dateformatter
    ,smallDateFormat: "MMMM d일(E)"
    ,largeDateLineOne: "MMMM d일"
    ,largeDateLineTwo: "EEEE"
  },
  
  // EVENTS
  // ======
  events: {
    // How many events to show.
    numberOfEvents: 3
    
    // Minutes after an event begins that it should still be shown. 
    ,minutesAfter: 5
    // Show all-day events.
    ,showAllDay: true
    // The hour (in 24-hour time) to start showing tomorrow's events. 0 for always, 24 for never.
    ,showTomorrow: 20
    // Can be blank "" or set to "duration" or "time" to display how long an event is.
    ,showEventLength: "duration"
    // Set which calendars for which to show events. Empty [] means all calendars.
    ,selectCalendars: []
    // Leave blank "" for no color, or specify shape (circle, rectangle) and/or side (left, right).
    ,showCalendarColor: "rectangle left"
  
    // When no events remain, show a hard-coded "message", a "greeting", or "none".
    ,noEventBehavior: "message"
  },
  
  // REMINDERS
  // =========
  reminders: {
  
    // How many reminders to show. Use 0 for all.
    numberOfReminders: 3
    // Set to true for a relative due date ("in 3 hours") instead of absolute ("3:00 PM")
    ,useRelativeDueDate: false
  
    // Set to true to show reminders without a due date. Default is false.
    ,showWithoutDueDate: false
  
    // Show reminders that are overdue.
    ,showOverdue: true
    
    // Set to true to hide reminders due in future days.
    ,todayOnly: false
    // Set which calendars for which to show events. Empty [] means all calendars.
    ,selectLists: []
    // Leave blank "" for no color, or specify shape (circle, rectangle) and/or side (left, right).
    ,showListColor: "rectangle left"
  },
  // SUNRISE
  // =======
  sunrise: {
  
    // How many minutes before/after sunrise or sunset to show this element. 0 for always.
    showWithin: 0
    
    // Set to true to use separate "sunrise" and "sunset" elements. Default is false.
    ,separateElements: false
  },
  // WEATHER
  // =======
  weather: {
  
    // Show the location of the current weather.
    showLocation: true
    
    // Show the condition and temperature horizontally. Default is false.
    ,horizontalCondition: true
  
    // Show the text description of the current conditions.
    ,showCondition: false
    // Show today's high and low temperatures.
    ,showHighLow: true
    
    // Show the percent chance of rain in the future weather item.
    ,showRain: true
    // The hour (in 24-hour time) to switch to tomorrow's weather. 0 for always, 24 for never.
    ,tomorrowShownAtHour: 20
    // Set the amount of days to show in the forecast item.
    ,showDays: 3
    
    // Set the format for each day of the week in the forecast item.
    ,showDaysFormat: "E"
    
    // Set to true to show today's weather in the forecast item.
    ,showToday: false
  },
  
  // COVID
  // =====
  covid: {
  
    // Country for COVID information.
    country: "S.%20Korea"
    // URL to open when the COVID data is tapped.
    ,url: "kakaotalk://con/web?url=https://accounts.kakao.com/qr_check_in"
  },
  // WeekNumber
  // ==========
  week: {
  },
/*
 * FONTS
 * Change the size, color, and font of various text elements.
 * ==========================================================
 */ 
 
  font: {
  
    // Set the default font and color.
    defaultText: { size: 14, color: "ffffff", font: "regular" },
  
    // Any blank values will use the default.
    smallDate:   { size: 17, color: "", font: "semibold" },
    largeDate1:  { size: 30, color: "", font: "light" },
    largeDate2:  { size: 30, color: "", font: "light" },
  
    greeting:    { size: 17, color: "", font: "semibold" },
    eventLabel:  { size: 14, color: "", font: "semibold" },
    eventTitle:  { size: 14, color: "", font: "semibold" },
    eventTime:   { size: 14, color: "ffffffcc", font: "" },
    noEvents:    { size: 14, color: "", font: "semibold" },
  
    reminderTitle:  { size: 14, color: "", font: "" },
    reminderTime:   { size: 14, color: "ffffffcc", font: "" },
    
    largeTemp:   { size: 14, color: "", font: "light" },
    smallTemp:   { size: 14, color: "", font: "" },
    tinyTemp:    { size: 12, color: "", font: "" },
  
    customText:  { size: 14, color: "", font: "" },
  
    battery:     { size: 14, color: "", font: "medium" },
    sunrise:     { size: 14, color: "", font: "medium" },
    covid:       { size: 14, color: "", font: "medium" },
    week:        { size: 14, color: "", font: "light" },
  },
}

/*
 * CODE
 * Be more careful editing this section. 
 * =====================================
 */

// Names of Weather Cal elements.
const codeFilename = "Weather Cal code"
const gitHubUrl = "https://raw.githubusercontent.com/mzeryck/Weather-Cal/main/weather-cal-code.js"

// Determine if the user is using iCloud.
let files = FileManager.local()
const iCloudInUse = files.isFileStoredIniCloud(module.filename)

// If so, use an iCloud file manager.
files = iCloudInUse ? FileManager.iCloud() : files

// Determine if the Weather Cal code exists and download if needed.
const pathToCode = files.joinPath(files.documentsDirectory(), codeFilename + ".js")
if (!files.fileExists(pathToCode)) {
  const req = new Request(gitHubUrl)
  const codeString = await req.loadString()
  files.writeString(pathToCode, codeString)
}

// Import the code.
if (iCloudInUse) { await files.downloadFileFromiCloud(pathToCode) }
const code = importModule(codeFilename)

// Run the initial setup or settings menu.
let preview
if (config.runsInApp) {
  preview = await code.runSetup(Script.name(), iCloudInUse, codeFilename, gitHubUrl)
  if (!preview) return
}

// Set up the widget.
const widget = await code.createWidget(layout, Script.name(), iCloudInUse)
Script.setWidget(widget)

// If we're in app, display the preview.
if (config.runsInApp) {
  if (preview == "small") { widget.presentSmall() }
  else if (preview == "medium") { widget.presentMedium() }
  else { widget.presentLarge() }
}

Script.complete()
