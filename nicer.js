

// nice to have JS modifications


var p = function ( anything, label, wrapper ) {
	var hasWrapper = typeof wrapper != "undefined" && (wrapper).isString();
	if ( label && (label).isString() ) {
		label += ": ";
	} else {
		label = "";
	}
	if ( hasWrapper ) console.log(wrapper.repeat(20));
	console.log(label + anything);
	if ( hasWrapper ) console.log(wrapper.repeat(20));
}

Object.prototype.inherits = function ( Superclass ) {
    function Surrogate() {};
    Surrogate.prototype = Superclass.prototype;
    this.prototype = new Surrogate();
};

Object.prototype.isNumber = function () {
	return this instanceof Number;
}

Object.prototype.isString = function () {
	return this instanceof String;
}

Math.rand = function ( min, max ) {
	var hasArgs = arguments.length === 2;
	if ( !hasArgs ) return Math.random();
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

Math.toRadians = function ( degrees ) {
	return (degrees/180) * Math.PI;
}

Math.toDegrees = function ( radians ) {
	return radians * (180/Math.PI);
}

Array.prototype.prepend = function ( value ) {
	this.unshift(value);
	return this;
}

Array.prototype.append = function ( value ) {
	this.push(value);
	return this;
}

Array.prototype.dup = function () {
	return this.slice();
}

Array.prototype.include = function ( value ) {
	return this.indexOf(value) != -1;
}

Array.prototype.take = function ( index ) {
	if ( typeof index === "undefined" ) return this.dup();
	return this.slice(0, index);
}

Array.prototype.drop = function ( n ) {
	var start = this.length - n;
	return this.slice(start, this.length);
}

Array.prototype.sample = function () {
	var sampleIndex = Math.rand(0, this.length - 1);
	return this[sampleIndex];
}

Array.prototype.clean = function( values ) {
	values = values || [undefined, null];
	values = (values instanceof Array) ? values : [].slice.call(arguments);
    for (var i = 0; i < this.length; i++) {
        if ( values.include(this[i]) ) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

Array.prototype.max = function () {
	return Math.max.apply(null, this);
}

Array.prototype.min = function () {
	return Math.min.apply(null, this);
}

Array.prototype.sum = function () {
	return this.reduce(function (prev, curr) {
		return prev + curr;
	});
}

Array.prototype.mean = function () {
	return this.sum() / this.length;
}

String.prototype.repeat = function ( n ) {
	return new Array(n+1).join(this);
}

Number.prototype.times = function (f) {
	results = [];
	for (var i = 0; i < this; i++) {
		results.push(f());
	}
	return results;
}








