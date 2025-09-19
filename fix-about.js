#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const aboutFile = path.join(__dirname, 'src/pages/about.jsx');

console.log('Checking about.jsx file...');

if (!fs.existsSync(aboutFile)) {
  console.error('about.jsx file not found!');
  process.exit(1);
}

let content = fs.readFileSync(aboutFile, 'utf8');

// Check if getServerSideProps exists
if (content.includes('getServerSideProps')) {
  console.log('Found getServerSideProps, replacing with getStaticProps...');
  
  // Replace getServerSideProps with getStaticProps
  content = content.replace(
    /export async function getServerSideProps\(\) \{\s*return \{ notFound: true \};\s*\}/g,
    'export function getStaticProps() {\n  return {\n    notFound: true,\n  };\n}'
  );
  
  // Write the updated content back
  fs.writeFileSync(aboutFile, content);
  console.log('✅ Successfully updated about.jsx');
} else if (content.includes('getStaticProps')) {
  console.log('✅ about.jsx already has getStaticProps');
} else {
  console.log('❌ No getServerSideProps or getStaticProps found in about.jsx');
  console.log('File content:');
  console.log(content.slice(-200)); // Show last 200 characters
}

console.log('Done!');
