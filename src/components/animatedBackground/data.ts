import { TweenLite, Circ } from "gsap";
import { Point } from "./types";

export const initAnimatedBackground = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  containerRef: React.RefObject<HTMLDivElement>,
) => {
  let width: number,
    height: number,
    largeHeader: HTMLDivElement | null,
    canvas: HTMLCanvasElement | null,
    ctx: CanvasRenderingContext2D | null,
    points: Point[] = [],
    target: Point,
    animateHeader = true;

  const initHeader = () => {
    largeHeader = containerRef.current;
    if (largeHeader) {
      width = largeHeader.clientWidth;
      height = largeHeader.clientHeight;
      largeHeader.style.height = "100%"; // Full height of parent
    }

    canvas = canvasRef.current;
    if (canvas) {
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d");
    }

    // Create points dynamically based on container size
    points = [];
    const gridSizeX = Math.max(10, Math.floor(width / 100));
    const gridSizeY = Math.max(5, Math.floor(height / 100));
    const cellWidth = width / gridSizeX;
    const cellHeight = height / gridSizeY;

    for (let x = 0; x < width; x += cellWidth) {
      for (let y = 0; y < height; y += cellHeight) {
        const px = x + Math.random() * cellWidth;
        const py = y + Math.random() * cellHeight;
        const p: Point = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // Find the 3 closest points for each point
    for (const p1 of points) {
      const closest: Point[] = [];
      for (const p2 of points) {
        if (p1 !== p2) {
          let placed = false;
          for (let k = 0; k < 3; k++) {
            if (!placed && !closest[k]) {
              closest[k] = p2;
              placed = true;
            }
          }

          for (let k = 0; k < 3; k++) {
            if (
              !placed &&
              closest[k] &&
              getDistance(p1, p2) < getDistance(p1, closest[k])
            ) {
              closest[k] = p2;
              placed = true;
            }
          }
        }
      }
      p1.closest = closest;
    }

    for (const point of points) {
      const c = new Circle(point, 2 + Math.random() * 2, "rgba(255,140,0,0.9)"); // Dark orange
      point.circle = c;
    }

    target = {
      x: width / 2,
      y: height / 2,
      originX: width / 2,
      originY: height / 2,
    };
  };

  const mouseMove = (e: MouseEvent) => {
    let posx = 0,
      posy = 0;
    if (largeHeader) {
      const rect = largeHeader.getBoundingClientRect();
      if (e.pageX || e.pageY) {
        posx = e.pageX - rect.left;
        posy = e.pageY - rect.top;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX - rect.left + document.body.scrollLeft;
        posy = e.clientY - rect.top + document.body.scrollTop;
      }
      target.x = posx;
      target.y = posy;
      target.originX = posx;
      target.originY = posy;
    }
  };

  const scrollCheck = () => {
    animateHeader =
      document.body.scrollTop <= (largeHeader?.clientHeight || height);
  };

  const resize = () => {
    largeHeader = containerRef.current;
    if (largeHeader) {
      width = largeHeader.clientWidth;
      height = largeHeader.clientHeight;
    }
    if (canvas) {
      canvas.width = width;
      canvas.height = height;
    }
    initHeader();
    initAnimation();
  };

  const initAnimation = () => {
    animate();
    for (const point of points) {
      shiftPoint(point);
    }
  };

  const animate = () => {
    if (animateHeader && ctx) {
      ctx.clearRect(0, 0, width, height);
      for (const point of points) {
        const distance = Math.abs(getDistance(target, point));
        if (distance < 4000) {
          point.active = 0.3;
          point.circle!.active = 0.6;
        } else if (distance < 20000) {
          point.active = 0.1;
          point.circle!.active = 0.3;
        } else if (distance < 40000) {
          point.active = 0.02;
          point.circle!.active = 0.1;
        } else {
          point.active = 0;
          point.circle!.active = 0;
        }

        drawLines(point);
        point.circle!.draw();
      }
    }
    requestAnimationFrame(animate);
  };

  const shiftPoint = (p: Point) => {
    TweenLite.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: Circ.easeInOut,
      onComplete: () => shiftPoint(p),
    });
  };

  const drawLines = (p: Point) => {
    if (!p.active || !ctx) return;
    for (const closestPoint of p.closest!) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(closestPoint.x, closestPoint.y);
      ctx.strokeStyle = `rgba(255,140,0,${p.active})`; // Dark orange
      ctx.stroke();
    }
  };

  class Circle {
    pos: Point;
    radius: number;
    color: string;
    active: number;

    constructor(pos: Point, rad: number, color: string) {
      this.pos = pos;
      this.radius = rad;
      this.color = color;
      this.active = 1;
    }

    draw() {
      if (!this.active || !ctx) return;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 4 * Math.PI, false);
      ctx.fillStyle = `rgba(255,140,0,${this.active})`; // Dark orange
      ctx.fill();
    }
  }

  const getDistance = (p1: Point, p2: Point) => {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  };

  // Initialize and set up event listeners
  initHeader();
  initAnimation();

  if (!("ontouchstart" in window)) {
    window.addEventListener("mousemove", mouseMove);
  }
  window.addEventListener("scroll", scrollCheck);
  window.addEventListener("resize", resize);

  // Return cleanup function
  return () => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("scroll", scrollCheck);
    window.removeEventListener("resize", resize);
  };
};
