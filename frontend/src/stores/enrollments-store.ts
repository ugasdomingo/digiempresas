//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

export const useEnrollmentStore = defineStore('enrollment', ()=> {
    //Save enrollments to show 
    const allEnrollments = ref('');
    const oneEnrollment = ref('');

    //Enrollments functions
    const getAllEnrollments = async () => {
        try {
            const res = await api({
                url: '/enrollments',
                method: 'GET',
                //Headers pendiente
            })
        } catch (error: any) {
            throw error.response?.data || error;
        }
    }

})