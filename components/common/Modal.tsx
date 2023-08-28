import { useEffect, useState } from "react";

import { showToastErrorMessage, showToastMessage } from "@/components";
import { ToastContainer } from "react-toastify";
import { users } from "@/services";
import moment from "moment";

export type newUser = {
  id: string;
  title: string;
  firstname: string;
  surname: string;
  date: string;
  date1: string;
  numb: string;
  salary?: string;
};

const Modal = ({ replyHasBeenSent, setshowModal, iTab }: any) => {
  const [selectedDate] = useState(null);

  const [startDateTeacher] = useState<any>();

  const [endDateStudent] = useState<any>();

  const [valSent, setValSent] = useState(false);

  const valHasBeenSent = () => {
    setValSent(!valSent);
  };

  const [teacherDOB, setTeacherDOB] = useState("");
  const [studentDOB, setStudentDOB] = useState("");
  const [expectedRetErr, setExpectedRetErr] = useState<null | string>(null);

  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [formState, setFormState] = useState<newUser>({
    id: "",
    title: "",
    firstname: "",
    surname: "",
    date: "",
    date1: "",
    numb: "",
    salary: "",
  });

  const handleChange = (e: any) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    valHasBeenSent();
  };

  const delay = (ms: number) =>
    new Promise((resolve, reject) => {
      if (ms < 0) {
        reject(new Error("Delay time cannot be negative."));
      } else {
        setTimeout(resolve, ms);
      }
    });

  const addTeacher = async () => {
    if (iTab === "Teacher") {
      if (
        formState.id === "" ||
        formState.title === "" ||
        formState.firstname === "" ||
        formState.surname === "" ||
        formState.date === "" ||
        startDateTeacher === "" ||
        formState.numb === ""
      ) {
        valHasBeenSent();
      } else {
        if (teacherDOB !== "") {
          return;
        }

        try {
          setIsProcessing(true);

          const payload = {
            nationalID: formState.id,
            title: formState.title,
            firstname: formState.firstname,
            surname: formState.surname,
            dateOfBirth: formState.date,
            teacherNumber: formState.numb,
            salary: formState.salary,
          };

          const resp = await users.addTeacher(payload);

          if (resp.status === 200) {
            showToastMessage("added successfully");
            await delay(5000);
            replyHasBeenSent();

            setshowModal(false);
          }
        } catch (error: any) {
          let message = "";

          if (error?.response) {
            message =
              error.response?.data?.message ||
              error.response?.data?.error[0].message;
          } else if (error?.message) {
            message = error.message;
            showToastErrorMessage(message);
          } else {
            message = "Oops! Something went wrong.";
            showToastErrorMessage(message);
          }
        }
      }
    } else {
      if (
        formState.id === "" ||
        formState.firstname === "" ||
        formState.surname === "" ||
        formState.date1 === "" ||
        endDateStudent === "" ||
        formState.numb === ""
      ) {
        valHasBeenSent();
      } else {
        const minAgeInYears1 = 22;
        const selectedDate1 = moment(formState.date1, "YYYY-MM-DD");
        const currentDate = moment();
        const ageDifference1 = currentDate.diff(selectedDate1, "years");

        if (ageDifference1 > minAgeInYears1) {
          setStudentDOB("Their age may not be more than 22");
          return;
        }

        try {
          setIsProcessing(true);

          const payload = {
            nationalID: formState.id,
            firstname: formState.firstname,
            surname: formState.surname,
            dateOfBirth: formState.date1,
            studentNumber: formState.numb,
          };

          const resp = await users.addStudent(payload);

          if (resp.status === 200) {
            showToastMessage("added successfully");
            await delay(5000);
            replyHasBeenSent();

            setshowModal(false);
          }
        } catch (error: any) {
          let message = "";

          if (error?.response) {
            message =
              error.response?.data?.message ||
              error.response?.data?.error[0].message;
          } else if (error?.message) {
            message = error.message;
            showToastErrorMessage(message);
          } else {
            message = "Oops! Something went wrong.";
            showToastErrorMessage(message);
          }
        }
      }
    }
  };

  const specificFunc = (
    ageDifference: number,
    minAgeInYears: number,
    minAgeInYears1: number,
    ageDifference1: number
  ) => {
    if (iTab === "Teacher") {
      if (ageDifference < minAgeInYears) {
        setTeacherDOB("Their age may not be less than 21");
      } else {
        setTeacherDOB("");
      }
    } else if (iTab === "Student") {
      if (ageDifference1 > minAgeInYears1) {
        setStudentDOB("Their age may not be more than 22");
      } else {
        setStudentDOB("");
      }
    }
  };

  useEffect(() => {
    if (
      formState.id === "" ||
      formState.title === "" ||
      formState.firstname === "" ||
      formState.surname === "" ||
      formState.date === "" ||
      formState.date1 === "" ||
      formState.numb === ""
    ) {
      setExpectedRetErr("Required field");
    }

    const minAgeInYears = 21;
    const minAgeInYears1 = 22;
    // Parse the input date string using moment
    const selectedDate = moment(formState.date, "YYYY-MM-DD");
    const selectedDate1 = moment(formState.date1, "YYYY-MM-DD");
    // Calculate the difference between the selected date and the current date
    const currentDate = moment();
    const ageDifference = currentDate.diff(selectedDate, "years");
    const ageDifference1 = currentDate.diff(selectedDate1, "years");

    specificFunc(ageDifference, minAgeInYears, minAgeInYears1, ageDifference1);
  }, [iTab, valSent, teacherDOB, studentDOB]);

  return (
    <>
      <ToastContainer />
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  md:h-full bg-[rgba(0,0,0,0.7)]"
      >
        <div className="relative w-full h-full max-w-3xl md:h-auto mx-auto">
          <div className="relative bg-white rounded-lg shadow">
            <button
              onClick={() => {
                setshowModal(false);
              }}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              data-modal-hide="add-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            {/* <!-- Modal header --> */}
            <div className="px-6 py-4 border-b rounded-t">
              <h3 className="text-base font-semibold text-gray-900 lg:text-xl">
                {iTab === "Teacher" ? "Add Teacher" : "Add Student"}
              </h3>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6">
              <div className="mb-10">
                <p className="pt-2">
                  {iTab === "Teacher" ? "Teacher" : "Student"}
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fname"
                      className="block mb-2 text-sm text-[#000]"
                    >
                      Firstname<span className="text-red-500"> *</span>
                    </label>
                    <input
                      id="fname"
                      type="text"
                      name="firstname"
                      placeholder="First name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={formState.firstname}
                      onChange={handleChange}
                      required
                    />
                    {formState.firstname === "" && (
                      <>
                        {expectedRetErr && (
                          <p className="text-red-600 text-sm mt-1">
                            {expectedRetErr}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lname"
                      className="block mb-2 text-sm text-[#000]"
                    >
                      Surname<span className="text-red-500"> *</span>
                    </label>
                    <input
                      id="lname"
                      type="text"
                      name="surname"
                      placeholder="Surname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={formState.surname}
                      onChange={handleChange}
                      required
                    />
                    {formState.surname === "" && (
                      <>
                        {expectedRetErr && (
                          <p className="text-red-600 text-sm mt-1">
                            {expectedRetErr}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="nid"
                      className="block mb-2 text-sm text-[#000]"
                    >
                      National ID Number<span className="text-red-500"> *</span>
                    </label>
                    <input
                      id="nid"
                      type="text"
                      name="id"
                      placeholder="National ID Number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={formState.id}
                      onChange={handleChange}
                      required
                    />

                    {formState.id === "" && (
                      <>
                        {expectedRetErr && (
                          <p className="text-red-600 text-sm mt-1">
                            {expectedRetErr}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  {iTab === "Teacher" && (
                    <div>
                      <label
                        htmlFor="ttitle"
                        className="block mb-2 text-sm text-[#000]"
                      >
                        Title<span className="text-red-500"> *</span>
                      </label>
                      <select
                        id="ttitle"
                        name="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={formState.title}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a title</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Dr">Dr</option>
                        <option value="Prof">Prof</option>
                      </select>

                      {formState.title === "" && (
                        <>
                          {expectedRetErr && (
                            <p className="text-red-600 text-sm mt-1">
                              {expectedRetErr}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  )}

                  {iTab === "Teacher" && (
                    <div>
                      <label
                        htmlFor="dob"
                        className="block mb-2 text-sm text-[#000]"
                      >
                        Teacher Date of Birth
                        <span className="text-red-500"> *</span>
                      </label>
                      <input
                        id="dob"
                        type="date"
                        name="date"
                        placeholder="Date of birth"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={formState.date}
                        onChange={handleChange}
                        required
                      />
                      {formState.date === "" && (
                        <>
                          {expectedRetErr && (
                            <p className="text-red-600 text-sm mt-1">
                              {expectedRetErr}
                            </p>
                          )}
                        </>
                      )}

                      {formState.date !== "" && (
                        <>
                          {teacherDOB && (
                            <p className="text-red-600 text-sm mt-1">
                              {teacherDOB}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  )}

                  {iTab === "Student" && (
                    <div>
                      <label
                        htmlFor="dob1"
                        className="block mb-2 text-sm text-[#000]"
                      >
                        Student Date of Birth
                        <span className="text-red-500"> *</span>
                      </label>
                      <input
                        id="dob1"
                        type="date"
                        name="date1"
                        placeholder="Date of birth"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={formState.date1}
                        onChange={handleChange}
                        required
                      />
                      {formState.date1 === "" && (
                        <>
                          {expectedRetErr && (
                            <p className="text-red-600 text-sm mt-1">
                              {expectedRetErr}
                            </p>
                          )}
                        </>
                      )}

                      {formState.date1 !== "" && (
                        <>
                          {studentDOB && (
                            <p className="text-red-600 text-sm mt-1">
                              {studentDOB}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="tsnumb"
                      className="block mb-2 text-sm text-[#000]"
                    >
                      {iTab === "Teacher" ? "Teacher Number" : "Student Number"}
                      <span className="text-red-500"> *</span>
                    </label>
                    <input
                      id="tsnumb"
                      type="text"
                      name="numb"
                      placeholder="Number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={formState.numb}
                      onChange={handleChange}
                      required
                    />
                    {formState.numb === "" && (
                      <>
                        {expectedRetErr && (
                          <p className="text-red-600 text-sm mt-1">
                            {expectedRetErr}
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  {iTab === "Teacher" && (
                    <div>
                      <label
                        htmlFor="sal"
                        className="block mb-2 text-sm text-[#000]"
                      >
                        Salary<span className="text-red-500"></span>
                      </label>
                      <input
                        id="sal"
                        type="number"
                        name="salary"
                        placeholder="Salary"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={formState.salary}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>
              </form>

              <div className="mt-10">
                <button
                  onClick={() => {
                    addTeacher();
                  }}
                  type="button"
                  disabled={isProcessing}
                  className="btn2"
                >
                  {isProcessing ? <>Processing Data...</> : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Modal };
