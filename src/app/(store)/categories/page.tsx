import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "~/components/ui/breadcrumb";

const CategoriesPage = () => {
    return (
        <>
            {/* BreadCrumb */}
            <Breadcrumb className="w-full max-w-7xl mx-auto py-4">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink render={<a href="/" />}>Trang chủ</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Danh mục</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="w-full max-w-7xl mx-auto flex justify-between gap-2">
                
            </div>
        </>
    )
}
export default CategoriesPage;