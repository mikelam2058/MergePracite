let pageData = {
    members : [
                {
                    name : 'Susan',
                    gender : 'Female'     
                },
                {
                    name : 'Peter',
                    gender : 'Male'
                },
                {
                    name : 'Bill',
                    gender : 'Unkonwn'
                }]
};

Vue.createApp({
    data(){
        return pageData;
    }
}).mount("#app");