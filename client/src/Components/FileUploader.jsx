// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './FileUpload.css'; // Import the CSS file

// function FileUploader() {
//     const [file, setFile] = useState(null);
//     const [message, setMessage] = useState(null);
//     const [error, setError] = useState(null);
//     const [uploadPercentage, setUploadPercentage] = useState(0);
//     const [showProgressBar, setShowProgressBar] = useState(false);

//     const handleFileChange = (event) => {
//         const selectedFile = event.target.files[0];
//         if (selectedFile && selectedFile.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
//             window.alert('Invalid file type. Only DOCX files are allowed.');
//             setFile(null);
//         } else {
//             setFile(selectedFile);
//             setMessage(null);
//             setError(null);
//             setUploadPercentage(0);
//         }
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!file) {
//             window.alert('Please select a file.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('file', file);

//         try {
//             setShowProgressBar(true);

//             // Simulate an asynchronous upload process
//             const response = await axios.post('http://localhost:8000/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 },
//                 onUploadProgress: progressEvent => {
//                     const { loaded, total } = progressEvent;
//                     const percentage = Math.round((loaded * 100) / total);
//                     setUploadPercentage(percentage);
//                 }
//             });

//             setUploadPercentage(100); // Set percentage to 100% after successful upload
//             setMessage(response.data.message);
//             setError(null);
//         } catch (error) {
//             setMessage(null);
//             setError(error.response?.data?.error || 'Error uploading file');
//             console.error('Error uploading file:', error);
//         } finally {
//             setShowProgressBar(false);
//             setFile(null); // Clear selected file after upload
//         }
//     };

//     useEffect(() => {
//         // Clear messages and progress bar after some time
//         const clearMessages = setTimeout(() => {
//             setMessage(null);
//             setError(null);
//             setUploadPercentage(0);
//         }, 3000); // Adjust timeout as needed

//         return () => clearTimeout(clearMessages);
//     }, [message, error]);

//     return (
//         <div className="file-upload-container">
//             <h1>File Upload</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="file" onChange={handleFileChange} accept=".docx" />
//                 <button type="submit">Upload</button>
//             </form>
//             {showProgressBar && (
//                 <div className="progress-container">
//                     <div className="progress-bar" style={{ width: `${uploadPercentage}%` }}>
//                         {uploadPercentage > 0 && `${uploadPercentage}%`}
//                     </div>
//                 </div>
//             )}
//             {message && <p className="success-message">{message}</p>}
//             {error && <p className="error-message">{error}</p>}
//         </div>
//     );
// }

// export default FileUploader;




// import React, { useState } from 'react';
// import axios from 'axios';

// const FileUploader = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [uploadStatus, setUploadStatus] = useState('');

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type === 'application/pdf') {
//       setSelectedFile(file);
//     } else {
//       setSelectedFile(null);
//       alert('Please select a PDF file.');
//     }
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       alert('Please select a file to upload.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     try {
//       const response = await axios.post('http://localhost:5000/api/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         },
//         onUploadProgress: (progressEvent) => {
//           const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
//           setUploadProgress(progress);
//         }
//       });
//       setUploadStatus('File uploaded successfully!');
//       console.log(response.data); // Handle response from server
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setUploadStatus('Failed to upload file.');
//     }
//   };

//   return (
//     <div>
//       <h2>File Uploader</h2>
//       <input type="file" onChange={handleFileChange} accept=".pdf" />
//       <button onClick={handleUpload}>Upload</button>
//       {uploadProgress > 0 && <p>Progress: {uploadProgress}%</p>}
//       {uploadStatus && <p>Status: {uploadStatus}</p>}
//     </div>
//   );
// };

// export default FileUploader;


















// // only pdf file 
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const FileUploader = () => {
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [uploadProgress, setUploadProgress] = useState(0);
// //   const [uploadStatus, setUploadStatus] = useState('');

// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     if (file && file.type === 'application/pdf') {
// //       setSelectedFile(file);
// //     } else {
// //       setSelectedFile(null);
// //       alert('Please select a PDF file.');
// //     }
// //   };

// //   const handleUpload = async () => {
// //     if (!selectedFile) {
// //       alert('Please select a file to upload.');
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append('file', selectedFile);

// //     try {
// //       const response = await axios.post('http://localhost:5000/api/upload', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data'
// //         },
// //         onUploadProgress: (progressEvent) => {
// //           const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
// //           setUploadProgress(progress);
// //         }
// //       });
// //       setUploadStatus('File uploaded successfully!');
// //       console.log(response.data); // Handle response from server
// //     } catch (error) {
// //       console.error('Error uploading file:', error);
// //       setUploadStatus('Failed to upload file.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>File Uploader</h2>
// //       <input type="file" onChange={handleFileChange} accept=".pdf" />
// //       <button onClick={handleUpload}>Upload</button>
// //       {uploadProgress > 0 && <p>Progress: {uploadProgress}%</p>}
// //       {uploadStatus && <p>Status: {uploadStatus}</p>}
// //     </div>
// //   );
// // };

// // export default FileUploader;











import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FileUpload.css'; // Import the CSS file

function FileUploader() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [showProgressBar, setShowProgressBar] = useState(false);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            window.alert('Invalid file type. Only DOCX files are allowed.');
            setFile(null);
        } else {
            setFile(selectedFile);
            setMessage(null);
            setError(null);
            setUploadPercentage(0);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            window.alert('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            setShowProgressBar(true);
            // Simulate a delay for demonstration purposes
            const delay = 1000; // milliseconds
            const steps = 10; // number of steps to reach 100%
            const stepPercentage = 100 / steps;

            const interval = setInterval(() => {
                setUploadPercentage((prevPercentage) => {
                    const newPercentage = prevPercentage + stepPercentage;
                    return newPercentage >= 100 ? 100 : newPercentage;
                });
            }, delay / steps);

            // Simulate an asynchronous upload process
            setTimeout(async () => {
                clearInterval(interval);
                const response = await axios.post('http://localhost:5000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setUploadPercentage(100); // Set percentage to 100% after successful upload
                setMessage(response.data.message);
                setError(null);
            }, delay);
        } catch (error) {
            setMessage(null);
            setError(error.response?.data?.error || 'Error uploading file');
            console.error('Error uploading file:', error);
            setShowProgressBar(false);
        }
    };

    useEffect(() => {
        if (uploadPercentage === 100 && message) {
            setTimeout(() => {
                setShowProgressBar(false);
                setMessage(null);
                setUploadPercentage(0);
            }, 1500); // Hide the progress bar and message after 2 seconds
        }
    }, [uploadPercentage, message]);

    return (
        <div className="file-upload-container">
            <h1>File Upload</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} accept=".docx" />
                <button type="submit">Upload</button>
            </form>
            {showProgressBar && (
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${uploadPercentage}%` }}>
                        {uploadPercentage > 0 && `${uploadPercentage}%`}
                    </div>
                </div>
            )}
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default FileUploader;