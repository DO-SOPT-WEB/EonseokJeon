import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from '@pages/Error';
import Login from '@pages/Login';
import MyPage from '@pages/MyPage';
import SignUp from '@pages/SignUp';
import GlobalStyle from '@styles/GlobalStyle';

const router = createBrowserRouter([
  { path: '/', element: <Login />, errorElement: <Error /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/mypage/:userId', element: <MyPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}

export default App;
