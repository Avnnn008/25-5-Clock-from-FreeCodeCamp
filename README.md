Session & Break Timer - is a FreeCodeCamp frontend development training course project (25+5 Clock).

The project is made using JavaScript libraries React and Redux Toolkit.

This project is a customizable timer for alternating sessions and breaks. It can be used to regulate work and rest time (for example, a break of 15 minutes every 45 minutes of computer work), to control halves and breaks in a game, or for other similar things. At the end of the session or break, the timer beeps.

When the page loads, the default values are displayed: 5 minutes for a break and 25 minutes for a session. The timer screen also displays the default value: "SESSION 25:00". You can change the break length and session length by clicking on the arrows under the corresponding names. The minimum length is 1 minute, the maximum is 60 minutes. When you set the lenght for the first time, the timer screen shows only the set length of the session.

To start the countdown, click on the play button under the timer screen. When you press the play button it will be replaced by the pause button. You cannot change the length values during the countdown. To do this, press the pause button below the timer screen. The screen will continue to display the time of the period during which you paused (SESSION or BREAK). The pause button will be replaced by a play button, clicking on which will restart the countdown from the time it was stopped at, if you have not changed it.

When the session time expires, an audible signal will sound and the countdown of the break time will start. After the break time ends, the beep will sound again and the countdown of the session time will start, and so on until you stop the timer.

You can reset the timer to default values by clicking on the button located at the bottom of the timer screen to the right of the play or pause button.
