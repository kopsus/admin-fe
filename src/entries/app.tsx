import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from '../feature/_global/components/Loader';
import DefaultLayout from '../feature/_global/DefaultLayout';
import PageTitle from '../feature/_global/PageTitle';
import SignIn from '../feature/authentication/SignIn';
import Dashboard from '../feature/dashboard/views/Dashboard';
import News from '../feature/news/views/News';
import Educations from '../feature/educations/views/Educations';
import Products from '../feature/products/views/Products';
import Users from '../feature/users/views/Users';
import Transactions from '../feature/transactions/view/Transactions';
import NewsDetail from '../feature/news/views/NewsDetail';
import ForgetPassword from '../feature/authentication/ForgetPassword';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/login"
        element={
          <>
            <PageTitle title="Login" />
            <SignIn />
          </>
        }
      />
      <Route
        path="/forget-password"
        element={
          <>
            <PageTitle title="forget-password" />
            <ForgetPassword />
          </>
        }
      />
      <Route
        path="*"
        element={
          <DefaultLayout>
            <Routes>
              <Route
                index
                element={
                  <>
                    <PageTitle title="Dashboard" />
                    <Dashboard />
                  </>
                }
              />
              <Route
                path="/berita"
                element={
                  <>
                    <PageTitle title="Berita" />
                    <News />
                  </>
                }
              />
              <Route
                path="/berita/:id"
                element={
                  <>
                    <PageTitle title="Detail Berita" />
                    <NewsDetail />
                  </>
                }
              />
              <Route
                path="/edukasi"
                element={
                  <>
                    <PageTitle title="Edukasi" />
                    <Educations />
                  </>
                }
              />
              <Route
                path="/produk"
                element={
                  <>
                    <PageTitle title="Produk" />
                    <Products />
                  </>
                }
              />
              <Route
                path="/users"
                element={
                  <>
                    <PageTitle title="Users" />
                    <Users />
                  </>
                }
              />
              <Route
                path="/transaction"
                element={
                  <>
                    <PageTitle title="Transaction" />
                    <Transactions />
                  </>
                }
              />
            </Routes>
          </DefaultLayout>
        }
      />
    </Routes>
  );
}

export default App;
