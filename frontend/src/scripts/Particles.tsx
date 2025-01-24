interface RGB {
    r: number;
    g: number;
    b: number;
    toString(): string;
}

function hexToRGB(hex: string): RGB {
    hex = hex.replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => r + r + g + g + b + b
    );

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
        hex
    ) as RegExpExecArray;

    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    return {
        r,
        g,
        b,
        toString: () => `rgb(${r}, ${g}, ${b})`,
    };
}

class Point {
    private container: Particles;
    private offset: number;
    private connectedPoints: Point[] = [];
    private reverse: boolean = false;
    private minDirectionAngle: number = 0;
    private maxDirectionAngle: number = 360;
    private directionAngle: number;
    private minDistance: number = 0.5;
    private maxDistance: number = 3;
    private distance: number;
    private minDiameter: number = 3;
    private maxDiameter: number = 7;
    private diameter: number = 7;
    private positionX: number;
    private positionY: number;
    private numberOfNeighbours: number;
    private pointColor: string;
    private lineColor: RGB;
    private lineFrameOpacityStep: number = 0.025;
    private lineFrameDuration: number = 250;
    private lineWidth: number = 1;

    constructor(
        container: Particles,
        pointColor: string = "#fff",
        lineColor: string = "#fff",
        numberOfNeighbours = 7,
        offset = 25
    ) {
        this.container = container;
        this.offset = offset;
        this.directionAngle = Math.floor(
            Math.random() * (this.maxDirectionAngle - this.minDirectionAngle) +
                this.minDirectionAngle
        );
        this.distance =
            Math.random() * (this.maxDistance - this.minDistance) +
            this.minDistance;
        this.diameter = Math.floor(
            Math.random() * (this.maxDiameter - this.minDiameter) +
                this.minDiameter
        );
        this.positionX = Math.random() * this.container.getCanvasWidth();
        this.positionY =
            Math.random() * (this.container.getCanvasHeight() - this.offset);
        this.numberOfNeighbours = numberOfNeighbours;
        this.pointColor = pointColor;
        this.lineColor = hexToRGB(lineColor);

        this.container.addPoint(this);

        this.drawPointOnCanvas();
    }

    public isPointOutsideTheBounds() {
        const rect = this.container.getCanvas().getBoundingClientRect();
        return (
            this.positionX < -this.offset ||
            this.positionX > rect.right - rect.left + this.offset ||
            this.positionY < -this.offset ||
            this.positionY > rect.bottom - rect.top + this.offset
        );
    }

