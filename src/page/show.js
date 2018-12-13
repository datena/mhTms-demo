export default {
    data(){
        return {
            abc:'abccc'
        }
    },
    beforeMount() {
        console.log('I am base beforeMount');
    },
    mounted() {
        console.log('I am base mounted');
        console.log(this.abc,'abc')
    },
    beforeCreate() {
        console.log('I am base beforeCreated');
    },
    created() {
        console.log('I am base created');
    },
    methods: {
        mybase(x,y){
            console.log(`${x},${y}`,'show.js')
            return x+y
        }
    },
}