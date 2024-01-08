import { Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import ReturnCreateUpdate from "../../components/Return/ReturnCreateUpdate";

const ReturnCreateUpdatePage = () => {
    return (
        
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ReturnCreateUpdate/>
                </Suspense>
            </MasterLayout>
    
    );
};

export default ReturnCreateUpdatePage;