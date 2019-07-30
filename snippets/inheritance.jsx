// ANIMAL

// Constructor
function Animal(name) {
	this.name = name;
	this.speed = 0;
}

Animal.prototype.stop = function() {
	this.speed = 0;
	alert( this.name + " stopped" );
}

Animal.prototype.run = function(speed) {
	this.speed += speed;
	alert( this.name + " run, speed " + this.speed );
};


// RABBIT

// Constructor
function Rabbit(name) {
	Animal.apply(this, arguments);
}

// Inheritance
Rabbit.prototype = new Animal();
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.jump = function() {
	this.speed++;
	alert( this.name + " jump, speed " + this.speed );
}

// Overriding
Rabbit.prototype.run = function() {
	Animal.prototype.run.apply(this, arguments);
	this.jump();
}

var rabbit = new Rabbit("Tom");
rabbit.run();
rabbit.jump();
rabbit.stop();

// alert(Animal.prototype.isPrototypeOf(rabbit));