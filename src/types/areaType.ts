export type Area = {
    place_id?: number;
    title: string;
    cover_area?: string;
    type_area: string;
    min_capacity: number;
    max_capacity: number;
    color_hall: string;
    separate_entrance: boolean;
    sale: string;
    min_price_banquet: number;
    min_price_rent: number;
    deposit: number;
    scheme_of_payment: string;
    detail_location: string;
    reserved_dates: Date[];
    area_img: string [];
    bare_lease?: boolean;
}