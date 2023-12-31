import { Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import CategoryList from "../../components/Category/CategoryList";

const CategoryListPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                        <CategoryList/>
                </Suspense>
            </MasterLayout>
        </div>
    );
};

export default CategoryListPage;