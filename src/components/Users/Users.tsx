import { ScrollArea } from '@/components/ui/scroll-area'
import { UserCard } from './UserCard'

export function Users() {
    return (
        <ScrollArea className="h-screen">
            <div className="p-6 grid gap-6">
                <UserCard
                    data={{
                        name: 'Mandy Daugherty DVM',
                        username: 'Jennings17',
                        email: 'Junior.Herman@gmail.com',
                        avatar: 'https://i.pravatar.cc/150?u=Junior.Herman@gmail.com',
                        address: {
                            street: 'Sawayn Summit',
                            suite: 'Apt. 231',
                            city: 'West Leonshire',
                            zipcode: '50785',
                            geo: {
                                lat: '-67.6253',
                                lng: '-34.5242',
                            },
                        },
                        phone: '351.456.9030 x82385',
                        website: 'brigitte.org',
                        favorites: [66981, 95518, 26675, 7427, 85126, 80578],
                    }}
                />
                <UserCard
                    data={{
                        name: 'Kim Ratke',
                        username: 'Parker_Jaskolski13',
                        email: 'Mohammad.Quigley67@gmail.com',
                        avatar: 'https://i.pravatar.cc/150?u=Mohammad.Quigley67@gmail.com',
                        address: {
                            street: 'Israel Trail',
                            suite: 'Suite 118',
                            city: 'Jimmyville',
                            zipcode: '88092-6852',
                            geo: {
                                lat: '-43.4048',
                                lng: '124.4698',
                            },
                        },
                        phone: '1-686-593-0707',
                        website: 'catharine.org',
                        favorites: [
                            12198, 4007, 61885, 7427, 20863, 97144, 80578, 3056,
                            48049, 95518, 26675, 85126, 84546, 45978, 29174,
                            5318, 98429, 15828, 23527, 66981, 46739,
                        ],
                    }}
                />
            </div>
        </ScrollArea>
    )
}
