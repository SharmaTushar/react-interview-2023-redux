import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import type { Product } from '@/mocks'

export type ProductCardProps = {
    data: Product
}

export function ProductCard({ data: product }: ProductCardProps) {
    return (
        <Card className="w-[320px]">
            <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <img
                    src={product.image}
                    className="h-auto w-full object-cover transition-all hover:scale-105 aspect-square"
                />
            </CardContent>
            <CardFooter>
                <div className="text-2xl font-bold">${product.price}</div>
            </CardFooter>
        </Card>
    )
}
