import FileUpload from "@/components/Form/FileUpload";
import axios from 'axios';

export default function kk() {
    const handleFileUpload = async (file: File) => {
        try {
          const formData = new FormData();
          formData.append('file', file);
          const response = await axios.post('http://127.0.0.1:5000/generate-json', formData, {
            headers: {
              'content-type': 'multipart/form-data',
            },
          });
          console.log(response.data); // Output the JSON data to the console
        } catch (error) {
          console.error(error);
        }
    };

  // Render profile page
  return (
   <div>
       <FileUpload onUpload={handleFileUpload} />
   </div>
  );
}
