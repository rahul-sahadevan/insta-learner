import axios from "axios";

function Fetch(){

    async function fetch(){
        try{
            const response = await axios.get('https://demo0073398.mockable.io/master-class-courses');
            console.log(response)
        }
        catch(e){
            console.log(e)
        }

    }
    fetch()
}

export default Fetch