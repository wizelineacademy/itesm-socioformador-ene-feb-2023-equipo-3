import React from 'react';
import axios from 'axios';
import FileUpload from "@/components/Form/FileUpload";

const Index: React.FC = () => {
  const handleFileUpload = async (file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post('/api/getPDFData', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data); // Output the JSON data to the console

  };

  return (
    <div>
      <h1>Next.js App</h1>
      <FileUpload onUpload={handleFileUpload} />
    </div>
  );
};

export default Index;