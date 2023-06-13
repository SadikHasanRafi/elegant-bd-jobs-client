

import axios from 'axios';
import  { useContext,  useState } from 'react';
import { AuthUserRoleContext } from '../../Contexts/AuthUserContext';

function SetJob () {
    // const [currentUser,setCurrentUser] = useState({})
    const {currentUser} = useContext(AuthUserRoleContext)



  const [formData, setFormData] = useState({
    jobTitle: "",
    uid: currentUser?.uid || "",
    jobDescription: "",
    companyName: "",
    companyLogo: "",
    industry: "",
    location: "",
    requirements: [],
    responsibilities: [],
    experienceLevel: "",
    salaryRange: "",
    applicationLink: "",
    postedDate: "",
    categories: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'requirements' || name === 'responsibilities') {
      const data = value.split(',').map((item) => item.trim());
      setFormData((prevData) => ({
        ...prevData,
        [name]: data
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleAddCategory = () => {
    setFormData((prevData) => ({
      ...prevData,
      categories: [...prevData.categories, ""],
    }));
  };


  const handleCategoryChange = (index, event) => {
    const { value } = event.target;
    setFormData((prevData) => {
      const categories = [...prevData.categories];
      categories[index] = value;
      return {
        ...prevData,
        categories,
      };
    });
  };

  const handleSubmit =async  (event) => {
    event.preventDefault();
    console.log(formData);
    console.log("user er uid hoolo ",currentUser?.uid)
    await axios.post('https://elegant-bd-jobs.onrender.com/add-job', formData)
    .then(response => {
      console.log(response.data.insertedId,response.data);
      // Reset the form data
      setFormData({
        jobTitle: "",
        jobDescription: "",
        companyName: "",
        companyLogo: "",
        industry: "",
        location: "",
        requirements: [],
        responsibilities: [],
        experienceLevel: "",
        salaryRange: "",
        applicationLink: "",
        postedDate: "",
        uid: currentUser?.uid || "",
        categories: [],
      });
    })
    .catch(error => {
      console.error(error);
    });
  };



  return (
    <div  className="max-w-md mx-auto m-10 shadow-lg bg-white p-8 border border-gray-300 rounded">
    <div>
        <h1 className='text-2xl font-semibold mb-10 '>Add a job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold mb-1">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-1">Job Description</label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
        </div>

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
          <label className="block font-bold mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-1">Requirements</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-1">Responsibilities</label>
          <textarea
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
        </div>

        <div className="mb-4">
            <label className="block font-bold mb-1">Categories</label>
            {formData.categories.map((category, index) => (
              <input
                key={index}
                type="text"
                value={category}
                onChange={(event) => handleCategoryChange(index, event)}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
              />
            ))}
            <button
              type="button"
              onClick={handleAddCategory}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add
            </button>
          </div>


        <div className="mb-4">
          <label className="block font-bold mb-1">Experience Level</label>
          <input
            type="text"
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-1">Salary Range</label>
          <input
            type="text"
            name="salaryRange"
            value={formData.salaryRange}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-1">Application Link</label>
          <input
            type="text"
            name="applicationLink"
            value={formData.applicationLink}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-1">Posted Date</label>
          <input
            type="text"
            name="postedDate"
            value={formData.postedDate}
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
    </div>
  );
}

export default SetJob ;
