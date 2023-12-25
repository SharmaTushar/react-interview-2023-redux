import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import type { User } from '@/mocks'

export type UserCardProps = {
    data: User
}

export function UserCard({ data: user }: UserCardProps) {
    const fallback = user.name
        .split(' ')
        .slice(2)
        .map((w) => w[0].toUpperCase())
        .join('')
    return (
        <Card className="p-4">
            <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{fallback}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-medium leading-none">
                        {user.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {user.email}
                    </p>
                </div>
            </div>
        </Card>
    )
}
