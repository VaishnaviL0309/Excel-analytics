import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (file) {
      alert(`File "${file.name}" uploaded successfully!`);
      // In real app, you will send this file to server using FormData and fetch/axios
    } else {
      alert('Please select a file to upload');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Upload File</h1>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} className="mb-4" />
        <br />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
