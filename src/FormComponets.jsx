import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import './FormComponent.css'; // Make sure to create and import this CSS file

const FormComponents = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    selfie: ''
  });

  const [showWebcam, setShowWebcam] = useState(false);
  const navigate = useNavigate();
  const webcamRef = React.useRef(null);

  const captureSelfie = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setFormData({ ...formData, selfie: imageSrc });
    setShowWebcam(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
    console.log(formData);
  };

  const handlePreview = () => {
    navigate('/preview', { state: { formData } });
  };

  return (
    <div className="container mx-auto p-4 form-container">
      <h1 className="text-2xl font-bold mb-4">User Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Selfie</label>
          {showWebcam ? (
            <>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="border rounded webcam"
              />
              <button type="button" onClick={captureSelfie} className="mt-2 p-2 bg-blue-500 text-white rounded">
                Capture Selfie
              </button>
            </>
          ) : (
            <button type="button" onClick={() => setShowWebcam(true)} className="mt-2 p-2 bg-blue-500 text-white rounded">
              Show Webcam
            </button>
          )}
        </div>
        {formData.selfie && (
          <div className="mb-4">
            <label className="block text-gray-700">Selfie Preview</label>
            <img src={formData.selfie} alt="Selfie Preview" className="border rounded selfie-preview" />
          </div>
        )}
        <div className="flex justify-between">
          <button type="button" onClick={handlePreview} className="p-2 bg-yellow-500 text-white rounded">
            Preview
          </button>
          <button type="submit" className="p-2 bg-green-500 text-white rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponents;
