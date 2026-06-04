import { useState } from "react";

const GrievanceRedressal = () => {
const [uploadedFile, setUploadedFile] = useState(null);
const [formData, setFormData] = useState({
  profileId: "",
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  mobile: "",
  grievance: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleRegister = () => {
  const grievances =
    JSON.parse(localStorage.getItem("grievances")) || [];
  const grievanceId =
    "GRV" + String(grievances.length + 1).padStart(6, "0");

  const newGrievance = {
  grievanceId,
  registered,
  ...formData,
  uploadedFile,
  status: "Pending",
  createdAt: new Date().toLocaleString(),
};

  grievances.push(newGrievance);

  localStorage.setItem(
    "grievances",
    JSON.stringify(grievances)
  );

  alert(
    `Grievance Registered Successfully!\n\nGrievance ID: ${grievanceId}`
  );

  setFormData({
    profileId: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobile: "",
    grievance: "",
  });

  setRegistered("");
  setPage("home");
};
const handleFileUpload = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setUploadedFile({
      name: file.name,
      type: file.type,
      data: reader.result,
    });
  };

  reader.readAsDataURL(file);
};
  const [page, setPage] = useState("home");
  const [registered, setRegistered] = useState("");
  const [trackId, setTrackId] = useState("");
  const [trackedGrievance, setTrackedGrievance] = useState(null);
const handleTrack = () => {
  const grievances =
    JSON.parse(localStorage.getItem("grievances")) || [];

  const grievance = grievances.find(
    (item) => item.grievanceId === trackId
  );

  if (grievance) {
    setTrackedGrievance(grievance);
  } else {
    alert("No grievance found!");
    setTrackedGrievance(null);
  }
};

  return (
    <div className="bg-white p-6">

      {/* HOME PAGE */}
      {page === "home" && (
        <div className="bg-white p-8 rounded shadow">
          <div className="inline-block bg-slate-500 text-white px-4 py-2 rounded mb-6">
            Grievance Redressal
          </div>

          <div className="flex justify-center gap-10 mt-8">
            <button
              onClick={() => setPage("post")}
              className="bg-yellow-300 px-4 py-2 rounded font-normal"
            >
              Post Grievance
            </button>

            <button
              onClick={() => setPage("track")}
              className="bg-cyan-300 px-6 py-2 rounded font-normal"
            >
              Track Grievance
            </button>
          </div>
        </div>
      )}

      {/* POST GRIEVANCE */}
      {page === "post" && (
        <div className="bg-white p-6 rounded shadow">
          <div className="inline-block bg-slate-500 text-white px-4 py-2 rounded mb-6">
            Post Grievance
          </div>

          <p className="font-normal mb-3">
            Are you registered on Board Portal?
          </p>

          <div className="flex gap-5 mb-4">
            <label>
              <input
                type="radio"
                name="registered"
                value="yes"
                onChange={() => setRegistered("yes")}
              />
              <span className="ml-1">Yes</span>
            </label>

            <label>
              <input
                type="radio"
                name="registered"
                value="no"
                onChange={() => setRegistered("no")}
              />
              <span className="ml-2">No</span>
            </label>
          </div>

          {registered && (
            <>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl">

                {registered === "yes" && (
                  <input
                    type="text"
                    name="profileId"
                    placeholder="Profile ID"
                    value={formData.profileId}
                    onChange={handleChange}
                    className="border px-3 py-1 rounded text-sm"
                    />
                )}

                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border px-3 py-1 rounded text-sm"
                    />

                <input
                  type="text"
                  placeholder="Middle Name"
                  className="border px-3 py-1 rounded text-sm"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="border px-3 py-1 rounded text-sm"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border px-3 py-1 rounded text-sm"
                    />

                <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="border px-3 py-1 rounded text-sm"
                    />
              </div>

              <textarea
                name="grievance"
                value={formData.grievance}
                onChange={handleChange}
                placeholder="Enter your grievance"
                className="border px-3 py-1 rounded w-full h-40 mt-4 text-sm"
                />

              <div className="mt-4">
                <p className="text-sm font-medium mb-2">
                  Upload Supporting Document
                </p>

                <label className="cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  <span className="inline-block bg-gray-200 border border-gray-400 px-4 py-2 rounded text-sm hover:bg-gray-300">
                    Choose File
                  </span>
                </label>

                {uploadedFile && (
                  <span className="ml-3 text-sm text-green-600">
                    {uploadedFile.name}
                  </span>
                )}
              </div>
                

              <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={handleRegister}
                    className="bg-green-600 text-white px-8 py-2 rounded"
                    >
                        Register
                        </button>

                <button
                  onClick={() => {
                    setPage("home");
                    setRegistered("");
                  }}
                  className="bg-yellow-400 px-8 py-2 rounded"
                >
                  Back
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* TRACK PAGE */}
      {page === "track" && (
    <div className="bg-white p-6 rounded shadow text-sm">
    <div className="inline-block bg-slate-500 text-white px-4 py-2 rounded mb-6">
      Track Grievance
    </div>

    <input
      type="text"
      placeholder="Enter Grievance ID"
      value={trackId}
      onChange={(e) => setTrackId(e.target.value)}
      className="border px-3 py-1 rounded w-64 text-sm"
    />

    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={handleTrack}
        className="bg-cyan-500 text-white px-8 py-2 rounded"
      >
        Track
      </button>

      <button
        onClick={() => {
          setPage("home");
          setTrackedGrievance(null);
        }}
        className="bg-yellow-400 px-8 py-2 rounded"
      >
        Back
      </button>
    </div>

    {trackedGrievance && (
      <div className="mt-8 border p-4 rounded bg-gray-50">
        <h3 className="text-sm font-normal mb-4">
          Grievance Details
        </h3>

        <p className = "text-sm">
          <strong>Grievance ID:</strong>{" "}
          {trackedGrievance.grievanceId}
        </p>

        <p className = "text-sm">
          <strong>Name:</strong>{" "}
          {trackedGrievance.firstName}{" "}
          {trackedGrievance.lastName}
        </p>

        <p className = "text-sm">
          <strong>Email:</strong>{" "}
          {trackedGrievance.email}
        </p>

        <p className = "text-sm">
          <strong>Mobile:</strong>{" "}
          {trackedGrievance.mobile}
        </p>

        <p className = "text-sm">
          <strong>Status:</strong>{" "}
          <span className="text-orange-600 font-semibold">
            {trackedGrievance.status}
          </span>
        </p>

        <p className = "text-sm">
          <strong>Submitted On:</strong>{" "}
          {trackedGrievance.createdAt}
        </p>

        <p className = "text-sm">
          <strong>Grievance:</strong>{" "}
          {trackedGrievance.grievance}
        </p>

        {trackedGrievance.uploadedFile && (
  <div className="mt-3">
    <p className = "text-sm">
      <strong>Attached File:</strong>
    </p>

    <a
      href={trackedGrievance.uploadedFile.data}
      download={trackedGrievance.uploadedFile.name}
      className="text-blue-600 underline"
    >
      {trackedGrievance.uploadedFile.name}
    </a>
  </div>
)}
      </div>
    )}
  </div>
)}
    </div>
  );
};

export default GrievanceRedressal;
