import React, { useRef } from 'react';

interface FileUploadProps {
  onUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div>
            <form onSubmit={handleSubmit}>
                <input type="file" ref={fileInputRef} />
                <button type="submit">Upload</button>
             </form>
    </div>

  );
};

export default FileUpload;