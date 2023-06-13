// import { useState } from 'react';
// import useUpdateInfo from '../../Hooks/useUpdateInfo';

// const SetCompanyProfile = () => {
//     const [formValues, setFormValues] = useState({
//         companyName: '',
//         companyEmail: '',
//         companyPhoneNumber: '',
//         companyAddress: '',
//         companyDescription: ''
//       });
//       const [dataForHook, setDataForHook] = useState();
//       const [data, setData] = useUpdateInfo(dataForHook);
    
//       const handleSubmit = (event) => {
//         event.preventDefault();
//         setDataForHook(formValues); // Set dataForHook to formValues
//         setFormValues({
//           companyName: '',
//           companyEmail: '',
//           companyPhoneNumber: '',
//           companyAddress: '',
//           companyDescription: ''
//         });
//         setData(formValues);
//       };
    
//       const handleChange = (event) => {
//         setFormValues({
//           ...formValues,
//           [event.target.name]: event.target.value
//         });
//       };
    

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="companyName"
//           placeholder="Enter your company name"
//           className="input input-bordered input-primary w-full max-w-xs"
//           value={formValues.companyName}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="companyEmail"
//           placeholder="Enter your company email"
//           className="input input-bordered input-primary w-full max-w-xs"
//           value={formValues.companyEmail}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="companyPhoneNumber"
//           placeholder="Enter your company phone number"
//           className="input input-bordered input-primary w-full max-w-xs"
//           value={formValues.companyPhoneNumber}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="companyAddress"
//           placeholder="Enter your company address"
//           className="input input-bordered input-primary w-full max-w-xs"
//           value={formValues.companyAddress}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="companyDescription"
//           placeholder="About your company:"
//           className="input input-bordered input-primary w-full max-w-xs"
//           value={formValues.companyDescription}
//           onChange={handleChange}
//         />
        
//         <button type="submit" className="btn btn-outline">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SetCompanyProfile;



import  'react';
import { useContext, useState } from 'react';
import { AuthUserRoleContext } from '../../Contexts/AuthUserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SetCompanyProfile = () => {
  const {currentUser} = useContext(AuthUserRoleContext)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    companyName: "",
    companyLogo: "",
    industry: "",
    locations: "",
    website: "",
    email: "",
    phone: "",
    description: "",
    technologies: [],
    facebook: "",
    twitter: "",
    linkedin: "",
    jobs: [],
    uid: currentUser?.uid || ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios.post("https://elegant-bd-jobs.onrender.com/set-company", formData)
      .then((res) => {
        console.log(res.data.acknowledged);//eta true hole redirect kore odik e niye jabe
        setFormData({
          companyName: "",
          companyLogo: "",
          industry: "",
          locations: "",
          website: "",
          email: "",
          phone: "",
          description: "",
          technologies: [],
          facebook: "",
          twitter: "",
          linkedin: "",
          jobs: [],
          uid: currentUser?.uid || ""
        })
        if (res.data.acknowledged) {
          navigate("/dashboard")
        }
      })
      .catch((error) => {
        console.error(error);
      });
      navigate("/dashboard")
  };

  const handleKeyTechnologiesChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
        technologies: value.split(",").map((tech) => tech.trim()),
    }));
  };

  return (
    <div className="max-w-md mx-auto m-10 shadow-lg bg-white p-8 border border-gray-300 rounded">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
  
        <div className="mb-4">
          <label className="block font-bold mb-1">Company Logo</label>
          <input
            type="text"
            name="companyLogo"
            value={formData.companyLogo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
  
        <div className="mb-4">
          <label className="block font-bold mb-1">Industry</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
  
        <div className="mb-4">
          <label className="block font-bold mb-1">Locations</label>
          <input
            type="text"
            name="locations"
            value={formData.locations}
            // value={formData.locations.join(', ')}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
  
        <div className="mb-4">
          <label className="block font-bold mb-1">Website</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
  
        <div className="mb-4">
          <label className="block font-bold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
  
        <div className="mb-4">
          <label className="block font-bold mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
  
        <div className="mb-4">
          <label className="block font-bold mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
        </div>
  
        <div className="mb-4">
          <label className="block font-bold mb-1">Technologies</label>
          <input
            type="text"
            name="technologies"
            placeholder='separate by comma (,) '
            value={formData.technologies.join(", ")}
            onChange={handleKeyTechnologiesChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
  
        <div className="mb-4">
          <label className="block font-bold mb-1">Facebook</label>
          <input
            type="text"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
  
        <div className="mb-4">
          <label className="block font-bold mb-1">Twitter</label>
          <input
            type="text"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
  
        <div className="mb-4">
          <label className="block font-bold mb-1">LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
  
        <div className="mb-4">
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
  
}



export default SetCompanyProfile;
