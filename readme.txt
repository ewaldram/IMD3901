waldramErin_IMD3901_A3

I’ll preface with: I’m really sorry this is so terrible despite the extension you gave me. I 
hate nothing more than handing in broken code. Still, a potential 40% is better than a 
definite 0%. 
I truly hope this doesn’t read as a lack of engagement with your class - I’ve held the 
most interest in this one out of all of them, but something about this assignment didn’t 
stick in my head.

OVERVIEW:
The following is INTENDED to be a 2D Match 3 game.
Players click on the boxes they want, and if the 3 match, the score updates.
There are two modes: Competitive, where two players compete for the highest score,
And Team Play, where two players play on one board and try to get as many points as 
they can together.
A timer goes off after “Start game” is clicked.
Ideally,  
And now I’ll list all the ways in which this did not come to pass.

CHALLENGES:
Now it very likely does not reflect in the submission. But with all the lines of code 
deleted and changed, and the amount of time I’ve spent writing pseudocode, even at 
work, I’ve spent approximately 25-30 hours on this project alone. I’m struggling to get it 
work, in a combination of Javascript not being my friend, and sockets.io being still very 
new to me. Additionally, I had to restart partway through, as I initially bit off a project 
with too big a scope, and narrowed it down.
So, what challenges were faced?
•	I initially tried to make this a 3D project, but initializing everything and emitting player 
positions was already too big a task.
•	After turning this into a 2D project, I was faced with errors with the following:
•	IN TEAM PLAY MODE
•	The timer would bug out once a second person joined the scene
•	The score, for whatever reason, doesn’t update the FIRST time someone inputs a 
match, but rather every OTHER time. 
•	The reset function, I thought, worked. However, despite the function returning the 
position of every button variable, it only actually resets the blue and the yellow 
columns.
•	Additionally, Javascript does not seem to like when I try to change an elements 
className, despite going through the exact steps every source gives me.
•	IN COMPETITIVE MODE
•	I didn’t even include the reset function as it didn’t work in team play mode
•	The matching, for whatever reason, despite running through every button fine, only 
adds the click event to button 12. I do not know why. This is my latest bug, and 
I’ve been working it for 4 hours now.
•	Due to a lack of time, I did not include a system to check which player is in the lead. 

SUCCESSES:
•	I’m going to call narrowing my scope  and completely changing my idea a success, 
as usually I try to commit to something far too difficult and suffer the sleepless 
nights after. I’ve still eaten meals and rested. This is a character development 
moment.
•	IN TEAM PLAY MODE
•	The timer was fixed by including a start game button.
•	The score was not fixed
•	The reset function haunts my dreams, and was not fixed
•	class Name was not fixed
•	IN COMPETITIVE MODE
•	Reset, as stated, was not fixed
•	Button 12. I don’t know how to stop it. I’m so sorry.

GitHub:
(I’m hoping I uploaded this correctly)

A video showcasing the project is included in the folder

