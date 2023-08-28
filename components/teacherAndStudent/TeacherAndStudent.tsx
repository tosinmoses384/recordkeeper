import { StudentActive, TeacherActive } from "@/components";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Tab } from "@/components";

export interface investorDefinedTypes {
  summary: [];
  amountInvested: number;
  investmentCount: number;
  bvn: {
    number: number;
    dob: string;
    fullName: string;
  };
  idCard: {
    type: string;
    number: number;
    fullName: string;
    document: string;
    dob: string;
  };
  industry: [];
  status: string;
  onboardingStatus: string;
  bio: string;
  phoneNumber: string;
  id: string;

  documents: {
    boardResolution: string;
    cac: string;
    memart: string;
    cac20: string;
    cac70: string;
  };
  regDocs: [];
  steps: [];
  approvalMethod: string;
  user: {
    socials: {
      linkedin: string;
      facebook: string;
      twitter: string;
      instagram: string;
    };
    userType: string;
    isEmailVerified: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    profilePhoto: string;
    id: string;
  };
  tinNumber: string;
  rcNumber: string;
  companyName: string;
  description: string;
  companyPhoneNumber: string;
  address: string;
  companyEmail: string;
  companyWebsite: string;
  companyLogo: string;
}

const TeacherAndStudent = ({
  setshowModal,
  iTab,
  setTab,
  individual,
  setIndividual,
  fetchedStudent,
  setFetchedStudent,
}: any) => {
  const [newestOrOldest] = useState("newestFirst");

  const [filterName, setFilterName] = useState("day");

  const [searchName] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("default");
  const [searchMode, setSearchMode] = useState("isTrue");

  const handleTab = (e: any) => {
    setTab(e.target.textContent.split("(")[0].trim());
  };

  return (
    <>
      <ToastContainer />

      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div>
          <div className="font-semibold text-xl text-[#000]">Users</div>
        </div>
      </div>

      <div>
        <div>
          <Tab
            handleTab={handleTab}
            iTab={iTab}
            setFilterName={setFilterName}
            setSearchCriteria={setSearchCriteria}
            setSearchMode={setSearchMode}
          />

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => {
                setshowModal(true);
              }}
              className="btn2"
            >
              Add user
            </button>
          </div>

          <div id="myTabContent">
            <>
              {iTab === "Teacher" && (
                <TeacherActive
                  searchCriteria={searchCriteria}
                  searchName={searchName}
                  searchMode={searchMode}
                  newestOrOldest={newestOrOldest}
                  filterName={filterName}
                  individual={individual}
                  setIndividual={setIndividual}
                />
              )}

              {iTab === "Student" && (
                <StudentActive
                  searchCriteria={searchCriteria}
                  searchName={searchName}
                  searchMode={searchMode}
                  newestOrOldest={newestOrOldest}
                  filterName={filterName}
                  setFetchedStudent={setFetchedStudent}
                  fetchedStudent={fetchedStudent}
                />
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export { TeacherAndStudent };
