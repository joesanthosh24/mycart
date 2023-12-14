export type PageProps = {
    title: string;
    children: React.ReactNode;
};

export type ProductCardProps = {
    name: string;
    price: number;
    imageUrl?: string;
};

export type Product = {
    name: string;
    price: number;
};
