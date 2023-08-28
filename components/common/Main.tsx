import {
  Modal,
  Sidebar,
  TeacherAndStudent,
  showToastErrorMessage,
} from "@/components";
import { users } from "@/services";
import { Spin } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Main = () => {
  const [individual, setIndividual] = useState([]);

  const [fetchedStudent, setFetchedStudent] = useState([]);

  const [iTab, setTab] = useState("Teacher");
  const [showModal, setshowModal] = useState(false);
  const [replySent, setReplySent] = useState(false);
  const [isFetchingResponse, setIsFetchingResponse] = useState(false);

  const replyHasBeenSent = () => {
    setReplySent(!replySent);
  };

  const router = useRouter();
  const handleTabClick = (e: any) => {
    router.push(`/admin?page=${e.target.textContent.replaceAll(" ", "_")}`);
  };

  const activeTab = router.query?.page || "Dashboard".replaceAll(" ", "_");

  const getApi = async () => {
    setIsFetchingResponse(true);
    try {
      const response = await users.fetchTeachers();

      if (response.status === 200) {
        const response1 = await users.fetchStudents();
        if (response1.status === 200) {
          setIndividual(response.data.data);
          setFetchedStudent(response1.data.data);
        }
      }
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
      showToastErrorMessage(message);
    } finally {
      setIsFetchingResponse(false);
    }
  };
  useEffect(() => {
    getApi();
  }, [replySent]);

  return (
    <>
      {isFetchingResponse && (
        <main className="flex justify-center items-start mx-auto mt-10">
          <Spin size="small" />
        </main>
      )}

      {!isFetchingResponse && (
        <>
          <div className="flex justify-between w-full">
            <Sidebar activeTab={activeTab} handleTabClick={handleTabClick} />

            <div
              className="lg:w-[80%] w-full sm:p-10 p-5 space-y-10"
              style={{
                backgroundColor: "#F7F7F7",
              }}
            >
              <TeacherAndStudent
                setshowModal={setshowModal}
                iTab={iTab}
                setTab={setTab}
                individual={individual}
                setIndividual={setIndividual}
                fetchedStudent={fetchedStudent}
                setFetchedStudent={setFetchedStudent}
              />
            </div>
          </div>

          {showModal && (
            <Modal
              replyHasBeenSent={replyHasBeenSent}
              setshowModal={setshowModal}
              iTab={iTab}
              
            />
          )}
        </>
      )}
    </>
  );
};

export { Main };
