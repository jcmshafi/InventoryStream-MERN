import { Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import ReturnList from "../../components/Return/ReturnList";

const ReturnListPage = () => {
    return (
       
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ReturnList/>
                </Suspense>
            </MasterLayout>
        
    );
};

export default ReturnListPage;