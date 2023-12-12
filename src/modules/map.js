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

    const polygonArea = _area(polygon);
    if (polygonArea > 3774873.7) {
        return [];
    }

    const cellSize = target_area / 1000;
    const grid = squareGrid(bbox, cellSize, { units: 'kilometers' });

    const centroids = grid.features.map(cell => centroid(cell));
    return centroids;
}

export { segment };