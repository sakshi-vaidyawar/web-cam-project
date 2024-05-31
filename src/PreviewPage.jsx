import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PreviewPage = () => {
    const navigate=useNavigate()
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div className="container mx-auto p-4 preview-section">
      <h2 className="text-xl font-bold mb-2">Form Preview</h2>
      <div className="p-4 border rounded">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Address:</strong> {formData.address}</p>
        <p><strong>Mobile:</strong> {formData.mobile}</p>
        {formData.selfie && <img src={formData.selfie} alt="Selfie Preview" className="border rounded selfie-preview" />}
      </div>
      <button className='p-2 bg-green-500 text-white rounded' onClick={()=>navigate("/")}>Back to from</button>
    </div>
  );
};

export default PreviewPage;
