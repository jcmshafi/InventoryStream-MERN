

import {Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import CustomerList from "../../components/Customer/CustomerList";
const CustomerListPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <CustomerList/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default CustomerListPage;