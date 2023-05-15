import { TEST_URL } from "@/constant";
import { Place } from "@/types/placeType";


async function createPlace (data: Place, token: string) {
    let response = await fetch (`${TEST_URL}api/v1/catalog/places/`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'credentials': 'include',
            'Content-Type': 'application/json',
            'Authorisation': 'token ' + token,
        },
        body: JSON.stringify(data),
    })
}
    