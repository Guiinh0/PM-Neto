"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { createShieldShapes } from "./shieldPaths";

/**
 * CONFIGURAÇÃO CENTRALIZADA DO ESCUDO 3D (PM NETO)
 */
export const SHIELD_CONFIG = {
  idle: {
    yawMaxDeg: 22,              // Oscilação de yaw entre -22° e +22°
    yawPeriodSeconds: 10,       // Período de 10 segundos
    floatAmplitude: 0.06,       // Flutuação vertical de +/-0.06
    floatPeriodSeconds: 5,
  },
  tilt: {
    maxTiltDeg: 10,             // Tilt do mouse de até +/-10° em X e Y
    damping: 0.05,
  },
  entrance: {
    durationSeconds: 1.6,       // 1.6s de entrada
    staggerDelaySeconds: 0.08,  // 80ms de defasagem entre as 5 peças
  },
  materials: {
    yellowColor: 0xffd100,      // Amarelo oficial da marca
    yellowToneVariation: 0xf5ba08, // Leve variação para volume
    whiteColor: 0xf2f2f2,       // Branco acetinado
    metalnessYellow: 0.6,
    roughnessYellow: 0.28,
    clearcoatYellow: 0.6,
    metalnessWhite: 0.1,
    roughnessWhite: 0.35,
    clearcoatWhite: 0.4,
  },
  lighting: {
    directionalColdIntensity: 1.6,
    rimYellowIntensity: 2.2,
    ambientEnvironmentIntensity: 0.45,
    keyholeEyeIntensityMin: 0.4,
    keyholeEyeIntensityMax: 1.8,
    keyholeEyePeriodSeconds: 4.0, // Respiração suave de 4 segundos
  },
  positioning: {
    desktopCenterXPercent: 72,    // Centro em 72% da largura no desktop
    desktopCenterYPercent: 50,    // 50% da altura no desktop
    desktopHeightPercent: 62,     // Altura equivalente a ~62% do hero
    mobileWidthPercent: 45,       // 45% da largura no mobile
  },
};

export type ShieldRenderLevel = "full" | "light" | "static";

export interface ShieldSceneProps {
  onReady?: () => void;
  onFallback?: () => void;
}

