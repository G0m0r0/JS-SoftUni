export default{
    create(data){
        return firebase.firestore().collection('treks').add({data});
    },
    getAll(){
        return firebase.firestore().collection('treks').get();
    },
    get(id){
        return firebase.firestore().collection('treks').doc(id).get(); //make request to specific documment with id
    },
    close(){
        return firebase.firestore().collection('treks').doc(id).delete();
    },
    donate(id,data){
        return firebase.firestore().collection('treks').doc(id).update(data);
    }
};