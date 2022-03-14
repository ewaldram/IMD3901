const express   = require('express'); 
const app       = express(); 
const http      = require('http'); 
const server    = require('http').createServer(app);  
const io        = require('socket.io')(server);  
const LISTEN_PORT   = 8080; 
server.listen(LISTEN_PORT); 
app.use(express.static(__dirname + '/public')); //set root path of server ... 
console.log("Listening on port: " + LISTEN_PORT ); 
//our routes 
app.get( '/', function( req, res ){  
    res.sendFile( __dirname + '/public/index.html' ); 
}); 
app.get( '/TeamPlay', function( req, res ){  
    res.sendFile( __dirname + '/public/TeamPlay.html' ); 
}); 
app.get( '/Competitive', function( req, res ){  
    res.sendFile( __dirname + '/public/Competitive.html' ); 
}); 
//socket.io / websocket stuff 
io.on('connection',(socket) => { 
    console.log(socket.id + ' is connected!!'); 

    //initializing some variables
    var teamTurn;
    var countdown; 
    var teamScore;
    var player1Score;
    var player2Score;
    //it would keep returning null for player 2??
    if (player1Score == null || player1Score == undefined)
    {
        var player1Score = 0;
    }
    if (player2Score == null ||player2Score == undefined)
    {
        var player2Score = 0;
    }
    if (teamScore == null || teamScore == undefined)
    {
        var teamScore = 0;
    }

    //startGame function - start the timer and set score to 0.
    socket.on('startGame', () => { 
        //Both players are in and the game can commence
        teamTurn = 0;
        countdown = 300; 
        teamScore = 0; 
        player1Score = 0; 
        player2Score = 0; 
        io.sockets.emit('score_change', {player1Score}); 
        setInterval(function() { 
            countdown--; 
            //keeping the score updated?
            //sockets is weird. Idk if any other students are having issues on this assignment
            //but if they are, maybe more lectures on it next semester?
            player1Score = player1Score;
            player2Score = player2Score;
            teamScore = teamScore;
            io.sockets.emit('timer', { countdown: countdown }); 
        }, 1000); 
    }); 
    //on disconnect....also remove player.
    socket.on('disconnect', () => { 
        console.log(socket.id + ' is disconnected');
    }); 

    //score up function for team
    socket.on('scoreUp', (data) => { 
        console.log('score event received'); 
        teamScore = teamScore + 10; 
        io.sockets.emit('score_change', {teamScore}); 
    });

    //score up functions for competitives:
    socket.on('player1Up', (data) => { 
        console.log('score event received'); 
        player1Score = player1Score + 10; 
        io.sockets.emit('player1_score__change', {player1Score}); 
    }); 
    socket.on('player2Up', (data) => { 
        console.log('score event received'); 
        player2Score = player2Score + 10; 
        io.sockets.emit('player2_score__change', {player2Score}); 
    }); 

    //that reset function that we don't talk about
    socket.on('reset', (data) => { 
        console.log('reset event received'); 
        io.sockets.emit('reset_board',{}); 
    }); 

    //team mode
    //determining whose turn it is
    socket.on("setTurn", (data)  =>{
        if (teamTurn == 0)
        {
            //player 1 is red
            teamTurn = 1;
            io.sockets.emit('color_change', {r:255, g:0, b:0});
        }
        else{
            //player 2 is blue.
            teamTurn = 0;
            io.sockets.emit('color_change', {r:0, g:0, b:255});
        }
    });


    socket.on('red', (data) => { 
        console.log('red event received'); 
        io.sockets.emit('color_change', {r:255, g:0, b:0}); 
    }); 
    socket.on('blue', (data) => { 
        console.log('blue event received'); 
        io.sockets.emit('color_change', {r:0, g:0, b:255}); 
    }); 
    socket.on('green', (data) => { 
        console.log('green event received'); 
        io.sockets.emit('color_change', {r:0, g:255, b:0}); 
    }); 
    socket.on('yellow', (data) => { 
        console.log('yellow event received'); 
        io.sockets.emit('color_change', {r:255, g:255, b:0}); 
    }); 
    socket.on('purple', (data) => { 
        console.log('purple event received'); 
        io.sockets.emit('color_change', {r:128, g:0, b:128}); 
    }); 
    socket.on('pink', (data) => { 
        console.log('pink event received'); 
        io.sockets.emit('color_change', {r:255, g:192, b:203}); 
    }); 
});