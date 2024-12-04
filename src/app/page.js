'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const AccessForm = () => {

  const router =  useRouter()
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    companyName: '',
    companySize: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError('Must be a business email.');
      return;
    }
    // handle form submission logic here
    setError('');
    console.log(formData);
  };

  const validateEmail = (email) => {
    const invalidPersonalDomains = ['@gmail.', '@yahoo.', '@live.', '@aol.', '@outlook.'];
    return !invalidPersonalDomains.some((domain) => email.includes(domain));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const subb = () => {
   
   router.push('/login')
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h3 className="text-2xl font-semibold text-gray-700 text-center mb-6">Get Access</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 font-bold">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full text-gray-700 px-4 py-2 border border-black-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Business Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>

        <div>
          <label htmlFor="jobTitle" className="block text-sm text-gray-700 font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border text-gray-700 border-gray-300 text-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">
            Company Size
          </label>
          <select
            name="companySize"
            id="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Company Size</option>
            <option value="1-100">1-100</option>
            <option value="101-250">101-250</option>
            <option value="251-1000">251-1000</option>
            <option value="1001-5000">1001-5000</option>
            <option value="5001-10000">5001-10000</option>
            <option value="10001+">10001+</option>
          </select>
        </div>

        <div className="text-sm text-gray-500">
          By filling out this form and clicking the submit button you are agreeing to receive email communications from Zip regarding events, webinars, research, and more. Don’t worry, you can <a href="https://lp.ziphq.com/UnsubscribePage.html" className="text-blue-500 hover:underline">unsubscribe</a> at any time. View our <a href="https://ziphq.com/zip-privacy-notice" className="text-blue-500 hover:underline">Privacy Notice</a>. If you have any questions, please reach out to <a href="mailto:privacy@ziphq.com" className="text-blue-500 hover:underline">privacy@ziphq.com</a>.
        </div>

        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={subb}
          >
            Get Access
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccessForm;
