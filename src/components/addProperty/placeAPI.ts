import { URL } from "@/constant";
import { Place } from "@/types/placeType";

export async function createPlace (data: Place, token: string) {
    //впоследствии этот промежуточный объект будет не нужен, отсылаться будет сразу data
    let requestBody: Place = {
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
        territory:data. territory,
        place_img: data.place_img,
    }
    console.log(requestBody);
    let response = await fetch (`${URL}catalog/places/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(requestBody),
    })

    let result = await response.json();
    console.log(result);
}
    
// образец респонса 
//{id: 14, cover_place: null, title: 'Название', city: 'Санкт-Петербург', metro: '', …}
// address :  "г Санкт-Петербург"
// alco : true
// average_check :  1000
// children_kitchen :  false
// city :  "Санкт-Петербург"
// cover_place :  null
// description :  "Детали"
// event : (3) [1, 4, 7]
// finish_time :  "20:30:00"
// fireworks :  true
// id :  14
// id_yandex :  "12345"
// kitchen
// : 
// (3) [1, 4, 7]
// lease_extension
// : 
// false
// lease_extension_price
// : 
// 1000
// location
// : 
// (3) [1, 4, 7]
// longitude
// : 
// 30.315879
// max_serving
// : 
// 11
// metro
// : 
// ""
// parking
// : 
// 11
// payment_of_alco
// : 
// 1000
// start_time
// : 
// "21:29:00"
// territory_desc
// : 
// null
// title
// : 
// "Название"
// type_feature
// : 
// (4) [1, 4, 7, 9]
// type_place
// : 
// [1]
// type_territory
// : 
// []
// user
// : 
// null
// width
// : 
// 59.939084
// [[Prototype]]
// : 
// Object