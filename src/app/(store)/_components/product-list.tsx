"use client";

import Image from "next/image";
import { useState } from "react";
import Card from "~/components/shared/card-product";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "~/components/ui/tabs";

const ProductList = ({ collection }: { collection: any[] }) => {
    const [active, setActive] = useState(collection[0]);

    return (
        <Tabs
            value={active.title}
            onValueChange={(value) => {
                const selected = collection.find(
                    (item) => item.title === value
                );

                if (selected) {
                    setActive(selected);
                }
            }}
            className="w-full mt-6"
        >
            <TabsList className="w-full max-w-2xl mx-auto p-0 rounded-none bg-transparent gap-0">
                {collection.map((item) => (
                    <TabsTrigger
                        key={item.title}
                        value={item.title}
                        className="relative flex-1 h-full inline-flex items-center justify-center gap-1.5 rounded-none border-0 bg-transparent px-4 py-0.5 whitespace-nowrap text-lg font-medium text-[#222222] shadow-none transition-all cursor-pointer hover:bg-transparent hover:text-[#01693A] focus:bg-transparent focus-visible:bg-transparent data-active:!bg-transparent data-active:!text-[#01693A] data-active:!shadow-none"
                    >
                        <p>{item.title}</p>

                        <Image
                            src="/tree.png"
                            width={32}
                            height={32}
                            alt="tree"
                            className={`absolute -top-8 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out ${active.title === item.title ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
                        />
                    </TabsTrigger>
                ))}
            </TabsList>

            {collection.map((item) => (
                <TabsContent
                    key={item.title}
                    value={item.title}
                    className="mt-6 outline-none grid grid-cols-4 gap-8"
                >
                    {item.product.map((product, id) => (
                        <Card key={id} product={product} />
                    ))}
                </TabsContent>
            ))}
        </Tabs>
    );
};

export default ProductList;