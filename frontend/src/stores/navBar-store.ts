//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavBarStore = defineStore('navBar', ()=>{
    const showing = ref('inicio');

    const navigation = (page: string) => {
        showing.value = page
    }

    return { showing, navigation }
})