

const period = 60 * 1; // 定时运行的脚本

chrome.alarms.create("time_at", {
    delayInMinutes:0,
    periodInMinutes: period
});
chrome.alarms.onAlarm.addListener(function (ev) {
    getAllTieba();
});