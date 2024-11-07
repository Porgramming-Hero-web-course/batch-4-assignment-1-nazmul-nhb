// define types
type Circle = {
	shape: 'circle';
	radius: number;
};

type Rectangle = {
	shape: 'rectangle';
	width: number;
	height: number;
};

type CircleOrRectangle = Circle | Rectangle;

// define function type
type CalculateArea = (shape: CircleOrRectangle) => number;

/**
 *
 * @param shape Accepts only shapes that matches either Circle or Rectangle.
 * @returns Returns calculated area of the shape provided.
 */
const calculateShapeArea: CalculateArea = (shape) => {
	let area: number = 0;

	if (shape.shape === 'circle') {
		area = Math.PI * shape.radius * shape.radius;
	}
	if (shape.shape === 'rectangle') {
		area = shape.width * shape.height;
	}

	return Number(area.toFixed(2));
};

// Sample Input:
// console.log(calculateShapeArea({ shape: 'circle', radius: 5 }));
// console.log(
// 	calculateShapeArea({
// 		shape: 'rectangle',
// 		width: 4,
// 		height: 6,
// 	}),
// );
