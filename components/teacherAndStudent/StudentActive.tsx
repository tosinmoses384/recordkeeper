import { CustomTableLoader } from "@/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type AdminInvestorFilterTypes = {
  searchCriteria: string;
  searchName: string;
  searchMode: string;

  newestOrOldest: string;

  filterName: string;
  fetchedStudent: [];
  setFetchedStudent: any;
};

const StudentActive = ({
  searchCriteria,
  searchName,
  searchMode,
  newestOrOldest,
  filterName,
  fetchedStudent,
  setFetchedStudent,
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
        .map((_, index) => index + 1)
    );
  }

  // DEFAULT
  const getAllStudent = async () => {
    setIsFetching(true);
    try {
      //  const res = await adminService.getAllStudent(pageSize, currentPage);
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
    getAllStudent();
  }, [currentPage, pageSize]);

 

  return (
    <>
      {isFetching ? (
        <div className="mt-10">
          <CustomTableLoader
            tableTop={[
              "Student National ID",
              "Name",
              "Surname",
              "Date of Birth",
              "Student Number",
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
                          Student National ID
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
                          Student Number
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {fetchedStudent &&
                        fetchedStudent.length > 0 &&
                        fetchedStudent.map((item: any, index: number) => {
                          const { id } = item;
                          return (
                            <>
                              {item && (
                                <tr
                                  className="bg-white border-b cursor-pointer"
                                  // key={`${index}-${item?.NationalID}`}
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
                                      {item?.firstname}
                                    </span>
                                  </td>

                                  <td className="px-6 py-4">
                                    <span className="bg-blue-100 p-1">
                                      {item?.surname}
                                    </span>
                                  </td>

                                  <td className="px-6 py-4">{`${
                                    item?.date.split("T")[0].split("-")[2]
                                  }/${item?.date.split("T")[0].split("-")[1]}/${
                                    item?.date.split("T")[0].split("-")[0]
                                  }`}</td>

                                  <td className="px-6 py-4">
                                    {item.studentNumber}
                                  </td>
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

export { StudentActive };
