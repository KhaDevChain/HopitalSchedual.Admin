import { useEffect, useState } from "react";
import ContractItem from "./_HopitalContractItem";
import { BlockFile } from "./contract/BlockLayout";
import { TableFile } from "./contract/TableLayout";
import { ButtonSolid } from "../commons/ListButton";
import { Plus } from "lucide-react";

export default function HopitalContractList() {
  /**
   * FAMI: init variables on React Hook
   */
  const [layoutActivate, setHandleLayoutActive] = useState(
    localStorage.getItem("layoutActivate") || "grid"
  );

  const [fileData, setFileData] = useState<{ name: string; size: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  /**
   * FAMI: handle activate layout
   * 12.03.2025 by Kha
   */
  const handleLayoutActive = (layoutType:string) => {
    localStorage.setItem("layoutActivate", layoutType);
    setHandleLayoutActive(layoutType || "grid");
  };

  /**
   * FAMI: handle activate layout
   * 12.03.2025 by Kha
   */
  useEffect(() => {
    // Have to call API endpoints here
    // const folderList = [
    //   { id: 1, name: "Project_Files", size: "21.8 MB", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", 
    //     share: [
    //       {img: "https://ecme-react.themenate.net/img/avatars/thumb-12.jpg", work: "editor", fullname: "Miriam Herrera"},
    //       {img: "https://ecme-react.themenate.net/img/avatars/thumb-15.jpg", work: "owner", fullname: "Cassandra Murray"},
    //       {img: "https://ecme-react.themenate.net/img/avatars/thumb-12.jpg", work: "editor", fullname: "Miriam Herrera"},
    //       {img: "https://ecme-react.themenate.net/img/avatars/thumb-15.jpg", work: "owner", fullname: "Cassandra Murray"},
    //       {img: "https://ecme-react.themenate.net/img/avatars/thumb-12.jpg", work: "editor", fullname: "Miriam Herrera"},
    //       {img: "https://ecme-react.themenate.net/img/avatars/thumb-15.jpg", work: "owner", fullname: "Cassandra Murray"},
    //     ] 
    //   },
    //   { id: 2, name: "Documents", size: "10.5 MB", created: "Feb 21, 2025", lastupdated: "Feb 22, 2024", share: [] },
    //   { id: 3, name: "Team_Resources", size: "783.1 kB", created: "Feb 10, 2025", lastupdated: "Feb 22, 2023", share: [] },
    //   { id: 4, name: "Client_Data", size: "5.4 MB", created: "Feb 05, 2025", lastupdated: "Feb 22, 2022", share: [] },
    //   { id: 5, name: "Backup_Files", size: "2.5 MB", created: "Feb 19, 2025", lastupdated: "Feb 22, 2021", share: [] }
    // ];

    // setFolderData(folderList);

    // Have to call API endpoints here
    const fileList = [
      { id:1, name: "Tech design.pdf", size: "2.2 MB", type: "pdf", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", 
        share: [
          {img: "https://ecme-react.themenate.net/img/avatars/thumb-12.jpg", work: "reader", fullname: "Camila Simmmons"},
          {img: "https://ecme-react.themenate.net/img/avatars/thumb-8.jpg", work: "editor", fullname: "Earl Miles"},
          {img: "https://ecme-react.themenate.net/img/avatars/thumb-15.jpg", work: "owner", fullname: "Eugene Stewartn"},
        ] 
      },
      { id:2,  name: "Financial_Report.xlsx", size: "1.5 MB", type: "xlsx", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] },
      { id:3,  name: "Modern_Laputa.jpg", size: "139.2 kB", type: "jpg", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] },
      { id:4,  name: "Project_Presentation.pptx", size: "3.1 MB", type: "pptx", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] },
      { id:5,  name: "Network_Diagram.fig", size: "123.5 kB", type: "fig", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] },
      { id:6,  name: "Project_Summary.docx", size: "987.7 kB", type: "docx", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] },
      { id:7,  name: "Gradient_store.jpg", size: "157.9 kB", type: "jpg", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] },
      { id:8,  name: "Colorful_donut.jpg", size: "216.8 kB", type: "jpg", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] },
      { id:9,  name: "Annual_Report.pdf", size: "1.7 MB", type: "pdf", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] },
      { id:10, name: "Research_Paper.docx", size: "987.7 kB", type: "docx", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] },
      { id:11, name: "Budget_Report.pdf", size: "1.7 MB", type: "pdf", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] },
      { id:12, name: "Marketing_Strategy.pptx", size: "2.2 MB", type: "pptx", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] },
      { id:13, name: "Architecture_Diagram.fig", size: "456.8 kB", type: "fig", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] },
      { id:14, name: "Lone_bear.jpg", size: "458.8 kB", type: "jpg", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] },
      { id:15, name: "Meeting_Minutes.docx", size: "789.2 kB", type: "docx", created: "Feb 22, 2025", lastupdated: "Feb 22, 2025", share: [] }
    ];

    setFileData(fileList);

  }, []);

  return (
    <div className="app-layout-collapsible-side flex flex-auto flex-col">
      <div className="flex flex-auto min-w-0">
        <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
          <div className="h-full flex flex-auto flex-col">
            <div className="h-full flex flex-auto flex-col justify-between bg-white dark:bg-gray-900">
              <main className="h-full">
                <div
                  className="page-container relative h-full flex flex-auto flex-col px-4 sm:px-6 py-4 sm:py-6 md:px-8 container mx-auto">
                  <div className="container mx-auto h-full">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold">Contracts</h3>
                        </div>
                        <div className="flex items-center ">
                            {/* Toggle Layout */}
                            <div className="segment bg-gray-100 dark:bg-gray-700 rounded-xl">
                              <button className={`segment-item h-10 py-2 text-xl px-3 rounded-xl m-1 
                                ${layoutActivate === "grid" ? "segment-item-active bg-white shadow rounded-xl text-gray-700" : "text-gray-500 hover:text-gray-700"}`} 
                                onClick={() => handleLayoutActive("grid")}>
                                  <svg
                                      stroke="currentColor" fill="none" strokeWidth="2"
                                      viewBox="0 0 24 24" strokeLinecap="round"
                                      strokeLinejoin="round" height="1em" width="1em"
                                      xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                    <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                    <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                    <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                  </svg>
                              </button>
                              <button className={`segment-item h-10 py-2 text-xl px-3 rounded-xl m-1 
                                ${layoutActivate === "list" ? "segment-item-active bg-white shadow text-gray-700" : "text-gray-500 hover:text-gray-700"}`} 
                                onClick={() => handleLayoutActive("list")}>
                                  <svg
                                      stroke="currentColor" fill="none" strokeWidth="2"
                                      viewBox="0 0 24 24" strokeLinecap="round"
                                      strokeLinejoin="round" height="1em" width="1em"
                                      xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6l11 0"></path>
                                    <path d="M9 12l11 0"></path>
                                    <path d="M9 18l11 0"></path>
                                    <path d="M5 6l0 .01"></path>
                                    <path d="M5 12l0 .01"></path>
                                    <path d="M5 18l0 .01"></path>
                                  </svg>
                              </button>
                          </div>
                          <ButtonSolid name={"New Contract"} icon={<Plus />} onClick={() => setIsModalOpen(true)}/>
                          <ContractItem isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                        </div>
                      </div>
                      <div className="mt-6">
                        <div>
                          {/* <div>
                            <h4 className="text-xl font-bold">Folders</h4>
                            {
                              layoutActivate === "grid" ? <BlockFolder dataFolder={folderData}/> : <TableFolder dataFolder={folderData}/>
                            }
                          </div> */}
                          <div className="mt-8">
                            {
                              layoutActivate === "grid" ? <BlockFile dataFile={fileData}/> : <TableFile dataFile={fileData}/>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div >
      </div >
    </div >
  );
}
