import { ReactElement, useState } from "react";
import OffcanvasFile from "./OffcanvasFile";
import { IconsType } from "./FileIcons";

export const TableFolder = ({ dataFolder }: { dataFolder: any }): ReactElement => {
  const [offcanvas, setOffcanvas] = useState<{ type: "folder" | "file"; data: any } | null>(null);

  return (
    (dataFolder.length > 0 && Array.isArray(dataFolder)) ? (
      <>
        <div className="mt-3">
          <table className="w-full text-left border-collapse mt-4">
            <thead>
              <tr className="text-gray-600 uppercase border-b border-gray-200">
                <th className="py-2 px-4 text-xs font-semibold" style={{width: "70%"}}>File</th>
                <th className="py-2 px-4 text-xs font-semibold">Size</th>
                <th className="py-2 px-4 text-xs font-semibold">Type</th>
                <th className="py-2 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {
                dataFolder.map((folder, index) => (
                  <tr key={index} className="border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                    onClick={() =>
                      setOffcanvas({ type: "folder", data: folder })
                    }
                  >
                    <td className="py-4 px-4 flex items-center gap-2">
                      <div className="inline-flex items-center gap-2 cursor-pointer group" role="button">
                        <div className="text-3xl">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="40" height="40">
                            <path fill="#FFA000" d="M853.333 256h-384L384 170.667H170.667c-46.934 0-85.334 38.4-85.334 85.333v170.667h853.334v-85.334c0-46.933-38.4-85.333-85.334-85.333z">
                            </path>
                            <path fill="#FFCA28" d="M853.333 256H170.667c-46.934 0-85.334 38.4-85.334 85.333V768c0 46.933 38.4 85.333 85.334 85.333h682.666c46.934 0 85.334-38.4 85.334-85.333V341.333c0-46.933-38.4-85.333-85.334-85.333z">
                            </path>
                          </svg>
                        </div>
                        <div className="font-medium text-gray-800 hover:text-blue-600">
                          {folder.name}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{folder.size}</td>
                    <td className="py-3 px-4 text-gray-600">Folder</td>
                    <td className="py-3 px-4 text-gray-500">
                      <div className="flex justify-end">
                        <div className="dropdown-toggle" role="menuitem" aria-expanded="false" aria-haspopup="menu" id=":rh7:">
                          <button className="button dark:primary-mild dark:bg-opacity-20 hover:text-primary-mild dark:active:primary-mild dark:active:bg-opacity-40 h-8 rounded-full w-8 inline-flex items-center justify-center text-base button-press-feedback">
                            <svg
                              stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                              strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
          {offcanvas && <OffcanvasFile type={offcanvas.type} data={offcanvas.data} onClose={() => setOffcanvas(null)} />}
        </div>
      </>
    ) : (
      <>
        <h1>Not data found</h1>
      </>
    )
  )
};

export const TableFile = ({ dataFile }: { dataFile: any }): ReactElement => {
  return (
    (dataFile.length > 0 && Array.isArray(dataFile)) ? (
      <>
        <div className="mt-3">
          <table className="w-full text-left border-collapse mt-4">
            <thead>
              <tr className="text-gray-600 uppercase border-b border-gray-200">
                <th className="py-2 px-4 text-xs font-semibold" style={{width: "70%"}}>File</th>
                <th className="py-2 px-4 text-xs font-semibold">Size</th>
                <th className="py-2 px-4 text-xs font-semibold">Type</th>
                <th className="py-2 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {
                dataFile.map((file, index) => (
                  <tr key={index} className="border-b border-gray-200 cursor-pointer hover:bg-gray-100">
                    <td className="py-4 px-4 flex items-center gap-2">
                      <div className="inline-flex items-center gap-2 cursor-pointer group" role="button">
                        <div className="text-3xl">
                          {
                            <IconsType fileType={file.name.split('.')[1]} width="40" height="40" />
                          }
                        </div>
                        <div className="font-medium text-gray-800 hover:text-blue-600">
                          {file.name}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{file.size}</td>
                    <td className="py-3 px-4 text-gray-600">{file.type?.toUpperCase()}</td>
                    <td className="py-3 px-4 text-gray-500">
                      <div className="flex justify-end">
                        <div className="dropdown-toggle" role="menuitem" aria-expanded="false" aria-haspopup="menu" id=":rhm:">
                          <button className="button dark:primary-mild dark:bg-opacity-20 hover:text-primary-mild dark:active:primary-mild dark:active:bg-opacity-40 h-8 rounded-full w-8 inline-flex items-center justify-center text-base button-press-feedback"><svg
                            stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                            strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                          </svg></button></div>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </>
    ) : (
      <>
        <h1>Not file found</h1>
      </>
    )
  )
};
