import { useEffect, useState } from "react";
import { TeacherActive, StudentActive } from "@/components";
// import AdminInvestordisable from '@components/templates/admin/AdminInvestordisable';
import { Tab } from "@/components";
// import { useMessageApi } from '@hooks/useMessageApi';
// import { adminService } from '@services/admin/index';
// import {
//   CSVInvestorCorporateInvestmentHeader,
//   CSVInvestorInvestmentHeader,
// } from '@utils/csvRaiseTableHeader';
// import { CSVLink } from 'react-csv';

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

const TeacherAndStudent = ({ setshowModal, iTab, setTab }: any) => {
  const [pageSize] = useState(10);
  const [currentPage] = useState(1);

  const [individual, setIndividual] = useState([]);
  const [corporate, setCorporate] = useState([]);

  const [newestOrOldest, setNewestOrOldest] = useState("newestFirst");

  const [filterName, setFilterName] = useState("day");

  const [searchName, setSearchName] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("default");
  const [searchMode, setSearchMode] = useState("isTrue");

  
  const handleTab = (e: any) => {
    setTab(e.target.textContent.split("(")[0].trim());
  };

  // const { messageToast } = useMessageApi();

  const [totalinvestor, setTotalinvestor] = useState(0);
  const [individualInvestors, setTotalIndividualInvestors] = useState(0);
  const [corporateInvestors, setTotalCorporateInvestors] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);

  // DEFAULT
  const getAdminAllindividualInvestors = async () => {
    try {
      // const res = await adminService.getAdminAllindividualInvestors(pageSize, currentPage);
      // setIndividual(res.data.data.results);
      // setTotalinvestor(res.data.totalInvestors);
      // setTotalIndividualInvestors(res.data.totalIndividualInvestors);
      // setTotalCorporateInvestors(res.data.totalCorporateInvestors);
      // setTotalInvestment(res.data.summary[0].totalInvestments);
    } catch (error: any) {
      let message = "";
      if (error?.response) {
        message =
          error.response?.data?.message ??
          error.response?.data?.error[0].message;
      } else if (error?.message) {
        message = error.message;
      } else {
        message = "Oops! Something went wrong.";
      }
      // messageToast(message, 'error');
    }
  };

  const getAdminAllCorporateInvestors = async () => {
    try {
      // const res = await adminService.getAdminAllCorporateInvestors(pageSize, currentPage);
      // setCorporate(res.data.data.results);
    } catch (error: any) {
      let message = "";
      if (error?.response) {
        message =
          error.response?.data?.message ??
          error.response?.data?.error[0].message;
      } else if (error?.message) {
        message = error.message;
      } else {
        message = "Oops! Something went wrong.";
      }
      // messageToast(message, 'error');
    }
  };

  useEffect(() => {
    getAdminAllindividualInvestors();
    getAdminAllCorporateInvestors();
  }, []);

  const filterTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const filterTableOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterName(e.target.value);
  };

  return (
    <>
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
                />
              )}

              {iTab === 'Student' && (
                <StudentActive
                  searchCriteria={searchCriteria}
                  searchName={searchName}
                  searchMode={searchMode}
                  newestOrOldest={newestOrOldest}
                  filterName={filterName}
                />
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherAndStudent;
