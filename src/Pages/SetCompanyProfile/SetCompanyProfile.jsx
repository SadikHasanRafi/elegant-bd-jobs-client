import { useState } from 'react';
import useUpdateInfo from '../../Hooks/useUpdateInfo';

const SetCompanyProfile = () => {
    const [formValues, setFormValues] = useState({
        companyName: '',
        companyEmail: '',
        companyPhoneNumber: '',
        companyAddress: '',
        companyDescription: ''
      });
      const [dataForHook, setDataForHook] = useState();
      const [data, setData] = useUpdateInfo(dataForHook);
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setDataForHook(formValues); // Set dataForHook to formValues
        setFormValues({
          companyName: '',
          companyEmail: '',
          companyPhoneNumber: '',
          companyAddress: '',
          companyDescription: ''
        });
        setData(formValues);
      };
    
      const handleChange = (event) => {
        setFormValues({
          ...formValues,
          [event.target.name]: event.target.value
        });
      };
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Enter your company name"
          className="input input-bordered input-primary w-full max-w-xs"
          value={formValues.companyName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="companyEmail"
          placeholder="Enter your company email"
          className="input input-bordered input-primary w-full max-w-xs"
          value={formValues.companyEmail}
          onChange={handleChange}
        />
        <input
          type="text"
          name="companyPhoneNumber"
          placeholder="Enter your company phone number"
          className="input input-bordered input-primary w-full max-w-xs"
          value={formValues.companyPhoneNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="companyAddress"
          placeholder="Enter your company address"
          className="input input-bordered input-primary w-full max-w-xs"
          value={formValues.companyAddress}
          onChange={handleChange}
        />
        <input
          type="text"
          name="companyDescription"
          placeholder="About your company:"
          className="input input-bordered input-primary w-full max-w-xs"
          value={formValues.companyDescription}
          onChange={handleChange}
        />
        
        <button type="submit" className="btn btn-outline">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SetCompanyProfile;
