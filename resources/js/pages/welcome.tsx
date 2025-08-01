import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome({ products }: { products: any }) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="hidden h-14.5 lg:block">
                    {products.map((product: any) => (
                        <p key={product.id}>{product.name}</p>
                    ))}
                </div>
            </div>
        </>
    );
}
