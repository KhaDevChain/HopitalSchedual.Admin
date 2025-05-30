import { ReactElement, useState } from "react";
import OffcanvasFile from "./OffcanvasFile";
import PopupMenu from "./PopupMenu";
import { IconsType } from "./FileIcons";

/**
 * FAMI: deliver data layout
 * 12.03.2025 by Kha
 * @param data {prop data in root parent component sent}
 */
export const BlockFolder = ({ dataFolder }: { dataFolder: any }): ReactElement => {
  const [offcanvas, setOffcanvas] = useState<{ type: "folder" | "file"; data: any } | null>(null);
  const [activePopup, setActivePopup] = useState<string | null>(null);
  return (
    (dataFolder.length > 0 && Array.isArray(dataFolder)) ? (
      <>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-4 gap-4 lg:gap-6">
          {
            dataFolder.map((folder, index) => (
              <div key={folder.name + index} className="bg-white rounded-2xl dark:bg-gray-800 border border-gray-200 dark:border-transparent py-4 px-3.5 flex items-center justify-between transition-all 
                  hover:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0px_2rem_1.5rem_-1rem_rgba(0,0,0,0.12)] cursor-pointer" role="button">
                <div className="flex items-center " onClick={() => setOffcanvas({ type: "folder", data: folder })}>
                  <div className="text-3xl me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="40" height="40">
                      <path fill="#FFA000" d="M853.333 256h-384L384 170.667H170.667c-46.934 0-85.334 38.4-85.334 85.333v170.667h853.334v-85.334c0-46.933-38.4-85.333-85.334-85.333z"></path>
                      <path fill="#FFCA28" d="M853.333 256H170.667c-46.934 0-85.334 38.4-85.334 85.333V768c0 46.933 38.4 85.333 85.334 85.333h682.666c46.934 0 85.334-38.4 85.334-85.333V341.333c0-46.933-38.4-85.333-85.334-85.333z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold heading-text">{folder.name}</div>
                    <span className="text-xs">{folder.size}</span>
                  </div>
                </div>
                <div className="dropdown-toggle" role="menuitem" aria-expanded="false" aria-haspopup="menu" id=":rk:">
                  <button className="button hover:text-blue-400 duration-1 dark:active:primary-mild dark:active:bg-opacity-40 h-8 
                                        rounded-full w-8 inline-flex items-center justify-center text-base button-press-feedback"
                                        onClick={() => setActivePopup(activePopup === folder.id ? null : folder.id)}
                    >
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    </svg>
                  </button>
                  {activePopup === folder.id && (
                    <PopupMenu
                      data={folder}
                      isOpen={activePopup === folder.id}
                      onClose={() => setActivePopup(null)}
                    />
                  )}
                </div>
              </div>
            ))
          }
        </div>
        {offcanvas && <OffcanvasFile type={offcanvas.type} data={offcanvas.data} onClose={() => setOffcanvas(null)} />}
      </>
    ) : (
      <>
        <h1>Not data found</h1>
      </>
    )
  )
};

export const BlockFile = ({ dataFile }: { dataFile: any }): ReactElement => {
  const [offcanvas, setOffcanvas] = useState<{ type: "folder" | "file"; data: any } | null>(null);
  const [activePopup, setActivePopup] = useState<string | null>(null);
  return (
    (dataFile.length > 0 && Array.isArray(dataFile)) ? (
      <>
        <div className="grid grid-cols-1 text-sm xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-4 gap-4 lg:gap-6">
          {
            dataFile.map((file, index) => (
              <div key={index} className="bg-white rounded-2xl dark:bg-gray-800 border border-gray-200 dark:border-transparent py-4 px-3.5 flex items-center justify-between  transition-all hover:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0px_2rem_1.5rem_-1rem_rgba(0,0,0,0.12)] cursor-pointer" role="button">
                <div className="flex items-center" onClick={() => setOffcanvas({ type: file.name.split('.')[1]||"", data: file })}>
                  <div className="text-3xl me-2">
                    {
                      <IconsType fileType={file.name.split('.')[1]} width="40" height="40" />
                    }
                  </div>
                  <div>
                    <div className="font-bold heading-text truncate">{file.name}</div>
                    <span className="text-xs">{file.size}</span>
                  </div>
                </div>
                <div className="dropdown-toggle" role="menuitem" aria-expanded="false" aria-haspopup="menu" id=":r13:">
                  <button className="button dark:primary-mild dark:bg-opacity-20 hover:text-primary-mild dark:active:primary-mild dark:active:bg-opacity-40 h-8 rounded-full w-8 inline-flex items-center justify-center text-base button-press-feedback"
                          onClick={() => setActivePopup(activePopup === file.id ? null : file.id)}
                  >
                    <svg
                      stroke="currentColor" fill="none"
                      strokeWidth="2" viewBox="0 0 24 24"
                      strokeLinecap="round" strokeLinejoin="round"
                      height="1em" width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    </svg>
                  </button>
                  {activePopup === file.id && (
                    <PopupMenu
                      data={file}
                      isOpen={activePopup === file.id}
                      onClose={() => setActivePopup(null)}
                    />
                  )}
                </div>
              </div>  
            ))
          }        
        </div>
        {offcanvas && <OffcanvasFile type={offcanvas.type} data={offcanvas.data} onClose={() => setOffcanvas(null)} />}
      </>
    ) : (
      <>
        <h1>Not file found</h1>
      </>
    )
  )
};
