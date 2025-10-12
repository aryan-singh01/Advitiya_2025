import { useState, useEffect, useRef } from "react";

export default function SolarSystem() {
  const [aligned, setAligned] = useState(false);
  const [rotation, setRotation] = useState(0); // in degrees
  const rotationSpeed = useRef(0.15); // degrees per frame (approx)

  const requestRef = useRef();

  useEffect(() => {
    // Start orbit rotation animation frame loop
    const animate = () => {
      setRotation((prev) => (prev + rotationSpeed.current) % 360);

      // If aligned, slow down rotation speed smoothly
      if (aligned) {
        rotationSpeed.current *= 0.95; // slow down by 5% each frame
        if (rotationSpeed.current < 0.001) {
          rotationSpeed.current = 0;
        }
      }

      if (rotationSpeed.current > 0) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, [aligned]);

  useEffect(() => {
    // After 10 seconds, trigger alignment
    const timer = setTimeout(() => setAligned(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const planets = [
    {
      name: "Mercury",
      orbitRadius: 72, // px
      planetSize: 6,
      color: "#b1b1b1",
      alignedLeft: 110,
    },
    {
      name: "Venus",
      orbitRadius: 96,
      planetSize: 10,
      color: "#f5deb3",
      alignedLeft: 170,
    },
    {
      name: "Earth",
      orbitRadius: 120,
      planetSize: 12.5,
      color: "#3b82f6",
      alignedLeft: 230,
    },
    {
      name: "Mars",
      orbitRadius: 144,
      planetSize: 8,
      color: "#e55342",
      alignedLeft: 280,
    },
    {
      name: "Jupiter",
      orbitRadius: 200,
      planetSize: 56,
      color: "#d2b48c",
      alignedLeft: 345,
    },
    {
      name: "Saturn",
      orbitRadius: 288,
      planetSize: 44,
      color: "#deb887",
      alignedLeft: 420,
    },
    {
      name: "Uranus",
      orbitRadius: 346,
      planetSize: 25,
      color: "#7fffd4",
      alignedLeft: 480,
    },
    {
      name: "Neptune",
      orbitRadius: 392,
      planetSize: 20,
      color: "#4169e1",
      alignedLeft: 540,
    },
  ];

  // Container size
  const containerWidth = 900;
  const containerHeight = 450;

  return (
    <div className="h-full w-full top-0 bg-black fixed z-10 flex items-center justify-center">
      <div
        className="relative bg-black"
        style={{ width: containerWidth, height: containerHeight, userSelect: "none" }}
      >
        {/* Sun - fixed vertically centered left */}
        <div
          className="rounded-full flex items-center justify-center absolute"
          style={{
            width: 112,
            height: 112,
            backgroundColor: "#FFD700",
            top: "50%",
            left: 40,
            transform: "translateY(-50%)",
            zIndex: 20,
          }}
        >
          <div className="absolute -top-6 text-white text-sm flex flex-col items-center">
            Sun
          </div>
          <div className="rounded-full w-20 h-20 animate-ping bg-yellow-300 absolute"></div>
        </div>

        {/* Planets and orbits */}
        {planets.map(({ name, orbitRadius, planetSize, color, alignedLeft }) => {
          // Calculate angle in radians
          const angleRad = (rotation * Math.PI) / 180;

          // Position planet coordinates
          const orbitCenterX = containerWidth / 2;
          const orbitCenterY = containerHeight / 2;

          // Planet position on orbit circle
          const orbitX = orbitCenterX + orbitRadius * Math.cos(angleRad);
          const orbitY = orbitCenterY + orbitRadius * Math.sin(angleRad);

          return (
            <div key={name}>
              {/* Orbit ring */}
              <div
                className="rounded-full border border-white/50 absolute"
                style={{
                  width: orbitRadius * 2,
                  height: orbitRadius * 2,
                  top: orbitCenterY - orbitRadius,
                  left: orbitCenterX - orbitRadius,
                  transition: "all 1s ease",
                  opacity: aligned ? 0.4 : 1,
                }}
              ></div>

              {/* Planet dot */}
              <div
                className="rounded-full absolute"
                style={{
                  width: planetSize,
                  height: planetSize,
                  backgroundColor: color,
                  // Position depends on aligned or orbiting:
                  top: aligned
                    ? orbitCenterY - planetSize / 2
                    : orbitY - planetSize / 2,
                  left: aligned ? alignedLeft : orbitX - planetSize / 2,
                  transition: "top 2s ease, left 2s ease",
                  zIndex: 15,
                }}
                title={name}
              ></div>

              {/* Label */}
              <div
                className="absolute text-white text-sm flex flex-col items-center select-none"
                style={{
                  top: aligned
                    ? orbitCenterY + planetSize
                    : orbitY - planetSize - 20,
                  left: aligned ? alignedLeft : orbitX,
                  transform: "translateX(-50%)",
                  transition: "top 2s ease, left 2s ease",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
