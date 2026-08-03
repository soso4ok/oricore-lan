const fs = require('fs');
const path = require('path');

function replaceRecursively(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      replaceRecursively(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const replacements = {
        '[#111111]': '[var(--color-ink)]',
        '[#FAFAFA]': '[var(--color-bg)]',
        '[#F0F0F0]': '[var(--color-bg-alt)]',
        '[#F5F5F5]': '[var(--color-bg-alt)]',
        '[#333333]': '[var(--color-ink-soft)]',
        '[#555555]': '[var(--color-ink-muted)]',
        '[#999999]': '[var(--color-ink-muted)]',
        '[#E0E0E0]': '[var(--color-border)]',
        '[#2FCA54]': '[var(--color-accent)]',
        '[#1FA340]': '[var(--color-accent-dark)]'
      };

      let changed = false;
      for (const [key, value] of Object.entries(replacements)) {
        if (content.includes(key)) {
          content = content.replaceAll(key, value);
          changed = true;
        }
      }
      
      // also replace SVG fills if they use hardcoded hex
      if (content.includes('fill="#111111"')) {
        content = content.replaceAll('fill="#111111"', 'fill="var(--color-ink)"');
        changed = true;
      }
      if (content.includes('fill="#FAFAFA"')) {
        content = content.replaceAll('fill="#FAFAFA"', 'fill="var(--color-bg)"');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceRecursively(path.join(__dirname, 'app'));
