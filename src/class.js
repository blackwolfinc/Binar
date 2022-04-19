// Cara Membuat Simple Redux
// Step Pertama Install Redux "npm i redux"

// Step 2 Import Redux
 const redux = require('redux')

// Step 3 menyiapkan fungsi membuat brangkas dari redux 
const createStore = redux.createStore

let dataInputan = "aku gak di temenin ayang"

// Step 6  Laci Penyimpanan Di dalam brankas
const initialState = {
    tokenKey : 0,
    valueData : "",
    age : 3
}
// Step 5 Membuat Siapa yang berwenang akan berangkas itu  "const reducerDefault =()=>{}"
// Step 7 Supaya Laci bisa di pakai dalam brnagkas laci harus di titipkan kepada orang yang berwenang 
// dalam brankas itu  " state = initialState"
const reducerDefault =( state = initialState , action)=>{
    //Step 9  membuat SOP untuk di jalankan oleh yang berwenang 
    switch (action.type) {
        case 'ADD_TOKEN':
            return{
              ...state,
                tokenKey : state.tokenKey +1
            }
            case 'ADD_INPUT':
                return{
                ...state,
                  valueData : action.iniInputan
                }
        default:
           return state
    }
    
    }


// Step 4 Membuat Brangkas  "const store = createStore()"
// Step 8 tentukan siapa yang berwenang untuk mengurus berangkas  "createStore(reducerDefault)"
const store = createStore(reducerDefault)

//Step 11  Mendapatkan semua report dari segala perubahan  dalam berangkas 
store.subscribe(()=>{
    console.log(store.getState())
})

//Step 10  Memerintahkan yang berwenang dalam brankas untuk menjalankan suatu SOP
store.dispatch({type : 'ADD_TOKEN'})
store.dispatch({type : 'ADD_INPUT' , iniInputan : dataInputan})


