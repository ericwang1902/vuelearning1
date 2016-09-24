const STORAGE_KEY = 'todos-vuejs'
export default {
    getValue:function(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    setValue:function(items){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
    }
}