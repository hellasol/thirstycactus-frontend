// import React, { useState } from "react";
// import api from "../api";
// import { NavLink } from "reactstrap";

// export function Image() {
//   const [file, setFile] = useState("");

//   async function handleSubmit(e) {
//     e.preventDefault();
//     await api.plants.createImage({ file });
//     setFile("");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <br></br>
//         <h1>Add a pic</h1>
//         <br></br>

//         <form action="/upload" enctype="multipart/form-data" method="POST">
//           <input type="file" name="myFile" id="myFile" required />
//           <input type="submit" value="Upload" href="/myPlants" />

//           <NavLink type="submit" value="Upload" href="/myPlants">
//             Upload
//           </NavLink>
//         </form>
//       </div>
//     </form>
//   );
// }
