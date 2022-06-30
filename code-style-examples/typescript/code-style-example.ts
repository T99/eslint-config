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
export function add(operand1: number, operand2: number): number {
    
	return operand1 + operand2;
    
}

class Vehicle {
	
	/**
	 * The number of wheels that this vehicle has.
	 * 
	 * @type {number}
	 */
	protected numberOfWheels: number;

	/**
	 * The color of this vehicle.
	 * 
	 * @type {string}
	 */
	protected color: string;

	/**
	 * Initializes a new Vehicle with the specified color and number of wheels.
	 * 
	 * @param {number} numberOfWheels The number of wheels that this vehicle
	 * has.
	 * @param {string} color The color of this vehicle.
	 */
	public constructor(numberOfWheels: number, color: string) {
		
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
	public describe(): string {
		
		let wheelOrWheels: string;
		
		// No ternary statements are allowed.
		if (this.numberOfWheels === 1) wheelOrWheels = "wheel";
		else wheelOrWheels = "wheels";
		
		return `This vehicle is ${this.color} and ` +
			`has ${this.numberOfWheels} ${wheelOrWheels}.`;
		
	}
	
}

const NUMBER_OF_CAR_WHEELS: number = 4;

const jeep: Vehicle = new Vehicle(NUMBER_OF_CAR_WHEELS, "black");

console.log(jeep.describe());

export type MyType = {
	
	getName(): string;
	
};

export function getAdderFunction(
	increment: number = 1): (arg: number) => number {
	
	return (arg: number): number => arg + increment;
	
}
