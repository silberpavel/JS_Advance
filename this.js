console.log(`----------------- this -------------------`);
console.log(this);

// --------------------------------------------------
window.hello = 'hello';
console.log(window.hello); // hello

// --------------------------------------------------
var helloWorld = function () {
    console.log(this)
}

helloWorld(); // window

// --------------------------------------------------
var human = {
    name: 'Alexa',
    getName: function() {
        console.log(this);
    }
};

human.getName(); // Alexa

// --------------------------------------------------
var Mail = function() {
    this.letter = 'This is my letter';
    console.log(this);
};

Mail.prototype.getLetter = function() {
    console.log(this);
}

var mail = new Mail();
mail.getLetter();

// --------------------------------------------------

$('.button').click(human.getName); 
$('.button').click(human.getName.bind(human)); // BIND меняет контекст объекта

// --------------------------------------------------

var sport = {
    tournament: "The Masters",
    palayers: [
        {
        name: 'Wood',
        age: 37
        },
        {
        name: 'John',
        age: 35
        }
    ],
    show: function() {
        console.log(this);
        var self = this; // helps to keep object content
        this.palayers.forEach(function(person) {
            console.log(person.name + ' is playing ' + self.tournament);
        });
    }
};

sport.show();