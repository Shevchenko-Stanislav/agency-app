interface cardItemType {
    id: string,
    img: string,
    name: string,
    category: string,
}

interface categoryType {
    name: string,
    isActive: boolean,
}

export type { cardItemType, categoryType }