import * as THREE from "three";

/**
 * PATHS E FORMAS VETORIAIS DO ESCUDO OFICIAL PM NETO
 * 5 Peças separadas rigorosamente vetorizadas de public/brand/logo-shield.png:
 * 1. Haste do cadeado (arco, branca)
 * 2. "Telhado" do escudo (chevron, amarelo)
 * 3. Lateral esquerda (formato em U, amarela)
 * 4. Lateral direita (formato em U invertido/simétrica, branca)
 * 5. Fechadura central (forma própria vazada com respiração)
 */

export interface ShieldPieceDef {
  id: string;
  name: string;
  color: string;
  isYellow: boolean;
  depth: number;
  shape: THREE.Shape;
}

export function createShieldShapes(): ShieldPieceDef[] {
  // 1. HASTE DO CADEADO (Arco Superior Branco)
  const shackleShape = new THREE.Shape();
  shackleShape.moveTo(-1.028, 0.907);
  shackleShape.lineTo(-1.028, 1.264);
  // Arco externo (topo através de y=2.292)
  shackleShape.absarc(0, 1.264, 1.028, Math.PI, 0, true);
  shackleShape.lineTo(1.028, 0.907);
  shackleShape.lineTo(0.614, 0.907);
  shackleShape.lineTo(0.614, 1.264);
  // Arco interno (topo através de y=1.878)
  shackleShape.absarc(0, 1.264, 0.614, 0, Math.PI, false);
  shackleShape.lineTo(-0.614, 0.907);
  shackleShape.closePath();

  // 2. TELHADO DO ESCUDO (Chevron Amarelo da Marca)
  const chevronShape = new THREE.Shape();
  chevronShape.moveTo(0, 1.100); // Pico superior
  chevronShape.lineTo(-1.428, 0.607); // Ponta esquerda
  chevronShape.lineTo(-0.914, 0.243); // Canto inferior esquerdo
  chevronShape.lineTo(0, 0.550); // V inferior
  chevronShape.lineTo(0.914, 0.243); // Canto inferior direito
  chevronShape.lineTo(1.428, 0.607); // Ponta direita
  chevronShape.closePath();

  // 3. LATERAL ESQUERDA (Amarela)
  const leftWingShape = new THREE.Shape();
  leftWingShape.moveTo(-1.428, 0.528); // Topo externo
  leftWingShape.lineTo(-0.928, 0.171); // Topo interno
  leftWingShape.lineTo(-0.928, -0.557); // Descida reta interna
  // Curva interna até a ponta inferior
  leftWingShape.bezierCurveTo(-0.928, -1.057, -0.514, -1.414, -0.028, -1.485);
  leftWingShape.lineTo(-0.028, -2.071); // Ponta inferior com fresta vertical
  // Curva externa subindo
  leftWingShape.bezierCurveTo(-0.657, -1.914, -1.428, -1.200, -1.428, -0.557);
  leftWingShape.lineTo(-1.428, 0.528);
  leftWingShape.closePath();

  // 4. LATERAL DIREITA (Branca Acetinada)
  const rightWingShape = new THREE.Shape();
  rightWingShape.moveTo(1.428, 0.528); // Topo externo
  rightWingShape.lineTo(0.928, 0.171); // Topo interno
  rightWingShape.lineTo(0.928, -0.557); // Descida reta interna
  // Curva interna até a ponta inferior
  rightWingShape.bezierCurveTo(0.928, -1.057, 0.514, -1.414, 0.028, -1.485);
  rightWingShape.lineTo(0.028, -2.071); // Ponta inferior com fresta vertical
  // Curva externa subindo
  rightWingShape.bezierCurveTo(0.657, -1.914, 1.428, -1.200, 1.428, -0.557);
  rightWingShape.lineTo(1.428, 0.528);
  rightWingShape.closePath();

  // 5. FECHADURA CENTRAL (Forma Branca Acetinada com Luz Respirando Atrás)
  const keyholeShape = new THREE.Shape();
  // Cabeça circular da fechadura (arco sobre o topo)
  keyholeShape.moveTo(-0.165, -0.320);
  keyholeShape.absarc(0, -0.128, 0.260, Math.PI + 0.68, -0.68, true);
  // Fenda trapezoidal descendo
  keyholeShape.lineTo(0.314, -1.000);
  keyholeShape.lineTo(-0.314, -1.000);
  keyholeShape.closePath();

  return [
    {
      id: "shackle",
      name: "Haste do Cadeado",
      color: "#F2F2F2",
      isYellow: false,
      depth: 0.35,
      shape: shackleShape,
    },
    {
      id: "chevron",
      name: "Telhado do Escudo",
      color: "#FFD100",
      isYellow: true,
      depth: 0.38,
      shape: chevronShape,
    },
    {
      id: "left_wing",
      name: "Lateral Esquerda",
      color: "#FFD100",
      isYellow: true,
      depth: 0.35,
      shape: leftWingShape,
    },
    {
      id: "right_wing",
      name: "Lateral Direita",
      color: "#F2F2F2",
      isYellow: false,
      depth: 0.35,
      shape: rightWingShape,
    },
    {
      id: "center_keyhole",
      name: "Fechadura Central",
      color: "#F2F2F2",
      isYellow: false,
      depth: 0.32,
      shape: keyholeShape,
    },
  ];
}
