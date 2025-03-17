"use client"
import { useState } from "react";

const InterestForm = () => {
  const [trips, setTrips] = useState([
    { id: Date.now(), type: "", date: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  // Add new trip
  const addTrip = () => {
    setTrips([...trips, { id: Date.now(), type: "", date: "" }]);
  };

  // Remove trip
  const removeTrip = (id) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  // Update trip data
  const updateTrip = (id, field, value) => {
    setTrips(trips.map(trip => trip.id === id ? {...trip, [field]: value} : trip));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const experience = formData.get('experience');
    
    // Process trips data
    const tripsData = trips.map((trip, index) => {
      return {
        tripType: formData.get(`tripType-${trip.id}`),
        tripDate: formData.get(`tripDate-${trip.id}`)
      };
    });

    // Data to send to Google Sheets
    const dataToSend = {
      name,
      email,
      phone,
      experience,
      trips: JSON.stringify(tripsData),
      timestamp: new Date().toISOString()
    };

      // Replace this URL with your deployed Google Apps Script web app URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxgY1OHfcmzkT4z6fkvVkKHsKxTQKC0hYmwk1lYFIY6asYZJAaI23ggfiP4EwvgzE31/exec';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
        mode: 'no-cors',
      });

      const data = {
        name: name,
        email: email,
      }

      const res = await fetch("/api/form", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'no-cors',
      });

      setLoading(false);
      
    
        setSubmitStatus({
          submitted: true,
          success: true,
          message: "Thank you! Your interest has been recorded successfully."
        });
        // Reset form
        e.target.reset();
        setTrips([{ id: Date.now(), type: "", date: "" }]);
    
  };

  return (
    <section className="bg-black text-white p-10 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-white">Express Your Interest</h2>
      <p className="mb-8 text-gray-300">
        Fill out the form below to show your interest in participating. Trips
        require a minimum of 12 participants to be confirmed.
      </p>

      {submitStatus.submitted && submitStatus.success ? (
        <div className="mt-4 p-6 bg-gray-900 rounded-lg border border-gray-800 text-center">
          <p className="text-white text-lg font-medium">
            {submitStatus.message}
          </p>
          <button 
            onClick={() => setSubmitStatus({submitted: false, success: false, message: ""})}
            className="mt-4 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all"
          >
            Submit Another Response
          </button>
        </div>
      ) : (
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white mb-3 font-medium">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="p-4 bg-gray-900 text-white rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-white mb-3 font-medium">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-4 bg-gray-900 text-white rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white mb-3 font-medium">
                Contact Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="p-4 bg-gray-900 text-white rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="experience" className="text-white mb-3 font-medium">
                Experience Level*
              </label>
              <select
                id="experience"
                name="experience"
                required
                className="p-4 bg-gray-900 text-white rounded-lg border border-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all appearance-none"
              >
                <option value="">-- Select Experience Level --</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
              </select>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              Trip Selections
              <span className="ml-3 text-sm text-gray-400 font-normal">(Select at least one)</span>
            </h3>

            {trips.map((trip) => (
              <div
                key={trip.id}
                className="bg-gray-900 p-8 rounded-lg mt-6 border border-gray-800 hover:border-gray-700 transition-all"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-md font-medium text-white">Trip #{trips.indexOf(trip) + 1}</span>
                  {trips.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTrip(trip.id)}
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Remove
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-white mb-3 font-medium">Trip Type*</label>
                    <select
                      name={`tripType-${trip.id}`}
                      required
                      value={trip.type}
                      onChange={(e) => updateTrip(trip.id, 'type', e.target.value)}
                      className="p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all appearance-none"
                    >
                      <option value="">-- Select Trip Type --</option>
                      <option value="half-day">Half Day (6 AM - 1 PM)</option>
                      <option value="full-day">Full Day (6 AM - 6 PM)</option>
                      <option value="overnight">Overnight (Sat 6 AM - Sun 6 PM)</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-white mb-3 font-medium">Date*</label>
                    <input
                      type="date"
                      name={`tripDate-${trip.id}`}
                      required
                      value={trip.date}
                      onChange={(e) => updateTrip(trip.id, 'date', e.target.value)}
                      className="p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addTrip}
              className="mt-6 bg-gray-900 text-white px-6 py-4 rounded-lg hover:bg-gray-800 transition-all flex items-center border border-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Another Trip
            </button>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? 'bg-gray-500' : 'bg-white hover:bg-gray-200'} text-black px-6 py-4 rounded-lg transition-all font-medium shadow-lg text-lg flex justify-center items-center`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : "Submit Interest"}
            </button>
          </div>
        </form>
      )}

      {submitStatus.submitted && !submitStatus.success && (
        <div className="mt-4 p-4 bg-red-900 bg-opacity-20 rounded-lg border border-red-800">
          <p className="text-red-300">
            {submitStatus.message}
          </p>
        </div>
      )}

    </section>
  );
};

export default InterestForm;