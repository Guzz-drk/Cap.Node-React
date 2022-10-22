import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import Dashboard from '../containers/Dashboard/dashboard';
import Login from '../containers/Login/login';
const Router = () => {

    const isAutheticated = false;

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    {isAutheticated ? <>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/" element={<Navigate to="/dashboard"/>}/>
                        <Route path="*" element={<Navigate to="/dashboard"/>}/>
                    </> : 
                    <>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/" element={<Navigate to="/login"/>}/>
                        <Route path="*" element={<Navigate to="/login"/>}/>
                    </>}
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
export default Router;