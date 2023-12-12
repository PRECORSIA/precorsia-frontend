import {
    area as _area,
    bbox as _bbox,
    bboxPolygon as _bboxPolygon,
    centroid,
    polygon as _polygon,
    squareGrid
} from '@turf/turf';

function segment(points, target_area) {

    if (points.length < 4) {
        return [];
    }

    const firstPoint = points[0];
    const lastPoint = points[points.length - 1];
    if (firstPoint[0] !== lastPoint[0] || firstPoint[1] !== lastPoint[1]) {
        points.push(firstPoint);
    }

    const polygon = _polygon([points]);
    const bbox = _bbox(polygon);

    const polygonArea = _area(polygon);
    if (polygonArea > 75497474) {
        return [];
    }
    
    const cellSize = target_area / 1000;
    const grid = squareGrid(bbox, cellSize, { units: 'kilometers' });

    const centroids = grid.features.map(cell => centroid(cell));
    return centroids;
}

export { segment };