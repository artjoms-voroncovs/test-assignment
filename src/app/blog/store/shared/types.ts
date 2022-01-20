export type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export type Comment = {
    postId: number
    name: string
    email: string
    body: string
}