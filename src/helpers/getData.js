import APP_DATA from "../data/APP_DATA"
import SELECT_CATEG from "../data/SELECT_CATEG"

export const getData = (file) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if ( file == null){
                resolve(SELECT_CATEG)
            } else{
            resolve(APP_DATA)
            }
        }, 1500)
    })
}