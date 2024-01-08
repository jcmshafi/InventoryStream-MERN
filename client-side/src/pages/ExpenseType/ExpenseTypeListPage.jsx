import {Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import ExpenseTypeList from "../../components/ExpenseType/ExpenseTypeList";

const ExpenseTypeListPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ExpenseTypeList/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default ExpenseTypeListPage;