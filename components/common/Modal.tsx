// import { LoadingOutlined } from '@ant-design/icons';
// import { useSme } from '@hooks/onboarding/useSme';
// import { newTeamMember } from 'kudade/types';
import { useState, useEffect } from "react";
import { LoadingOutlined } from '@ant-design/icons';

import { showToastMessage, showToastErrorMessage } from "@/components";
import { ToastContainer } from "react-toastify";

export type newUser = {
  id: string;
  title: string;
  firstname: string;
  surname: string;
  date: string;
  numb: string;
  salary?: string;
};

// export type newTeamMember = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   designation: string;
//   role: string;
//   jobStatus?: string;
//   achievement?: string;
// };

const Modal = ({
  replyHasBeenSent,

  setshowModal,
  iTab
}: any) => {
  const [valSent, setValSent] = useState(false);

  const valHasBeenSent = () => {
    setValSent(!valSent);
  };
  const [expectedRetErr, setExpectedRetErr] = useState<null | string>(null);
  const [expectedRetErr1, setExpectedRetErr1] = useState<null | string>(null);
  const [expectedRetErr2, setExpectedRetErr2] = useState<null | string>(null);
  const [expectedRetErr3, setExpectedRetErr3] = useState<null | string>(null);
  const [expectedRetErr4, setExpectedRetErr4] = useState<null | string>(null);
  const [expectedRetErr5, setExpectedRetErr5] = useState<null | string>(null);
  // const { createSmeTeam } = useSme();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [formState, setFormState] = useState<newUser>({
    id: "",
    title: "",
    firstname: "",
    surname: "",
    date: "",
    numb: "",
    salary: "",
  });

  // const [formState, setFormState] = useState<newTeamMember>({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   designation: '',
  //   role: 'member',
  // });

  const handleChange = (e: any) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
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

    if (iTab === 'Teacher') {
      valHasBeenSent()
    if (
      formState.id === '' ||
      formState.title === '' ||
      formState.firstname === '' ||
      formState.surname === '' ||
      formState.date === '' ||
      formState.numb === '' ||
      formState.salary === ''
      ) {

        valHasBeenSent()
        
    } else {
       try {
      setIsProcessing(true);
      const payload = {
        id: formState.id,
        title: formState.title,
        firstname: formState.firstname,
        surname: formState.surname,
        date: formState.date,
        number: formState.numb,
        salary: formState.date,
      };
      console.log(payload)
      
     
      // const orgId = localStorage.getItem("orgId") ?? "1";

      // const response = await createSmeTeam(orgId, payload);

      // if (response.status === 201) {
      //   // showToastMessage('added successfully');

      //   await delay(5000);
      //   replyHasBeenSent();

      //   setshowModal(false);
      // }
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
      valHasBeenSent()
      if (
        formState.id === '' ||
        formState.firstname === '' ||
        formState.surname === '' ||
        formState.date === '' ||
        formState.numb === '' 
        ) {
  
          valHasBeenSent()
          
      } else {
         try {
        setIsProcessing(true);
        const payload = {
          id: formState.id,
          firstname: formState.firstname,
          surname: formState.surname,
          date: formState.date,
          number: formState.numb,
        };
        console.log(payload)
        
       
        // const orgId = localStorage.getItem("orgId") ?? "1";
  
        // const response = await createSmeTeam(orgId, payload);
  
        // if (response.status === 201) {
        //   // showToastMessage('added successfully');
  
        //   await delay(5000);
        //   replyHasBeenSent();
  
        //   setshowModal(false);
        // }
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

 useEffect(() => {
      if ( formState.id === '' ||
      formState.title === '' ||
      formState.firstname === '' ||
      formState.surname === '' ||
      formState.date === '' ||
      formState.numb === '') {
        setExpectedRetErr('Required field')
      } 
      
    }, [valSent]);

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
                {iTab === 'Teacher' ? 'Add Teacher' : 'Add Student'}
                
              </h3>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6">
              <div className="mb-10">
                <p className="pt-2">{iTab === 'Teacher' ? 'Teacher' : 'Student'}</p>
              </div>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">

                  
                  <div>
                    <label
                      htmlFor="f-name"
                      className="block mb-2 text-sm text-[#000]"
                    >
                      Firstname<span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={formState.firstname}
                      onChange={handleChange}
                      required
                    />
                     {formState.firstname === '' &&
                      <>
                      {expectedRetErr && <p className="text-red-600 text-sm mt-1">{expectedRetErr}</p>}
                      </>
                    }
                  </div>

                  <div>
                    <label
                      htmlFor="f-name"
                      className="block mb-2 text-sm text-[#000]"
                    >
                      Surname<span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      name="surname"
                      placeholder="Surname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={formState.surname}
                      onChange={handleChange}
                      required
                    />
                     {formState.surname === '' &&
                      <>
                      {expectedRetErr && <p className="text-red-600 text-sm mt-1">{expectedRetErr}</p>}
                      </>
                    }
                  </div>

                  <div>
                    <label
                      htmlFor="f-name"
                      className="block mb-2 text-sm text-[#000]"
                    >
                      National ID Number<span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      name="id"
                      placeholder="National ID Number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={formState.id}
                      onChange={handleChange}
                      required
                    />
                     
                    {formState.id === '' &&
                      <>
                      {expectedRetErr && <p className="text-red-600 text-sm mt-1">{expectedRetErr}</p>}
                      </>
                    }
                  </div>

                 {iTab === 'Teacher' && <div>
                    <label
                      htmlFor="role"
                      className="block mb-2 text-sm text-[#000]"
                    >
                      Title<span className="text-red-500"> *</span>
                    </label>
                    <select
                      name="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={formState.title}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a title</option>
                      <option value="CEO">Mr</option>
                      <option value="CFO">Mrs</option>
                      <option value="CTO">Miss</option>
                      <option value="COO">Dr</option>
                      <option value="Director">Prof</option>
                     
                    </select>
                    {formState.title === '' &&
                      <>
                      {expectedRetErr && <p className="text-red-600 text-sm mt-1">{expectedRetErr}</p>}
                      </>
                    }
                  </div>}


                  <div>
                    <label
                      htmlFor="f-name"
                      className="block mb-2 text-sm text-[#000]"
                    >
                      Date<span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      placeholder="Date of birth"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={formState.date}
                      onChange={handleChange}
                      required
                    />
                     {formState.date === '' &&
                      <>
                      {expectedRetErr && <p className="text-red-600 text-sm mt-1">{expectedRetErr}</p>}
                      </>
                    }
                  </div>

                  <div>
                    <label
                      htmlFor="f-name"
                      className="block mb-2 text-sm text-[#000]"
                    >
                      {iTab === 'Teacher' ? 'Teacher Number' : 'Student Number'}
                      <span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      name="numb"
                      placeholder="Number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={formState.numb}
                      onChange={handleChange}
                      required
                    />
                      {formState.numb === '' &&
                      <>
                      {expectedRetErr && <p className="text-red-600 text-sm mt-1">{expectedRetErr}</p>}
                      </>
                    }
                  </div>

                 {iTab === 'Teacher' && <div>
                    <label
                      htmlFor="f-name"
                      className="block mb-2 text-sm text-[#000]"
                    >
                      Salary<span className="text-red-500"></span>
                    </label>
                    <input
                      type="number"
                      name="salary"
                      placeholder="Salary"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={formState.salary}
                      onChange={handleChange}
                    />
                  </div>}

                  {/* <div>
                    <label htmlFor="role" className="block mb-2 text-sm text-[#000]">
                      Number<span className="text-red-500"> *</span>
                    </label>
                    <select
                      name="numb"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={formState.numb}
                      onChange={handleChange}
                    >
                      <option value="owner">owner</option>
                      <option value="member">member</option>
                    </select>
                  </div> */}
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
                  {isProcessing ? (
                    <>
                      {/* <LoadingOutlined style={{ fontSize: 24 }} spin />  */}
                      Inviting...
                    </>
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
