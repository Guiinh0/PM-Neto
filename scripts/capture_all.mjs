import puppeteer from "puppeteer-core";
import path from "path";

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const artifactDir = "C:\\Users\\thiag\\.gemini\\antigravity-ide\\brain\\e005ec75-8d87-4f45-90ee-15f6d6e338ea";

async function main() {
  console.log("Launching Edge with puppeteer-core...");
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: "new",
    args: [
      "--enable-webgl",
      "--ignore-gpu-blocklist",
      "--use-gl=angle",
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
  });

  const page = await browser.newPage();

  // Test 1: Desktop 1920x1080 (3D Shield - Complete)
  console.log("Capturing 1920x1080 (3D Shield)...");
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3000?force3d=1", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 3500)); // Wait for entrance animation and pulse
  await page.screenshot({
    path: path.join(artifactDir, "shield_1920px_full.png"),
    fullPage: false,
  });

  // Test 2: Desktop 1920x1080 (scroll 300px)
  console.log("Capturing 1920x1080 (scroll 300px)...");
  await page.evaluate(() => window.scrollTo(0, 300));
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(artifactDir, "shield_1920px_scroll300.png"),
    fullPage: false,
  });

  // Test 3: Ultrawide 2560x1080 (21:9)
  console.log("Capturing 2560x1080 (21:9 Ultrawide)...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.setViewport({ width: 2560, height: 1080, deviceScaleFactor: 1 });
  await new Promise((r) => setTimeout(r, 2000));
  await page.screenshot({
    path: path.join(artifactDir, "shield_2560px.png"),
    fullPage: false,
  });

  // Test 4: Mobile 390x844 (3D Shield)
  console.log("Capturing 390x844 (mobile 3D)...");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
  await page.goto("http://localhost:3000?force3d=1", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 3000));
  await page.screenshot({
    path: path.join(artifactDir, "shield_390px_full.png"),
    fullPage: false,
  });

  // Test 5: Desktop 1920x1080 (Static Fallback ?level=static)
  console.log("Capturing 1920x1080 (Static Fallback ?level=static)...");
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  await page.goto("http://localhost:3000?level=static", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({
    path: path.join(artifactDir, "shield_1920px_static.png"),
    fullPage: false,
  });

  // Test 6: Mobile 390x844 (Static Fallback ?level=static)
  console.log("Capturing 390x844 (Static Fallback ?level=static)...");
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
  await page.goto("http://localhost:3000?level=static", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({
    path: path.join(artifactDir, "shield_390px_static.png"),
    fullPage: false,
  });

  console.log("All shield screenshots captured successfully!");
  await browser.close();
}

main().catch((err) => {
  console.error("Capture error:", err);
  process.exit(1);
});
