// import React from 'react'
// import PaginationComponent from '@components/elements/Admin/PaginationComponent';
import { CustomTableLoader } from '@/components';
// import { useMessageApi } from '@hooks/useMessageApi';
// import { EmptyRaiseExplore } from '@modules/raise/Detail/EmptyRaise';
// import { adminService } from '@services/admin/index';
// import { Skeleton } from 'antd';
// import { AdminInvestorFilterTypes } from 'kudade/types/admininvestorbusiness';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

export interface IDT {
  createdAt: string;
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
  date: string;
  companyEmail: string;
  companyWebsite: string;
  companyLogo: string;
}

export type AdminInvestorFilterTypes = {
  searchCriteria: string;
  searchName: string;
  searchMode: string;

  newestOrOldest: string;

  filterName: string;
};


const StudentActive: FC<AdminInvestorFilterTypes> = ({
  searchCriteria,
  searchName,
  searchMode,
  newestOrOldest,
  filterName,
}) => {
   // This state is for the search only
   const [searchState, setSearchState] = useState([]);
   const [filterState, setFilterState] = useState([]);
   const [orderState, setOrderState] = useState([]);
   const [, setShowPagination] = useState('show-yes');
   const [pageSize] = useState(30);
   const [currentPage, setCurrentPage] = useState(1);
   const [, setTotalRecords] = useState(1);
   const [isFetching, setIsFetching] = useState(true);
   const [isFetching2, setIsFetching2] = useState(true);
   const router = useRouter();
  //  const { messageToast } = useMessageApi();
   const [individual, setIndividual] = useState([]);
 
   const sortA = (a: any, b: any) => {
     const c = a.createdAt;
     const d = b.createdAt;
     return new Date(c).getTime() - new Date(d).getTime();
   };
 
   const sortD = (a: any, b: any) => {
     const c = a.createdAt;
     const d = b.createdAt;
     return new Date(d).getTime() - new Date(c).getTime();
   };
 
   const [totalPages, setTotalPages] = useState<number[]>([]);
 
   function createArray(num: number) {
     setTotalPages(
       Array(num)
         .fill(null)
         .map((_, index) => index + 1),
     );
   }
 
   // ORDER
   const getAdminIndividualOrder = async () => {
     setIsFetching2(true);
     try {
      //  const res = await adminService.getAdminIndividualOrder(pageSize, currentPage, filterName);
      //  if (res.data.data.results.length === 0) {
      //    setShowPagination('show-no');
      //  } else {
      //    setShowPagination('show-yes');
      //  }
 
      //  createArray(res?.data?.data?.totalPages); // I just added this
 
      //  setTotalRecords(res.data.data.totalResults);
      //  if (newestOrOldest === 'newestFirst') {
      //    const sortedResult = res.data.data.results.sort(sortD);
      //    setOrderState(sortedResult);
      //  } else {
      //    const sortedResult = res.data.data.results.sort(sortA);
      //    setOrderState(sortedResult);
      //  }
     } catch (error: any) {
       setIsFetching2(false);
       let message = '';
       if (error?.response) {
         message = error.response?.data?.message ?? error.response?.data?.error[0].message;
       } else if (error?.message) {
         message = error.message;
       } else {
         message = 'Oops! Something went wrong.';
       }
      //  messageToast(message, 'error');
     } finally {
       setIsFetching2(false);
     }
   };
 
   // SEARCH
   const getAdminIndividualSearch = async () => {
     setIsFetching2(true);
     try {
      //  const res = await adminService.getAdminIndividualSearch(pageSize, currentPage, searchName);
 
      //  if (res.data.data.results.length === 0) {
      //    setShowPagination('show-no');
      //  } else {
      //    setShowPagination('show-yes');
      //  }
 
      //  createArray(res?.data?.data?.totalPages); // I just added this
 
      //  setTotalRecords(res.data.data.totalResults);
      //  setSearchState(res.data.data.results);
     } catch (error: any) {
       setIsFetching2(false);
       let message = '';
       if (error?.response) {
         message = error.response?.data?.message ?? error.response?.data?.error[0].message;
       } else if (error?.message) {
         message = error.message;
       } else {
         message = 'Oops! Something went wrong.';
       }
      //  messageToast(message, 'error');
     } finally {
       setIsFetching2(false);
     }
   };
 
   // FILTER
   const getAdminIndividualFilter = async () => {
     setIsFetching2(true);
     try {
      //  const res = await adminService.getAdminIndividualFilter(pageSize, currentPage, filterName);
 
      //  if (res.data.data.results.length === 0) {
      //    setShowPagination('show-no');
      //  } else {
      //    setShowPagination('show-yes');
      //  }
 
      //  createArray(res?.data?.data?.totalPages); // I just added this
 
      //  setTotalRecords(res.data.data.totalResults);
      //  setFilterState(res.data.data.results);
     } catch (error: any) {
       setIsFetching2(false);
       let message = '';
       if (error?.response) {
         message = error.response?.data?.message ?? error.response?.data?.error[0].message;
       } else if (error?.message) {
         message = error.message;
       } else {
         message = 'Oops! Something went wrong.';
       }
      //  messageToast(message, 'error');
     } finally {
       setIsFetching2(false);
     }
   };
 
   // DEFAULT
   const getAdminAllindividualInvestors = async () => {
     setIsFetching(true);
     try {
      //  const res = await adminService.getAdminAllindividualInvestors(pageSize, currentPage);
 
      //  if (res.data.data.results.length === 0) {
      //    setShowPagination('show-no');
      //  } else {
      //    setShowPagination('show-yes');
      //  }
 
      //  createArray(res?.data?.data?.totalPages); // I just added this
 
      //  setTotalRecords(res.data.data.totalResults);
      //  setIndividual(res.data.data.results);
     } catch (error: any) {
       setIsFetching(false);
       let message = '';
       if (error?.response) {
         message = error.response?.data?.message ?? error.response?.data?.error[0].message;
       } else if (error?.message) {
         message = error.message;
       } else {
         message = 'Oops! Something went wrong.';
       }
      //  messageToast(message, 'error');
     } finally {
       setIsFetching(false);
     }
   };
 
   useEffect(() => {
     getAdminAllindividualInvestors();
     getAdminIndividualSearch();
     getAdminIndividualFilter();
     getAdminIndividualOrder();
   }, [currentPage, pageSize]);
 
   useEffect(() => {
     getAdminIndividualSearch();
     getAdminIndividualFilter();
     getAdminIndividualOrder();
   }, [searchName, filterName]);
 
  return (
    <>
    {isFetching ? (
      <div className="mt-10">
        <CustomTableLoader
          tableTop={['Student National ID', 'Name', 'Surname', 'Date of Birth', 'Student Number']}
        />
      </div>
    ) : (
      <>

        {searchCriteria === 'default' && (
          <div>
            <div className="mt-10">
              <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Student National ID
                      </th>

                      {/* <th scope="col" className="px-6 py-3">
                        Title
                      </th> */}

                      <th scope="col" className="px-6 py-3">
                        First Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Surname
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date of Birth
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Student Number
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {individual
                      && individual.length > 0
                      && individual.map((item: IDT, index: number) => {
                        const { id } = item;
                        return (
                          <>
                            {item.bvn && (
                              <tr
                                onClick={() => router.push(`/admin/${id}/investordetails`)}
                                className="bg-white border-b cursor-pointer"
                                key={`${index}-investorID`}
                              >
                                <th
                                  scope="row"
                                  className="px-6 py-4 whitespace-nowrap cursor-pointer"
                                >
                                  {item.bvn.number}
                                </th>

                                {/* <td className="px-6 py-4">
                                  <span className="bg-blue-100 p-1">{item.bvn.fullName}</span>
                                </td> */}

                                <td className="px-6 py-4">{item?.address}</td>

                                <td className="px-6 py-4">{`${
                                  item?.createdAt.split('T')[0].split('-')[2]
                                }/${item?.createdAt.split('T')[0].split('-')[1]}/${
                                  item?.createdAt.split('T')[0].split('-')[0]
                                }`}</td>

                                <td className="px-6 py-4">{item.amountInvested}</td>
                                <td className="px-6 py-4">{item.investmentCount}</td>
                              </tr>
                            )}
                          </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>

            {totalPages.length >= 1 && (
              <div className="flex justify-between mt-10 mb-8">
                <div></div>
                {/* <PaginationComponent
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  totalPages={totalPages}
                /> */}
              </div>
            )}
          </div>
        )}

       

      </>
    )}
  </>
  )
}

export default StudentActive