"use strict";

{
  // 変数・定数の定義
  const timer = document.getElementById("timer");
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");

  stop.disabled = true;
  reset.disabled = true;

  let elapsedTime;
  let startTime;
  let stopTime;
  let timerId;
  let isRunning = false;
  let nowTime;
  let previousElapsedTime = 0;

  // 関数
  function updateTimerOnDisplay(t) {
    t = t + previousElapsedTime;
    let d = new Date(t);
    let h = d.getUTCHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ms = d.getMilliseconds();
    let timerString;
    h = h.toString(10).slice(-2);
    m = m.toString(10).slice(-2);
    s = s.toString(10).slice(-2);
    ms = ms.toString(10).slice(0, 1);
    timerString = h + ":" + m + ":" + s + ":" + ms;
    timer.textContent = timerString;
  }

  function calcElapsedTime(startTime) {
    timerId = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateTimerOnDisplay(elapsedTime);
    }, 100);
  }

  // イベントハンドラ・イベント
  start.addEventListener("click", () => {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
    if (isRunning === false) {
      nowTime = Date.now();
      calcElapsedTime(nowTime);
    } else {
      nowTime = Date.now();
      calcElapsedTime(nowTime);
    }
  });

  stop.addEventListener("click", () => {
    stop.disabled = true;
    start.disabled = false;
    timerId = clearInterval(timerId);
    isRunning = true;
    previousElapsedTime += elapsedTime;
  });

  reset.addEventListener("click", () => {
    previousElapsedTime = 0;
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
    updateTimerOnDisplay(0);
    timerId = clearInterval(timerId);
  });
}
