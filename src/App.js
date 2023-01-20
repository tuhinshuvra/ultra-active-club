import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Statistics from './Components/Statistics/Statistics';
import QuizLoader from './Components/QuizLoader/QuizLoader';
import ErrorPage from './Components/ErrorPage/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>, children: [
        {
          path: "/",
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: "/quiz/:quizId",
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizLoader></QuizLoader>
        },
        {
          path: "/statistics",
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        { path: "/blog", element: <Blog></Blog> },
        { path: "/about", element: <About></About> },
      ]
    },
    {
      path: "*", element: <ErrorPage></ErrorPage>
    },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
