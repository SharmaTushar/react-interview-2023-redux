import { ScrollArea } from '@/components/ui/scroll-area'
import { ProductCard } from './ProductCard'

export function Products() {
    return (
        <ScrollArea className="h-screen w-full">
            <div className="p-6 flex flex-wrap gap-6">
                <ProductCard
                    data={{
                        name: 'Handcrafted Plastic Ball',
                        description:
                            "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
                        price: '461.00',
                        id: 29174,
                        image: 'https://picsum.photos/seed/29174/300/300',
                    }}
                />
                <ProductCard
                    data={{
                        name: 'Practical Plastic Pizza',
                        description:
                            'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
                        price: '408.00',
                        id: 62691,
                        image: 'https://picsum.photos/seed/62691/300/300',
                    }}
                />
            </div>
        </ScrollArea>
    )
}
