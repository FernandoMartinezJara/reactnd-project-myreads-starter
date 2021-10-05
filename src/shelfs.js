export const shelfs = ['Currently Reading', 'Want to Read' , 'Read'];

export const getShelfValue = (description) => {
    
    let value;

    switch(description){
        case 'Currently Reading': value = "currentlyReading"; break;
        case 'Want to Read': value = "wantToRead"; break;
        case 'Read': value = "read"; break;
        default:  value = ""
    }

    return value;
}