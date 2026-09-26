"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [geometryType, setGeometryType] = useState<"torus" | "icosahedron" | "dodecahedron">("torus");
  const [wireframe, setWireframe] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 550;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x18181b, 1.4);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    // 4. Mesh Group
    const group = new THREE.Group();
    scene.add(group);

    const getGeo = () => {
      switch (geometryType) {
        case "icosahedron":
          return new THREE.IcosahedronGeometry(1.6, 2);
        case "dodecahedron":
          return new THREE.DodecahedronGeometry(1.6, 1);
        default:
          return new THREE.TorusKnotGeometry(1.4, 0.42, 128, 32);
      }
    };

    const geo = getGeo();
    const solidMat = new THREE.MeshStandardMaterial({
      color: 0x141416,
      roughness: 0.32,
      metalness: 0.72,
    });
    const solidMesh = new THREE.Mesh(geo, solidMat);
    group.add(solidMesh);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x18181b,
      wireframe: true,
      transparent: true,
      opacity: wireframe ? 0.22 : 0,
    });
    const wireMesh = new THREE.Mesh(geo, wireMat);
    group.add(wireMesh);

    // 5. Floating Dust Particles
    const count = 180;
    const pGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 12;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x555555,
      transparent: true,
      opacity: 0.35,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // 6. Interactive Mouse Movement
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    container.addEventListener("mousemove", onMouseMove);

    // 7. Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.x += 0.003;
      group.rotation.y += 0.006;
      group.rotation.z = targetX * 0.3;
      group.position.x = targetX * 0.5;
      group.position.y = targetY * 0.3;

      particles.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };
    animate();

    // 8. Resize Handler
    const onResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geo.dispose();
    };
  }, [geometryType, wireframe]);

  return (
    <div className="relative w-full h-[520px] bg-[#FAF9F5] rounded-3xl border border-[#E5E2D9] overflow-hidden shadow-sm">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Controls */}
      <div className="absolute top-5 right-5 flex items-center gap-2 bg-[#F3F1EA]/90 backdrop-blur-md px-3 py-2 rounded-2xl border border-[#E5E2D9] shadow-sm text-xs font-mono">
        <button
          onClick={() => setGeometryType("torus")}
          className={`px-2.5 py-1 rounded-lg transition-colors ${
            geometryType === "torus" ? "bg-[#141416] text-[#FAF9F5]" : "text-[#71706B] hover:text-[#141416]"
          }`}
        >
          Torus
        </button>
        <button
          onClick={() => setGeometryType("icosahedron")}
          className={`px-2.5 py-1 rounded-lg transition-colors ${
            geometryType === "icosahedron" ? "bg-[#141416] text-[#FAF9F5]" : "text-[#71706B] hover:text-[#141416]"
          }`}
        >
          Icosa
        </button>
        <button
          onClick={() => setGeometryType("dodecahedron")}
          className={`px-2.5 py-1 rounded-lg transition-colors ${
            geometryType === "dodecahedron" ? "bg-[#141416] text-[#FAF9F5]" : "text-[#71706B] hover:text-[#141416]"
          }`}
        >
          Dodeca
        </button>
        <span className="w-px h-4 bg-[#DCD8CC] mx-1" />
        <button
          onClick={() => setWireframe(!wireframe)}
          className={`px-2 py-1 rounded-lg border ${
            wireframe ? "border-[#141416] text-[#141416]" : "border-transparent text-[#71706B]"
          }`}
        >
          Wire
        </button>
      </div>

      <div className="absolute bottom-5 left-6 font-mono text-[11px] text-[#71706B] uppercase tracking-wider flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        WebGL Engine Active • 60 FPS
      </div>
    </div>
  );
}