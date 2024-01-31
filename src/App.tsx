import router from './routes';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { FC } from 'react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
const App: FC = () => {
    return (
        <Provider store={store}>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    );
};
export default App;
