import { CustomTableLoader } from "@/components";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type AdminInvestorFilterTypes = {
  searchCriteria: string;
  searchName: string;
  searchMode: string;

  newestOrOldest: string;

  filterName: string;
  individual: [];
  setIndividual: any;
};

const TeacherActive = ({
  searchCriteria,
  searchName,
  searchMode,
  newestOrOldest,
  filterName,

  individual,
  setIndividual,
}: any) => {
  // This state is for the search only
  const [searchState, setSearchState] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const [orderState, setOrderState] = useState([]);
  const [, setShowPagination] = useState("show-yes");
  const [pageSize] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);
  const [, setTotalRecords] = useState(1);
  const [isFetching, setIsFetching] = useState(true);
  const [isFetching2, setIsFetching2] = useState(true);
  const router = useRouter();
  //  const { messageToast } = useMessageApi();

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
        .map((_, index) => index + 1)
    );
  }

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
      //  messageToast(message, 'error');
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getAdminAllindividualInvestors();
  }, [currentPage, pageSize]);

  return (
    <>
      {isFetching ? (
        <div className="mt-10">
          <CustomTableLoader
            tableTop={[
              "Teacher National ID",
              "Title",
              "First Name",
              "Surname",
              "Date of Birth",
              "Teacher Number",
              "Salary",
            ]}
          />
        </div>
      ) : (
        <>
          {searchCriteria === "default" && (
            <div>
              <div className="mt-10">
                <div className="relative overflow-x-auto shadow-md">
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Teacher National ID
                        </th>

                        <th scope="col" className="px-6 py-3">
                          Title
                        </th>

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
                          Teacher Number
                        </th>

                        <th scope="col" className="px-6 py-3">
                          Salary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {individual &&
                        individual.length > 0 &&
                        individual.map((item: any, index: number) => {
                          return (
                            <>
                              {item && (
                                <tr
                                  className="bg-white border-b cursor-pointer"
                                  // key={`${index}_${item?.NationalID}`}
                                  key={item._id}
                                >
                                  <th
                                    scope="row"
                                    className="px-6 py-4 whitespace-nowrap cursor-pointer"
                                  >
                                    {item?.NationalID}
                                  </th>

                                  <td className="px-6 py-4">
                                    <span className="bg-blue-100 p-1">
                                      {item?.title}
                                    </span>
                                  </td>

                                  <td className="px-6 py-4">
                                    <span className="bg-blue-100 p-1">
                                      {item?.firstname}
                                    </span>
                                  </td>

                                  <td className="px-6 py-4">
                                    <span className="bg-blue-100 p-1">
                                      {item?.surname}
                                    </span>
                                  </td>

                                  <td className="px-6 py-4">{`${
                                    item?.date?.split("T")[0].split("-")[2]
                                  }/${
                                    item?.date?.split("T")[0].split("-")[1]
                                  }/${
                                    item?.date?.split("T")[0].split("-")[0]
                                  }`}</td>

                                  <td className="px-6 py-4">
                                    {item?.teacherNumber}
                                  </td>

                                  <td className="px-6 py-4">{item?.salary}</td>
                                </tr>
                              )}
                            </>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export { TeacherActive };
