// define class
class Car {
	constructor(
		public make: string,
		public model: string,
		public year: number,
	) {}

	getCarAge(): number {
		return new Date().getFullYear() - this.year;
	}
}

// Sample Input:
// const car = new Car('Honda', 'Civic', 2018);
// console.log(car.getCarAge());
