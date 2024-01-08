import {Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import SalesList from "../../components/Sales/SalesList";

const SalesListPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                        <SalesList/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default SalesListPage;