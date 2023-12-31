import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

// redux
import { Provider } from 'react-redux';
// import store from './redux/store';

import './index.css';
import AddClothPage from './pages/AddClothPage';
import App from './App';

import MainPage from './pages/MainPage';
import AnalysisPage from './pages/AnalysisPage';
import PickPickPage from './pages/PickPickPage';
import ClothesDetailPage from './pages/ClothesDetailPage';
import MyClosetPage from './pages/MyClosetPage';

import MyClosetReport from './pages/MyClosetReportPage';
import ReportColorPage from './pages/ReportColorPage';
import ReportSeasonPage from './pages/ReportSeasonPage';
import ReportCostPage from './pages/ReportCostPage';
import ReportVolumePage from './pages/ReportVolumePage';
import ReportFrequencyPage from './pages/ReportFrequencyPage';
import ReportUsabilityPage from './pages/ReportUsabilityPage';

import MyPage from './pages/MyPage';

import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import LoginRedirectPage from './pages/LoginRedirectPage';
import LogoutRedirectPage from './pages/LogoutRedirectPage';

import CalendarPage from './pages/CalendarPage';
import CalendarPostPage from './pages/CalendarPostPage';

import FrinedListPage from './pages/FriendListPage';
import FriendClosetPage from './pages/FriendClosetPage';
import RecommendedClothesPage from './pages/RecommendedClothesPage'

// import rootReducer from './redux/rootReducer';
import store from './redux/store';
import TutorialPage from './pages/TutorialPage';

import ScrollToTop from './components/common/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          // v6부터 Switch가 Routes로 변경되었음
          <Route element={<App />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/pickpick" element={<PickPickPage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login-redirect" element={<LoginRedirectPage />}></Route>
            <Route path="/logout-redirect" element={<LogoutRedirectPage />}></Route>
            <Route path="/tutorial" element={<TutorialPage />}></Route>
            <Route path="/mycloset" element={<MyClosetPage />} />
            <Route path="/mycloset/detail/:id" element={<ClothesDetailPage />} /> // 라우팅 매칭 다시 해야됨 * 사용하기?
            <Route path="/mycloset/add-cloth" element={<AddClothPage />} />
            <Route path="/mycloset/report" element={<MyClosetReport />} />
            <Route path="/mycloset/report/color" element={<ReportColorPage />} />
            <Route path="/mycloset/report/season" element={<ReportSeasonPage />} />
            <Route path="/mycloset/report/costs" element={<ReportCostPage />} />
            <Route path="/mycloset/report/volume" element={<ReportVolumePage />} />
            <Route path="/mycloset/report/frequency" element={<ReportFrequencyPage />} />
            <Route path="/mycloset/report/usability" element={<ReportUsabilityPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/calendar/post" element={<CalendarPostPage />} />
            <Route path="/notmycloset/friend" element={<FrinedListPage />} />
            <Route path="/notmycloset/friend/:id" element={<FriendClosetPage />} />
            <Route path="/recommended" element={<RecommendedClothesPage />} />
            <Route path="*" element={<ErrorPage />} /> // 404 페이지 추가
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);
