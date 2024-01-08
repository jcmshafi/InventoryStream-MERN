import { Suspense} from 'react';
import MasterLayout from "../../components/MasterLayout/MasterLayout";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
import ProductList from "../../components/Product/ProductList";


const ProductListPage = () => {
    return (
        <dive>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ProductList/>
                </Suspense>
            </MasterLayout>
        </dive>
    );
};
export default ProductListPage;