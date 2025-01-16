import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchProducts, selectAllProducts } from "./catalog/catalogSlice";
import ProductList from "./catalog/ProductList";
import { Container } from "@mui/material";

export default function HomePage() {
    const products = useAppSelector(selectAllProducts);
    const { isLoaded } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isLoaded) dispatch(fetchProducts());
    }, [isLoaded]);

    return (
        <Container>
            <Typography variant="h2" sx={{ mb: 4 }}>Hoş Geldiniz</Typography>
            <ProductList products={products} />
        </Container>
    );
}