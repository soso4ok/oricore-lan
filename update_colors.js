const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/bg-\[\#FAFAFA\]/g, 'bg-[var(--color-bg)]');
  content = content.replace(/bg-\[\#F0F0F0\]/g, 'bg-[var(--color-bg-alt)]');
  content = content.replace(/bg-\[\#F5F5F5\]/g, 'bg-[var(--color-bg-alt)]');
  content = content.replace(/bg-white/g, 'bg-[var(--color-bg)]');
  content = content.replace(/text-\[\#111111\]/g, 'text-[var(--color-ink)]');
  content = content.replace(/text-\[\#333333\]/g, 'text-[var(--color-ink-soft)]');
  content = content.replace(/text-\[\#555555\]/g, 'text-[var(--color-ink-muted)]');
  content = content.replace(/border-\[\#E0E0E0\]/g, 'border-[var(--color-border)]');
  content = content.replace(/border-\[\#111111\]/g, 'border-[var(--color-ink)]');
  content = content.replace(/bg-\[\#2FCA54\]/g, 'bg-[var(--color-accent)]');
  content = content.replace(/text-\[\#2FCA54\]/g, 'text-[var(--color-accent)]');
  content = content.replace(/Java monoliths, legacy COBOL systems/g, 'enterprise applications, complex operational flows');
  content = content.replace(/legacy COBOL systems/g, 'legacy operational workflows');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

const files = [
  'app/pricing/page.tsx',
  'app/components/SovereigntyScroll.tsx',
  'app/components/DebtCalculator.tsx',
  'app/components/IntegrationWorkflow.tsx',
  'app/components/DynamicClientLoader.tsx',
  'app/components/ComparisonMatrix.tsx',
  'app/components/ComplianceSection.tsx',
  'app/components/PipelineCards.tsx'
];

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    replaceInFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});
