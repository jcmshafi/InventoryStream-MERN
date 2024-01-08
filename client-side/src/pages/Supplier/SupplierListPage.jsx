import {Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import SupplierList from "../../components/Supplier/SupplierList";

const SupplierListPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <SupplierList/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default SupplierListPage;