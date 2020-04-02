export default{
    create(data){
        return firebase.firestore().collection('treks').add({data});
    },
    getAll(){
        return firebase.firestore().collection('treks').get();
    },
    get(id){
        return firebase.firestore().collection('treks').doc(id).get(); //make request to specific document with id
    },
    close(id){
        return firebase.firestore().collection('treks').doc(id).delete();
    },
    like(id,data){
        return firebase.firestore().collection('treks').doc(id).update(data);
    },

};