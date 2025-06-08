const fs = require('fs');
const path = require('path');

module.exports = async () => {
  try {
    // Read the cleaned tags file
    const tagsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'cleaned_tags.json'), 'utf8'));
    const tags = tagsData.data['api::tag.tag'];

    console.log(`\n📦 Starting import of ${Object.keys(tags).length} tags...\n`);

    let imported = 0;
    let skipped = 0;
    let failed = 0;

    for (const [key, tag] of Object.entries(tags)) {
      try {
        // Remove the id field and prepare data
        const { id, ...tagData } = tag;

        // Check if tag already exists by slug
        const existingTag = await strapi.db.query('api::tag.tag').findOne({
          where: { slug: tagData.slug }
        });

        if (existingTag) {
          console.log(`⏭️  Skipped: ${tag.name} (already exists)`);
          skipped++;
          continue;
        }

        // Create the tag
        const createdTag = await strapi.entityService.create('api::tag.tag', {
          data: {
            ...tagData,
            publishedAt: new Date() // Auto-publish
          }
        });

        if (createdTag) {
          imported++;
          console.log(`✅ Imported: ${tag.name}`);
        }
      } catch (error) {
        console.log(`❌ Error importing ${tag.name}:`, error.message);
        failed++;
      }
    }

    console.log('\n📊 Import Summary:');
    console.log(`✅ Successfully imported: ${imported} tags`);
    console.log(`⏭️  Skipped (already exist): ${skipped} tags`);
    console.log(`❌ Failed: ${failed} tags`);
    console.log('\n✨ Import complete!\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}; 