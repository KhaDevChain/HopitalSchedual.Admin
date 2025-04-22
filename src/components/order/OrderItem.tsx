import React from 'react';
import { Mail, Phone } from 'lucide-react';

const OrderItem: React.FC<{ id: string }> = (_props: { id: string }) => {
  return (
    <div className="mx-auto px-2">
      <h3 className="font-bold text-2xl mb-4">Transaction #95954</h3>
      <form action="POST" className="flex flex-col lg:flex-row w-full gap-4">
        <div className="w-full lg:w-8/12 rounded-xl flex flex-col border-1 border-gray-300 gap-y-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h4 className="font-bold text-xl mb-6">Details</h4>

              <div className="grid grid-col-1 mb-3">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <h2 className="font-semibold text-lg">{"Date"}</h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-semibold text-lg">3/22/2025</span>
                  </div>
                </div>
              </div>

              
              <div className="grid grid-col-1 mb-3">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <h2 className="font-semibold text-lg">{"Payment method"}</h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-semibold text-lg">NFC</span>
                  </div>
                </div>
              </div>

              
              <div className="grid grid-col-1 mb-3">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <h2 className="font-semibold text-lg">{"Payment amount"}</h2>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-semibold text-lg">$ {Number(234).toFixed(2)}</span>
                  </div>
                </div>
              </div>

          </div>
        </div>
        <div className="w-full lg:w-4/12 rounded-xl flex flex-col border-1 border-gray-300 gap-y-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <div className="space-y-6">
              <div className="rounded-2xl">
                <h2 className="font-bold text-lg mb-4">Customer</h2>
                <div className="flex items-center mb-4">
                  <img
                    src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg"
                    alt={"name"}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{"name"}</h3>
                    <p className="text-gray-500">{"11"} previous orders</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-500">
                    <Mail className="material-icons mr-2" />
                    <span>{"handsome-obrien@hotmail.com"}</span>
                  </p>
                  <p className="flex items-center text-gray-500">
                    <Phone className="material-icons mr-2" />
                    <span>{"+1 (541) 754-3010"}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form >
    </div >
  );
};

export default OrderItem;