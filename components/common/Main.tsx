import { Modal, Sidebar, TeacherAndStudent } from "@/components";
import { useRouter } from "next/router";
import { useState } from "react";

const Main = () => {
  const [individual, setIndividual] = useState([
    {
      _id: "1",
      NationalID: "1692869557",
      title: "Mr.",
      firstname: "Six Bears Running",
      surname: "mellow pop, enhanced with  iconic costumes",
      date: "2023-08-17T09:30:09.988Z",
      teacherNumber: "mellow pop, enhanced with  iconic costumes",
      salary: "mellow pop, enhanced with  iconic costumes",
    },
    {
      _id: "2",
      NationalID: "1692869557",
      title: "Mr.",
      firstname: "Six Bears Running",
      surname: "mellow pop, enhanced with  iconic costumes",
      date: "2023-08-17T09:30:09.988Z",
      teacherNumber: "mellow pop, enhanced with  iconic costumes",
      salary: "mellow pop, enhanced with  iconic costumes",
    },
    {
      _id: "3",
      NationalID: "1692869557",
      title: "Mr.",
      firstname: "Six Bears Running",
      surname: "mellow pop, enhanced with  iconic costumes",
      date: "2023-08-17T09:30:09.988Z",
      teacherNumber: "mellow pop, enhanced with  iconic costumes",
      salary: "mellow pop, enhanced with  iconic costumes",
    },
    {
      _id: "4",
      NationalID: "1692869557",
      title: "Mr.",
      firstname: "Six Bears Running",
      surname: "mellow pop, enhanced with  iconic costumes",
      date: "2023-08-17T09:30:09.988Z",
      teacherNumber: "mellow pop, enhanced with  iconic costumes",
      salary: "mellow pop, enhanced with  iconic costumes",
    },
    {
      _id: "5",
      NationalID: "1692869557",
      title: "Mr.",
      firstname: "Six Bears Running",
      surname: "mellow pop, enhanced with  iconic costumes",
      date: "2023-08-17T09:30:09.988Z",
      teacherNumber: "mellow pop, enhanced with  iconic costumes",
      salary: "mellow pop, enhanced with  iconic costumes",
    },
  ]);
  const [fetchedStudent, setFetchedStudent] = useState([
    {
      _id: "1",
      NationalID: "1692869557",
      // "title": "Mr.",
      firstname: "Six Bears Running",
      surname: "mellow pop, enhanced with  iconic costumes",
      date: "2023-08-17T09:30:09.988Z",
      studentNumber: "mellow pop, enhanced with  iconic costumes",
      // "salary": "mellow pop, enhanced with  iconic costumes",
    },
    {
      _id: "2",
      NationalID: "1692869557",
      // "title": "Mr.",
      firstname: "Six Bears Running",
      surname: "mellow pop, enhanced with  iconic costumes",
      date: "2023-08-17T09:30:09.988Z",
      studentNumber: "mellow pop, enhanced with  iconic costumes",
      // "salary": "mellow pop, enhanced with  iconic costumes",
    },
    {
      _id: "3",
      NationalID: "1692869557",
      // "title": "Mr.",
      firstname: "Six Bears Running",
      surname: "mellow pop, enhanced with  iconic costumes",
      date: "2023-08-17T09:30:09.988Z",
      studentNumber: "mellow pop, enhanced with  iconic costumes",
      // "salary": "mellow pop, enhanced with  iconic costumes",
    },
    {
      _id: "4",
      NationalID: "1692869557",
      // "title": "Mr.",
      firstname: "Six Bears Running",
      surname: "mellow pop, enhanced with  iconic costumes",
      date: "2023-08-17T09:30:09.988Z",
      studentNumber: "mellow pop, enhanced with  iconic costumes",
      // "salary": "mellow pop, enhanced with  iconic costumes",
    },
    {
      _id: "5",
      NationalID: "1692869557",
      // "title": "Mr.",
      firstname: "Six Bears Running",
      surname: "mellow pop, enhanced with  iconic costumes",
      date: "2023-08-17T09:30:09.988Z",
      studentNumber: "mellow pop, enhanced with  iconic costumes",
      // "salary": "mellow pop, enhanced with  iconic costumes",
    },
  ]);






  const [iTab, setTab] = useState("Teacher");
  const [showModal, setshowModal] = useState(false);
  const [replySent, setReplySent] = useState(false);

  const replyHasBeenSent = () => {
    setReplySent(!replySent);
  };

  const router = useRouter();
  const handleTabClick = (e: any) => {
    router.push(`/admin?page=${e.target.textContent.replaceAll(" ", "_")}`);
  };

  const activeTab = router.query?.page || "Dashboard".replaceAll(" ", "_");

  return (
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
          individual={individual}
            setIndividual={setIndividual}
            fetchedStudent={fetchedStudent}
            setFetchedStudent={setFetchedStudent}
        />
      )}
    </>
  );
};

export { Main };
