import {lazy, Suspense} from 'react';
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const Forgetpass =lazy(() => import('../../components/Users/SendOTP'));
const ForgetpassPage = () => {
    return (
      
            <Suspense fallback={<LazyLoader/>}>
                <Forgetpass/>
            </Suspense>
    );
};

export default ForgetpassPage;