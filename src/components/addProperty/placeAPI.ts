import { URL } from "@/constant";
import { Area } from "@/types/areaType";
import { Place } from "@/types/placeType";

const API = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_URL : URL;

export async function createPlace(data: Place, token: string) {
    //впоследствии этот промежуточный объект будет не нужен, отсылаться будет сразу data
    let requestBody = {
        title: data.title,
        city: data.city,
        metro: data.metro,
        address: data.address,
        longitude: data.longitude,
        width: data.width,
        id_yandex: data.id_yandex,
        start_time: data.start_time,
        finish_time: data.finish_time,
        fireworks: data.fireworks,
        children_kitchen: data.children_kitchen,
        alco: data.alco,
        payment_of_alco: data.payment_of_alco,
        lease_extension: data.lease_extension,
        lease_extension_price: data.lease_extension_price,
        average_check: data.average_check,
        description: data.description,
        parking: data.parking,
        max_serving: data.max_serving,
        type_place: data.type_place,
        location: data.location,
        kitchen: data.kitchen,
        event: data.event,
        type_feature: data.type_feature,
        type_territory: data.type_territory,
        place_img: data.place_img,
        territory_desc: data.territory_desc,
    }

    let response = await fetch(`${API}catalog/places/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(requestBody),
    })

    if (response.ok) {
        let result = await response.json();
        // возвращаем id новой Площадки для следующих связанных пост-запросов
        return result.id;
    }

    return null
}

export async function createArea(area: Area, placeId: number, token: string) {
    area.place_id = placeId;
    // @ts-expect-error: ВРЕМЕННО пока на бэке неверный формат данных
    area.reserved_days = "2023-05-14";
    //ВРЕМЕННО пока этого свойства нет на бэке
    delete area.bare_lease;

    let response = await fetch(`${API}catalog/areas/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(area),
    })

    if (response.ok) {
        let result = await response.json();
        console.log(result);
    } else {
        console.log(response);
    }
}

export async function createWelcomeZone(description: string, placeId: number, images: string[], token: string) {
    let request = {
        place: placeId,
        welcome_desc: description,
        welcome_zone_img: images,
    }

    let response = await fetch(`${API}catalog/welcome-zones/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(request),
    })

    if (response.ok) {
        let result = await response.json();
        console.log(result);
    } else {
        console.log(response);
    }
}

export async function createOutReg(price: number,
    conditions: string,
    description: string,
    placeId: number,
    images: string[],
    token: string) {
    let request = {
        place: placeId,
        outreg_price: price,
        outreg_conditions: conditions,
        outreg_include: description,
        out_reg_image: images,
        images_out_reg: images,
    }

console.log(request);
// даже при передаче словаря возникает ошибка:
// images_out_reg: [{non_field_errors: ["Недопустимые данные. Ожидался dictionary, но был получен str."]}]

    let response = await fetch(`${API}catalog/outsite_registration/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(request),
    })

    if (response.ok) {
        let result = await response.json();
        console.log(result);
    } else {
        console.log(response);
    }
}

// export async function createWeddingAlbums() {
//TODO на бэке еще нет реализации
// }

export async function addTerritoryImages(placeId: number, images: string[], token: string) {
    let request = {
        //по комментариям бэка - здесь именно Place id, поле назвали некорректно
        territory: placeId,
        territory_img: images,
    }

    let response = await fetch(`${API}catalog/image-territory/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(request),
    })

    if (response.ok) {
        let result = await response.json();
        console.log(result);
    } else {
        console.log(response);
    }
}