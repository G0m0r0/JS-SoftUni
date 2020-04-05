export default{
    create(data){
        return firebase.firestore().collection('articles').add({data});
    },
    getAll(){
        return firebase.firestore().collection('articles').get();
    },
    get(id){
        return firebase.firestore().collection('articles').doc(id).get(); //make request to specific document with id
    },
    close(id){
        return firebase.firestore().collection('articles').doc(id).delete();
    },
    update(id,data){
        return firebase.firestore().collection('articles').doc(id).update(data);
    },
};