// O(n ^ 2) time | O(n) space
function countSquares(points) {
  const pointsString = {};
  let count = 0;
  for (const point of points) {
    pointsString[pointToString(point)] = true;
  }

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (i === j) {
        continue;
      }

      const pointA = points[i];
      const pointB = points[j];
      const mindPoint = [
        (pointA[0] + pointB[0]) / 2,
        (pointA[1] + pointB[1]) / 2,
      ];
      const xDistanceFromMid = pointA[0] - mindPoint[0];
      const yDistanceFromMid = pointA[1] - mindPoint[1];

      const pointC = [
        mindPoint[0] + yDistanceFromMid,
        mindPoint[1] - xDistanceFromMid,
      ];
      const pointD = [
        mindPoint[0] - yDistanceFromMid,
        mindPoint[1] + xDistanceFromMid,
      ];

      if (
        pointToString(pointC) in pointsString &&
        pointToString(pointD) in pointsString
      ) {
        count++;
      }
    }
  }
  return count / 4;
}

function pointToString(point) {
  return point.join(',');
}
