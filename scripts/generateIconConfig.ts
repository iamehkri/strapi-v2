import fs from 'fs';
import path from 'path';

const iconsDir = path.join(process.cwd(), 'public', 'icons');
const outputFile = path.join(process.cwd(), 'config', 'plugins.ts');

// Read all SVG files
const svgFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));

// Generate icon entries
const iconEntries = svgFiles.map(file => {
  const name = file.replace('.svg', '');
  const svgContent = fs.readFileSync(path.join(iconsDir, file), 'utf-8');
  return `{
    name: '${name}',
    svg: \`${svgContent}\`
  }`;
}).join(',\n');

// Generate the full configuration
const config = `export default () => ({
  seo: {
    enabled: true,
    config: {
      defaultTitle: 'Your Site Name',
      defaultDescription: 'Your site description',
      defaultImage: '/default-og-image.jpg',
      defaultRobots: 'index,follow',
    },
  },
  'color-picker': {
    enabled: true,
    config: {
      presets: [
        { name: 'Primary', value: '#007bff' },
        { name: 'Secondary', value: '#6c757d' },
        { name: 'Success', value: '#28a745' },
        { name: 'Danger', value: '#dc3545' },
        { name: 'Warning', value: '#ffc107' },
        { name: 'Info', value: '#17a2b8' },
        { name: 'Light', value: '#f8f9fa' },
        { name: 'Dark', value: '#343a40' },
      ],
    },
  },
  'icons-field': {
    enabled: true,
    config: {
      icons: [
        ${iconEntries}
      ]
    }
  },
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 100000,
        localServer: {
          maxAge: 100000,
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
      security: {
        maxFileSize: 100000,
      },
    },
  },
});`;

// Write the configuration to the plugins.ts file
fs.writeFileSync(outputFile, config);

console.log('Icon configuration generated successfully!'); 