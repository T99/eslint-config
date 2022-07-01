/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 7:10 PM -- June 28, 2022.
 * Project: @t99/eslint-config
 */

/**
 * Returns the result of summing the two provided operands.
 * 
 * @param {number} operand1 The first operand to sum.
 * @param {number} operand2 The second operand to sum.
 * @returns {number} The result of summing the two provided operands.
 */
export function add(operand1, operand2) {
    
	return operand1 + operand2;
    
}

class Vehicle {

	/**
	 * The number of wheels that this vehicle has.
	 * 
	 * @type {number}
	 */
	numberOfWheels;

	/**
	 * The color of this vehicle.
	 * 
	 * @type {string}
	 */
	color;

	/**
	 * Initializes a new Vehicle with the specified color and number of wheels.
	 * 
	 * @param {number} numberOfWheels The number of wheels that this vehicle
	 * has.
	 * @param {string} color The color of this vehicle.
	 */
	constructor(numberOfWheels, color) {
		
		this.numberOfWheels = numberOfWheels;
		this.color = color;
		
	}

	/**
	 * Returns a human-readable string describing the properties of this
	 * vehicle.
	 * 
	 * @returns {string} A human-readable string describing the properties of
	 * this vehicle.
	 */
	describe() {
		
		let wheelOrWheels;
		
		// No ternary statements are allowed.
		if (this.numberOfWheels === 1) wheelOrWheels = "wheel";
		else wheelOrWheels = "wheels";
		
		return `This vehicle is ${this.color} and ` +
			`has ${this.numberOfWheels} ${wheelOrWheels}.`;
		
	}
	
}

const NUMBER_OF_CAR_WHEELS = 4;

const jeep = new Vehicle(NUMBER_OF_CAR_WHEELS, "black");

jeep.numberOfWheels = 1;

console.log(jeep.describe());