    calculateDistance(pointA: Point, pointB: Point) {
        const dx = pointA.positionX - pointB.positionX;
        const dy = pointA.positionY - pointB.positionY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    connectNewPoint(newPoint: Point) {
        if (this.connectedPoints.length < this.numberOfNeighbours) {
            this.connectedPoints.push(newPoint);
            return;
        }
        let maximum = 0,
            maximumIndex = 0;
        for (const [index, point] of this.connectedPoints.entries()) {
            const distance = this.calculateDistance(this, point);
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
            this.connectedPoints[maximumIndex] = newPoint;
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

        const direction = this.reverse ? 1 : -1;

        switch (quadrant) {
            case 1:
                c1 = Math.sin(tempAngle) * this.distance;
                c2 = Math.cos(tempAngle) * this.distance;
                this.positionX += direction * c1;
                this.positionY -= direction * c2;
                break;
            case 2:
                tempAngle = ((angle - 90) * Math.PI) / 360;
                c1 = Math.sin(tempAngle) * this.distance;
                c2 = Math.cos(tempAngle) * this.distance;
                this.positionX -= direction * c1;
                this.positionY -= direction * c2;
                break;
            case 3:
                tempAngle = ((angle - 180) * Math.PI) / 360;
                c1 = Math.sin(tempAngle) * this.distance;
                c2 = Math.cos(tempAngle) * this.distance;
                this.positionX -= direction * c2;
                this.positionY += direction * c1;
                break;
            case 4:
                tempAngle = ((angle - 270) * Math.PI) / 360;
                c1 = Math.sin(tempAngle) * this.distance;
                c2 = Math.cos(tempAngle) * this.distance;
                this.positionX += direction * c1;
                this.positionY += direction * c2;
                break;
        }

        if (this.isPointOutsideTheBounds()) {
            this.reverse = !this.reverse;
        }
    }

    drawPointOnCanvas() {
        const context = this.container.getCanvasContext();
        const x = this.positionX;
        const y = this.positionY;

        if (context) {
            context.fillStyle = this.pointColor;
            context.beginPath();
            context.arc(x, y, this.diameter / 2, 0, 2 * Math.PI);
            context.fill();
            context.closePath();
        }
    }

    drawLinesToNeighbourPointsOnCanvas() {
        const context = this.container.getCanvasContext();

        if (context) {
            let animationFrameId: number | null;

            function drawLineWithOpacity(
                pointA: Point,
                pointB: Point,
                opacity: number = 0.025
            ) {
                if (context) {
                    context.beginPath();
                    context.moveTo(pointA.positionX, pointA.positionY);
                    context.lineTo(pointB.positionX, pointB.positionY);
                    context.strokeStyle = `rgba(${pointA.lineColor.r}, ${pointA.lineColor.g}, ${pointA.lineColor.b}, ${opacity})`;
                    context.lineWidth = pointA.lineWidth;
                    context.stroke();
                    context.closePath();
                }
            }

            function animateLinesOpacity(
                ref: Point,
                startTime: number = Date.now()
            ) {
                const currentTime = Date.now();
                const deltaTime = currentTime - startTime;
                const duration = ref.lineFrameDuration;

                for (const point of ref.connectedPoints) {
                    drawLineWithOpacity(ref, point, ref.lineFrameOpacityStep);
                }

                if (deltaTime < duration) {
                    animationFrameId = requestAnimationFrame(() =>
                        animateLinesOpacity(ref, startTime)
                    );
                } else if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                }
            }

            animateLinesOpacity(this);
        }
    }
}

export class Particles {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private width: number = 0;
    private height: number = 0;
    private points: Point[] = [];
    private lastTime: number | null = null;
    private numberOfPoints: number;
    private numberOfNeighbours: number;
    private pointColor: string;
    private lineColor: string;
    private fps: number;
    private animationFrameId: number | null = null;

    constructor(
        canvas: HTMLCanvasElement,
        numberOfPoints: number = 150,
        numberOfNeighbours: number = 7,
        pointColor: string = "#fff",
        lineColor: string = "#fff",
        fps: number = 60
    ) {
        this.canvas = canvas;
        this.numberOfPoints = numberOfPoints;
        this.numberOfNeighbours = numberOfNeighbours;
        this.pointColor = pointColor;
        this.lineColor = lineColor;
        this.fps = fps;

        this.updateCanvasSize();

        this.context = this.canvas.getContext("2d");

        for (let i = 0; i < numberOfPoints; i++) {
            new Point(this, pointColor, lineColor, numberOfNeighbours);
        }

        this.updateCanvasSize = this.updateCanvasSize.bind(this);
        this.animate = this.animate.bind(this);

        window.addEventListener("resize", () => {
            this.updateCanvasSize();
        });
    }

    addPoint(point: Point) {
        this.points.push(point);
    }

    public updateCanvasSize(): void {
        this.width = this.canvas.getBoundingClientRect().width;
        this.height = this.canvas.getBoundingClientRect().height;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    clearCanvas() {
        if (this.context) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    determineClusters() {
        for (const pointA of this.points) {
            for (const pointB of this.points) {
                if (pointA !== pointB) {
                    pointA.connectNewPoint(pointB);
                }
            }
        }
    }

    public animate(time: number): void {
        if (this.lastTime != null) {
            const elapsed = time - this.lastTime;
            const fpsInterval = 1000 / this.fps;

            if (elapsed > fpsInterval) {
                this.determineClusters();
                this.clearCanvas();

                for (const point of this.points) {
                    point.movePointAtFrame();
                    point.drawPointOnCanvas();
                    point.drawLinesToNeighbourPointsOnCanvas();
                }
            }

            this.lastTime = time - (elapsed % fpsInterval);
        } else {
            this.lastTime = time;
        }

        this.animationFrameId = requestAnimationFrame(this.animate);
    }

    public start(): void {
        if (!this.animationFrameId) {
            this.animate(0);
        }
    }

    public cancel(): void {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        window.removeEventListener("resize", this.updateCanvasSize);
    }

    public getCanvas() {
        return this.canvas;
    }

    public getCanvasContext() {
        return this.context;
    }

    getCanvasWidth() {
        return this.width;
    }

    getCanvasHeight() {
        return this.height;
    }
}
