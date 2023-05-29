import { ParsedUrlQuery } from 'querystring';

export function getQueryParams (parsedQuery: ParsedUrlQuery): string {
        const page = parsedQuery.page;
        const city = parsedQuery.city;
        const scheme_of_payment = parsedQuery.scheme_of_payment;
        const place_style = parsedQuery.place_style;
        const territory = parsedQuery.territory;
        const type_feature = parsedQuery.type_feature;
        const min_average_check = parsedQuery.min_average_check;
        const max_average_check = parsedQuery.max_average_check;
        const min_capacity = parsedQuery.min_capacity;
        const max_capacity = parsedQuery.max_capacity;
        const ordering = parsedQuery.ordering;

        let query = '?';

        if (page) {
            query === '?' ? query += '' : query += '&'
            query += `page=${page}`
        }
        if (city) {
            query === '?' ? query += '' : query += '&'
            query += `city=${city}`
        }
        if (scheme_of_payment) {
            if (Array.isArray(scheme_of_payment)) {
                query === '?' ? query += '' : query += '&'
                scheme_of_payment.forEach((scheme)=> query += `scheme_of_payment=${scheme}`)
            } else {
                query === '?' ? query += '' : query += '&'
                query += `scheme_of_payment=${scheme_of_payment}`
            }
        }
        if (place_style) {
            if (Array.isArray(place_style)) {
                place_style.forEach((style)=> {
                    query === '?' ? query += '' : query += '&'
                    query += `place_style=${style}`
                }
                )
            } else {
                query === '?' ? query += '' : query += '&'
                query += `place_style=${place_style}`
            }
        }
        if (territory) {
            if (Array.isArray(territory)) {
                territory.forEach((terr)=>{
                    query === '?' ? query += '' : query += '&'
                    query += `territory=${terr}`
                })
            } else {
                query === '?' ? query += '' : query += '&'
                query += `territory=${territory}`
            }
        }
        if (type_feature) {
            if (Array.isArray(type_feature)) {
                type_feature.forEach((feature)=> {
                    query === '?' ? query += '' : query += '&'
                    query += `type_feature=${feature}`
                })
            } else {
                query === '?' ? query += '' : query += '&'
                query += `type_feature=${type_feature}`
            }
        }
        if (min_average_check) {
            query === '?' ? query += '' : query += '&'
            if (Array.isArray(min_average_check)) {
                let result = min_average_check.map(function (x) { 
                    return parseInt(x, 10); 
                  });
                let min = Math.min(...result)
                query += `min_average_check=${min}`
            } else {
                query += `min_average_check=${min_average_check}`
            }
        }
        if (max_average_check) {
            query === '?' ? query += '' : query += '&'
            if (Array.isArray(max_average_check)) {
                let result = max_average_check.map(function (x) { 
                    return parseInt(x, 10); 
                  });
                let max = Math.max(...result)
                query += `max_average_check=${max}`
            } else {
                query += `max_average_check=${max_average_check}`
            }
        }
        if (min_capacity) {
            query === '?' ? query += '' : query += '&'
            if (Array.isArray(min_capacity)) {
                let result = min_capacity.map(function (x) { 
                    return parseInt(x, 10); 
                  });
                let min = Math.min(...result)
                query += `min_capacity=${min}`
            } else {
                query += `min_capacity=${min_capacity}`
            }
        }
        if (max_capacity) {
            query === '?' ? query += '' : query += '&'
            if (Array.isArray(max_capacity)) {
                let result = max_capacity.map(function (x) { 
                    return parseInt(x, 10); 
                  });
                let max = Math.max(...result)
                query += `max_capacity=${max}`
            } else {
                query += `max_capacity=${max_capacity}`
            }
        }
        if (ordering) {
            query === '?' ? query += '' : query += '&'
            query += `ordering=${ordering}`
        }

        return query;
}

export function getQueryParamsWithoutParam (parsedQuery: ParsedUrlQuery, excludedParam: string): string {
    let query = parsedQuery;
    if (query[excludedParam]) {
        delete query[excludedParam]
    } 
    return getQueryParams(query);
}