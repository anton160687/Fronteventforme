import { TEST_URL } from "@/constant";
import { Place } from "@/types/placeType";


export async function createPlace (data: Place, token: string) {
    //впоследствии этот промежуточный объект будет не нужен, отсылаться будет сразу data
    let requestBody = {
        type_place: 1,
        title: data.title,
        city: data.city,
        metro: data.metro,
        address: data.address,
        longitude: data.longitude,
        width: data.width,
        location: data.location,
        id_yandex: data.id_yandex,
        kitchen: data.kitchen,
        event: data.event,
        type_feature: data.type_feature,
        territory:data. territory,
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
        max_serving: data.max_serving,
        parking: data.parking,
    }
    let response = await fetch (`${TEST_URL}api/v1/catalog/places/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + token,
        },
        body: JSON.stringify(requestBody),
    })

    let result = await response.json();
    console.log(result);
}
    