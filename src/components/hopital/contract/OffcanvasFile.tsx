import { modalParrentCss } from "./modal.css";
import { IconsType } from "./FileIcons";

interface OffcanvasProps {
  type: "folder" | "file";
  data: {
    name: string;
    size: string;
    created: string;
    lastupdated: string;
    share: Array<{
        img: string;
        work: string;
        fullname: string;
    }>;
  };
  onClose: () => void;
}

export default function OffcanvasFile({ type, data, onClose }: OffcanvasProps) {
  return (
    <div className="fixed inset-0 flex justify-end" style={modalParrentCss}>
      <div className="w-80 bg-white shadow-lg p-5 relative" style={{overflow: "auto"}}>
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 bg-gray-100 hover:bg-gray-200 hover:text-gray-500 rounded-2xl p-1.5">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
        </button>

        {/* Icon */}
        <div className="flex justify-center mt-10 mb-8">
          {type === "folder" ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="120" height="120">
                <path fill="#FFA000" d="M853.333 256h-384L384 170.667H170.667c-46.934 0-85.334 38.4-85.334 85.333v170.667h853.334v-85.334c0-46.933-38.4-85.333-85.334-85.333z">
                </path>
                <path fill="#FFCA28" d="M853.333 256H170.667c-46.934 0-85.334 38.4-85.334 85.333V768c0 46.933 38.4 85.333 85.334 85.333h682.666c46.934 0 85.334-38.4 85.334-85.333V341.333c0-46.933-38.4-85.333-85.334-85.333z">
                </path>
            </svg>
          ) : (
            <IconsType fileType={data.name.split('.')[1]} width="120" height="120" />
          )}
        </div>

        <h2 className="text-2xl text-center font-semibold mb-8">{data.name}</h2>
        <h2 className="text-md font-bold mb-8">Info</h2>

        {/* Info */}
        <div className="mt-4 mb-10">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">
                Size: 
            </span>
            <span className="font-medium">{data.size}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">
                Type: 
            </span>
            <span className="font-medium">{type}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">
                Created: 
            </span>
            <span className="font-medium">{data.created}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">
                Last modified: 
            </span>
            <span className="font-medium">{data.lastupdated}</span>
          </div>
        </div>

        <div className="flex justify-between align-center mb-4">
            <h2 className="text-md font-bold">Shared with</h2>
            <button className="button bg-white border-2 border-gray-300 ring-primary hover:ring-white hover:border-blue-500 hover:text-blue-500 text-gray-500 h-8 rounded-full w-8 inline-flex items-center justify-center text-base button-press-feedback" type="button"
            >
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5l0 14"></path>
                    <path d="M5 12l14 0"></path>
                </svg>
            </button>
          </div>
        <div className="mt-10">
          {
            (data.share && data.share.length > 0) ? 
            <>
                {
                    data.share.map((item, index) => (
                        <div key={index} className="flex mb-2">
                            <img src={item.img} alt={`avatar_${index}`} className="w-10 h-10 rounded-full mr-2 mb-3" />
                            <div className="">
                                <p className="font-semibold text-sm">{item.fullname}</p>
                                <p className="text-gray-500 text-sm">{item.work}</p>
                            </div>
                        </div>
                    ))
                }
            </> : 
            <>
                <p className="text-sm text-gray-300 italic">No body shared</p>
            </>
          }
        </div>
      </div>
    </div>
  );
}
