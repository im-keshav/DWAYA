"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Compass, X } from "lucide-react";
import { TopologyType } from "@/types/portfolio";

interface ThreeBackdropProps {
  topology: TopologyType;
  setTopology: (t: TopologyType) => void;
  wireframeOnly: boolean;
  setWireframeOnly: (w: boolean) => void;
  orbitSpeed: number;
  setOrbitSpeed: (s: number) => void;
  showConfig: boolean;
  setShowConfig: (show: boolean) => void;
  setFps: (fps: number) => void;
  onAudio?: (freq?: number, type?: OscillatorType) => void;
}

export default function ThreeBackdrop({
  topology,
  setTopology,
  wireframeOnly,
  setWireframeOnly,
  orbitSpeed,
  setOrbitSpeed,
  showConfig,
  setShowConfig,
  setFps,
  onAudio,
}: ThreeBackdropProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const orbitSpeedRef = useRef(orbitSpeed);

  useEffect(() => {
    orbitSpeedRef.current = orbitSpeed;
  }, [orbitSpeed]);

  const engineRef = useRef<{
    mainMesh: THREE.Mesh;
    wireMesh: THREE.Mesh;
    wireMat: THREE.MeshBasicMaterial;
    buildGeometry: (type: TopologyType) => THREE.BufferGeometry;
  } | null>(null);

  useEffect(() => {
    let animFrame: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const buildGeometry = (type: TopologyType): THREE.BufferGeometry => {
      switch (type) {
        case "icosahedron":
          return new THREE.IcosahedronGeometry(1.9, 1);
        case "dodecahedron":
          return new THREE.DodecahedronGeometry(1.9, 1);
        case "octahedron":
          return new THREE.OctahedronGeometry(2.1, 1);
        case "ring":
          return new THREE.TorusGeometry(2.1, 0.42, 32, 100);
        case "torusknot":
        default:
          return new THREE.TorusKnotGeometry(1.55, 0.42, 128, 24, 2, 3);
      }
    };

    const startTime = performance.now();
    const scene = new THREE.Scene();

    const parent = canvas.parentElement;
    const width = parent ? parent.clientWidth : window.innerWidth;
    const height = parent ? parent.clientHeight : window.innerHeight;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);

    const group = new THREE.Group();
    scene.add(group);

    const geo = buildGeometry(topology);

    // Dark Obsidian Sculptural Material in Light Theme
    const solidMat = new THREE.MeshStandardMaterial({
      color: 0x141416,
      roughness: 0.32,
      metalness: 0.72,
      wireframe: false,
      side: THREE.DoubleSide,
    });
    const mainMesh = new THREE.Mesh(geo, solidMat);
    group.add(mainMesh);

    // Hairline Architectural Wireframe
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x78716c,
      wireframe: true,
      transparent: true,
      opacity: wireframeOnly ? 0.42 : 0.08,
    });
    const wireMesh = new THREE.Mesh(geo, wireMat);
    group.add(wireMesh);

    // Floating Stardust Particles in Deep Graphite
    const count = 450;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 14;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x292524,
      size: 0.038,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Architectural Studio Lights tuned for dark obsidian specular sheen
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(7, 10, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x94a3b8, 2.2);
    rimLight.position.set(-8, -4, -5);
    scene.add(rimLight);

    const softFillLight = new THREE.DirectionalLight(0xd6d3d1, 1.2);
    softFillLight.position.set(0, -6, 5);
    scene.add(softFillLight);

    // Inertial Pointer Parallax
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = nx * 0.45;
      targetY = ny * 0.35;
    };
    window.addEventListener("mousemove", onMove);

    const onResize = () => {
      if (!canvas || !renderer || !camera) return;
      const p = canvas.parentElement;
      const w = p ? p.clientWidth : window.innerWidth;
      const h = p ? p.clientHeight : window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Performance Loop & FPS Measurement
    let lastTime = performance.now();
    let frames = 0;

    const animate = () => {
      animFrame = requestAnimationFrame(animate);
      const elapsed =
        ((performance.now() - startTime) * 0.001) * orbitSpeedRef.current;

      frames++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frames * 1000) / (now - lastTime)));
        frames = 0;
        lastTime = now;
      }

      // Kinetic Sculptural Rotation
      group.rotation.y = elapsed * 0.22;
      group.rotation.x = elapsed * 0.12;

      // Swarm Rotation
      particles.rotation.y = elapsed * 0.03;
      particles.rotation.x = elapsed * 0.015;

      // Damped Parallax Camera
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      camera.position.x = currentX;
      camera.position.y = currentY;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    engineRef.current = {
      mainMesh,
      wireMesh,
      wireMat,
      buildGeometry,
    };

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geo.dispose();
      pGeo.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFps]);

  // Update geometry & wireframe when props change
  useEffect(() => {
    if (!engineRef.current) return;
    const { mainMesh, wireMesh, wireMat, buildGeometry } = engineRef.current;

    const newGeo = buildGeometry(topology);
    if (mainMesh && wireMesh) {
      mainMesh.geometry.dispose();
      wireMesh.geometry.dispose();
      mainMesh.geometry = newGeo;
      wireMesh.geometry = newGeo;
    }

    if (wireMat) {
      wireMat.opacity = wireframeOnly ? 0.38 : 0.08;
    }
  }, [topology, wireframeOnly]);

  return (
    <>
      {/* Three.js Canvas Backdrop */}
      <div className="fixed inset-0 pointer-events-none z-0" data-cursor="drag">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/35 via-[#FAF9F5]/55 to-[#FAF9F5] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      </div>

      {/* Floating 3D Sculpture Parameter Dock */}
      {showConfig && (
        <div className="fixed top-20 right-6 z-40 w-80 rounded-2xl border border-stone-200 bg-white/95 p-5 shadow-2xl backdrop-blur-xl space-y-4 text-xs font-mono text-stone-800 animate-fade-in">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-stone-500" />
              <span className="font-semibold uppercase tracking-wider">
                3D Topology Matrix
              </span>
            </div>
            <button
              onClick={() => setShowConfig(false)}
              className="text-stone-400 hover:text-stone-900"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
              Geometry Primitive
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: "torusknot", label: "Torus Knot" },
                { id: "icosahedron", label: "Icosahedron Gem" },
                { id: "dodecahedron", label: "Dodecahedron" },
                { id: "octahedron", label: "Octahedron" },
                { id: "ring", label: "Orbital Ring" },
              ].map((g) => (
                <button
                  key={g.id}
                  onClick={() => {
                    setTopology(g.id as TopologyType);
                    if (onAudio) onAudio(460, "sine");
                  }}
                  className={`px-2.5 py-1.5 rounded-lg border text-left transition-all ${
                    topology === g.id
                      ? "border-[#121316] bg-[#121316] text-[#FAF9F5] font-medium"
                      : "border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[10px] text-stone-400 uppercase tracking-wider">
              Wireframe Overlay
            </span>
            <button
              onClick={() => {
                setWireframeOnly(!wireframeOnly);
                if (onAudio) onAudio(500, "sine");
              }}
              className={`px-3 py-1 rounded text-[11px] font-medium border transition-colors ${
                wireframeOnly
                  ? "bg-stone-900 text-stone-50 border-stone-900"
                  : "bg-stone-100 text-stone-600 border-stone-200"
              }`}
            >
              {wireframeOnly ? "ACTIVE" : "MUTED"}
            </button>
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-[10px] text-stone-500">
              <span>ROTATION VELOCITY</span>
              <span>{orbitSpeed.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="2.0"
              step="0.1"
              value={orbitSpeed}
              onChange={(e) => setOrbitSpeed(parseFloat(e.target.value))}
              className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#121316]"
            />
          </div>
        </div>
      )}
    </>
  );
}
