import React, { useEffect, useRef } from 'react';

export default function PetalCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -30;
        this.size = 12 * Math.random() + 10;
        this.speedY = 1.2 * Math.random() + 0.8;
        this.speedX = 0.8 * Math.random() - 0.4;
        this.angle = Math.random() * Math.PI * 2;
        this.angularSpeed = 0.03 * (Math.random() - 0.5);
        this.opacity = 0.6 * Math.random() + 0.35;
        this.isGold = Math.random() < 0.25;
        this.flip = Math.random();
        this.flipSpeed = 0.03 * Math.random() + 0.01;
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(0.008 * this.y) + this.speedX;
        this.angle += this.angularSpeed;
        this.flip += this.flipSpeed;
        if (this.y > height + 40 || this.x < -40 || this.x > width + 40) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.scale(Math.cos(this.flip), 1);

        if (this.isGold) {
          // Gold leaf petal
          ctx.beginPath();
          ctx.fillStyle = `rgba(251, 240, 185, ${0.28 * this.opacity})`;
          ctx.ellipse(0, 0, 0.65 * this.size, 1.05 * this.size, Math.PI / 4, 0, 2 * Math.PI);
          ctx.fill();

          ctx.beginPath();
          ctx.fillStyle = `rgba(223, 186, 103, ${this.opacity})`;
          ctx.ellipse(0, 0, 0.4 * this.size, 0.7 * this.size, Math.PI / 4, 0, 2 * Math.PI);
          ctx.fill();
        } else {
          // Red/rose petal
          ctx.beginPath();
          ctx.fillStyle = `rgba(180, 40, 60, ${this.opacity})`;
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, this.size / 3, 0, this.size);
          ctx.bezierCurveTo(this.size, this.size / 3, this.size / 2, -this.size / 2, 0, 0);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    const petals = Array.from({ length: 28 }, () => new Petal());

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      petals.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-[999]"
      aria-hidden="true"
    />
  );
}
