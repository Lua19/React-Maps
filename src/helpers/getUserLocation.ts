

export const getUserLocation = async(): Promise<[number, number]> => {

    return new Promise( (resolve, reject) => {

        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                resolve([coords.longitude, coords.latitude])
            },
            (err) => {
                alert( 'Unable to get location');
                console.log(err);
                reject();
            }
        )
    });
}