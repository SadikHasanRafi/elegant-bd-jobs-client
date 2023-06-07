import { useContext, useState } from "react";
import { AuthUserRoleContext } from "../../Contexts/authUserRoleContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { redirect } from "react-router-dom";

const SetEmployeeProfile = () => {
  const navigate = useNavigate()
  const {currentUser} = useContext(AuthUserRoleContext)

  const [resumeData, setResumeData] = useState({
    personalInformation: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
    workExperience: {
      jobHistory: [
        {
          company: "",
          jobTitle: "",
          employmentStartDate: "",
          employmentEndDate: "",
        },
      ],
      education: [
        {
          degree: "",
          institution: "",
          major: "",
          graduationDate: "",
        },
      ],
    },
    skillsAndQualifications: {
      keySkills: [],
      certifications: [],
    },
    jobPreferences: {
      desiredJobTitle: "",
      preferredLocation: "",
    },
    uid: currentUser?.uid || ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevState) => ({
      ...prevState,
      personalInformation: {
        ...prevState.personalInformation,
        [name]: value,
      },
    }));
  };

  const handleKeySkillsChange = (e) => {
    const { value } = e.target;
    setResumeData((prevState) => ({
      ...prevState,
      skillsAndQualifications: {
        ...prevState.skillsAndQualifications,
        keySkills: value.split(",").map((skill) => skill.trim()),
      },
    }));
  };

  const handleJobHistoryChange = (e, index) => {
    const { name, value } = e.target;
    setResumeData((prevState) => {
      const jobHistory = [...prevState.workExperience.jobHistory];
      jobHistory[index][name] = value;
      return {
        ...prevState,
        workExperience: {
          ...prevState.workExperience,
          jobHistory,
        },
      };
    });
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    setResumeData((prevState) => {
      const education = [...prevState.workExperience.education];
      education[index][name] = value;
      return {
        ...prevState,
        workExperience: {
          ...prevState.workExperience,
          education,
        },
      };
    });
  };

  const handleJobPreferencesChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevState) => ({
      ...prevState,
      jobPreferences: {
        ...prevState.jobPreferences,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resume Data:", resumeData);
    resumeData.uid=currentUser.uid
    const url = 'https://elegant-bd-jobs.onrender.com/set-employee';
    axios.post(url, resumeData)
      .then(response => {
        console.log('Request successful!',response.data.acknowledged);//eta tue hole redirect kore dashboard e niye jete hobe
        if (response.data.acknowledged === true) {
          navigate("/dashboard");
        }
      })
      .catch(error => {
        console.error('Request failed:', error);
      });
      navigate("/dashboard")
  };

  return (
    <div className="w-full min-h-screen my-12 flex  flex-col items-center">
      <h1 className="text-5xl font-bold">Resume Form</h1>
      <form className="card p-10 form-control" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div>
              <h2 className="text-xl font-semibold mb-5 mt-12">Personal Information</h2>

              <div className="mb-5">
              <label className="label">
                <span className="label-text">Full Name:</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={resumeData.personalInformation.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="input input-bordered w-full "
              />
              </div>

              <div className="mb-5">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="email"
                name="email"
                value={resumeData.personalInformation.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="input input-bordered w-full "
              />
              </div>

              <div className="mb-5">
              <label className="label">
                <span className="label-text">Contact Number :</span>
              </label>
              <input
                type="text"
                name="phone"
                value={resumeData.personalInformation.phone}
                onChange={handleInputChange}
                placeholder="Contact number"
                className="input input-bordered w-full "
              />
              </div>

              <div className="mb-5">
              <label className="label">
                <span className="label-text">Address :</span>
              </label>
              <input
                type="text"
                name="address"
                value={resumeData.personalInformation.address}
                onChange={handleInputChange}
                placeholder="Enter address: "
                className="input input-bordered w-full "
              />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-5 mt-12">
                Skills and Qualifications
              </h2>
              <div className="mb-5">
              <label className="label label-text">
                Key Skills (comma-separated):
              </label>
              <input
                type="text"
                name="keySkills"
                value={resumeData.skillsAndQualifications.keySkills.join(", ")}
                onChange={handleKeySkillsChange}
                placeholder="(comma-separated)"
                className="input input-bordered w-full "
              />
              </div>

              <div>
                <div>
                  <h2 className="text-lg font-medium mb-3 mt-6">Work Experience</h2>
                  {resumeData.workExperience.jobHistory.map((job, index) => (
                    <div key={index}>
                        <hr />
                      <h3 className="text-md font-light mt-3">Job {index + 1}</h3>

                      <div className="mb-5">
                      <label className="label label-text">Company:</label>
                      <input
                        type="text"
                        name="company"
                        value={job.company}
                        onChange={(e) => handleJobHistoryChange(e, index)}
                        className="input input-bordered w-full "
                      />
                      </div>

                      <div className="mb-5">
                      <label className="label label-text">Job Title:</label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={job.jobTitle}
                        onChange={(e) => handleJobHistoryChange(e, index)}
                        placeholder="Job Title"
                        className="input input-bordered w-full "
                      />
                      </div>

                      <div className="mb-5">
                      <label className="label-text label">
                        Employment Start Date:
                      </label>
                      <input
                        type="date"
                        name="employmentStartDate"
                        value={job.employmentStartDate}
                        onChange={(e) => handleJobHistoryChange(e, index)}
                        className="input input-bordered w-full "
                      />
                      </div>

                      <div className="mb-5">
                      <label className="label-text label">Employment End Date:</label>
                      <input
                        type="date"
                        name="employmentEndDate"
                        value={job.employmentEndDate}
                        onChange={(e) => handleJobHistoryChange(e, index)}
                        className="input input-bordered w-full "
                      />
                      </div>
                    </div>
                  ))}

                  <button
                    className="btn btn-outline btn-secondary w-full"
                    type="button"
                    onClick={() =>
                      setResumeData((prevState) => ({
                        ...prevState,
                        workExperience: {
                          ...prevState.workExperience,
                          jobHistory: [
                            ...prevState.workExperience.jobHistory,
                            {
                              company: "",
                              jobTitle: "",
                              employmentStartDate: "",
                              employmentEndDate: "",
                            },
                          ],
                        },
                      }))
                    }
                  >
                    Add Job
                  </button>
                </div>

                <div>
                  <h2 className="text-lg font-medium mb-3 mt-6">Education</h2>
                  {resumeData.workExperience.education.map(
                    (education, index) => (
                      <div key={index}>
                        <hr />
                        <h3 className="text-md font-light mt-3">Education {index + 1}</h3>
                        <div className="mb-5">
                            <label className="label-text label">Degree:</label>
                        <input
                          type="text"
                          name="degree"
                          value={education.degree}
                          onChange={(e) => handleEducationChange(e, index)}
                          className="input input-bordered w-full"
                        />
                        </div>

                        <div className="mb-5">
                        <label className="label-text label">Institution:</label>
                          <input
                            type="text"
                            name="institution"
                            value={education.institution}
                            onChange={(e) => handleEducationChange(e, index)}
                            className="input input-bordered w-full "
                          />
                        </div>

                        <div className="mb-5">
                        <label className="label label-text">
                          Major: </label>
                          <input
                            type="text"
                            name="major"
                            value={education.major}
                            onChange={(e) => handleEducationChange(e, index)}
                            className="input input-bordered w-full "
                          />
                        </div>

                        <div className="mb-5">
                        <label className="label label-text">
                          Graduation Date:
                        </label>
                          <input
                            type="date"
                            name="graduationDate"
                            value={education.graduationDate}
                            onChange={(e) => handleEducationChange(e, index)}
                            className="input input-bordered w-full "
                          />
                        </div>
                      </div>
                    )
                  )}

                  <button
                    className="btn btn-outline btn-secondary w-full"
                    type="button"
                    onClick={() =>
                      setResumeData((prevState) => ({
                        ...prevState,
                        workExperience: {
                          ...prevState.workExperience,
                          education: [
                            ...prevState.workExperience.education,
                            {
                              degree: "",
                              institution: "",
                              major: "",
                              graduationDate: "",
                            },
                          ],
                        },
                      }))
                    }
                  >
                    Add Education
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-5 mt-12" >Job Preferences</h2>
              <div className="mb-5">
                <label>
                    Desired Job Title:
                    <input
                    className="input input-bordered w-full max-s-xs"
                    type="text"
                    name="desiredJobTitle"
                    value={resumeData.jobPreferences.desiredJobTitle}
                    onChange={handleJobPreferencesChange}
                    />
                </label>
              </div>
            <div className="mb-5">
                <label>
                    Preferred Location:
                    <input
                    className="input input-bordered w-full max-s-xs"
                    type="text"
                    name="preferredLocation"
                    value={resumeData.jobPreferences.preferredLocation}
                    onChange={handleJobPreferencesChange}
                    />
                </label>
            </div>


            </div>
          </div>
          <button className="btn btn-primary w-full" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>

    //****************** */
  );
};

export default SetEmployeeProfile;

