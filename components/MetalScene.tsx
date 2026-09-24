"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function MetalScene() {
  const mount = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const host = mount.current
    if (!host) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
    camera.position.z = 6.4
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75)); renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15
    host.appendChild(renderer.domElement)
    const group = new THREE.Group(); scene.add(group)
    const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.55, 0.42, 190, 28, 2, 3), new THREE.MeshPhysicalMaterial({ color: 0xb88a58, metalness: 0.96, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.16 }))
    knot.rotation.set(0.7, -0.35, 0.18); group.add(knot)
    const cage = new THREE.Mesh(new THREE.IcosahedronGeometry(2.16, 2), new THREE.MeshBasicMaterial({ color: 0xe2c29a, wireframe: true, transparent: true, opacity: 0.11 })); group.add(cage)
    const stars = new THREE.BufferGeometry(); const positions = new Float32Array(210 * 3)
    for (let i = 0; i < positions.length; i += 3) { const radius = 2.4 + Math.random() * 2.3; const angle = Math.random() * Math.PI * 2; positions[i] = Math.cos(angle) * radius; positions[i + 1] = (Math.random() - 0.5) * 5.5; positions[i + 2] = Math.sin(angle) * radius - 1 }
    stars.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const points = new THREE.Points(stars, new THREE.PointsMaterial({ color: 0xd9b383, size: 0.025, transparent: true, opacity: 0.68 })); scene.add(points)
    scene.add(new THREE.AmbientLight(0x5b4636, 1.2))
    const key = new THREE.PointLight(0xffddb0, 35, 20); key.position.set(-3, 3, 4); scene.add(key)
    const rim = new THREE.PointLight(0x8aa6ff, 18, 16); rim.position.set(4, -2, 2); scene.add(rim)
    let px = 0, py = 0, raf = 0
    const pointer = (event: PointerEvent) => { px = (event.clientX / innerWidth - 0.5) * 0.34; py = (event.clientY / innerHeight - 0.5) * 0.24 }
    const resize = () => { const width = host.clientWidth || 1, height = host.clientHeight || 1; camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height, false) }
    const clock = new THREE.Clock()
    const render = () => { const t = clock.getElapsedTime(); if (!reduce) { group.rotation.y += (px + t * 0.08 - group.rotation.y) * 0.025; group.rotation.x += (-py + Math.sin(t * 0.35) * 0.08 - group.rotation.x) * 0.025; cage.rotation.y = -t * 0.045; points.rotation.y = t * 0.018 } renderer.render(scene, camera); raf = requestAnimationFrame(render) }
    resize(); render(); window.addEventListener("resize", resize); window.addEventListener("pointermove", pointer, { passive: true })
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", pointer); knot.geometry.dispose(); (knot.material as THREE.Material).dispose(); cage.geometry.dispose(); (cage.material as THREE.Material).dispose(); stars.dispose(); (points.material as THREE.Material).dispose(); renderer.dispose(); renderer.domElement.remove() }
  }, [])
  return <div className="metal-scene" ref={mount} aria-hidden="true" />
}
