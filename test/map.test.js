import { expect } from 'chai';
import { segment } from '../src/modules/map.js';

describe('Segmentation functionality', () => {

    it('should return an array', () => {
        const points = [[0, 0], [0, 0.01], [0.01, 0.01], [0.01, 0], [0, 0]];
        const target_area = 5120;
        const result = segment(points, target_area);
        expect(result).to.be.an('array');
    });

    it('should return an array of centroids for the given polygon and target area', () => {
        const points = [[0, 0], [0, 0.01], [0.01, 0.01], [0.01, 0], [0, 0]];
        const target_area = 5120;
        const result = segment(points, target_area);
        result.forEach(centroid => {
            expect(centroid.geometry.type).to.equal('Point');
        });
    });

    it('should return an empty array if the target area is larger than the area of the polygon', () => {
        const points = [[0, 0], [0, 0.01], [0.01, 0.01], [0.01, 0], [0, 0]];
        const target_area = 1000000000;
        const result = segment(points, target_area);
        expect(result).to.be.an('array').that.is.empty;
    });

    it('should handle non-connecting points', () => {
        const points = [[0, 0], [0, 0.01], [0.01, 0.01], [20, 0], [0, 0]];
        const target_area = 25;
        const result = segment(points, target_area);
        expect(result).to.be.an('array').that.is.empty;
    });

    it('should handle too few points', () => {
        const points = [[0, 0], [0, 0.01], [0.01, 0.01]];
        const target_area = 25;
        const result = segment(points, target_area);
        expect(result).to.be.an('array').that.is.empty;
    });

    it('should handle too large geometries', () => {
        const points = [[0, 0], [0, 10000], [10000, 10000], [10000, 0], [0, 0]];
        const target_area = 25;
        const result = segment(points, target_area);
        expect(result).to.be.an('array').that.is.empty;
    });
});