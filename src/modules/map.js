import { point, distance as _distance } from '@turf/turf';

const pointA = point([-120.9857, 2.7484]);
const pointB = point([-100.2437, -2.052]);

const distance = _distance(pointA, pointB, { units: 'miles' });

console.log(`Distance between A and B: ${distance} miles`);
