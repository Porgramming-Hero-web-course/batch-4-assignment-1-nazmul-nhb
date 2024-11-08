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
