import { 
  area as _area, 
  bbox as _bbox, 
  bboxPolygon as _bboxPolygon, 
  centroid, 
  polygon as _polygon, 
  squareGrid 
} from '@turf/turf';

function segment(points, target_area) {
    
    const polygon = _polygon([points]);
    const bbox = _bbox(polygon);

    const cellSize = target_area / 1000;
    const grid = squareGrid(bbox, cellSize, { units: 'kilometers' });

    // Find the centroid of each cell and store them in an array
    const centroids = grid.features.map(cell => centroid(cell));
    return centroids;
}

export { segment };