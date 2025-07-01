// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout, PrivateLayout } from './views/Layout';
import { Loader } from 'lucide-react';

// Pages
const SignIn = React.lazy(() => import('./views/Signin'));
const Home = React.lazy(() => import('./views/Home'));
// const People = React.lazy(() => import('./views/People'));
// const PeopleItem = React.lazy(() => import('./components/people/PeopleItem'));
// const ContractList = React.lazy(() => import('./components/people/ContractList'));
const Hopital = React.lazy(() => import('./views/Hopital'));
const HopitalItem = React.lazy(() => import('./components/hopital/HopitalItem'));
const HopitalContractList = React.lazy(() => import('./components/hopital/_HopitalContractList'));
const ClientDetails = React.lazy(() => import('./components/people/PeopleDetails'));
const Product = React.lazy(() => import('./views/Product'));
const ProductItem = React.lazy(() => import('./components/product/ProductItem'));
const Order = React.lazy(() => import('./views/Order'));
const OrderItem = React.lazy(() => import('./components/order/OrderItem'));
const RoleAndPermission = React.lazy(() => import('./views/RoleAndPermission'));
const Employee = React.lazy(() => import('./views/Employee'));
const EmployeeItem = React.lazy(() => import('./components/employee/EmployeeItem'));
const EmployeeDetails = React.lazy(() => import('./components/employee/EmployeeDetails'));
const EmployeeCheck = React.lazy(() => import('./views/CheckinCheckout'));

// Define private routes
const privateRoutes = [
  { path: '/*', element: <Home /> },
  // { path: '/peoples/contact', element: <People /> },
  // { path: '/peoples/contact-edit', element: <PeopleItem /> },
  // { path: '/peoples/contact-create', element: <PeopleItem /> },
  // { path: '/peoples/contract', element: <ContractList /> },
  { path: '/hopital/list', element: <Hopital /> },
  { path: '/hopital/contact-edit/:id', element: <HopitalItem /> },
  { path: '/hopital/contact-create', element: <HopitalItem /> },
  { path: '/hopital/contract', element: <HopitalContractList /> },
  { path: '/clients/client-details', element: <ClientDetails /> },
  { path: '/devices/device-list', element: <Product /> },
  { path: '/devices/device-details/:id', element: <ProductItem /> },
  { path: '/products/product-list', element: <Product /> },
  { path: '/products/product-edit/:id', element: <ProductItem /> },
  { path: '/products/product-create', element: <ProductItem /> },
  { path: '/transactions/transaction-list', element: <Order /> },
  { path: '/transactions/transaction-edit/:id', element: <OrderItem id={''} /> },
  { path: '/permission', element: <RoleAndPermission /> },
  { path: '/employees/employee-list', element: <Employee /> },
  { path: '/employees/employee-edit/1', element: <EmployeeItem id={1} /> },
  { path: '/employees/employee-create', element: <EmployeeItem /> },
  { path: '/employees/employee-details/1', element: <EmployeeDetails /> },
  { path: '/employees/checkin', element: <EmployeeCheck /> },
];

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Public route */}
          <Route
            path="/signin"
            element={
              <Suspense fallback={<Loader className={`animate-spin`} />}>
                <SignIn />
              </Suspense>
            }
          />

          {/* Private routes */}
          {privateRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <PrivateLayout>
                  <Layout children={<Suspense fallback={<Loader className={`animate-spin`} />}>{element}</Suspense>} target={path} />
                </PrivateLayout>
              }
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