export const ShieldScene: React.FC<ShieldSceneProps> = ({ onReady, onFallback }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    if (!container) return;

    // 1. Detecção do Nível de Execução (3 Níveis de Fallback)
    const urlParams = new URLSearchParams(window.location.search);
    const force3D = urlParams.get("force3d") === "1";
    const forcedLevel = urlParams.get("level") as ShieldRenderLevel | null;

    let hasWebGL = false;
    try {
      const testCanvas = document.createElement("canvas");
      hasWebGL = !!(
        window.WebGLRenderingContext &&
        (testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl"))
      );
    } catch {
      hasWebGL = false;
    }

    const nav = navigator as unknown as {
      connection?: { saveData?: boolean };
      deviceMemory?: number;
    };
    const saveData = nav.connection?.saveData === true;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderLevel: ShieldRenderLevel = "full";
    let logReason = "Dispositivo capaz (Nível 1 - Completo)";

    if (force3D) {
      renderLevel = "full";
      logReason = "Forçado via ?force3d=1 (todos os filtros ignorados)";
    } else if (forcedLevel === "static" || forcedLevel === "light" || forcedLevel === "full") {
      renderLevel = forcedLevel;
      logReason = `Forçado via parâmetro ?level=${forcedLevel}`;
    } else if (!hasWebGL) {
      renderLevel = "static";
      logReason = "Navegador sem suporte a WebGL (Nível 3 - Estático)";
    } else if (saveData) {
      renderLevel = "static";
      logReason = "Economia de dados ativa saveData=true (Nível 3 - Estático)";
    } else if (prefersReducedMotion) {
      renderLevel = "static";
      logReason = "Preferência de movimento reduzido (Nível 3 - Estático)";
    } else {
      const isMobile = window.innerWidth <= 768;
      const isLowPower =
        (navigator.hardwareConcurrency || 4) <= 4 ||
        (nav.deviceMemory !== undefined && nav.deviceMemory <= 4);

      if (isMobile || isLowPower) {
        renderLevel = "light";
        logReason = isMobile
          ? "Dispositivo móvel (Nível 2 - Leve)"
          : "Hardware moderado detectado (Nível 2 - Leve)";
      }
    }

    console.log(`[ShieldScene 3D] Nível: ${renderLevel.toUpperCase()} | Motivo: ${logReason}`);

    if (renderLevel === "static") {
      if (onFallback) onFallback();
      return;
    }

    // 2. Dimensões baseadas no getBoundingClientRect da Section
    const parentSection = container.parentElement || container;
    const initialRect = parentSection.getBoundingClientRect();
    let width = initialRect.width || window.innerWidth || 1440;
    let height = initialRect.height || window.innerHeight || 900;

    // 3. Setup Three.js: Cena e Câmera
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0, 10.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: renderLevel === "full",
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch (err) {
      console.error("[ShieldScene 3D] Falha ao criar WebGLRenderer:", err);
      if (onFallback) onFallback();
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(renderLevel === "full" ? Math.min(window.devicePixelRatio || 1, 2) : 1.0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = false; // Sombras desligadas conforme instrução

    const canvas = renderer.domElement;
    canvas.setAttribute("aria-hidden", "true");
    canvas.setAttribute("role", "presentation");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    container.appendChild(canvas);

    // 4. Iluminação sem HDR externo (RoomEnvironment PMREM em baixa intensidade)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnv = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = roomEnv;
    scene.environmentIntensity = SHIELD_CONFIG.lighting.ambientEnvironmentIntensity;

    // 1 Luz direcional fria vinda da esquerda
    const coldDirLight = new THREE.DirectionalLight(
      0xdbeafe,
      SHIELD_CONFIG.lighting.directionalColdIntensity
    );
    coldDirLight.position.set(-6, 4, 6);
    scene.add(coldDirLight);

    // 1 Luz de recorte (rim light) amarela vinda de trás à direita
    const yellowRimLight = new THREE.DirectionalLight(
      SHIELD_CONFIG.materials.yellowColor,
      SHIELD_CONFIG.lighting.rimYellowIntensity
    );
    yellowRimLight.position.set(7, 3, -4);
    scene.add(yellowRimLight);

    // Luz pontual atrás da fechadura ("olho" de monitoramento ativo que respira devagar)
    const keyholeEyeLight = new THREE.PointLight(
      SHIELD_CONFIG.materials.yellowColor,
      SHIELD_CONFIG.lighting.keyholeEyeIntensityMin,
      6
    );
    keyholeEyeLight.position.set(0, -0.6, -0.5);
    scene.add(keyholeEyeLight);

    // 5. Construção das 5 Peças 3D (ExtrudeGeometry + MeshPhysicalMaterial)
    const shieldMasterGroup = new THREE.Group();
    scene.add(shieldMasterGroup);

    const shieldMeshGroup = new THREE.Group();
    shieldMasterGroup.add(shieldMeshGroup);

    interface AnimatedPiece {
      mesh: THREE.Mesh;
      mat: THREE.MeshPhysicalMaterial;
      targetZ: number;
      initZ: number;
      initRotX: number;
      initRotY: number;
      initRotZ: number;
      delay: number;
    }

    const animatedPieces: AnimatedPiece[] = [];
    const pieceDefs = createShieldShapes();

    const isLightLevel = renderLevel === "light";
    const bevelSegs = isLightLevel ? 1 : 3;

    pieceDefs.forEach((def, index) => {
      const extrudeSettings: THREE.ExtrudeGeometryOptions = {
        depth: def.depth,
        bevelEnabled: true,
        bevelSegments: bevelSegs,
        bevelSize: 0.02,
        bevelThickness: 0.02,
        curveSegments: isLightLevel ? 16 : 32,
      };

      const geo = new THREE.ExtrudeGeometry(def.shape, extrudeSettings);
      // Mantém a posição relativa natural de montagem do escudo (sem geo.center individual)

      let mat: THREE.MeshPhysicalMaterial;

      if (def.isYellow) {
        mat = new THREE.MeshPhysicalMaterial({
          color: def.id === "chevron" ? SHIELD_CONFIG.materials.yellowColor : SHIELD_CONFIG.materials.yellowToneVariation,
          metalness: SHIELD_CONFIG.materials.metalnessYellow,
          roughness: SHIELD_CONFIG.materials.roughnessYellow,
          clearcoat: isLightLevel ? 0 : SHIELD_CONFIG.materials.clearcoatYellow,
          clearcoatRoughness: 0.1,
          transparent: true,
          opacity: 0,
        });
      } else {
        // Peças brancas (haste, lateral direita e fechadura central)
        mat = new THREE.MeshPhysicalMaterial({
          color: SHIELD_CONFIG.materials.whiteColor,
          metalness: SHIELD_CONFIG.materials.metalnessWhite,
          roughness: SHIELD_CONFIG.materials.roughnessWhite,
          clearcoat: isLightLevel ? 0 : SHIELD_CONFIG.materials.clearcoatWhite,
          clearcoatRoughness: 0.15,
          transparent: true,
          opacity: 0,
        });
      }

      const mesh = new THREE.Mesh(geo, mat);

      // Deslocamento inicial de explosão para animação de entrada
      const initZ = 2.5 + Math.random() * 2.0;
      const initRotX = (Math.random() - 0.5) * 0.6;
      const initRotY = (Math.random() - 0.5) * 0.8;
      const initRotZ = (Math.random() - 0.5) * 0.4;
      const delay = index * SHIELD_CONFIG.entrance.staggerDelaySeconds;

      mesh.position.set(0, 0, initZ);
      mesh.rotation.set(initRotX, initRotY, initRotZ);

      shieldMeshGroup.add(mesh);

      animatedPieces.push({
        mesh,
        mat,
        targetZ: 0,
        initZ,
        initRotX,
        initRotY,
        initRotZ,
        delay,
      });
    });

    // 6. Elementos de Apoio: 2 Anéis Concêntricos e Ponto Orbitando (apenas no modo completo)
    let orbitRingGroup: THREE.Group | null = null;
    let orbitPointMesh: THREE.Mesh | null = null;
    let lockPulseRing: THREE.Mesh | null = null;
    let lockPulseMat: THREE.MeshBasicMaterial | null = null;

    if (!isLightLevel) {
      orbitRingGroup = new THREE.Group();
      shieldMasterGroup.add(orbitRingGroup);

      // Anel interno fino (raio 2.8, branco 0.08)
      const ringGeo1 = new THREE.RingGeometry(2.78, 2.80, 64);
      const ringMat1 = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.08,
        side: THREE.DoubleSide,
      });
      const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      orbitRingGroup.add(ring1);

      // Anel externo fino (raio 3.6, branco 0.08)
      const ringGeo2 = new THREE.RingGeometry(3.58, 3.60, 64);
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.08,
        side: THREE.DoubleSide,
      });
      const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      orbitRingGroup.add(ring2);

      // Ponto amarelo orbitando lentamente no anel externo (período 14s)
      const pointGeo = new THREE.SphereGeometry(0.065, 16, 16);
      const pointMat = new THREE.MeshBasicMaterial({ color: 0xffd100 });
      orbitPointMesh = new THREE.Mesh(pointGeo, pointMat);
      orbitRingGroup.add(orbitPointMesh);

      // Anel amarelo único de pulso ao travar as peças
      const pulseGeo = new THREE.RingGeometry(0.5, 0.54, 64);
      lockPulseMat = new THREE.MeshBasicMaterial({
        color: 0xffd100,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
      });
      lockPulseRing = new THREE.Mesh(pulseGeo, lockPulseMat);
      shieldMasterGroup.add(lockPulseRing);
    }

    // 7. Posicionamento e Escala Inicial do Escudo (Responsivo)
    let baseMasterScale = 1;
    const updateShieldLayout = () => {
      const isMobile = width <= 768;
      const aspect = width / height;

      // Altura visível no plano Z=0 para FOV 40°
      const vFOV = (camera.fov * Math.PI) / 180;
      const visibleHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const visibleWidth = visibleHeight * aspect;

      if (isMobile) {
        // Mobile: centralizado no topo acima do texto (~45% da largura), sem invadir o texto
        const targetWidth = visibleWidth * 0.45;
        const scale = targetWidth / 4.0;
        baseMasterScale = scale;
        shieldMasterGroup.scale.set(scale, scale, scale);
        shieldMasterGroup.position.set(0, 2.15, 0);
      } else {
        // Desktop: centro em 72% da largura e 50% da altura, altura ~62% do hero
        const targetHeight = visibleHeight * 0.62;
        const scale = targetHeight / 5.2;
        baseMasterScale = scale;
        shieldMasterGroup.scale.set(scale, scale, scale);

        // Converter 72% de largura para coordenadas Three.js (-visibleWidth/2 a +visibleWidth/2)
        const posX = -visibleWidth / 2 + visibleWidth * 0.72;
        shieldMasterGroup.position.set(posX, 0, 0);
      }
    };
    updateShieldLayout();

    // 8. Rastreamento do Mouse e Scroll
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      if (width <= 768) return; // Em touch/mobile, sem tilt de mouse
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 9. ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      const parent = container.parentElement || container;
      const rect = parent.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      if (w > 0 && h > 0) {
        width = w;
        height = h;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        updateShieldLayout();
      }
    });
    resizeObserver.observe(container);
    if (parentSection) resizeObserver.observe(parentSection);

    // 10. Pausa de Renderização (Visibilidade e IntersectionObserver)
    let isPageVisible = true;
    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let isHeroIntersecting = true;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isHeroIntersecting = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // 11. Painel lil-gui em Modo Desenvolvimento
    let guiInstance: unknown = null;
    if (process.env.NODE_ENV !== "production") {
      import("lil-gui").then(({ GUI }) => {
        const gui = new GUI({ title: "PM Neto - Escudo 3D Debug" });
        gui.add(SHIELD_CONFIG.idle, "yawMaxDeg", 5, 45, 1).name("Yaw Máx (°)");
        gui.add(SHIELD_CONFIG.idle, "yawPeriodSeconds", 4, 20, 1).name("Período Yaw (s)");
        gui.add(SHIELD_CONFIG.tilt, "maxTiltDeg", 0, 25, 1).name("Tilt Máx (°)");
        gui.add(camera.position, "z", 6, 16, 0.5).name("Câmera Z");
        gui.add(coldDirLight, "intensity", 0.5, 3.0, 0.1).name("Luz Fria");
        gui.add(yellowRimLight, "intensity", 0.5, 4.0, 0.1).name("Luz Recorte");
        gui.close();
        guiInstance = gui;
      }).catch(() => {});
    }

    // 12. Easing Função easeOutExpo
    function easeOutExpo(x: number): number {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

    // 13. Loop de Animação
    let animationFrameId: number;
    let hasSignaledReady = false;
    let pulseTriggered = false;
    let pulseStartTime = 0;
    const startTime = performance.now();

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isPageVisible || !isHeroIntersecting) {
        return;
      }

      const elapsedSec = (time - startTime) / 1000;

      // Sinaliza primeiro frame renderizado
      if (!hasSignaledReady) {
        hasSignaledReady = true;
        if (onReady) onReady();
      }

      // A. Animação de Entrada Sequencial (1.6s)
      animatedPieces.forEach((p) => {
        if (elapsedSec < p.delay) {
          p.mat.opacity = 0;
          return;
        }

        const pieceTime = elapsedSec - p.delay;
        const progress = Math.min(pieceTime / 1.1, 1.0);
        const ease = easeOutExpo(progress);

        p.mesh.position.z = p.initZ * (1 - ease) + p.targetZ * ease;
        p.mesh.rotation.x = p.initRotX * (1 - ease);
        p.mesh.rotation.y = p.initRotY * (1 - ease);
        p.mesh.rotation.z = p.initRotZ * (1 - ease);
        p.mat.opacity = Math.min(ease * 1.5, 1.0);
      });

      // Disparo do pulso único amarelo ao travar todas as peças
      if (!pulseTriggered && elapsedSec >= 1.4 && lockPulseRing && lockPulseMat) {
        pulseTriggered = true;
        pulseStartTime = elapsedSec;
      }
      if (pulseTriggered && lockPulseRing && lockPulseMat) {
        const pulseElapsed = elapsedSec - pulseStartTime;
        if (pulseElapsed < 1.0) {
          const pulseProgress = pulseElapsed / 1.0;
          const scale = 1.0 + pulseProgress * 4.5;
          lockPulseRing.scale.set(scale, scale, scale);
          lockPulseMat.opacity = Math.max((1 - pulseProgress) * 0.85, 0);
        } else {
          lockPulseMat.opacity = 0;
        }
      }

      // B. Idle: Oscilação de Yaw (-22° a +22°) e Flutuação Vertical
      const yawPeriod = SHIELD_CONFIG.idle.yawPeriodSeconds;
      const yawAngle =
        Math.sin((elapsedSec / yawPeriod) * Math.PI * 2) *
        ((SHIELD_CONFIG.idle.yawMaxDeg * Math.PI) / 180);

      const floatY =
        Math.sin((elapsedSec / SHIELD_CONFIG.idle.floatPeriodSeconds) * Math.PI * 2) *
        SHIELD_CONFIG.idle.floatAmplitude;

      // C. Mouse Tilt Damped
      currentMouseX += (targetMouseX - currentMouseX) * SHIELD_CONFIG.tilt.damping;
      currentMouseY += (targetMouseY - currentMouseY) * SHIELD_CONFIG.tilt.damping;

      const tiltX = currentMouseY * ((SHIELD_CONFIG.tilt.maxTiltDeg * Math.PI) / 180);
      const tiltY = currentMouseX * ((SHIELD_CONFIG.tilt.maxTiltDeg * Math.PI) / 180);

      shieldMeshGroup.rotation.y = yawAngle + tiltY;
      shieldMeshGroup.rotation.x = tiltX;
      shieldMeshGroup.position.y = floatY;

      // D. Órbita do Ponto Amarelo nos Anéis
      if (orbitPointMesh) {
        const orbitAngle = (elapsedSec / 14.0) * Math.PI * 2;
        orbitPointMesh.position.set(Math.cos(orbitAngle) * 3.59, Math.sin(orbitAngle) * 3.59, 0);
      }

      // E. Respiração Suave da Luz Atrás da Fechadura (Loop de 4s)
      const breathPhase = (elapsedSec % SHIELD_CONFIG.lighting.keyholeEyePeriodSeconds) /
        SHIELD_CONFIG.lighting.keyholeEyePeriodSeconds;
      const breathIntensity =
        0.5 + 0.5 * Math.sin(breathPhase * Math.PI * 2);
      keyholeEyeLight.intensity =
        SHIELD_CONFIG.lighting.keyholeEyeIntensityMin +
        (SHIELD_CONFIG.lighting.keyholeEyeIntensityMax -
          SHIELD_CONFIG.lighting.keyholeEyeIntensityMin) *
          breathIntensity;

      // F. Efeito de Scroll: Redução suave para 0.85 e fade antes de Serviços
      if (scrollY > 0) {
        const scrollFactor = Math.min(scrollY / 500, 1.0);
        const scrollScale = 1.0 - scrollFactor * 0.15; // Reduz até 0.85
        const finalScale = baseMasterScale * scrollScale;
        shieldMasterGroup.scale.set(finalScale, finalScale, finalScale);
        canvas.style.opacity = `${Math.max(1.0 - scrollFactor * 1.5, 0)}`;
      } else {
        shieldMasterGroup.scale.set(baseMasterScale, baseMasterScale, baseMasterScale);
        canvas.style.opacity = "1";
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 14. Cleanup e Dispose Completo
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      if (guiInstance && typeof (guiInstance as { destroy: () => void }).destroy === "function") {
        (guiInstance as { destroy: () => void }).destroy();
      }

      animatedPieces.forEach((p) => {
        p.mesh.geometry.dispose();
        p.mat.dispose();
      });

      pmremGenerator.dispose();
      roomEnv.dispose();
      renderer.dispose();

      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [onReady, onFallback]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
};
