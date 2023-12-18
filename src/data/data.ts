export const dataPost: dataPostType[] = [
    {
        src: 'https://hips.hearstapps.com/hmg-prod/images/funny-cat-captions-1563551842.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=1200:*',
        title: 'Post 1',
        likesCount: 10
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRredPlvXq9le2bWcAsd03MYZyB8W8uHk9sag&usqp=CAU',
        title: 'Post 2',
        likesCount: 15
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRredPlvXq9le2bWcAsd03MYZyB8W8uHk9sag&usqp=CAU',
        title: 'Post 3',
        likesCount: 8
    },
    {
        src: 'https://hips.hearstapps.com/hmg-prod/images/funny-cat-captions-1563551842.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=1200:*',
        title: 'Post 4',
        likesCount: 0
    }
]
export const dataLink: dataLinkType[] = [
    {
        path: '/profile',
        title: 'Profile'
    },
    {
        path: '/dialogs',
        title: 'Messages'
    },
    {
        path: '/news',
        title: 'News'
    },
    {
        path: '/music',
        title: 'Music'
    },
    {
        path: '/settings',
        title: 'Settings'
    }
]
export const dataUserList: dataUserListType[] = [
    {
        path: '/dad',
        userName: 'Dad',
        messages: [
            {
                myMessages: 'Hello, Dad',
                userMessages: 'And you?'
            }
        ]
    },
    {
        path: '/vika',
        userName: 'Vika',
        messages: [
            {
                myMessages: 'Hello, Vika',
                userMessages: 'And you?'
            }
        ]
    },
    {
        path: '/rustik',
        userName: 'Rustik',
        messages: [
            {
                myMessages: 'Hello, Rustik',
                userMessages: 'And you?'
            }
        ]
    },
    {
        path: '/karina',
        userName: 'Karina',
        messages: [
            {
                myMessages: 'Hello, Karina',
                userMessages: 'And you?'
            }
        ]
    },
    {
        path: '/roma',
        userName: 'Roma',
        messages: [
            {
                myMessages: 'Hello, Roma',
                userMessages: 'And you?'
            }
        ]
    }
]
type messagesType = {
    myMessages: string
    userMessages: string
}
export type dataUserListType = {
    path: string
    userName: string
    messages: messagesType[]
}
export type dataPostType = {
    src: string
    title: string
    likesCount: number
}
export type dataLinkType = {
    path: string
    title: string
}