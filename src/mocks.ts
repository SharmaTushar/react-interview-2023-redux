import { delay, http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'

export const worker = setupWorker(
    http.get('/api/v1/products', async () => {
        await delay()
        return HttpResponse.json<Product[]>(products)
    }),
    http.get('/api/v1/users', async () => {
        await delay()
        return HttpResponse.json<User[]>(users)
    }),
)

export type Product = {
    id: number
    name: string
    price: `${number}.${number}`
    description: string
    image: string
}

const products: Product[] = [
    {
        name: 'Handcrafted Plastic Ball',
        description:
            "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        price: '461.00',
        id: 29174,
        image: 'https://picsum.photos/seed/29174/300/300',
    },
    {
        name: 'Practical Plastic Pizza',
        description:
            'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
        price: '408.00',
        id: 62691,
        image: 'https://picsum.photos/seed/62691/300/300',
    },
    {
        name: 'Sleek Soft Chair',
        description:
            'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
        price: '979.00',
        id: 20863,
        image: 'https://picsum.photos/seed/20863/300/300',
    },
    {
        name: 'Practical Cotton Ball',
        description:
            'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
        price: '333.00',
        id: 92633,
        image: 'https://picsum.photos/seed/92633/300/300',
    },
    {
        name: 'Tasty Cotton Bacon',
        description:
            'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
        price: '301.00',
        id: 98429,
        image: 'https://picsum.photos/seed/98429/300/300',
    },
    {
        name: 'Small Plastic Mouse',
        description:
            'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
        price: '5.00',
        id: 4007,
        image: 'https://picsum.photos/seed/4007/300/300',
    },
    {
        name: 'Awesome Concrete Fish',
        description:
            'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
        price: '337.00',
        id: 85126,
        image: 'https://picsum.photos/seed/85126/300/300',
    },
    {
        name: 'Fantastic Rubber Salad',
        description:
            'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
        price: '415.00',
        id: 48049,
        image: 'https://picsum.photos/seed/48049/300/300',
    },
    {
        name: 'Practical Plastic Hat',
        description:
            'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
        price: '197.00',
        id: 15828,
        image: 'https://picsum.photos/seed/15828/300/300',
    },
    {
        name: 'Handcrafted Fresh Chips',
        description:
            'The Football Is Good For Training And Recreational Purposes',
        price: '423.00',
        id: 45978,
        image: 'https://picsum.photos/seed/45978/300/300',
    },
    {
        name: 'Refined Fresh Table',
        description:
            'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
        price: '342.00',
        id: 12198,
        image: 'https://picsum.photos/seed/12198/300/300',
    },
    {
        name: 'Small Fresh Towels',
        description:
            "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        price: '756.00',
        id: 3056,
        image: 'https://picsum.photos/seed/3056/300/300',
    },
    {
        name: 'Incredible Rubber Chicken',
        description:
            'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
        price: '190.00',
        id: 51356,
        image: 'https://picsum.photos/seed/51356/300/300',
    },
    {
        name: 'Intelligent Granite Gloves',
        description:
            "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        price: '639.00',
        id: 2591,
        image: 'https://picsum.photos/seed/2591/300/300',
    },
    {
        name: 'Handcrafted Rubber Tuna',
        description:
            'The Football Is Good For Training And Recreational Purposes',
        price: '629.00',
        id: 95518,
        image: 'https://picsum.photos/seed/95518/300/300',
    },
    {
        name: 'Rustic Granite Cheese',
        description:
            'The Football Is Good For Training And Recreational Purposes',
        price: '614.00',
        id: 26675,
        image: 'https://picsum.photos/seed/26675/300/300',
    },
    {
        name: 'Small Rubber Shirt',
        description:
            'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
        price: '927.00',
        id: 84546,
        image: 'https://picsum.photos/seed/84546/300/300',
    },
    {
        name: 'Licensed Fresh Car',
        description:
            "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        price: '489.00',
        id: 5318,
        image: 'https://picsum.photos/seed/5318/300/300',
    },
    {
        name: 'Generic Steel Car',
        description:
            'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
        price: '74.00',
        id: 7427,
        image: 'https://picsum.photos/seed/7427/300/300',
    },
    {
        name: 'Practical Cotton Chips',
        description:
            'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
        price: '327.00',
        id: 46739,
        image: 'https://picsum.photos/seed/46739/300/300',
    },
    {
        name: 'Fantastic Soft Computer',
        description:
            'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
        price: '452.00',
        id: 66981,
        image: 'https://picsum.photos/seed/66981/300/300',
    },
    {
        name: 'Intelligent Granite Table',
        description:
            'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
        price: '516.00',
        id: 80578,
        image: 'https://picsum.photos/seed/80578/300/300',
    },
    {
        name: 'Generic Rubber Salad',
        description:
            'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
        price: '246.00',
        id: 61885,
        image: 'https://picsum.photos/seed/61885/300/300',
    },
    {
        name: 'Ergonomic Granite Table',
        description:
            'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
        price: '973.00',
        id: 97144,
        image: 'https://picsum.photos/seed/97144/300/300',
    },
    {
        name: 'Intelligent Frozen Computer',
        description:
            'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
        price: '934.00',
        id: 23527,
        image: 'https://picsum.photos/seed/23527/300/300',
    },
]

export type User = {
    name: string
    username: string
    email: string
    avatar: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: { lat: string; lng: string }
    }
    phone: string
    website: string
    favorites: number[]
}

