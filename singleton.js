// Singleton pattern (единичный предмет singleton)
var counterModule = (function() {

    var counter = 0,
    instance;  // экземпляр объекта (к примеру Bob is instance of human)

    var getCounter = function() {
        return counter;
    }

    var increaseCounter = function() {
        counter++;
    }

    var createInstance = function() {
        return {
            getCounter: getCounter,
            increaseCounter: increaseCounter
        }
    }

    return {
        getInstance: function() {
            return instance || (instance = createInstance());
        }
    }

}()); // Самовызывающая функция