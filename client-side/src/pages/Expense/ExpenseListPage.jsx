import{Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import ExpenseList from "../../components/Expense/ExpenseList";

const ExpenseListPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                        <ExpenseList/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default ExpenseListPage;