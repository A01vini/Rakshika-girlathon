const cloudinary = require('cloudinary').v2;
const path = require('path');

cloudinary.config({
  cloud_name: 'your_cloud_name', // your cloud name
  api_key: , // your API key
  api_secret: ' // your secret
});

const testUpload = async () => {
  try {
    const filePath = path.join(__dirname, 'test.jpg'); // make sure test.jpg exists in this folder
    console.log('Uploading:', filePath);

    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'rakshika-evidence',
    });

    console.log('✅ Upload success:', result.secure_url);
  } catch (error) {
    console.error('❌ Upload failed (full error):', error);
  }
};

testUpload();
