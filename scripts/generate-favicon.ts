// NOTE: This is a conceptual script to show how to generate a favicon
// You'd run this in a browser-based environment

function generateFavicon() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return;
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, '#1e2c51'); // Primary blue
  gradient.addColorStop(1, '#0f172a'); // Darker shade
  
  // Draw rounded rectangle
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.roundRect(0, 0, 512, 512, 64);
  ctx.fill();
  
  // Draw RN text
  ctx.font = 'bold 240px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Draw R
  ctx.fillStyle = '#ffffff';
  ctx.fillText('R', 200, 256);
  
  // Draw N
  ctx.fillStyle = '#eab308'; // yellow-400
  ctx.fillText('N', 320, 256);
  
  // Export as PNG
  return canvas.toDataURL('image/png');
} 