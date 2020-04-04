export default{
    create(data){
        return firebase.firestore().collection('ideas').add({data});
    },
    getAll(){
        return firebase.firestore().collection('ideas').get();
    },
    get(id){
        return firebase.firestore().collection('ideas').doc(id).get(); //make request to specific document with id
    },
    close(id){
        return firebase.firestore().collection('ideas').doc(id).delete();
    },
    update(id,data){
        return firebase.firestore().collection('ideas').doc(id).update(data);
    },
};