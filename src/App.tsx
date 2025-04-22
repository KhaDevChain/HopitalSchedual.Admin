import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './views/Layout';
import RoleAndPermission from './views/RoleAndPermission';
import ClientDetails from './components/people/PeopleDetails';
import ProductItem from './components/product/ProductItem';
import Home from './views/Home';
import PeopleItem from './components/people/PeopleItem';
import ContractList from './components/people/ContractList';

const SignIn = React.lazy(() => import('./views/Signin'));
// customer
const People = React.lazy(() => import('./views/People'));
// product
const Product = React.lazy(() => import('./views/Product'));
const ProuctItem = React.lazy(() => import('./components/product/ProductItem'));
// order
const Order = React.lazy(() => import('./views/Order'));
const OrderItem = React.lazy(() => import('./components/order/OrderItem'));

// file manager
// employee
const Employee = React.lazy(() => import('./views/Employee'));
const EmployeeItem = React.lazy(() => import('./components/employee/EmployeeItem'));
const EmployeeDetails = React.lazy(() => import('./components/employee/EmployeeDetails'));
const EmployeeCheck = React.lazy(() => import('./views/CheckinCheckout'));

const pageList = [
  {
    path: "/*",
    element: <Layout children={<Home />} target={'/'}></Layout>
  },
  {
    path: "/signin",
    element: <Suspense fallback={<></>}><SignIn /></Suspense>
  },
  // People & Contact
  {
    path: "/peoples/contact",
    element: <Layout children={<People />} target={'/peoples/contact'}></Layout>
  },
  {
    path: "/peoples/contact-edit",
    element: <Layout children={<PeopleItem />} target={'/peoples/contact-edit'}></Layout>
  },
  {
    path: "/peoples/contact-create",
    element: <Layout children={<PeopleItem />} target={'/peoples/contact-create'}></Layout>
  },
  {
    path: "/peoples/contract",
    element: <Layout children={<ContractList />} target={'/peoples/contract'}></Layout>
  },
  {
    path: "/clients/client-details",
    element: <Layout children={<ClientDetails />} target={'/client-details'}></Layout>
  },
  // Device
  {
    path: "/devices/device-list",
    element: <Layout children={<Product />} target={'/device-list'}></Layout>
  },
  {
    path: "/devices/device-details/:id",
    element: <Layout children={<ProductItem />} target={'/device-details/:id'}></Layout>
  },
  // product
  {
    path: "/products/product-list",
    element: <Layout children={<Product />} target={'/product-list'}></Layout>
  },
  {
    path: "/products/product-edit/:id",
    element: <Layout children={<ProuctItem />} target={'/product-edit/:id'}></Layout>
  },
  {
    path: "/products/product-create",
    element: <Layout children={<ProuctItem />} target={'/product-create'}></Layout>
  },
  // order/ transaction
  {
    path: "/transactions/transaction-list",
    element: <Layout children={<Order />} target={'/order-list'}></Layout>
  },
  {
    path: "/transactions/transaction-edit/:id",
    element: <Layout children={<OrderItem id={''} />} target={'/order-edit/:id'}></Layout>
  },
  // permission
  {
    path: "/permission",
    element: <Layout children={<RoleAndPermission />} target={'/'}></Layout>
  },
  // employee
  {
    path: "/employees/employee-list",
    element: <Layout children={<Employee />} target={'/empoyee'}></Layout>
  },
  {
    path: "/employees/employee-edit/1",
    element: <Layout children={<EmployeeItem id={1} />} target={'/empoyee-details/:id'}></Layout>
  },
  {
    path: "/employees/employee-create",
    element: <Layout children={<EmployeeItem />} target={'/empoyee-create'}></Layout>
  },
  {
    path: "/employees/employee-details/1",
    element: <Layout children={<EmployeeDetails />} target={'/empoyee-details/:id'}></Layout>
  },
  {
    path: "/employees/checkin",
    element: <Layout children={<EmployeeCheck />} target={'/empoyee'}></Layout>
  }
]


const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {pageList.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App