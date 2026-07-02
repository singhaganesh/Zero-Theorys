"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeSphere() {
  const containerRef = useRef(null);
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Check WebGL availability
    let renderer;
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setIsWebGLAvailable(false);
        return;
      }
    } catch (e) {
      setIsWebGLAvailable(false);
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 2. Setup Three.js Scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 4.5;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Create Particle Sphere
    // We create a sphere shape using points for a high-tech kinetic look
    const radius = 1.8;
    const widthSegments = 38;
    const heightSegments = 38;
    const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    
    // Convert to particles
    const count = sphereGeometry.attributes.position.count;
    const originalPositions = sphereGeometry.attributes.position.clone();
    
    // Colors buffer - mix mint green and sky blue
    const colors = new Float32Array(count * 3);
    const colorMint = new THREE.Color("#10b981");
    const colorBlue = new THREE.Color("#60a5fa");
    
    for (let i = 0; i < count; i++) {
      // Mix colors based on Y coordinate
      const y = sphereGeometry.attributes.position.getY(i);
      const ratio = (y + radius) / (radius * 2);
      const mixedColor = new THREE.Color().lerpColors(colorMint, colorBlue, ratio);
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    
    sphereGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    
    // Materials
    // Create points (outer floating aura)
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true
    });
    
    const particleSphere = new THREE.Points(sphereGeometry, pointsMaterial);
    scene.add(particleSphere);

    // Create a wireframe sphere overlay for structural integrity
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.02
    });
    const wireMesh = new THREE.Mesh(new THREE.SphereGeometry(radius - 0.02, 16, 16), wireframeMaterial);
    scene.add(wireMesh);

    // 4. Mouse interaction variables
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0
    };

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      // Normalize mouse coordinates to [-1, 1] relative to center of canvas
      mouse.targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // 5. Animation loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Smooth mouse interpolation (easing)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Base auto rotation
      particleSphere.rotation.y = time * 0.15;
      particleSphere.rotation.x = time * 0.08;
      wireMesh.rotation.y = time * 0.15;
      wireMesh.rotation.x = time * 0.08;

      // Deform sphere vertices based on mouse interaction and wave frequencies
      const posAttr = sphereGeometry.attributes.position;
      
      for (let i = 0; i < count; i++) {
        // Original coordinates
        const x = originalPositions.getX(i);
        const y = originalPositions.getY(i);
        const z = originalPositions.getZ(i);

        // Vector pointing from center to vertex
        const vector = new THREE.Vector3(x, y, z).normalize();
        
        // Smoother, organic wave logic representing fluid water-ripples
        const wave1 = Math.sin(x * 1.2 + time * 0.8) * 0.04;
        const wave2 = Math.cos(y * 1.5 + time * 1.0) * 0.03;
        const wave3 = Math.sin(z * 1.8 + time * 0.6) * 0.02;
        
        // Gentle mouse interaction: inflate slightly near mouse cursor
        const dist = Math.sqrt(Math.pow(x - mouse.x * 1.5, 2) + Math.pow(y - mouse.y * 1.5, 2));
        const mouseEffect = Math.max(0, 1.5 - dist) * 0.06;

        const displacement = radius + wave1 + wave2 + wave3 + mouseEffect;
        
        // Update vertex
        posAttr.setXYZ(i, vector.x * displacement, vector.y * displacement, vector.z * displacement);
      }
      
      posAttr.needsUpdate = true;

      // Render scene
      renderer.render(scene, camera);
    };

    animate();

    // 6. Handle resizing
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      sphereGeometry.dispose();
      pointsMaterial.dispose();
      wireframeMaterial.dispose();
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* 3D Render Canvas Container */}
      <div 
        ref={containerRef} 
        style={{ 
          width: "100%", 
          height: "100%", 
          cursor: "grab",
          display: isWebGLAvailable ? "block" : "none" 
        }} 
      />

      {/* Fallback Animated Canvas 2D / SVG in case WebGL is unavailable */}
      {!isWebGLAvailable && (
        <div style={{ 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%)"
        }}>
          {/* Animated SVG Sphere fallback */}
          <svg width="300" height="300" viewBox="0 0 200 200" style={{ animation: "float 6s ease-in-out infinite" }}>
            <circle cx="100" cy="100" r="80" fill="none" stroke="url(#fallbackGrad)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="url(#fallbackGrad)" strokeWidth="1" strokeDasharray="4 4" />
            <ellipse cx="100" cy="100" rx="80" ry="25" fill="none" stroke="url(#fallbackGrad)" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="25" ry="80" fill="none" stroke="url(#fallbackGrad)" strokeWidth="1" />
            <defs>
              <linearGradient id="fallbackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
}
