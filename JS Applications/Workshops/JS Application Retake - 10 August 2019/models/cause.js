export default{
    create(data){
        return firebase.firestore().collection('causes').add({data});
    },
    getAll(){
        return firebase.firestore().collection('causes').get();
    },
    get(id){
        return firebase.firestore().collection('causes').doc(id).get(); //make request to specific document with id
    },
    close(id){
        return firebase.firestore().collection('causes').doc(id).delete();
    },
    donate(id,data){
        return firebase.firestore().collection('causes').doc(id).update(data);
    }
};