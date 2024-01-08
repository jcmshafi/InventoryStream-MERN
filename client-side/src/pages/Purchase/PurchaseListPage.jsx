import {Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import PurchaseList from "../../components/Purchase/PurchaseList";

const PurchaseListPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <PurchaseList/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default PurchaseListPage;