const deparment={
    name: "Engineering",
    data: {
        directior:{
            name: "John",
            position: "Engineering  Director",
        },
        emploees: [],
        company: "Quic Build"
    }
};

const {data,data:{directior}}=deparment;

console.log(directior);
console.log(data);