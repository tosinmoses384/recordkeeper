import { Modal, Sidebar, TeacherAndStudent } from "@/components";
import { useRouter } from "next/router";
import { useState } from "react";

const Main = () => {
  const [individual, setIndividual] = useState([
    {
      _id: "1",
      NationalID: "1692869743557",
      title: "Mr.",
      firstname: "Abigael",
      surname: "Lebanon",
      date: "1987-08-17T09:30:09.988Z",
      teacherNumber: "3727372838",
      salary: "N280000",
    },
    {
      _id: "2",
      NationalID: "16928182869557",
      title: "Mr.",
      firstname: "Nurudeen",
      surname: "Afolabi",
      date: "1987-08-17T09:30:09.988Z",
      teacherNumber: "3737181381",
      salary: "N300000",
    },
    {
      _id: "3",
      NationalID: "16928699293557",
      title: "Mr.",
      firstname: "Gaga",
      surname: "Isaac",
      date: "1988-08-17T09:30:09.988Z",
      teacherNumber: "278281813",
      salary: "N350000",
    },
    {
      _id: "4",
      NationalID: "1692819369557",
      title: "Mr.",
      firstname: "Stephen",
      surname: "Oriade",
      date: "1989-08-17T09:30:09.988Z",
      teacherNumber: "91817373",
      salary: "N300000",
    },
    {
      _id: "5",
      NationalID: "1692860839557",
      title: "Mr.",
      firstname: "Thompson",
      surname: "Ogoni",
      date: "1985-08-17T09:30:09.988Z",
      teacherNumber: "38282823737",
      salary: "N150000",
    },
  ]);

  const [fetchedStudent, setFetchedStudent] = useState([
    {
      _id: "999",
      NationalID: "169286938291557",
      firstname: "John",
      surname: "Ude",
      date: "2005-08-17T09:30:09.988Z",
      studentNumber: "98738772",
    },
    {
      _id: "998",
      NationalID: "16928610399557",
      firstname: "Claron",
      surname: "Mary",
      date: "2004-08-17T09:30:09.988Z",
      studentNumber: "3736288222",
    },
    {
      _id: "997",
      NationalID: "16928698374557",
      firstname: "Magaret",
      surname: "Olufande",
      date: "2006-08-17T09:30:09.988Z",
      studentNumber: "3732811919",
    },
    {
      _id: "996",
      NationalID: "16928695591847",
      firstname: "Rebon",
      surname: "Uzziah",
      date: "2007-08-17T09:30:09.988Z",
      studentNumber: "19192998383",
    },
    {
      _id: "995",
      NationalID: "1692869173843557",
      firstname: "Alibaba",
      surname: "Bamaba",
      date: "2009-08-17T09:30:09.988Z",
      studentNumber: "8838727474747377",
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
