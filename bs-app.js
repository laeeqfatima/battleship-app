var view = {
    displayMessage: function(msg) {
        var area = document.getElementById("messageArea");
        area.innerHTML = msg;
    },

    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    },

    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    }

};

var model = {
    boardSize: 7,
    numShips: 3,
    ships: [{locations: ["06", "16", "26"], hits: ["", "", ""]}, 
            {locations: ["24", "34", "44"], hits: ["", "", ""]}, 
            {locations: ["10", "11", "12"], hits: ["", "", ""]}],
    shipsSunk: 0,
    shipLength: 3,
    fire: function(guess) {
        for(var i = 0; i < this.numShips; i++){
            var ship = this.ships[i];
        }

    }

};

