import React, { useEffect, useRef } from "react";

const CHARACTERS = " .:-=+*#%@";

const AsciiPortrait = () => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const particlesRef = useRef([]);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const sizeRef = useRef(400);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return undefined;

    const context = canvas.getContext("2d");
    const source = new Image();

    const buildPortrait = () => {
      const size = Math.max(220, Math.round(container.clientWidth));
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      sizeRef.current = size;
      canvas.width = Math.round(size * pixelRatio);
      canvas.height = Math.round(size * pixelRatio);
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const samplingCanvas = document.createElement("canvas");
      const samplingContext = samplingCanvas.getContext("2d", {
        willReadFrequently: true,
      });
      samplingCanvas.width = size;
      samplingCanvas.height = size;

      const scale = 0.94;
      const imageRatio = source.naturalWidth / source.naturalHeight;
      let drawWidth = size * scale;
      let drawHeight = drawWidth / imageRatio;
      if (drawHeight > size * scale) {
        drawHeight = size * scale;
        drawWidth = drawHeight * imageRatio;
      }

      const offsetX = (size - drawWidth) / 2;
      const offsetY = size - drawHeight;
      samplingContext.clearRect(0, 0, size, size);
      samplingContext.drawImage(
        source,
        offsetX,
        offsetY,
        drawWidth,
        drawHeight,
      );

      const pixels = samplingContext.getImageData(0, 0, size, size).data;
      const fontSize = size < 320 ? 5 : 7;
      const columnGap = fontSize * 0.72;
      const rowGap = fontSize * 1.08;
      const particles = [];

      for (let y = 0; y < size; y += rowGap) {
        for (let x = 0; x < size; x += columnGap) {
          const pixelIndex =
            (Math.floor(y) * size + Math.floor(x)) * 4;
          const alpha = pixels[pixelIndex + 3];
          if (alpha < 80) continue;

          const red = pixels[pixelIndex];
          const green = pixels[pixelIndex + 1];
          const blue = pixels[pixelIndex + 2];
          const brightness = (red + green + blue) / (3 * 255);
          const characterIndex = Math.min(
            CHARACTERS.length - 1,
            Math.floor(brightness * CHARACTERS.length),
          );

          particles.push({
            baseX: x,
            baseY: y,
            x,
            y,
            character: CHARACTERS[characterIndex],
            alpha: 0.38 + brightness * 0.62,
            fontSize,
          });
        }
      }

      particlesRef.current = particles;
    };

    const render = () => {
      const size = sizeRef.current;
      const pointer = pointerRef.current;
      const radius = size < 320 ? 38 : 54;
      context.clearRect(0, 0, size, size);
      context.textAlign = "center";
      context.textBaseline = "middle";

      particlesRef.current.forEach((particle) => {
        let targetX = particle.baseX;
        let targetY = particle.baseY;

        if (pointer.active) {
          const deltaX = particle.baseX - pointer.x;
          const deltaY = particle.baseY - pointer.y;
          const distance = Math.hypot(deltaX, deltaY) || 0.01;

          if (distance < radius) {
            const displacement = (radius - distance) * 1.15;
            targetX += (deltaX / distance) * displacement;
            targetY += (deltaY / distance) * displacement;
          }
        }

        particle.x += (targetX - particle.x) * 0.16;
        particle.y += (targetY - particle.y) * 0.16;
        context.font = `${particle.fontSize}px monospace`;
        context.fillStyle = `rgba(100, 255, 218, ${particle.alpha * 0.78})`;
        context.fillText(particle.character, particle.x, particle.y);
      });

      frameRef.current = window.requestAnimationFrame(render);
    };

    const updatePointer = (event) => {
      if (event.pointerType === "touch") return;
      const bounds = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
        active: true,
      };
    };

    const clearPointer = () => {
      pointerRef.current.active = false;
    };

    const resizeObserver = new ResizeObserver(() => {
      if (source.complete) buildPortrait();
    });

    source.onload = () => {
      buildPortrait();
      render();
    };
    source.src = `${import.meta.env.BASE_URL}profile.png`;
    resizeObserver.observe(container);
    canvas.addEventListener("pointermove", updatePointer);
    canvas.addEventListener("pointerleave", clearPointer);

    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", updatePointer);
      canvas.removeEventListener("pointerleave", clearPointer);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="ascii-portrait" aria-label="Interactive ASCII portrait of Harshit">
      <canvas ref={canvasRef} />
      <span className="ascii-glitch-bar ascii-glitch-bar-one" aria-hidden="true" />
      <span className="ascii-glitch-bar ascii-glitch-bar-two" aria-hidden="true" />
      <span className="ascii-glitch-bar ascii-glitch-bar-three" aria-hidden="true" />
    </div>
  );
};

export default AsciiPortrait;
