module.exports = function circleIntersect(
  { x: x1, y: y1, radius: r1 },
  { x: x2, y: y2, radius: r2 }
) {
  let squareDistance = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
  return squareDistance <= ((r1 + r2) * (r1 + r2))
}