import App from "@/App";
import { MainLayout } from "@/layouts/MainLayout";
import { ErrorPage } from "@/pages/ErrorPage";
import { Home } from "@/pages/home";
import { ChatRoom } from "@/pages/chat";
import { TalkDrawer } from "@/pages/chat/cloud";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: '/',
              element: <Home />,
            },
            {
              path: '/chat/:id',
              element: <ChatRoom />,
            },
            {
              path: '/chat/:id/cloud',
              element: <TalkDrawer />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL
  }
)