import { Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import CustomerCreateUpdate from "../../components/Customer/CustomerCreateUpdate";

const CustomerCreateUpdatePage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <CustomerCreateUpdate/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default CustomerCreateUpdatePage;