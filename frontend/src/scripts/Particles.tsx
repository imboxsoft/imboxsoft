import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

function getCssVariableValue(value: string): string {
    let variableName = value;
    if (value.startsWith("var(")) {
        variableName = value.slice(4, -1).trim();
    }
    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(variableName).trim();
}

interface RGB {
    r: number;
    g: number;
    b: number;
    toString(): string;
}

interface Coordinate {
    x: number;
    y: number;
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

interface ConnectedPoint {
    point: Point;
    lineOpacity: number;
}

class Point {
    private container: Particles;
    private offset: number;
    private connectedPoints: ConnectedPoint[] = [];
    private reverse: boolean = false;
    private minDirectionAngle: number = 0;
    private maxDirectionAngle: number = 360;
    private directionAngle: number;
    private minDistance: number = 0.1;
    private maxDistance: number = 1.5;
    private distance: number;
    private minDiameter: number = 3;
    private maxDiameter: number = 7;
    private diameter: number = 7;
    private originalDiameter: number = 7;
    private positionX: number;
    private positionY: number;
    private numberOfNeighbours: number;
    private pointColor: string;
    private lineColor: RGB;
    private lineFrameOpacityStep: number = 0.0005;
    private lineMinOpacity: number = 0.005;
    private lineMaxOpacity: number = 0.1;
    private lineWidth: number = 0.8;

    constructor(
        container: Particles,
        pointColor: string,
        lineColor: string,
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
        this.originalDiameter = this.diameter;
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
            this.connectedPoints.push({
                point: newPoint,
                lineOpacity: this.lineMinOpacity,
            });
            return;
        }
        let maximum = 0,
            maximumIndex = 0;
        for (const [index, point] of this.connectedPoints.entries()) {
            const distance = this.calculateDistance(this, point.point);
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
            this.connectedPoints[maximumIndex] = {
                point: newPoint,
                lineOpacity: this.lineMinOpacity,
            };
        }
    }

    static getQuadrant(angle: number): number {
        return angle >= 0 && angle <= 90
            ? 1
            : angle >= 90 && angle <= 180
            ? 2
            : angle >= 180 && angle <= 270
            ? 3
            : 4;
    }

    checkPolygonsForCollision(coordinates: Coordinate[]) {
        let totalArea1 = 0,
            totalArea2 = 0;

        for (let index = 0; index < coordinates.length; index++) {
            const n = (index + 1) % coordinates.length;
            totalArea1 +=
                coordinates[index].x * coordinates[n].y -
                coordinates[index].y * coordinates[n].x;

            totalArea2 +=
                this.positionX * (coordinates[index].y - coordinates[n].y) +
                coordinates[index].x *
                    (coordinates[n].y - coordinates[index].y) +
                coordinates[n].x * (this.positionY - coordinates[index].y);
        }

        totalArea1 = Math.abs(totalArea1) / 2;
        totalArea2 = Math.abs(totalArea2) / 2;

        const offset = 100;

        return (
            totalArea2 >= totalArea1 - offset &&
            totalArea2 <= totalArea1 + offset
        );
    }

    checkGeneralCollision(
        cursorX: number,
        cursorY: number,
        cursorRadius: number
    ): boolean {
        const dx = this.positionX - cursorX;
        const dy = this.positionY - cursorY;
        const distanceSquared = dx * dx + dy * dy;

        return distanceSquared <= cursorRadius * cursorRadius;
    }

    calculateAngle(): [number, boolean] {
        const userInfo = this.container.getUserInfo() as UserInteraction;

        let angle = this.directionAngle;
        let isIntersect = false;

        if (userInfo && userInfo.isCursorMoving) {
            const cursorX = userInfo.cursorX,
                cursorY = userInfo.cursorY;
            // const pointX = this.positionX,
            //     pointY = this.positionY;
            const cursorTrajectoryAngle = userInfo.cursorTrajectoryAngle;
            const cursorRadius = userInfo.cursorRadius;
            const quadrant = Point.getQuadrant(cursorTrajectoryAngle);

            const isCollision = this.checkGeneralCollision(
                cursorX,
                cursorY,
                cursorRadius
            );

            switch (quadrant) {
                case 1:
                    if (isCollision) {
                        angle = 45;
                        isIntersect = true;
                    }
                    break;
                case 2:
                    if (isCollision) {
                        angle = 135;
                        isIntersect = true;
                    }
                    break;
                case 3:
                    if (isCollision) {
                        angle = 225;
                        isIntersect = true;
                    }
                    break;
                case 4:
                    if (isCollision) {
                        angle = 315;
                        isIntersect = true;
                    }
                    break;
            }

            if (isIntersect) {
                this.pointColor = getCssVariableValue(
                    fullConfig.theme?.colors?.main?.secondary.DEFAULT ||
                        "--secondary-light"
                );
                this.directionAngle = angle;
                this.reverse = false;
                this.distance =
                    userInfo.cursorRadius -
                    Math.sqrt(
                        Math.pow(this.positionX - userInfo.cursorX, 2) +
                            Math.pow(this.positionY - userInfo.cursorY, 2)
                    );
            }
        }

        return [angle, isIntersect];
    }

    movePointAtFrame() {
        const angle = this.calculateAngle();
        const direction = this.reverse ? 1 : -1;
        const tempAngleRadiants = (angle[0] * Math.PI) / 180;
        const dx = Math.cos(tempAngleRadiants) * this.distance;
        const dy = Math.sin(tempAngleRadiants) * this.distance;

        this.positionX -= direction * dx;
        this.positionY += direction * dy;

        if (this.isPointOutsideTheBounds()) {
            this.reverse = !this.reverse;
        }

        if (angle[1]) {
            this.distance =
                Math.random() * (this.maxDistance - this.minDistance) +
                this.minDistance;
        }
    }