const users: User[] = [
    {
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
    },
    {
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
            12198, 4007, 61885, 7427, 20863, 97144, 80578, 3056, 48049, 95518,
            26675, 85126, 84546, 45978, 29174, 5318, 98429, 15828, 23527, 66981,
            46739,
        ],
    },
    {
        name: 'Kathleen Hessel',
        username: 'Eden_Reilly25',
        email: 'Marilou_Hagenes90@yahoo.com',
        avatar: 'https://i.pravatar.cc/150?u=Marilou_Hagenes90@yahoo.com',
        address: {
            street: 'Birdie Walk',
            suite: 'Apt. 403',
            city: 'North Finn',
            zipcode: '43845',
            geo: {
                lat: '-51.5029',
                lng: '-58.1744',
            },
        },
        phone: '932-912-1556',
        website: 'raina.com',
        favorites: [
            85126, 61885, 84546, 51356, 92633, 15828, 7427, 97144, 80578, 12198,
            62691, 20863, 26675, 2591, 46739, 4007, 45978, 98429, 29174, 5318,
            3056,
        ],
    },
    {
        name: 'Andrea Kertzmann',
        username: 'Sydnie_Littel28',
        email: 'Ned_Herzog@yahoo.com',
        avatar: 'https://i.pravatar.cc/150?u=Ned_Herzog@yahoo.com',
        address: {
            street: 'Kunde Villages',
            suite: 'Apt. 211',
            city: 'Springfield',
            zipcode: '72912',
            geo: {
                lat: '83.1007',
                lng: '22.7766',
            },
        },
        phone: '364-831-4693',
        website: 'walton.info',
        favorites: [61885, 29174, 62691],
    },
    {
        name: 'Santiago Macejkovic',
        username: 'Ulises_Sanford36',
        email: 'Spencer67@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Spencer67@gmail.com',
        address: {
            street: 'Balistreri Village',
            suite: 'Apt. 566',
            city: 'East Heatherberg',
            zipcode: '31724-0120',
            geo: {
                lat: '53.2864',
                lng: '67.2499',
            },
        },
        phone: '549.764.8197 x0011',
        website: 'angel.info',
        favorites: [
            48049, 92633, 12198, 46739, 98429, 85126, 62691, 2591, 61885, 23527,
            51356, 7427, 4007, 45978, 20863, 80578, 15828,
        ],
    },
    {
        name: 'Lindsey Schoen',
        username: 'Samanta_Hegmann',
        email: 'Manuela41@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Manuela41@gmail.com',
        address: {
            street: 'Prosacco Mission',
            suite: 'Suite 785',
            city: 'Miami Beach',
            zipcode: '67821',
            geo: {
                lat: '-3.8475',
                lng: '137.9680',
            },
        },
        phone: '1-459-450-8447 x196',
        website: 'matilde.info',
        favorites: [
            23527, 26675, 51356, 92633, 3056, 62691, 29174, 97144, 20863, 45978,
            46739, 84546, 85126, 2591, 4007, 61885, 95518, 12198,
        ],
    },
    {
        name: 'Wayne Lindgren',
        username: 'Destin39',
        email: 'Joshuah3@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Joshuah3@gmail.com',
        address: {
            street: 'Agnes Land',
            suite: 'Apt. 960',
            city: 'East Daniela',
            zipcode: '99655',
            geo: {
                lat: '25.1263',
                lng: '-126.2973',
            },
        },
        phone: '(749) 811-9558 x1282',
        website: 'may.com',
        favorites: [20863, 92633, 46739, 2591, 61885, 62691, 95518],
    },
    {
        name: 'Tanya Schneider',
        username: 'Liana.Jacobs',
        email: 'Lucienne_Lockman@yahoo.com',
        avatar: 'https://i.pravatar.cc/150?u=Lucienne_Lockman@yahoo.com',
        address: {
            street: 'Jaime Gateway',
            suite: 'Apt. 300',
            city: 'West Luciano',
            zipcode: '66801-2517',
            geo: {
                lat: '12.2817',
                lng: '-73.2385',
            },
        },
        phone: '1-628-564-0539',
        website: 'salma.org',
        favorites: [84546, 23527, 92633, 15828, 80578],
    },
    {
        name: 'Alison Murphy Sr.',
        username: 'Earl79',
        email: 'Herbert80@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Herbert80@gmail.com',
        address: {
            street: 'Hayes Keys',
            suite: 'Apt. 137',
            city: 'East Nelle',
            zipcode: '49426',
            geo: {
                lat: '-40.2787',
                lng: '62.6621',
            },
        },
        phone: '(362) 619-2145',
        website: 'raven.com',
        favorites: [48049, 61885],
    },
    {
        name: 'Tommie Kihn',
        username: 'Liana.Auer24',
        email: 'Emmie40@hotmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Emmie40@hotmail.com',
        address: {
            street: 'Jannie Springs',
            suite: 'Apt. 740',
            city: 'Legrosside',
            zipcode: '33316-3980',
            geo: {
                lat: '-55.7444',
                lng: '69.0210',
            },
        },
        phone: '1-520-700-1785 x1401',
        website: 'emely.net',
        favorites: [
            26675, 95518, 61885, 46739, 98429, 5318, 29174, 97144, 85126,
        ],
    },
    {
        name: 'Mrs. Judith Sawayn',
        username: 'Friedrich_Krajcik',
        email: 'Tracey.Rowe@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Tracey.Rowe@gmail.com',
        address: {
            street: 'Larkin Camp',
            suite: 'Suite 614',
            city: 'Burien',
            zipcode: '27807',
            geo: {
                lat: '-45.7490',
                lng: '-125.4356',
            },
        },
        phone: '461-438-1959 x531',
        website: 'rex.org',
        favorites: [
            23527, 48049, 46739, 85126, 95518, 15828, 92633, 84546, 62691,
            61885, 7427, 66981, 97144, 51356, 29174, 98429, 5318, 4007,
        ],
    },
    {
        name: 'Darla Donnelly DVM',
        username: 'Alex62',
        email: 'Dario46@yahoo.com',
        avatar: 'https://i.pravatar.cc/150?u=Dario46@yahoo.com',
        address: {
            street: 'Rita Mountains',
            suite: 'Suite 002',
            city: 'Port Gabrielport',
            zipcode: '65211',
            geo: {
                lat: '-28.7780',
                lng: '-142.7034',
            },
        },
        phone: '760.360.7968',
        website: 'wilford.info',
        favorites: [
            29174, 4007, 51356, 62691, 12198, 98429, 48049, 20863, 84546, 7427,
            46739, 66981, 3056, 85126, 95518,
        ],
    },
    {
        name: 'Edith Sauer',
        username: 'Broderick_Shields77',
        email: 'Angus_Pfannerstill@hotmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Angus_Pfannerstill@hotmail.com',
        address: {
            street: 'Hoyt Estate',
            suite: 'Suite 019',
            city: 'Mayermouth',
            zipcode: '30990',
            geo: {
                lat: '-36.9153',
                lng: '178.9588',
            },
        },
        phone: '1-960-400-5624 x70118',
        website: 'gustave.org',
        favorites: [61885, 95518, 46739],
    },
    {
        name: 'Alan McClure',
        username: 'Hazle21',
        email: 'Lucienne75@yahoo.com',
        avatar: 'https://i.pravatar.cc/150?u=Lucienne75@yahoo.com',
        address: {
            street: 'Marvin Spurs',
            suite: 'Apt. 022',
            city: 'Vedaburgh',
            zipcode: '04428',
            geo: {
                lat: '-20.9947',
                lng: '116.2467',
            },
        },
        phone: '943.386.9046 x903',
        website: 'isom.org',
        favorites: [48049, 92633, 66981, 45978, 62691, 85126, 5318, 3056],
    },
    {
        name: 'Adam Farrell',
        username: 'Fernando.Kuhlman',
        email: 'Rolando38@yahoo.com',
        avatar: 'https://i.pravatar.cc/150?u=Rolando38@yahoo.com',
        address: {
            street: 'Myron Unions',
            suite: 'Apt. 591',
            city: 'Aronport',
            zipcode: '25141-4777',
            geo: {
                lat: '-43.8087',
                lng: '110.6333',
            },
        },
        phone: '677.737.3703 x8864',
        website: 'bettie.name',
        favorites: [92633, 29174, 61885, 3056, 4007, 46739, 98429, 51356],
    },
    {
        name: 'Jaime Homenick',
        username: 'Antwon.Kiehn11',
        email: 'Russel.Nitzsche50@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Russel.Nitzsche50@gmail.com',
        address: {
            street: 'Erdman Crescent',
            suite: 'Apt. 333',
            city: 'Port Clementinemouth',
            zipcode: '07637',
            geo: {
                lat: '6.7810',
                lng: '24.8677',
            },
        },
        phone: '315.953.6868 x126',
        website: 'maribel.net',
        favorites: [
            45978, 15828, 26675, 3056, 66981, 2591, 7427, 12198, 48049, 95518,
            80578, 85126, 4007, 51356, 98429, 92633, 61885, 20863, 23527, 62691,
            5318, 29174, 84546, 46739,
        ],
    },
    {
        name: 'Cindy Koch',
        username: 'Paul_Hansen84',
        email: 'Carol.Beer@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Carol.Beer@gmail.com',
        address: {
            street: 'Trudie Trail',
            suite: 'Suite 201',
            city: 'Padbergburgh',
            zipcode: '40600',
            geo: {
                lat: '81.4690',
                lng: '56.7379',
            },
        },
        phone: '496-616-6933',
        website: 'anita.biz',
        favorites: [15828],
    },
    {
        name: 'Jody Shields',
        username: 'Cornelius67',
        email: 'Minnie81@hotmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Minnie81@hotmail.com',
        address: {
            street: 'Boyer Garden',
            suite: 'Suite 234',
            city: 'East Darrylberg',
            zipcode: '41536',
            geo: {
                lat: '29.9846',
                lng: '169.7108',
            },
        },
        phone: '1-353-454-8061 x456',
        website: 'kaycee.name',
        favorites: [
            48049, 29174, 80578, 45978, 95518, 84546, 51356, 26675, 62691,
            20863, 66981, 85126, 97144, 23527, 3056, 5318, 46739, 15828, 92633,
            98429, 4007, 7427, 61885, 12198,
        ],
    },
    {
        name: 'Jose Runolfsdottir IV',
        username: 'Buck.Kirlin',
        email: 'Shyann_Rohan30@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Shyann_Rohan30@gmail.com',
        address: {
            street: 'Nader Highway',
            suite: 'Suite 818',
            city: 'Ponce',
            zipcode: '05266-2662',
            geo: {
                lat: '-8.1779',
                lng: '-146.0519',
            },
        },
        phone: '814.603.0371',
        website: 'bonnie.name',
        favorites: [
            51356, 23527, 5318, 29174, 26675, 15828, 3056, 98429, 66981, 4007,
            46739, 80578, 7427, 20863, 84546, 2591, 95518, 48049, 12198, 97144,
            85126, 92633, 45978, 62691,
        ],
    },
    {
        name: 'Elvira Rodriguez',
        username: 'Jermain.Mueller58',
        email: 'Shawna_Harvey@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Shawna_Harvey@gmail.com',
        address: {
            street: 'Aileen Isle',
            suite: 'Suite 956',
            city: 'West Alverta',
            zipcode: '44249-1190',
            geo: {
                lat: '24.8526',
                lng: '37.5731',
            },
        },
        phone: '1-468-365-1613',
        website: 'brandt.com',
        favorites: [
            29174, 95518, 48049, 46739, 45978, 62691, 84546, 4007, 3056, 66981,
            23527, 12198, 51356, 20863, 61885, 85126, 98429, 7427,
        ],
    },
    {
        name: 'Elizabeth Rice',
        username: 'Josefa.Simonis',
        email: 'Jeramy.Nienow@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Jeramy.Nienow@gmail.com',
        address: {
            street: 'Dameon Track',
            suite: 'Apt. 389',
            city: 'Nitzscheville',
            zipcode: '63520',
            geo: {
                lat: '47.4413',
                lng: '-37.6178',
            },
        },
        phone: '528-807-9969',
        website: 'tia.com',
        favorites: [20863, 95518, 62691],
    },
    {
        name: 'Emmett Rice',
        username: 'Cordelia_Cassin69',
        email: 'Carissa.Langosh68@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Carissa.Langosh68@gmail.com',
        address: {
            street: 'Ariane Ferry',
            suite: 'Suite 498',
            city: 'Lambertfurt',
            zipcode: '02128',
            geo: {
                lat: '-72.2925',
                lng: '-93.5905',
            },
        },
        phone: '693.295.0142 x820',
        website: 'elisha.net',
        favorites: [
            29174, 98429, 12198, 80578, 45978, 26675, 7427, 5318, 20863, 2591,
            46739, 4007, 51356, 92633, 84546, 62691, 97144, 23527,
        ],
    },
    {
        name: 'Doris Bailey II',
        username: 'Raphael_Oberbrunner76',
        email: 'Fred_Gerlach85@gmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Fred_Gerlach85@gmail.com',
        address: {
            street: 'Cole Views',
            suite: 'Suite 564',
            city: 'Allyland',
            zipcode: '34559-9772',
            geo: {
                lat: '-17.9680',
                lng: '42.1298',
            },
        },
        phone: '(421) 218-7130 x59932',
        website: 'emilio.net',
        favorites: [97144, 29174, 4007, 80578, 62691],
    },
    {
        name: 'Madeline Pfeffer',
        username: 'Norval.Rogahn81',
        email: 'Dusty.Grady@hotmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Dusty.Grady@hotmail.com',
        address: {
            street: 'Yazmin Land',
            suite: 'Apt. 364',
            city: 'New Hailey',
            zipcode: '77754-3896',
            geo: {
                lat: '25.4959',
                lng: '-152.0018',
            },
        },
        phone: '(501) 830-6783',
        website: 'darren.net',
        favorites: [
            26675, 48049, 29174, 15828, 62691, 97144, 45978, 66981, 2591, 80578,
            51356, 84546, 5318,
        ],
    },
    {
        name: 'Bernadette Mosciski',
        username: 'Arnold.Dietrich79',
        email: 'Celestino_Cruickshank@hotmail.com',
        avatar: 'https://i.pravatar.cc/150?u=Celestino_Cruickshank@hotmail.com',
        address: {
            street: 'Hettinger Mountain',
            suite: 'Suite 553',
            city: 'Upland',
            zipcode: '40703-5583',
            geo: {
                lat: '-11.7512',
                lng: '-78.9544',
            },
        },
        phone: '528.917.4825 x98060',
        website: 'aimee.org',
        favorites: [84546, 2591, 12198, 61885, 48049, 85126, 80578],
    },
]
