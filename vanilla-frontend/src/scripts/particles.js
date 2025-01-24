export let Particles = (function () {
    window.requestAnimFrame = (function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame
        );
    })();

    window.cancelRequestAnimFrame = (function () {
        return (
            window.cancelAnimationFrame ||
            window.webkitCancelRequestAnimationFrame ||
            window.mozCancelRequestAnimationFrame ||
            window.oCancelRequestAnimationFrame ||
            window.msCancelRequestAnimationFrame
        );
    })();

    function hexToRGB(hex) {
        hex = hex.replace(
            /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            (m, r, g, b) => r + r + g + g + b + b
        );

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        return result
            ? {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16),
              }
            : null;
    }

    class Canvas {
        #canvasDomRef;
        #canvas;
        #context;
        #width;
        #height;
        #points = [];
        #lastTime = null;
        #fps;

        constructor(canvasId, fps) {
            this.#canvasDomRef = $(canvasId);
            this.#canvas = this.#canvasDomRef[0];
            this.#context = this.#canvas.getContext("2d");
            this.#width = this.#canvasDomRef.width();
            this.#height = this.#canvasDomRef.height();
            this.#canvas.width = this.#width;
            this.#canvas.height = this.#height;
            this.#fps = fps;

            let ref = this;

            this.updateCanvas = this.updateCanvas.bind(this);

            $(window).on("resize", function (e) {
                ref.updateCanvasSize();
            });
        }

        getCanvasRefs() {
            return {
                canvasDomRef: this.#canvasDomRef,
                canvas: this.#canvas,
                context: this.#context,
            };
        }

        getCanvasWidth() {
            return this.#width;
        }

        getCanvasHeight() {
            return this.#height;
        }

        updateCanvasSize() {
            this.#width = this.#canvasDomRef.width();
            this.#height = this.#canvasDomRef.height();
            this.#canvas.width = this.#width;
            this.#canvas.height = this.#height;
        }

        addPoint(point) {
            this.#points.push(point);
        }

        getPoints() {
            this.#points;
        }

        clearCanvas() {
            this.#context.clearRect(
                0,
                0,
                this.#canvas.width,
                this.#canvas.height
            );
        }

        determineClusters() {
            for (let pointA of this.#points) {
                for (let pointB of this.#points) {
                    if (pointA !== pointB) {
                        pointA.connectNewPoint(pointB);
                    }
                }
            }
        }

        updateCanvas(time) {
            if (this.#lastTime != null) {
                const elapsed = time - this.#lastTime;
                const fpsInterval = 1000 / this.#fps;

                if (elapsed > fpsInterval) {
                    this.determineClusters();
                    this.clearCanvas();

                    for (let point of this.#points) {
                        point.movePointAtFrame();
                        point.drawPointOnCanvas();
                        point.drawLinesToNeighbourPointsOnCanvas();
                    }
                }

                this.#lastTime = time - (elapsed % fpsInterval);
            } else {
                this.#lastTime = time;
            }

            window.requestAnimFrame(this.updateCanvas);
        }

        startAnimation() {
            window.requestAnimFrame(this.updateCanvas);
        }

        cancelAnimation() {
            window.cancelRequestAnimFrame(this.updateCanvas);
        }
    }

    class Point {
        #canvas;
        #offset;
        #connectedPoints = [];

        constructor(
            canvas,
            pointColor = "#fff",
            lineColor = "#fff",
            numberOfNeighbours = 7,
            offset = 25
        ) {
            this.#offset = offset;
            this.reverse = 1;
            this.minDirectionAngle = 0;
            this.maxDirectionAngle = 360;
            this.directionAngle = Math.floor(
                Math.random() *
                    (this.maxDirectionAngle - this.minDirectionAngle) +
                    this.minDirectionAngle
            );
            this.minDistance = 0.5;
            this.maxDistance = 3;
            this.distance =
                Math.random() * (this.maxDistance - this.minDistance) +
                this.minDistance;
            this.minDiameter = 3;
            this.maxDiameter = 7;
            this.diameter = Math.floor(
                Math.random() * (this.maxDiameter - this.minDiameter) +
                    this.minDiameter
            );
            this.positionX = Math.random() * canvas.getCanvasWidth();
            this.positionY =
                Math.random() * (canvas.getCanvasHeight() - this.#offset);
            this.#canvas = canvas;
            this.numberOfNeighbours = numberOfNeighbours;
            this.pointColor = pointColor;
            this.lineColor = hexToRGB(lineColor);
            this.lineFrameOpacityStep = 0.025;
            this.lineFrameDuration = 250;
            this.lineWidth = 1;
            this.#canvas.addPoint(this);
            this.drawPointOnCanvas();
        }

        static isPointOutsideTheBounds(point, container, offset = 0) {
            const rect = container.getBoundingClientRect();
            return (
                point.positionX < -offset ||
                point.positionX > rect.right - rect.left + offset ||
                point.positionY < -offset ||
                point.positionY > rect.bottom - rect.top + offset
            );
        }

        calculateDistance(point1, point2) {
            const dx = point1.positionX - point2.positionX;
            const dy = point1.positionY - point2.positionY;
            return Math.sqrt(dx * dx + dy * dy);
        }

        connectNewPoint(newPoint) {
            if (this.#connectedPoints.length < this.numberOfNeighbours) {
                this.#connectedPoints.push(newPoint);
                return;
            }
            let maximum = 0,
                maximumIndex = 0;
            for (let [index, point] of this.#connectedPoints.entries()) {
                let distance = this.calculateDistance(this, point);
                if (distance > maximum) {
                    maximum = distance;
                    maximumIndex = index;
                }
            }
            const finalDistance = this.calculateDistance(this, newPoint);
            if (
                finalDistance < maximum &&
                finalDistance >= 150 &&
                finalDistance <= 300
            ) {
                this.#connectedPoints[maximumIndex] = newPoint;
            }
        }

        movePointAtFrame() {
            const angle = this.directionAngle;
            let tempAngle = (angle * Math.PI) / 180;
            const quadrant =
                angle >= 0 && angle <= 90
                    ? 1
                    : angle >= 90 && angle <= 180
                    ? 2
                    : angle >= 180 && angle <= 270
                    ? 3
                    : 4;
            let c1, c2;

            switch (quadrant) {
                case 1:
                    c1 = Math.sin(tempAngle) * this.distance;
                    c2 = Math.cos(tempAngle) * this.distance;
                    this.positionX += this.reverse * c1;
                    this.positionY -= this.reverse * c2;
                    break;
                case 2:
                    tempAngle = ((angle - 90) * Math.PI) / 360;
                    c1 = Math.sin(tempAngle) * this.distance;
                    c2 = Math.cos(tempAngle) * this.distance;
                    this.positionX -= this.reverse * c1;
                    this.positionY -= this.reverse * c2;
                    break;
                case 3:
                    tempAngle = ((angle - 180) * Math.PI) / 360;
                    c1 = Math.sin(tempAngle) * this.distance;
                    c2 = Math.cos(tempAngle) * this.distance;
                    this.positionX -= this.reverse * c2;
                    this.positionY += this.reverse * c1;
                    break;
                case 4:
                    tempAngle = ((angle - 270) * Math.PI) / 360;
                    c1 = Math.sin(tempAngle) * this.distance;
                    c2 = Math.cos(tempAngle) * this.distance;
                    this.positionX += this.reverse * c1;
                    this.positionY += this.reverse * c2;
                    break;
            }

            if (
                Point.isPointOutsideTheBounds(
                    this,
                    this.#canvas.getCanvasRefs()["canvas"],
                    this.#offset
                )
            ) {
                this.reverse *= -1;
            }
        }

        drawPointOnCanvas() {
            const canvas = this.#canvas.getCanvasRefs()["canvas"];
            const context = this.#canvas.getCanvasRefs()["context"];
            const rect = canvas.getBoundingClientRect();
            const x = this.positionX;
            const y = this.positionY;

            context.fillStyle = this.pointColor;
            context.beginPath();
            context.arc(x, y, this.diameter / 2, 0, 2 * Math.PI);
            context.fill();
            context.closePath();
        }

        drawLinesToNeighbourPointsOnCanvas() {
            const canvas = this.#canvas.getCanvasRefs()["canvas"];
            const context = this.#canvas.getCanvasRefs()["context"];
            const rect = canvas.getBoundingClientRect();
            const x = this.positionX;
            const y = this.positionY;

            function drawLineWithOpacity(ref, point, opacity = 0.025) {
                context.beginPath();
                context.moveTo(ref.positionX, ref.positionY);
                context.lineTo(point.positionX, point.positionY);
                context.strokeStyle = `rgba(${ref.lineColor.r}, ${ref.lineColor.g}, ${ref.lineColor.b}, ${opacity})`;
                context.lineWidth = ref.lineWidth;
                context.stroke();
                context.closePath();
            }

            function animateLinesOpacity(ref, startTime, points) {
                const currentTime = Date.now();
                const deltaTime = currentTime - startTime;
                const duration = ref.lineFrameDuration;

                for (let point of points) {
                    drawLineWithOpacity(ref, point, ref.lineFrameOpacityStep);
                }

                if (deltaTime < duration) {
                    window.requestAnimFrame(() =>
                        animateLinesOpacity(ref, startTime, points)
                    );
                } else {
                    window.cancelRequestAnimFrame(() =>
                        animateLinesOpacity(ref, startTime, points)
                    );
                }
            }

            animateLinesOpacity(this, Date.now(), this.#connectedPoints);
        }
    }

    return {
        init: function (
            canvasId,
            pointColor = "#fff",
            lineColor = "#fff",
            fps = 60,
            numberOfPoints = 150,
            numberOfNeighbours = 7
        ) {
            let canvas = new Canvas(canvasId, fps);

            for (let i = 0; i < numberOfPoints; i++) {
                let point = new Point(
                    canvas,
                    pointColor,
                    lineColor,
                    numberOfNeighbours
                );
            }

            return canvas;
        },
        start: function (canvas) {
            canvas.startAnimation();
        },
        cancel: function (canvas) {
            canvas.cancelAnimation();
        },
    };
})();
