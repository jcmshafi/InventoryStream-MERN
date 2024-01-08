import {Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import BrandList from "../../components/Brand/BrandList";
const BrandListPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                        <BrandList/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};
export default BrandListPage;