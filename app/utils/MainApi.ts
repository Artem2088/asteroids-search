
interface IResProps {
    ok?: any,
    status?: number,
    statusText?: string,
    json?: any;
    res?: any;
}

function checkResponse(res: IResProps) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`${res.status} ${res.statusText}`);
}


export const getData = async () => {
    const day: any = new Date;
    const toDay: string = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + day.getDate();

    const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${toDay}&api_key=w0aIKsjDnvWNatg5wQVAeNgsWv9aZji2KMX9PAuo`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return checkResponse(res)
}

export const getAsteroidInfo = async (id: string | undefined) => {
    const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=w0aIKsjDnvWNatg5wQVAeNgsWv9aZji2KMX9PAuo`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return checkResponse(res)
}