    drawPointOnCanvas() {
        const context = this.container.getCanvasContext();
        const x = this.positionX;
        const y = this.positionY;

        const userIneraction = this.container.getUserInfo();

        if (
            userIneraction &&
            (this.checkGeneralCollision(
                userIneraction.rippleStartX,
                userIneraction.rippleStartY,
                userIneraction.currentRippleRadius
            ) ||
                this.diameter >= this.originalDiameter)
        ) {
            if (
                userIneraction.drawRipple &&
                !userIneraction.points.includes(this) &&
                this.diameter <=
                    this.originalDiameter + userIneraction.rippleMaxEffect
            ) {
                this.diameter += userIneraction.rippleEffectStep;
            } else {
                if (
                    userIneraction.drawRipple &&
                    !userIneraction.points.includes(this)
                ) {
                    userIneraction.points.push(this);
                }
                if (this.diameter >= this.originalDiameter) {
                    this.diameter -= userIneraction.rippleEffectStep;
                }
            }
        }

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
            function drawLineWithOpacity(
                pointA: Point,
                pointB: Point,
                opacity: number
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

            for (const point of this.connectedPoints) {
                const opacity = point.lineOpacity;
                if (opacity < this.lineMaxOpacity) {
                    drawLineWithOpacity(this, point.point, opacity);
                }
                point.lineOpacity += this.lineFrameOpacityStep;
            }
        }
    }
}

class UserInteraction {
    public cursorX: number = 0;
    public cursorY: number = 0;
    public rippleStartX: number = 0;
    public rippleStartY: number = 0;
    public cursorTrajectoryAngle: number = 0;
    public cursorRadius: number = 75;
    public isCursorMoving: boolean = false;
    public maxRippleRadius: number = 500;
    public currentRippleRadius: number = 75;
    public rippleStep: number = 10;
    public rippleEffectStep: number = 0.7;
    public rippleMaxEffect: number = 5;
    public drawRipple: boolean = false;
    public points: Point[] = [];

    constructor() {
        window.addEventListener(
            "mousemove",
            this.handleUserCursorMovement.bind(this) as EventListener
        );
        window.addEventListener(
            "click",
            this.handleUserClick.bind(this) as EventListener
        );
    }

    destroy() {
        window.removeEventListener("mousemove", this.handleUserCursorMovement);
        window.removeEventListener("click", this.handleUserClick);
    }

    public drawCursorAvatar(context: CanvasRenderingContext2D | null) {
        const x = this.cursorX;
        const y = this.cursorY;
        const radius = this.cursorRadius;

        if (context && window.innerWidth >= 1024) {
            context.fillStyle = "rgba(0, 0, 0, 0.25)";
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.fill();
            context.closePath();
        }
    }

    private handleUserCursorMovement(event: MouseEvent) {
        const previousX = this.cursorX,
            previousY = this.cursorY;
        const currentX = event.clientX,
            currentY = event.clientY;

        if (previousX != currentX && previousY != currentY) {
            const dx = currentX - previousX,
                dy = -1 * (currentY - previousY);

            let angleRadians = Math.atan2(dy, dx);

            if (angleRadians < 0) {
                angleRadians += 2 * Math.PI;
            }

            const angleDegrees = angleRadians * (180 / Math.PI);

            this.cursorTrajectoryAngle = angleDegrees;
            this.cursorX = currentX;
            this.cursorY = currentY;
            this.isCursorMoving = true;
        }
    }

    private handleUserClick(event: MouseEvent) {
        this.drawRipple = true;
        this.rippleStartX = event.clientX;
        this.rippleStartY = event.clientY;
    }

    public increaseRippleRadius() {
        if (
            this.drawRipple &&
            this.currentRippleRadius < this.maxRippleRadius
        ) {
            this.currentRippleRadius += this.rippleStep;
        } else {
            this.currentRippleRadius = this.cursorRadius;
            this.drawRipple = false;
            this.points = [];
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
    private userInteraction: UserInteraction | null = null;

    constructor(
        canvas: HTMLCanvasElement,
        fps: number = 60,
        numberOfPoints: number = 150,
        numberOfNeighbours: number = 7,
        pointColor: string = getCssVariableValue(
            fullConfig.theme?.colors?.foreground || "--foreground"
        ),
        lineColor: string = getCssVariableValue(
            fullConfig.theme?.colors?.foreground || "--foreground"
        )
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

                if (this.userInteraction) {
                    if (this.userInteraction.drawRipple) {
                        this.userInteraction.increaseRippleRadius();
                    }
                    this.userInteraction.drawCursorAvatar(this.context);
                    this.userInteraction.isCursorMoving = false;
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
        this.disableUserInteraction();
    }

    public enableUserInteraction() {
        this.userInteraction = new UserInteraction();
    }

    public disableUserInteraction() {
        this.userInteraction = null;
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

    getUserInfo() {
        return this.userInteraction;
    }

    public setParticles(count: number) {
        this.numberOfPoints = count;
    }

    public resetParticles() {
        this.points = [];
        for (let i = 0; i < this.numberOfPoints; i++) {
            new Point(
                this,
                this.pointColor,
                this.lineColor,
                this.numberOfNeighbours
            );
        }
    }
}
