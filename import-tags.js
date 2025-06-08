const fs = require('fs');
const path = require('path');

async function importTags() {
  try {
    // Read the cleaned tags file
    const tagsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'cleaned_tags.json'), 'utf8'));
    const tags = tagsData.data['api::tag.tag'];

    console.log(`📦 Found ${Object.keys(tags).length} tags to import`);

    // Import using Strapi's API
    const baseUrl = 'http://localhost:1337';
    
    // First, let's check if the server is running
    try {
      const response = await fetch(`${baseUrl}/api/tags`);
      if (!response.ok) {
        console.error('❌ Strapi server is not responding. Make sure it\'s running on port 1337');
        return;
      }
    } catch (error) {
      console.error('❌ Cannot connect to Strapi. Make sure the server is running with: npm run dev');
      return;
    }

    // Import each tag
    let imported = 0;
    let failed = 0;

    for (const [key, tag] of Object.entries(tags)) {
      try {
        // Remove the id field as Strapi will generate its own
        const { id, ...tagData } = tag;

        const response = await fetch(`${baseUrl}/api/tags`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: tagData
          })
        });

        if (response.ok) {
          imported++;
          console.log(`✅ Imported: ${tag.name}`);
        } else {
          const error = await response.text();
          console.log(`⚠️  Failed to import ${tag.name}: ${error}`);
          failed++;
        }
      } catch (error) {
        console.log(`❌ Error importing ${tag.name}:`, error.message);
        failed++;
      }
    }

    console.log('\n📊 Import Summary:');
    console.log(`✅ Successfully imported: ${imported} tags`);
    console.log(`❌ Failed: ${failed} tags`);

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Run the import
importTags(); 