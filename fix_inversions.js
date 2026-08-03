const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  for (const [key, value] of Object.entries(replacements)) {
    if (content.includes(key)) {
      content = content.replaceAll(key, value);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

// 1. DebtCalculator.tsx
replaceInFile(path.join(__dirname, 'app/components/DebtCalculator.tsx'), {
  'bg-[var(--color-ink)] text-white': 'bg-[var(--color-bg)] text-[var(--color-ink)]',
  'bg-[var(--color-ink)] border border-[var(--color-ink-soft)] text-white p-5 text-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-ink-muted)] text-center': 'bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-ink)] p-5 text-lg focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-ink-muted)] text-center',
  'bg-[var(--color-ink)] border border-[var(--color-ink-soft)] text-white p-4 text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-ink-muted)]': 'bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-ink)] p-4 text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-ink-muted)]',
  'bg-[var(--color-ink)] border border-[var(--color-ink-soft)] text-white p-4 text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-ink-muted)] resize-none': 'bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-ink)] p-4 text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-ink-muted)] resize-none',
  'text-white mb-3': 'text-[var(--color-ink)] mb-3',
  'text-white p-5': 'text-[var(--color-ink)] p-5',
  'text-white p-4': 'text-[var(--color-ink)] p-4',
  'bg-[#1A1A1A]': 'bg-[var(--color-bg-alt)]',
  'text-[#CCCCCC]': 'text-[var(--color-ink-soft)]'
});

// 2. SovereigntyScroll.tsx
replaceInFile(path.join(__dirname, 'app/components/SovereigntyScroll.tsx'), {
  'bg-[var(--color-ink)] text-white': 'bg-[var(--color-bg)] text-[var(--color-ink)]',
  'bg-[#333] group-hover:bg-[#555]': 'bg-[var(--color-ink-muted)] group-hover:bg-[var(--color-ink-soft)]',
  'border border-[#333] text-[#666] hover:text-white': 'border border-[var(--color-border)] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]',
  'text-[#AAAAAA]': 'text-[var(--color-ink-soft)]'
});

// 3. CookieBanner.tsx
replaceInFile(path.join(__dirname, 'app/components/CookieBanner.tsx'), {
  'bg-[var(--color-ink)] border border-[var(--color-ink-soft)] shadow-2xl': 'bg-[var(--color-bg-alt)] border border-[var(--color-border)] shadow-2xl',
  'text-[var(--color-bg)] mb-3': 'text-[var(--color-ink)] mb-3',
  'text-[#AAAAAA]': 'text-[var(--color-ink-soft)]',
  'text-[var(--color-bg)] underline': 'text-[var(--color-ink)] underline',
  'bg-[var(--color-bg)] text-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)]': 'bg-[var(--color-ink)] text-[var(--color-bg)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]',
  'text-[var(--color-bg)] hover:border-[#666666] hover:text-white': 'text-[var(--color-ink)] hover:border-[var(--color-ink-muted)] hover:text-[var(--color-ink)]'
});

// 4. LearnMoreButton.tsx
replaceInFile(path.join(__dirname, 'app/components/LearnMoreButton.tsx'), {
  '!text-white font-medium': '!text-[var(--color-bg)] font-medium',
  'hover:bg-[#1C1C1C]': 'hover:bg-[var(--color-ink-soft)]'
});

// 5. DynamicClientLoader.tsx
replaceInFile(path.join(__dirname, 'app/components/DynamicClientLoader.tsx'), {
  'bg-[var(--color-ink)]': 'bg-[var(--color-bg)]'
});

// 6. GridAnimation.tsx
replaceInFile(path.join(__dirname, 'app/components/GridAnimation.tsx'), {
  'bg-[var(--color-ink)]': 'bg-[var(--color-border)]'
});

// 7. Navbar.tsx SVG Logo
replaceInFile(path.join(__dirname, 'app/components/Navbar.tsx'), {
  'fill="#333B42"': 'fill="currentColor"',
  'fill="#24292E"': 'fill="currentColor"'
});

// 8. Footer.tsx SVG Logo
replaceInFile(path.join(__dirname, 'app/components/Footer.tsx'), {
  'fill="#333B42"': 'fill="currentColor"',
  'fill="#24292E"': 'fill="currentColor"'
});

// 9. ComplianceSection.tsx
// Let's check if it has bg-white left or wrong variables
replaceInFile(path.join(__dirname, 'app/components/ComplianceSection.tsx'), {
  'bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]': 'bg-[var(--color-bg)] border-b border-[var(--color-border)]',
  'text-white': 'text-[var(--color-ink)]'
});

// 10. Fix stray whites in other files
const filesWithWhite = [
  'app/components/HeroBlueprint.tsx',
  'app/components/HeroBackground.tsx'
];
filesWithWhite.forEach(file => {
  replaceInFile(path.join(__dirname, file), {
    'bg-white': 'bg-[var(--color-bg-alt)]'
  });
});

console.log("Fixes complete.");
