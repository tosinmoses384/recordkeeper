import { useRouter } from 'next/router';
import { useState } from 'react';
import { TeacherAndStudent, Sidebar, Modal } from '@/components';


const Main = () => {
  const [iTab, setTab] = useState("Teacher");
    const [showModal, setshowModal] = useState(false);
    const [replySent, setReplySent] = useState(false);

    const replyHasBeenSent = () => {
      setReplySent(!replySent);
    };

    const router = useRouter();
  const handleTabClick = (e: any) => {
    router.push(`/admin?page=${e.target.textContent.replaceAll(' ', '_')}`);
  };

  const activeTab = router.query?.page || 'Dashboard'.replaceAll(' ', '_');


  return (
    <>
      <div 
   
    className="flex justify-between w-full"
    >
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
  
  )
}

export default Main