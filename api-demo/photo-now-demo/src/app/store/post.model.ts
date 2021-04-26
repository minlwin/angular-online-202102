export interface Post {
    id: number
    title: string
    nickName: string
    description: string
    photos: string[]
    postDate: string
    like: number
    unlike: number
}

export type ReviewType = 'Like' | 'Unlike'

export interface Review {

    id: number
    post: Post
    type: ReviewType
    nickName: string
    reason: string
    reviewTime: string
}