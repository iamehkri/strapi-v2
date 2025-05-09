const fs = require('fs');
const path = require('path');

// Read all SVG files from the icons directory
const iconsDir = path.join(__dirname, '../public/icons');
const files = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));

// Create a Set of existing file names (without .svg extension)
const existingIcons = new Set(files.map(file => path.basename(file, '.svg')));

// Process each SVG file
const icons = files.map(file => {
  const name = path.basename(file, '.svg');
  const svgContent = fs.readFileSync(path.join(iconsDir, file), 'utf8')
    .replace(/\n/g, '') // Remove newlines
    .replace(/"/g, '\\"'); // Escape double quotes
  
  return {
    name,
    svg: svgContent
  };
});

// Create the configuration object
const config = {
  'schemas-to-ts': {
    enabled: true,
    config: {
      acceptedNodeEnvs: ["development"],
      commonInterfacesFolderName: "schemas",
      alwaysAddEnumSuffix: false,
      alwaysAddComponentSuffix: false,
      usePrettierIfAvailable: true,
      logLevel: 0
    }
  },
  'icons-field': {
    enabled: true,
    config: {
      icons
    }
  }
};

// Write the configuration to plugins.ts
const configContent = `export default ${JSON.stringify(config, null, 2)};`;
fs.writeFileSync(path.join(__dirname, '../config/plugins.ts'), configContent);

console.log(`Total icons in directory: ${files.length}`);
console.log(`Processed and added ${icons.length} icons`);

// List all icon names
console.log('\nIcon list:');
icons.forEach(icon => console.log(`- ${icon.name}`)); 