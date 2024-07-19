// import React from 'react';
// import './Referafrend.css'; // Import the CSS file
// import image from './Images/Image.png';
// import refer from './Images/referfrend.jpeg'
// function Referafrend() {
//   return (
//     <div className="main-container">
//       <div className="container">
//         <a className="new" href="#">
//           <img src={image} alt="Logo" />
//         </a>
//       </div>

//       <div className="container">
//         <div className="refer">
//           <img src={refer} alt="Logo" /> {/* Example image inside the 'refer' div */}
//           <h1>This is a heading</h1> {/* Example heading */}
//           <button>Click me</button> {/* Example button */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Referafrend;
import React from 'react';
import './Referafrend.css'; // Import the CSS file
import image from './Images/Image.png'; // Assuming this is your logo image

function Referafrend() {
  return (
    <div className="main-container">
      <div className="container">
        <a className="new" href="#">
          <img src={image} alt="Logo" />
        </a>
      </div>

      <div className="smallcontainer">
        <div className="refer">
         
          <button>Click me</button> {/* Example button */}
        </div>
      </div>
    </div>
  );
}

export default Referafrend;
