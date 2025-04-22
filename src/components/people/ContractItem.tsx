import { modalParrentCss } from "./contract/modal.css";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
const ContractItem = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <>
      {isOpen && (
        <div className="flex backdrop-blur-lg bg-opacity-50 flex items-center justify-center" style={modalParrentCss}>
            <form action="POST" className="flex flex-col lg:flex-row w-[800px]">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 bg-gray-100 hover:bg-gray-200 hover:text-gray-500 rounded-2xl p-1.5"> 
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </button>
                <div className="w-full rounded-xl flex flex-col border-1 border-gray-300">
                    <div className="bg-white p-5 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-xl mb-6">Create New Contract</h4>
                        <div style={{maxHeight: "400px", overflowY: "auto"}}>
                          <div className="grid w-full items-center gap-1.5 mb-7">
                              <Label htmlFor="contactId">Contact ID</Label>
                              <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="contactId" placeholder="Contact ID" />
                          </div>
                          <div className="grid w-full items-center gap-1.5 mb-7">
                              <Label htmlFor="contractNumber">Contract Number</Label>
                              <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="text" id="contractNumber" placeholder="Contract Number" />
                          </div>
                          <div className="grid w-full items-center gap-1.5 mb-7">
                              <Label htmlFor="station">Station</Label>
                              <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="email" id="station" placeholder="Station" />
                          </div>
                          <div className="grid w-full items-center gap-1.5 mb-7">
                              <Label htmlFor="date">Date</Label>
                              <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="date" id="date" />
                          </div>
                          <div className="grid w-full items-center gap-3">
                              <Label htmlFor="payment">Payment Method</Label>
                              <div className="flex flex-col lg:flex-row gap-4">
                                  <Select>
                                      <SelectTrigger className="h-12 sm:w-full rounded-xl bg-gray-100 border focus-visible:ring-blue-500 focus:border-blue-500">
                                          <SelectValue placeholder="Cash" />
                                      </SelectTrigger>
                                      <SelectContent>
                                          <SelectItem value="light">Cash</SelectItem>
                                          <SelectItem value="dark">Coin</SelectItem>
                                          <SelectItem value="dark">NFC</SelectItem>
                                      </SelectContent>
                                  </Select>
                              </div>
                          </div>
                          <div className="grid w-full items-center gap-4 mt-8">
                              <Label htmlFor="payment">Attached document</Label>
                              <div className="flex flex-col lg:flex-row gap-4">
                                <Input className="bg-gray-100 h-12 rounded-xl border focus-visible:ring-blue-500 focus:border-blue-500" type="file" id="date" />
                              </div>
                          </div>
                        </div>
                        <div className="flex justify-end pt-4">
                            <Button className="h-12 rounded-xl px-4 bg-blue-500 text-white border-2 border-blue-500 shadow-none hover:bg-blue-400">Save</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
      )}
    </>
  );
};

export default ContractItem;
